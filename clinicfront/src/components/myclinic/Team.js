import React from 'react'


const left = {
  marginLeft: '30px',
  float: 'left',
  width: '45%',
  padding: '10px'
};

export default function Team() {
  return (
    <section>
      <div className="container-fluid py-5">
        <div className="">
          <div className="text-center mx-auto mb-5">
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Our Team</h5>
            <h1 className="display-4">Meet Our Qualified Professionals</h1>
          </div>
          <div className="owl-carousel team-carousel position-relative">

            <div className="team-item" >
              <div className="row g-0 bg-light rounded overflow-hidden" style={left}>
                <div className="col-12 col-sm-5 h-100">
                  <img className="img-fluid h-100" src="assets/img/team-1.jpg" alt="" style={{ objectFit: 'cover' }} />
                </div>
                <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                  <div className="mt-auto p-4">
                    <h3>Dentist</h3>
                    <h6 className="fw-normal fst-italic text-primary mb-4">Dentist Specialist</h6>
                    <p className="m-0">Description:</p>
                  </div>
                  <div className="d-flex mt-auto border-top p-4">
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter" /></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="team-item" >
              <div className="row g-0 bg-light rounded overflow-hidden" style={left}>
                <div className="col-12 col-sm-5 h-100">
                  <img className="img-fluid h-100" src="assets/img/team-2.jpg" style={{ objectFit: 'cover' }} />
                </div>
                <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                  <div className="mt-auto p-4">
                    <h3>Dentist Assistant</h3>
                    <h6 className="fw-normal fst-italic text-primary mb-4">Dentist Assistant</h6>
                    <p className="m-0">Description:</p>
                  </div>
                  <div className="d-flex mt-auto border-top p-4">
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter" /></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-item" >
              <div className="row g-0 bg-light rounded overflow-hidden" style={left}>
                <div className="col-12 col-sm-5 h-100">
                  <img className="img-fluid h-100" src="assets/img/team-3.jpg" style={{ objectFit: 'cover' }} />
                </div>
                <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                  <div className="mt-auto p-4">
                    <h3>Secretary</h3>
                    <h6 className="fw-normal fst-italic text-primary mb-4">Secretary</h6>
                    <p className="m-0">Description:</p>
                  </div>
                  <div className="d-flex mt-auto border-top p-4">
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter" /></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-item" >
              <div className="row g-0 bg-light rounded overflow-hidden" style={left}>
                <div className="col-12 col-sm-5 h-100">
                  <img className="img-fluid h-100" src="assets/img/team-3.jpg" style={{ objectFit: 'cover' }} />
                </div>
                <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                  <div className="mt-auto p-4">
                    <h3>Nurse</h3>
                    <h6 className="fw-normal fst-italic text-primary mb-4">Nurse</h6>
                    <p className="m-0">Description:</p>
                  </div>
                  <div className="d-flex mt-auto border-top p-4">
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter" /></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-linkedin-in" /></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab far fa-comment-dots	" /></a>

                  </div>
                </div>
              </div>
            </div>

            <br />
          </div>
        </div>
      </div>
    </section>
  );
}