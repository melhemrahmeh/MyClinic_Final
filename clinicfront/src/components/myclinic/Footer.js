import { Link } from "react-router-dom"
import React  from 'react'

export default function Footer(props) {

  var team;
  var about;
  var operations;
  if (props.isMain) {
    team = "./team";
    about = "./about";
    operations = "./operations"
  } else {
    team = "../team";
    about = "../about";
    operations = "../operations"
  }

  var bar;
  if (props.isTeam) {
    bar = <hr />;
  } else {
    bar = <> </>;
  }


  return (
    <div className="container-fluid bg-dark text-light mt-5 py-5">
      <div className="container py-5" >
        <div className="row g-5" >
          {bar}
          <div className="col-lg-3 col-md-6">
            <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4" >MyClinic</h4>
            <p className="mb-4">MyClinic is a web application to helps you organize your visits to your doctor from the comfort of your home!</p>
            <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3" />Hamra Street, Beirut, Lebanon</p>
            <p className="mb-2"><i className="fa fa-envelope text-primary me-3" />info@myclinic.com</p>
            <p className="mb-0"><i className="fa fa-phone-alt text-primary me-3" />+961 1000000</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Quick Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <Link to={"../"} className="text-light mb-2" ><i className="fa fa-angle-right me-2" />Home</Link>
              <Link to={about} className="text-light mb-2" ><i className="fa fa-angle-right me-2" />About Us</Link>
              <Link to={operations} className="text-light mb-2" ><i className="fa fa-angle-right me-2" />Our Services</Link>
              <Link to={team} className="text-light mb-2" ><i className="fa fa-angle-right me-2" />Meet the Team</Link>
              <Link to={team} className="text-light mb-2" ><i className="fa fa-angle-right me-2" />Contact us</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Newsletter</h4>
            <form action>
              <div className="input-group">
                <input type="text" className="form-control p-3 border-0" placeholder="Your Email Address" />
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <h6 className="text-primary text-uppercase mt-4 mb-3">Follow Us</h6>
            <div className="d-flex">
              <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="https://twitter.com/"><i className="fab fa-twitter" /></a>
              <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in" /></a>
              <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="https://www.instagram.com/"><i className="fab fa-instagram" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}