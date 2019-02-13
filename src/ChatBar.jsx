import React, {Component} from 'react';


export default function ChatBar (props){
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