import PopupAppointment from "../forms/PopupAppointment";
import React, { useEffect, useState } from "react";
import PopupPatient from "../forms/PopupPatient";
import axios from "axios";

export default function PatientTable() {
    const [data, setData] = useState([]);

    const [buttonPopup, setButtonPopup] = useState(false);
    const [EditPopup, setEditPopup] = useState(false);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/patients/")
            .then((res) => {
                setData(res.data);
                console.log("Result:", data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

 
    return (
        <>
            <br />
            <div class="container">
                <div class="panel-heading">
                    <h1 style={{ "margin": "auto" }}>My Patients</h1>
                    <br />
                </div>
                <div class="panel-body table-responsive-sm">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th style={{ 'color': "#535356" }}>Name</th>
                                <th style={{ 'color': "#535356" }}>Email</th>
                                <th style={{ 'color': "#535356" }}>Phone Number</th>
                                <th style={{ 'color': "#535356" }}>Total Amount Due</th>
                                <th style={{ 'color': "#535356" }}>Number of Operations Done</th>
                                <th style={{ 'color': "#535356" }}>Actions</th>

                            </tr>
                        </thead>

                        <tbody>
                            {data.map((patient) => (
                                <>
                                    <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                        <td style={{ 'color': "#5D5C63" }}><pre>{patient.firstName} {patient.lastName}</pre></td>
                                        <td style={{ 'color': "#5D5C63" }}>{patient.email}</td>
                                        <td style={{ 'color': "#5D5C63" }}>{patient.PhoneNumber}</td>
                                        <td style={{ 'color': "#5D5C63" }}>100$</td>
                                        <td style={{ 'color': "#5D5C63" }}>6</td>
                                        <td style={{ 'color': "#5D5C63" }}>  <button type="button" class="btn btn-info" onClick={() => setEditPopup(true)}>Edit</button>  or  <button type="button" class="btn btn-danger">Delete</button></td>

                                        <br />
                                        <PopupPatient trigger={EditPopup} setTrigger={setEditPopup}>
                                            <div className="container-fluid bg-primary my-5 py-5">
                                                <div className="col-lg-6" style={{ "width": "100%", "margin": "auto" }}>
                                                    <div className="bg-white text-center rounded p-5">
                                                        <h1 className="mb-4">Edit Patient</h1>
                                                        <br />
                                                        <form>
                                                            <div className="row g-3">
                                                                <div className="col-12 col-sm-6">
                                                                    <label for="date"> Name</label>
                                                                    <input type="text" className="form-control bg-light border-0" placeholder="Operation Name" style={{ height: '55px' }} />
                                                                </div>
                                                                <div className="col-12 col-sm-6">
                                                                    <label for="date"> Amount Due</label>
                                                                    <input type="number" className="form-control bg-light border-0" placeholder="Operation Price" step="1" min="0" max="1000" style={{ height: '55px' }} />
                                                                </div>
                                                                <div className="col-12 col-sm-6" >
                                                                    <label for="myfile"> Number of Operations Done</label>
                                                                    <input type="number" className="form-control bg-light border-0" placeholder="Operation Price" step="1" min="0" max="1000" style={{ height: '55px' }} />
                                                                </div>
                                                                <div className="col-12" >
                                                                    <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                                                </div>

                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </PopupPatient>
                                        <br />
                                    </tr>
                                    <tr>
                                        <td colspan="12" class="hiddenRow">
                                            <div class="accordian-body collapse" id="demo1">

                                                <br />
                                                <button type="button" class="btn btn-info" onClick={() => setButtonPopup(true)}>Add Appointment</button><br />
                                                <PopupAppointment trigger={buttonPopup} setTrigger={setButtonPopup}>
                                                    <div className="container-fluid bg-primary my-5 py-5">
                                                        <div className="container py-5" style={{ "width": "100%", "alignItems": "center" }}>
                                                            <div className="row gx-5" style={{ "margin": "auto" }}>
                                                                <div className="col-lg-6" style={{ "width": "70%", "margin": "auto" }}>
                                                                    <div className="bg-white text-center rounded p-5">
                                                                        <h1 className="mb-4">Add Appointment</h1>
                                                                        <br />
                                                                        <form>
                                                                            <div className="row g-3">
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
                                                                                        <input type="date" value="2017-06-01" className="form-control bg-light border-0 datetimepicker-input" data-target="#date" data-toggle="datetimepicker" style={{ height: '55px' }} />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-12 col-sm-6">
                                                                                    <div className="time" id="time" data-target-input="nearest">
                                                                                        <input type="time" id="appt" name="appt" className="form-control bg-light border-0 datetimepicker-input" data-target="#time" data-toggle="datetimepicker" style={{ height: '55px' }} value="09:00" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-12 col-sm-6">
                                                                                </div>
                                                                                <div className="col-12" >
                                                                                    <button className="btn btn-primary w-100 py-3" type="submit">Book</button>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </PopupAppointment>
                                                <br />

                                                <h5>Melhem Rahmeh's Visits</h5>
                                                <table class="table table-striped">
                                                    <thead>
                                                        <tr class="info">
                                                            <th style={{ 'color': "#5D5C63" }}>Visit Date</th>
                                                            <th style={{ 'color': "#5D5C63" }}>Operation</th>
                                                            <th style={{ 'color': "#5D5C63" }}>Price</th>
                                                            <th style={{ 'color': "#5D5C63" }}>Amount Paid</th>
                                                            <th style={{ 'color': "#5D5C63" }}>Amount Due</th>
                                                            <th style={{ 'color': "#5D5C63" }}>Summary</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>

                                                        <tr data-toggle="collapse" class="accordion-toggle">
                                                            <td style={{ 'color': "#5D5D60" }}>2016/09/27</td>
                                                            <td style={{ 'color': "#5D5D60" }}>Root Canal</td>
                                                            <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                            <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                            <td style={{ 'color': "#5D5D60" }}> 0$</td>
                                                            <td style={{ 'color': "#5D5D60" }}><i class='bx bxs-file-pdf' style={{ "font-size": "25px" }}></i>After Visit Summary</td>
                                                        </tr>
                                                        <tr data-toggle="collapse" class="accordion-toggle">
                                                            <td style={{ 'color': "#5D5D60" }}>2016/09/27</td>
                                                            <td style={{ 'color': "#5D5D60" }}>Root Canal</td>
                                                            <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                            <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                            <td style={{ 'color': "#5D5D60" }}> 0$</td>
                                                            <td style={{ 'color': "#5D5D60" }}><i class='bx bxs-file-pdf' style={{ "font-size": "25px" }}></i>After Visit Summary</td>
                                                        </tr>
                                                        <tr data-toggle="collapse" class="accordion-toggle">
                                                            <td style={{ 'color': "#5D5D60" }}>2016/09/27</td>
                                                            <td style={{ 'color': "#5D5D60" }}>Root Canal</td>
                                                            <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                            <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                            <td style={{ 'color': "#5D5D60" }}> 0$</td>
                                                            <td style={{ 'color': "#5D5D60" }}><i class='bx bxs-file-pdf' style={{ "font-size": "25px" }}></i>After Visit Summary</td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </div>
                                        </td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

}

