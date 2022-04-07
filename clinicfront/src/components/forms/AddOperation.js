import React from 'react'

export default function AddEmployee() {
    return (
        <div className="container-fluid bg-primary my-5 py-5">
            <div className="container py-5" style={{ "width": "100%", "alignItems": "center" }}>
                <div className="row gx-5" style={{ "margin": "auto" }}>
                    <div className="col-lg-6" style={{ "width": "70%", "margin": "auto" }}>
                        <div className="bg-white text-center rounded p-5">
                            <h1 className="mb-4">Add Operation</h1>
                            <br />
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6" style={{ "width": "60%", "margin": "auto" }}>
                                        <label for="date"> Operation Name</label>
                                        <input type="text" className="form-control bg-light border-0" placeholder="Operation Name" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6" style={{ "width": "60%", "margin": "auto" }}>
                                        <br />
                                        <label for="date"> Price</label>
                                        <input type="number" className="form-control bg-light border-0" placeholder="Operation Price" step="1" min="0" max="1000" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6" style={{ "width": "60%", "margin": "auto" }}>
                                        <br />
                                        <label for="myfile"> Description</label>
                                        <textarea rows="4" cols="80" className="form-control bg-light border-0">
                                        </textarea>
                                    </div>
                                    <div className="col-12" style={{ "width": "70%", "margin": "auto" }}>
                                        <br /><br /><br />
                                        <button className="btn btn-primary w-100 py-3" type="submit">Add Operation</button>
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