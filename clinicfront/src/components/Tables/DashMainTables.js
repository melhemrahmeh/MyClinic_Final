import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PopupAppointment from "../forms/PopupAppointment";
import axios from "axios";
import { useState, useEffect } from 'react';


export default function DashMainTables(props) {


    let navigate = useNavigate();
    const [patient, setPatient] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [operation, setOperation] = useState(1);

    const addNewAppointment = async () => {
        const form = {
            date,
            time,
            operation
        };
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
    const [operations, setOperations] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/operations/")
            .then((res) => {
                setOperations(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const [visits, setVisits] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/patients/visits/")
            .then((res) => {
                setVisits(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    const [patients, setPatients] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/patients/")
            .then((res) => {
                setPatients(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    var patientsNames = []
    var patientsNumbers = []

    for (var i = 0; i < visits.length; i++) {
        for (var j = 0; j < patients.length; j++) {
            if (visits[i].patient === patients[j]._id) {
                patientsNames.push(patients[j].firstName + " " + patients[j].lastName)
                patientsNumbers.push(patients[j].PhoneNumber)
            }
        }
    }

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/appointments/")
            .then((res) => {
                setAppointments(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    var operationsName = []
    var operationsPrice = []

    for (var i = 0; i < appointments.length; i++) {
        for (var j = 0; j < operations.length; j++) {
            if (appointments[i].operation === operations[j]._id) {
                operationsName.push(operations[j].title)
                operationsPrice.push(operations[j].cost)
            }
        }
    }


    var is_admin = props.is_admin;
    const [buttonPopup, setButtonPopup] = useState(false);



    function deleteRow(id, e) {
        axios.delete(`http://127.0.0.1:8000/api/appointments/delete/${id}/`)
            .then(res => {
                console.log(res);
                console.log(res.data);

                const posts = appointments.filter(item => item.id !== id);
                setAppointments(posts);
            })
    }


    var operationsVisitName = []

    for (var i = 0; i < visits.length; i++) {
        for (var j = 0; j < operations.length; j++) {
            if (visits[i].operation === operations[j]._id) {
                operationsVisitName.push(operations[j].title)
            }
        }
    }




    if (is_admin) { return <></>; }
    return (
        <div style={{ "marginLeft": "100px" }}>
            <br />
            <div class="container">
                <div class="panel-heading">
                    <h1 style={{ "margin": "auto" }}>Upcoming Visits <button type="button" class="btn btn-info" onClick={() => setButtonPopup(true)} style={{ "float": "right" }}>Add Appointment  </button> </h1>
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
                                                        <label for="date"> Select Patient</label>
                                                        <select
                                                            className="form-select bg-light border-0"
                                                            name="patient"
                                                            value={patient}
                                                            onChange={(e) => setPatient(e.target.value)}
                                                            style={{ height: "55px" }}
                                                        >
                                                            {operations.map((op) => (<option value={op._id}>{op.title} {op.cost}$ </option>))}
                                                        </select>
                                                    </div>

                                                    <div className="col-12 col-sm-6">
                                                        <label for="date"> Select Operation</label>
                                                        <select
                                                            className="form-select bg-light border-0"
                                                            name="operation"
                                                            value={operation}
                                                            onChange={(e) => setOperation(e.target.value)}
                                                            style={{ height: "55px" }}
                                                        >
                                                            {operations.map((op) => (<option value={op._id}>{op.title} {op.cost}$ </option>))}
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
                    </PopupAppointment>
                    <br />
                </div>
                <div class="panel-body table-responsive-sm">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th style={{ 'color': "#535356" }}>Name</th>
                                <th style={{ 'color': "#535356" }}>Email</th>
                                <th style={{ 'color': "#535356" }}>Date and Time</th>
                                <th style={{ 'color': "#535356" }}>Operation</th>
                                <th style={{ 'color': "#535356" }}>Expected Fee</th>
                                <th style={{ 'color': "#535356" }}>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {appointments.map((appt, index) => (
                                <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                    <td style={{ 'color': "#5D5C63" }}>{appt.firstName + " " + appt.lastName}</td>
                                    <td style={{ 'color': "#5D5C63" }}>{appt.email}</td>
                                    <td style={{ 'color': "#5D5C63" }}>{appt.date + " at " + appt.time}</td>
                                    <td style={{ 'color': "#5D5C63" }}>{operationsName[index]}</td>
                                    <td style={{ 'color': "#5D5C63" }}>{operationsPrice[index]} $</td>
                                    <td style={{ 'color': "#5D5C63" }}><button type="button" class="btn btn-danger" onClick={(e) => deleteRow(appt._id, e)} >Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br /><br />
                </div>
            </div>
            <div class="container">
                <div class="panel-heading">
                    <h1 style={{ "margin": "auto" }}>Latest Visits <Link to={"/visit"}> <button type="button" class="btn btn-info" style={{ "float": "right" }}>Send Visit Summary</button> </Link></h1>

                    <br />
                </div>
                <div class="panel-body table-responsive-sm">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th style={{ 'color': "#535356" }}>Name</th>
                                <th style={{ 'color': "#535356" }}>Phone Number</th>
                                <th style={{ 'color': "#535356" }}>Date and Time</th>
                                <th style={{ 'color': "#535356" }}>Operations</th>
                                <th style={{ 'color': "#535356" }}>Paid</th>
                                <th style={{ 'color': "#535356" }}>Pending</th>
                            </tr>
                        </thead>

                        <tbody>
                            {visits.map((visit, index) => (
                                <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                    <td style={{ 'color': "#5D5C63" }}>{patientsNames[index]}</td>
                                    <td style={{ 'color': "#5D5C63" }}>{patientsNumbers[index]}</td>
                                    <td style={{ 'color': "#5D5C63" }}>{visit.visitdate}</td>
                                    <td style={{ 'color': "#5D5C63" }}>{operationsVisitName[index]}</td>
                                    <td style={{ 'color': "#5D5C63" }}>0$</td>
                                    <td style={{ 'color': "#5D5C63" }}>0$</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br /><br />
                </div>
            </div>
        </div>


    );
}
