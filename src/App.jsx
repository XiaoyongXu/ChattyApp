import React, {Component} from 'react';
// import ChatBar from './ChatBar.jsx';



function Loading() {
  return (
    <h1>Loading messages...</h1>
  );
}

function MessageItem(props) {
  return(
    <div className="message">
      <span className="message-username">{props.element.username}</span>
      <span className="message-content">{props.element.content}</span>
    </div>
  )
}

function MessageList (props) {
    const messages = props.messages.map(element => (
      <MessageItem key={element.id} element={element}/>
    ));
    const loading = props.loading ? <Loading /> : messages;
    return(
      <div>
        {loading}
      </div>
    )
}

function NavBar(props){
  if (props.currentUser){
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
    )
  }else{
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
    )
  }
}

export function ChatBar (props){
  const addNew = (message)=>{
    const randomString=(length)=> {
      const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    
      if (! length) {
          length = Math.floor(Math.random() * chars.length);
      }
    
      let str = '';
      for (let i = 0; i < length; i++) {
          str += chars[Math.floor(Math.random() * chars.length)];
      }
      return str;
    }
    const newMes = {
      id:randomString(8),
      username:props.currentUser.name,
      content: message
    }
    props.addMessage(newMes);
  }
  
    const onSubmit = evt => {
      if(evt.keyCode == 13){
        evt.preventDefault();
        const messageInput = evt.target.value;
        // console.log(messageInput);
        addNew(messageInput)
        evt.target.value=""
      }
    }
    if (props.currentUser){
      return (
        <footer className="chatbar">
          <input className="chatbar-username" defaultValue={props.currentUser.name} />
          <input className="chatbar-message" name="message" placeholder="Type a message and hit ENTER" onKeyDown={onSubmit}/>  
        </footer>
      )
    }
}

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
