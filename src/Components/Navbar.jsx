import React from 'react'
import './Style.css';

export const Navbar = () => {
  return (
   <nav className='navbar'>
    
    <ul className='link'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>

   </nav>
  )
}
export default Navbar;
