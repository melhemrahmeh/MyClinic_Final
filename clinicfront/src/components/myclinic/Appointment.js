import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Appointment() {
  const [data, setData] = useState([]);
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [operation, setOperation] = useState(1);


  let navigate = useNavigate();

  const addNewAppointment = async () => {

    const form = {
      firstName,
      lastName,
      email,
      date,
      time,
      operation
    };
    //console.log(form);
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

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/operations/")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


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
              <h5>New? <Link to={"/contactus"}>Contact us</Link></h5>
              <br />
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">

                    <input type="text"
                      className="form-control bg-light border-0"
                      placeholder="First Name"
                      name="firstName"
                      value={firstName}
                      //   onChange={handleChange}
                      onChange={(e) => setfirstName(e.target.value)}
                      style={{ height: "55px" }}
                      required
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="text"
                      className="form-control bg-light border-0"
                      placeholder="Last Name"
                      name="lastName"
                      value={lastName}
                      //   onChange={handleChange}
                      onChange={(e) => setLastName(e.target.value)}
                      style={{ height: "55px" }}
                      required
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="email"
                      className="form-control bg-light border-0"
                      placeholder="Enter your mail"
                      name="email"
                      value={email}
                      //   onChange={handleChange}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ height: "55px" }}
                      required
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <select
                      className="form-select bg-light border-0"
                      name="operation"
                      value={operation}
                      onChange={(e) => setOperation(e.target.value)}
                      style={{ height: "55px" }}
                    >
                      <option selected> Select Operation </option>
                      {data.map((op) => (<option value={op._id}>{op.title} {op.cost}$ </option>))}
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="date" id="date" data-target-input="nearest">
                      <label for="date"> Date</label>
                      <input
                        data-target="#date"
                        data-toggle="datetimepicker"
                        name="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="form-control bg-light border-0"
                        style={{ height: "55px" }}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="time" id="time" data-target-input="nearest">
                      <label for="date"> Time</label>
                      <input
                        name="time"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="form-control bg-light border-0 datetimepicker-input"
                        style={{ height: "55px" }}
                        min="09:00" max="18:00" step="1800"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                      onClick={addNewAppointment}
                    >
                      Book
                    </button>
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