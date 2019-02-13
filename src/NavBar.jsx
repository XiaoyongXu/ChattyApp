import React, {Component} from 'react';

export default function NavBar(props){
  if (props.currentUser){
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
    )
  }else{
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
    )
  }
}