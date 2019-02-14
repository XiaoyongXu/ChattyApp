import React, {Component} from 'react';


export default function ChatBar (props){
  const addNew = (message,user)=>{
    const newMes = {
      username: user,
      content: message
    }
    props.addMessage(newMes);
    props.currentUser.name = user;
  }
  
    const onSubmit = evt => {
      if(evt.key === 'Enter'){
        evt.preventDefault();
        const messageInput = evt.target.value;
        const userInput = evt.target.parentNode.firstChild.value;
        // console.log(messageInput);
        addNew(messageInput,userInput)
      }
    }
    if (props.currentUser){
      return (
        
          <footer className="chatbar">
            <input className="chatbar-username" name="user" defaultValue={props.currentUser.name}/>
            <input className="chatbar-message" name="message" placeholder="Type a message and hit ENTER" onKeyDown={onSubmit}/> 
          </footer>   
      )
    }
}