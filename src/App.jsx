import React, {Component} from 'react';

function MessageItem(props) {
  return(
    <div className="message">
      <span className="message-username">{props.element.username}</span>
      <span className="message-content">{props.element.content}</span>
    </div>
  )
}

function Loading() {
  return (
    <h1>Loading messages...</h1>
  );
}

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = {
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
      loading:true
    }
  }
  componentDidMount() {
    // After 2 seconds, set `loading` to false in the state.
    setTimeout(() => {
      this.setState({loading: false}); // this triggers a re-render!
    }, 2000)
  }
  render(){
    
    const messages = this.state.messages.map(element => (
      <MessageItem key={element.id} element={element}/>
    ));

    const loading = this.state.loading ? <Loading /> : messages;
    return(
      <div>
        {loading}
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    // this is the *only* time you should assign directly to state:
    this.state = {
      
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      
    };
  }
  
  render() {
    
    return (
      <main className="messages" >
        < MessageList />
      </main>
      );
    }

}
export default App;
