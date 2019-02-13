import React, {Component} from 'react';
import MessageItem from './Message.jsx';

function Loading() {
  return (
    <h1>Loading messages...</h1>
  );
}

export default function MessageList (props) {
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