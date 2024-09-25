import React from 'react';
import Logo from '../assets/Logo2.png'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg shadow-lg d-flex align-items-center justify-content-around'>
      <img src={Logo} alt="" />
      <button className="btn">Let's Chat</button>
    </nav>
  )
}

export default Navbar