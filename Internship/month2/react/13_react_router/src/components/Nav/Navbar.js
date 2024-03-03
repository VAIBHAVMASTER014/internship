import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className = 'nav'>
      
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/NewPost'>Newpost</NavLink></li>
        <li><NavLink to='/postpage'>P/ostpage</NavLink></li>
      </ul>
    
      
    </div>
  )
}

export default Navbar