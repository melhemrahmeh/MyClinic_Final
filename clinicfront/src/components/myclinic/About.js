import React from 'react'

export default function About() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: '500px' }}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100 rounded" src="assets/img/dentist.jpg" style={{ objectFit: 'cover' }} alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="mb-4">
              <br /><br />
              <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">About Us</h5>
              <h1 className="display-4">The Best Dental Office Management System for Clinic</h1>
            </div>
            <p>MyClinic is a web application to helps you organize your visits to your doctor from the comfort of your home!</p>
            <p>Our Mission is to help you book your appointments, view your operations, prices, and after visit summaries, and contact your clinic for any assistance.</p>
            <p>We will be committed to excellence in all of our services so that we may help clinics achieve the highest level of dental health professionalism appropriate for their needs in an atmosphere of trust and compassion.</p>
          </div>
          <div><div className="row g-3 pt-3">
            <div className="col-sm-2 col-6">
              <div className="bg-light text-center rounded-circle py-4">
                <i className="fa fa-3x fa fa-users text-primary mb-3" />
                <h6 className="mb-0">User<small className="d-block text-primary">Friendly</small></h6>
              </div>
            </div>
            <div className="col-sm-2 col-6">
              <div className="bg-light text-center rounded-circle py-4">
                <i className="fa fa-3x fa-smile-o text-primary mb-3" />
                <h6 className="mb-0">Happiness<small className="d-block text-primary">Guaranteed </small></h6>
              </div>
            </div>
            <div className="col-sm-2 col-6">
              <div className="bg-light text-center rounded-circle py-4">
                <i className="fa fa-3x fa-thin fa-tooth text-primary mb-3" />
                <h6 className="mb-0">Professional<small className="d-block text-primary">Help</small></h6>
              </div>
            </div>
            <div className="col-sm-2 col-6">
              <div className="bg-light text-center rounded-circle py-4">
                <i className="fa fa-3x fa fa-user-md text-primary mb-3" />
                <h6 className="mb-0">Direct<small className="d-block text-primary">Assistance</small></h6>
              </div>
            </div>
            <div className="col-sm-2 col-6">
              <div className="bg-light text-center rounded-circle py-4">
                <i className="fa fa-3x fas fa-shield-alt	 text-primary mb-3" />
                <h6 className="mb-0">Safety<small className="d-block text-primary">Assurance</small></h6>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}