import React, {Component} from 'react';

export default function MessageItem(props) {
  return(
    <div className="message">
      <span className="message-username">{props.element.username}</span>
      <span className="message-content">{props.element.content}</span>
    </div>
  )
}