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
      messages:[
        {
          id: 1,
          username: 'Bob',
          content: 'Has anyone seen my marbles?',
        },
        {
          id: 2,
          username: 'Anonymous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.'
        }
      ],
      loading: true
    };
    this.addMessage = this.addMessage.bind(this);
  }
  addMessage(newMessage){
    const oldMessages = this.state.messages;
    const finalMessages = [...oldMessages,newMessage];
    this.setState({messages:finalMessages})
  }
  componentWillMount(){
    
  }
  componentDidMount() {

    setTimeout(() => {
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages,loading:false})
    }, 2000);
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
