import React from 'react'


export default function SignUpWorker() {
    return (
        <div className="container-fluid bg-primary my-5 py-5">
            <div className="container py-5" style={{ "width": "100%", "alignItems": "center" }}>
                <div className="row gx-5" style={{ "margin": "auto" }}>
                    <div className="col-lg-6" style={{ "width": "60%", "margin": "auto" }}>
                        <div className="bg-white text-center rounded p-5">
                            <h1 className="mb-4">Join as a Worker</h1>
                            <br />
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6" style={{ "width": "70%", "margin": "auto" }}>
                                        <label for="date"> Name</label>
                                        <input type="text" className="form-control bg-light border-0" placeholder="Name" style={{ height: '55px', "margin": "auto" }} />
                                    </div>
                                    <div className="col-12 col-sm-6" style={{ "width": "70%", "margin": "auto" }}>
                                        <br />
                                        <label for="date"> Email</label>
                                        <input type="email" className="form-control bg-light border-0" placeholder="Email" style={{ height: '55px', "margin": "auto" }} />
                                    </div>
                                    <div className="col-12 col-sm-6" style={{ "width": "70%", "margin": "auto" }}>
                                        <br />
                                    </div>
                                    <div className="col-12 col-sm-6" style={{ height: '70px', width: '450px', "margin": "auto" }}>
                                        <label for="date"> Select Position</label>
                                        <select className="form-select bg-light border-0" style={{ height: '55px', "margin": "auto" }}>
                                            <option value="Administrator" selected> Administrator </option>
                                            <option value="Nurse">  Nurse </option>
                                            <option value="Secretary">  Secretary </option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6" style={{ "width": "70%", "margin": "auto" }}>
                                    </div>
                                    <div className="col-12 col-sm-6" style={{ "width": "70%", "margin": "auto" }}>
                                        <br />                                        <br />

                                        <label for="date"> Clinic ID </label>
                                        <input type="text" className="form-control bg-light border-0" placeholder="Clinic ID" style={{ height: '55px', "margin": "auto" }} />
                                    </div>
                                    <div className="col-12 col-sm-6" style={{ "width": "70%", "margin": "auto" }}>
                                        <br />
                                    </div>

                                    <div className="col-12 col-sm-6" style={{ "width": "70%", "margin": "auto" }}>
                                        <label for="date"> Password</label>
                                        <input type="password" className="form-control bg-light border-0" placeholder="Password" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6" >
                                    </div>
                                    <div className="col-12 col-sm-6" style={{ "width": "70%", "margin": "auto" }}>
                                        <label for="date"> Confirm Password</label>
                                        <input type="password" className="form-control bg-light border-0" placeholder="Password" style={{ height: '55px' }} />
                                    </div>

                                    <div className="col-12" style={{ "width": "70%", "margin": "auto" }}>
                                        <br />
                                        <button className="btn btn-primary w-100 py-3" type="submit">Create Account</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}