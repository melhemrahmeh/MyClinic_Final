import React from 'react'

const left = {
    marginLeft: '30px',
    float: 'left',
    width: '45%',
    padding: '10px'
};


export default function MeetTheTeam() {
    return (
        <section>
            <div className="container-fluid py-5">
                <div className="">
                    <div className="text-center mx-auto mb-5">
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Our Team</h5>
                        <h1 className="display-4">Meet the Developers</h1>
                    </div>
                    <div className="owl-carousel team-carousel position-relative">

                        <div className="team-item" >
                            <div className="row g-0 bg-light rounded overflow-hidden" style={left}>
                                <div className="col-12 col-sm-5 h-100">
                                    <img className="img-fluid h-100" src="assets/img/Team/israa.jpg" alt="" style={{ objectFit: 'cover' }} />
                                </div>
                                <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                                    <div className="mt-auto p-4">
                                        <h3>Israa Diab</h3>
                                        <h6 className="fw-normal fst-italic text-primary mb-4"> Database and Marketing</h6>
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

                        <div className="team-item">
                            <div className="row g-0 bg-light rounded overflow-hidden" style={left}>
                                <div className="col-12 col-sm-5 h-100">
                                    <img className="img-fluid h-100" src="assets/img/Team/melhem.jpg" style={{ objectFit: 'cover' }} />
                                </div>
                                <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                                    <div className="mt-auto p-4">
                                        <h3> Melhem Rahmeh</h3>
                                        <h6 className="fw-normal fst-italic text-primary mb-4">Product Owner and Front End Developer</h6>
                                        <p className="m-0">Junior Computer Science Student at the American University of Beirut. Being a tech enthusiast since a young age, I started learning to program in High school then chose to major in Computer Science. </p>
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
                                    <img className="img-fluid h-100" src="assets/img/Team/lahib.jpg" style={{ objectFit: 'cover' }} />
                                </div>
                                <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                                    <div className="mt-auto p-4">
                                        <h3> Mohammad Lahib</h3>
                                        <h6 className="fw-normal fst-italic text-primary mb-4">Back End Developer and Devops</h6>
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
                                    <img className="img-fluid h-100" src="assets/img/Team/nathalie.jpg" style={{ objectFit: 'cover' }} />
                                </div>
                                <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                                    <div className="mt-auto p-4">
                                        <h3>Nathalie Nassar</h3>
                                        <h6 className="fw-normal fst-italic text-primary mb-4">Scrum Master and Front End Developer</h6>
                                        <p className="m-0">Description:</p>
                                    </div>
                                    <div className="d-flex mt-auto border-top p-4">
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-linkedin-in" /></a>

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