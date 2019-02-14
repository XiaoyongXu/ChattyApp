import React, {Component} from 'react';
import MessageItem from './MessageItem.jsx';


function Loading() {
  return (
    <h1>Loading messages...</h1>
  );
}


export default function MessageList (props) {
  const messages = props.messages.map(message => {
    if (message.id){
      return (<MessageItem key={message.id} message={message} />)
    }
  });
  const loading = props.loading ? <Loading /> : messages;
  return(
    <div>
      {loading}
    </div>
  )
}