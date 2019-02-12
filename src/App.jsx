import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // this is the *only* time you should assign directly to state:
    this.state = {
      
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: 
      [
        {
          username: 'Bob',
          content: 'Has anyone seen my marbles?',
        },
        {
          username: 'Anonymous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.'
        }
      ],
      loading: true
    
    };
  }
  componentDidMount() {
    // After 3 seconds, set `loading` to false in the state.
    setTimeout(() => {
      this.setState({loading: false}); // this triggers a re-render!
    }, 2000)
  }
  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>
    } else {
    return (
      <h1>{this.state.currentUser.name}</h1>
      );
    }
  }
}
export default App;
