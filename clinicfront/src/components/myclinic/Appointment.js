import { Link } from 'react-router-dom'
import React  from 'react'

export default function Appointment() {
  return (
    <div className="container-fluid bg-primary my-5 py-5">
      <div className="container py-5">
        <div className="row gx-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="mb-4">
              <br /><br /><br />
              <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Book an Appointment</h5>
              <h1 className="display-4">Make An Appointment For You or for Your Family</h1>
            </div>
            <p className="text-white mb-5">The Easiest Way to Book an Appointment! </p>
            <Link to={"/operations"} className="btn btn-dark rounded-pill py-3 px-5 me-3">See Operations' List</Link>
            <a className="btn btn-outline-dark rounded-pill py-3 px-5" href>Read More</a>
          </div>
          <div className="col-lg-6">
            <div className="bg-white text-center rounded p-5">
              <h1 className="mb-4">Book An Appointment</h1>
              <h5>New? Create an account <Link to={"/joinpatient"}>here</Link></h5>
              <br />
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control bg-light border-0" placeholder="First Name" style={{ height: '55px' }} />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control bg-light border-0" placeholder="Last Name" style={{ height: '55px' }} />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{ height: '55px' }} />
                  </div>
                  <div className="col-12 col-sm-6">
                    <select className="form-select bg-light border-0" style={{ height: '55px' }}>
                      <option selected>Select Operation</option>
                      <option value={1}>Operation 1</option>
                      <option value={2}>Operation 2</option>
                      <option value={3}>Operation 3</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="date" id="date" data-target-input="nearest">
                      <label for="date"> Date</label>
                      <input type="date" className="form-control bg-light border-0 datetimepicker-input" data-target="#date" data-toggle="datetimepicker" style={{ height: '55px' }} />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="time" id="time" data-target-input="nearest">
                      <label for="date"> Time</label>
                      <input type="time" id="appt" name="appt" className="form-control bg-light border-0 datetimepicker-input" data-target="#time" data-toggle="datetimepicker" style={{ height: '55px' }}/>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Book</button>
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