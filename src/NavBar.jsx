import React, {Component} from 'react';

export default function NavBar(props){

  return (
    <nav className="navbar">
      <div>
        <a href="/" className="navbar-brand">Chatty</a>
        <a className="navbar-user">{props.number} users online</a>
      </div>
    </nav>
  )
}