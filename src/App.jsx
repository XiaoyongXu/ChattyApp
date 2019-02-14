import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx'
import NavBar from './NavBar.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    // this is the *only* time you should assign directly to state:
    this.state = {
      currentUser: { name: ''}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages:[],
      number:0,
      loading: true
    };
    this.addMessage = this.addMessage.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }
  addMessage(newMessage){
    const data = JSON.stringify({
      type: "postMessage",
      username: newMessage.username,
      content: newMessage.content
    });

    this.socket.send(data);
  }
  changeUser(name){
    const currentName = this.state.currentUser.name;
    if (name !== this.state.currentUser.name && this.state.currentUser.name !== ''){
      this.setState({currentUser:{'name':name}});
      const content = currentName + " has changed their name to " + name
      const notification = JSON.stringify({
        type: "postNotification",
        content: content
      });
      this.socket.send(notification)
    } else if (this.state.currentUser.name === ''){
      this.setState({ currentUser: { 'name': name } });
      const content1 = name + " joined"
      const notification1 = JSON.stringify({
        type: "postNotification",
        content: content1
      });
      this.socket.send(notification1)
    }
  }
  componentWillMount(){

  }
  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.onopen = ()=>{
      console.log("connected to the server")

      this.socket.send(JSON.stringify({type:"connected"}));
    }
    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      switch (data.type) {
        case "incomingMessage":
          const finalMessages = this.state.messages.concat(data);
          this.setState({ messages: finalMessages });
          break;
        case "incomingNotification":
          // handle incoming notification
          const msgs = this.state.messages.concat(data);
          this.setState({ messages: msgs });
          break;
        case "connected":
          this.setState({number: data.number})
          break;
        default:
          // show an error in the console if the message type is unknown
          throw new Error("Unknown event type " + data.type);
      }

    }

    setTimeout(() => {

      this.setState({loading:false})
    }, 1000);
  }

  render() {
    return (
      <main className="messages" >
        < NavBar currentUser={this.state.currentUser} number={this.state.number}/>
        < MessageList messages={this.state.messages} loading={this.state.loading}/>
        < ChatBar currentUser={this.state.currentUser} addMessage={this.addMessage} changeUser={this.changeUser}/>
      </main>
      );
    }
}
export default App;
