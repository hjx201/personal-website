import React, { Component } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='nav-item'>
                <div className='nav-text'>Home</div>
            </Link>
            <Link to='/about' className='nav-item'>
                <div className='nav-text'>About</div>
            </Link>
            <Link to='/misc' className='nav-item-right'>
                <div className='nav-text'>Other Stuff</div>
            </Link>
          </div>
        </nav>
      </>
    )
  }
}
