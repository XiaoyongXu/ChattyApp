import React, {Component} from 'react';


export default function ChatBar (props){
  const onSubmit = evt => {
    if(evt.key === 'Enter'){
      evt.preventDefault();
      if (props.currentUser.name === ''){
        const newMsg = {
          username: 'Anonymous',
          content: evt.target.value
        }
        props.addMessage(newMsg);
      }else{
        const newMes = {
          username: props.currentUser.name,
          content: evt.target.value
        }
        props.addMessage(newMes);
      }

    }
  }
  const nameOnSubmit = evt => {
    if(evt.key === 'Enter'){
      evt.preventDefault();
      props.changeUser(evt.target.value);
    }
  }
  if (props.currentUser){
    return (
        <footer className="chatbar">
        <input className="chatbar-username" name="user" placeholder="Your Name(Optional)" defaultValue={props.currentUser.name} onKeyDown={nameOnSubmit}/>
          <input className="chatbar-message" name="message" placeholder="Type a message and hit ENTER" onKeyDown={onSubmit}/>
        </footer>
    )
  }
}