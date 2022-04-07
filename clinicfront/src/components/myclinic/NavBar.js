import { Link } from 'react-router-dom'
import React from "react";

export default function NavBar(props) {
  var team;
  var about;
  var login;
  var join;
  var joinworker;
  var joinclinic;
  var operations;
  var dev;
  if (props.isMain) {
    team = "./team";
    about = "./about";
    login = "./login";
    join = "./joinpatient";
    operations = "./operations";

    joinworker = "./joinworker";
    joinclinic = "./joinclinic";
    dev="./ourteam"
  } else {
    team = "../team";
    about = "../about";
    login = "../login";
    join = "../joinpatient";
    operations = "../operations";

    joinworker = "../joinworker";
    joinclinic = "../joinclinic";
    dev = "../ourteam"
  }

  return (

    <div className="container-fluid sticky-top bg-white shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
          <a className="navbar-brand">
            <h1 className="m-0 text-primary">
              <Link to={"../"}> MyClinic</Link></h1>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <div className="navbar-nav ms-auto py-0">
              <ul class="navbar-nav">
                <li className="nav-item">
                  <a className="nav-item nav-link ">
                    <Link to={"../"}> Home</Link>
                  </a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-item nav-link ">
                    <Link to={operations}> Operations</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-item nav-link ">
                    <Link to={team}>Team</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-item nav-link ">
                    <Link to={about}> About Us</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-item nav-link ">
                    <Link to={dev}> Developers</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-item nav-link">
                    <Link to={login}> Log in</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <div class="dropdown show">
                    <a class="btn nav-item nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ "color": "#26b0c2" }} >
                      Register
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <Link class="dropdown-item" to={join}> As a Patient </Link>
                      <Link class="dropdown-item" to={joinclinic}> As a Clinic </Link>
                      <Link class="dropdown-item" to={joinworker}> As a Worker </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}