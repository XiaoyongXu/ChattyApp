import React, {Component} from 'react';


export default function ChatBar (props){
  const onSubmit = evt => {
    if(evt.key === 'Enter'){
      evt.preventDefault();
      const newMes = {
        username: props.currentUser.name,
        content: evt.target.value
      }
      props.addMessage(newMes);
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
          <input className="chatbar-username" name="user" defaultValue={props.currentUser.name} onKeyDown={nameOnSubmit}/>
          <input className="chatbar-message" name="message" placeholder="Type a message and hit ENTER" onKeyDown={onSubmit}/> 
        </footer>   
    )
  }
}