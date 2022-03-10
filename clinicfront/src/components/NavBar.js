import { Link } from 'react-router-dom'
import React from "react";

export default function NavBar(props) {
  var team;
  var about;
  var login;
  var join;
  var operations;
  if (props.isMain) {
    team = "./team";
    about = "./about";
    login = "./admin";
    join = "./admin";
    operations = "./operations"
  } else {
    team = "../team";
    about = "../about";
    login = "../admin";
    join = "../admin";
    operations = "../operations"

  }

  return (

    <div className="container-fluid sticky-top bg-white shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
          <a className="navbar-brand">
            <h1 className="m-0 text-uppercase text-primary">
              <Link to={"../"}> MyClinic</Link></h1>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto py-0">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a className="nav-item nav-link active">
                    <Link to={"../"}> Home</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a className="nav-item nav-link">
                    <Link to={operations}> Operations</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a className="nav-item nav-link">
                    <Link to={team}>Team</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a className="nav-item nav-link">
                    <Link to={about}> About Us</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a className="nav-item nav-link">
                    <Link to={login}> Log in</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a className="nav-item nav-link">
                    <Link to={join}> Join</Link>
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