import React from 'react';
import Logo from '../assets/Logo2.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // <nav className='navbar navbar-expand-lg d-flex align-items-center justify-content-between px-5'>
    //   <img src={Logo} alt="" />
      
    //    <div className='icons'>
    //    <a target='_blank' href="https://api.whatsapp.com/send?phone=918718810605"><i className='bx bxl-whatsapp' ></i></a>
    //    <a target='_blank' href="https://www.facebook.com/people/Sehat-Ki-Paathshala/61556904706327/?mibextid=ZbWKwL"><i className='bx bxl-facebook' ></i></a>
    //    <a target='_blank' href="https://www.instagram.com/sehat_ki_pathshala.by_deep?igsh=dzlyeW10cTM0dDZs"><i className='bx bxl-instagram'></i></a>
    //    </div>
    // </nav>

    <nav className="navbar bg-body-tertiary fixed-top px-4">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={Logo} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <span>
        <h3 className="offcanvas-title mt-3" id="offcanvasNavbarLabel">सेहत की पाठशाला</h3>
        <p className='text-dark'>आश्वासन नहीं, परिणामों की दुनिया</p>
        </span>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link to='/'><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
          </li>
          <li className="nav-item">
          <Link to='/about'><a className="nav-link" href="#">About Us</a></Link>
          </li>
          <li className="nav-item">
          <Link to='/contact'><a className="nav-link" href="#">Contact Us</a></Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Call Us
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="tel:+919074010119">+91-9074010119</a></li>
              <li><a className="dropdown-item" href="tel:+918718810605">+91-8718810605</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar