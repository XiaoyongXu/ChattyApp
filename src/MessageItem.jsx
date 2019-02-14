import React, {Component} from 'react';

export default function MessageItem(props) {
  if (props.message.username){
    return (
      <div className="message">
        <span className="message-username">{props.message.username}</span>
        <span className="message-content">{props.message.content}</span>

      </div>
    )
  }else{
    return (
      <div className="message system">
        <span className="notification-content">{props.message.content}</span>
      </div>
    )
  }
}

