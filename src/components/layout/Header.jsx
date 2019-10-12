import React from 'react';
import {Link} from 'react-router-dom';

 function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to= "/">Home</Link> |
      <Link style={linkStyle} to= "/about">About</Link> |
      <Link style={linkStyle} to= "/fqa">FQA</Link>
    </header>
  )
}
const linkStyle ={
  color: '#fff',
  textDecoration: 'none'
}
const headerStyle ={
  background:'darkgray',
  color: 'white',
  textAlign: 'center',
  padding: '10px'
}

export default Header;