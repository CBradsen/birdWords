import React from 'react'
import Nest from '../../assets/pngegg.png'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {

  return (
    <div className='header'>
      <Link to="/">
        <img className='nest-image' src={Nest} alt='nest to home page' ></img>
      </Link>
      <div className='title-styling'>
        <h1>AvianAnthems:</h1> 
        <p>Exploring the World Through Birdsong</p>
      </div>
    </div>
  )
}

export default Header;
