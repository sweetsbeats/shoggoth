import React, { Component } from 'react';
import {Link}  from 'react-router-dom'

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
        <div id='navbar'> 
      <Link to="/"> Shoggoth.club </Link>
        
        <div className='navOption'> 
        <Link to="/contact">contact </Link></div>
        <div className='navOption'> 
        <Link to="/about">about </Link></div>
        <div className='navOption'> 
        <Link to="/examples">examples </Link> </div>
        </div> 
        );
    }
}
 
export default Navbar;