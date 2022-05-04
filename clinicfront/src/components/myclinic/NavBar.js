import { Link } from 'react-router-dom'
import React from "react";
import logo2 from './assets/logo2.png'; // Tell webpack this JS file uses this image

export default function NavBar() {
  return (

    <div className="container-fluid sticky-top bg-white shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
          <a className="navbar-brand">
            <Link to={"/"}> <img src={logo2} class="img-fluid" alt="Responsive image" style={{
              objectFit: 'contain',
              width: '30%',
              height: '30%'
            }} /></Link>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <div className="navbar-nav ms-auto py-0">
              <ul class="navbar-nav">
                <li className="nav-item">
                  <a className="nav-item nav-link ">
                    <Link to={"/"}> Home</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-item nav-link ">
                    <Link to="/team">Team</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-item nav-link ">
                    <Link to="/about"> AboutUs</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-item nav-link " style={{'textAlign':"center"}}>
                    <Link to="/bookappointment">Book</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-item nav-link">
                    <Link to="/login"> Login</Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}