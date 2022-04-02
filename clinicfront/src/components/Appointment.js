import { Link } from 'react-router-dom'
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Appointment() {


    
  let navigate = useNavigate();
  const [state, setState] = useState({});
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [email, setemail] = useState(null);
  const [operation, setoperation] = useState(null);
  const [date, setdate] = useState(null);
  const [time, settime] = useState(null);
 

    // const handleChange = (e) => {
    //   setState({ ...state, [e.target.name]: e.target.value });
    // };

  const addNewAppointment = async () => {

    const form = {
      firstName,
      lastName,
      email,
      operation,
      date,
      time
    };
    console.log(form);
    await axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/appointments/create/",
      data: form,
    })
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  
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
            <Link to={"../"}> MyClinic</Link>
            <Link to={"/operations"} className="btn btn-dark rounded-pill py-3 px-5 me-3">See Operations' List</Link>
            <a className="btn btn-outline-dark rounded-pill py-3 px-5" href>Read More</a>
          </div>
          <div className="col-lg-6">
            <div className="bg-white text-center rounded p-5">
              <h1 className="mb-4">Book An Appointment</h1>
              <h5>New? Create an account <Link to={"/join"}>here</Link></h5>
              <br />
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control bg-light border-0" placeholder="First Name" value = {firstName} onChange={(e) => setfirstName(e.target.value)} style={{ height: '55px' }} />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control bg-light border-0" placeholder="Last Name" value = {lastName} onChange={(e) => setlastName(e.target.value)} style={{ height: '55px' }} />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="email" className="form-control bg-light border-0" placeholder="Your Email" value = {email} onChange={(e) => setemail(e.target.value)} style={{ height: '55px' }} />
                  </div>
                  <div className="col-12 col-sm-6">
                    <select className="form-select bg-light border-0" value = {operation} onChange={(e) => setoperation(e.target.value)} style={{ height: '55px' }}>
                      <option selected>Select Operation</option>
                      <option value={1}>Root Canal</option>
                      <option value={2}>Tooth Extraction</option>
                      <option value={3}>Pulpotomy</option>
                      <option value={4}>Bridge</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="date" id="date" data-target-input="nearest">
                      <input type="date" className="form-control bg-light border-0 datetimepicker-input" data-target="#date" data-toggle="datetimepicker" value = {date} onChange={(e) => setdate(e.target.value)} style={{ height: '55px' }} />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="time" id="time" data-target-input="nearest">
                      <input type="time" id="appt" name="appt" className="form-control bg-light border-0 datetimepicker-input" data-target="#time" data-toggle="datetimepicker" value = {time} onChange={(e) => settime(e.target.value)} style={{ height: '55px' }} value="09:00" />
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit" onClick={addNewAppointment} >Book</button>
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