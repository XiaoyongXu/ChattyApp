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
    this.changeUser = this.changeUser.bind(this);
  }
  addMessage(newMessage){
    const data = JSON.stringify({
      username: newMessage.username,
      content: newMessage.content
    });
    
    this.socket.send(data);
  }
  changeUser(name){
    if (name !== this.state.currentUser.name){
      this.setState({currentUser:{'name':name}});
    }
    console.log(this.state);
  }
  componentWillMount(){
    
  }
  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.onopen = ()=>{
      console.log("connected to the server")
      this.socket.onmessage = (event)=>{      
        const finalMessages = this.state.messages.concat(JSON.parse(event.data));
        this.setState({messages:finalMessages});
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
        < ChatBar currentUser={this.state.currentUser} addMessage={this.addMessage} changeUser={this.changeUser}/>
      </main>
      );
    }
}
export default App;
