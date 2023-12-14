import React from 'react';
import '../Navbar/Nav.css';
import img1 from '../images/logo.png';
import img2 from '../images/healthicons_ui-user-profile-outline.png'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">
        <img className="logo-img" src={img1} style={{width:"200px"}} alt="Logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="nav navbar-nav navbar-right nav-element">
          <li className="nav-item">
            <Link className="nav-link active" style={{fontFamily:"Montserrat",fontWeight:"bold",color:"#1e1e1e"}} aria-current="page" to="#">
              Saved
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" style={{fontFamily:"Montserrat",fontWeight:"bold",color:"#1e1e1e"}} aria-current="page" to="#">
              Work
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" style={{fontFamily:"Montserrat",fontWeight:"bold",color:"#1e1e1e"}} aria-current="page" to="#">
              Companies
            </Link>
          </li>
          <li className="user-profile">
            <img
              src={img2}
              alt="User Profile"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>

    </div>
  )
}

export default Nav
