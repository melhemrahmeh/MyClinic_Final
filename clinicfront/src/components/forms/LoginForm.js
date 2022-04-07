import React from 'react'

export default function LoginForm() {
    return (
        <div className="container-fluid bg-primary my-5 py-5">
            <div className="container py-5" style={{ "width": "100%", "alignItems": "center" }}>
                <div className="row gx-5" style={{ "margin": "auto" }}>
                    <div className="col-lg-6" style={{ "width": "60%", "margin": "auto" }}>
                        <div className="bg-white text-center rounded p-5">
                            <h1 className="mb-4">Login</h1>
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6" style={{ "width": "70%", "margin": "auto" }}>
                                        <br />
                                        <label for="date"> Email</label>
                                        <input type="email" className="form-control bg-light border-0" placeholder="Email" style={{ height: '55px', "margin": "auto"}}  />
                                    </div> 
                                    <div className="col-12 col-sm-6" >
                                        <br />
                                    </div>
                                    <div className="col-12 col-sm-6" style={{ "width": "70%", "margin": "auto"}}>
                                        <label for="date"> Password</label>
                                        <input type="password" className="form-control bg-light border-0" placeholder="Password" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12" style={{ "width": "70%", "margin": "auto" }}>
                                        <br /><br />
                                        <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
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