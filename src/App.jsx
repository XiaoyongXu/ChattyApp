import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx'
import NavBar from './NavBar.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    // this is the *only* time you should assign directly to state:
    this.state = {
      
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages:[],
      loading: true
    };
    this.addMessage = this.addMessage.bind(this);
    this.add = this.add.bind(this);
  }
  addMessage(newMessage){
    const data = JSON.stringify({
      username: newMessage.username,
      content: newMessage.content
    });
    this.socket.send(data);
  }
  add(newMessage){
    const oldMessages = this.state.messages;
    const finalMessages = [...oldMessages,newMessage];
    this.setState({messages:finalMessages});
  }

  componentWillMount(){
    
  }
  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.onopen = ()=>{
      console.log("connected to the server")
      this.socket.onmessage = (event)=>{
        console.log(event.data);
        this.add(JSON.parse(event.data));
        console.log(this.state);

      }
    }

    setTimeout(() => {
      
      this.setState({loading:false})
    }, 1000);
  }
  
  render() {
    return (
      <main className="messages" >
        < NavBar currentUser={this.state.currentUser}/>
        < MessageList messages={this.state.messages} loading={this.state.loading}/>
        < ChatBar currentUser={this.state.currentUser} addMessage={this.addMessage}/>
      </main>
      );
    }
}
export default App;
