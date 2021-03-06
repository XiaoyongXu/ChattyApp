const express = require('express');
const WebSocket = require('ws');

const SocketServer = WebSocket.Server;
const uuidv1 = require('uuid/v1');


// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};



wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('message', function incoming(data){
    const dataParsed = JSON.parse(data);
    if (dataParsed.type === "postNotification"){
      dataParsed.type = "incomingNotification";
      dataParsed.id = uuidv1();

      wss.broadcast(JSON.stringify(dataParsed));
    } else if (dataParsed.type === "postMessage"){
      dataParsed.type = "incomingMessage";
      dataParsed.id = uuidv1();
      wss.broadcast(JSON.stringify(dataParsed));
    } else if (dataParsed.type === "connected"){

      const userNumber ={
        type: "connected",
        number: wss.clients.size
      }
      wss.broadcast(JSON.stringify(userNumber));
    } else {

    }


  })
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected')

    const userNumber = {
      type: "connected",
      number: wss.clients.size
    }
    wss.broadcast(JSON.stringify(userNumber));
  });
});