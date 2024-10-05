import React from 'react';
import Logo from '../assets/Logo2.png'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg d-flex align-items-center justify-content-center px-5'>
      <img src={Logo} alt="" />
      {/* <button className="btn">
        <a target='_blank' href="https://api.whatsapp.com/send?phone=919074010119">Let's Chat</a>
      </button> */}
    </nav>
  )
}

export default Navbar