import React from 'react';
import Logo from '../assets/Logo2.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

// {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <Link to='/'><img src={Logo} alt="" /> </Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link to='/'><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
//         </li>
//         <li className="nav-item">
//           <Link to='/about'><a className="nav-link active" aria-current="page" href="#about">About Us</a></Link>
//         </li>
//         <li className="nav-item">
//           <Link to='/result'><a className="nav-link active" aria-current="page" href="#blogs">Our Results</a></Link>
//         </li>
//         <li className="nav-item">
//           <Link to='/contact'><a className="nav-link active" aria-current="page" href="#contact">Contact Us</a></Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav> */}


<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to='/'>
      <img src={Logo} alt="Logo" className="me-3"/>
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/"><a className="nav-link active" href="#home">Home</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/about"><a className="nav-link" href="#about">About Us</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/result"><a className="nav-link" href='#result'>Our Results</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/contact"><a className="nav-link" href="#contact">Contact Us</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar