import PopupAppointment from "../forms/PopupAppointment";
import React, { useEffect, useState } from "react";
import PopupPatient from "../forms/PopupPatient";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

export default function PatientTable() {
    const [data, setData] = useState([]);

    const [buttonPopup, setButtonPopup] = useState(false);
    const [EditPopup, setEditPopup] = useState(false);

    const WAIT_TIME = 200;

    //http://127.0.0.1:8000/api/patients/visits/3/

    useEffect(() => {
        const id = setInterval(() => {
            axios
                .get("http://127.0.0.1:8000/api/patients/")
                .then((res) => {
                    setData(res.data);
                    console.log("Result:", data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, WAIT_TIME);
        return () => clearInterval(id);
    }, [data]);

    function getPatientVisit(patient) {
        const [visits, setVisits] = useState([]);
        useEffect(() => {
            axios
                .get(`http://127.0.0.1:8000/api/patients/visits/${patient}/`)
                .then((res) => {
                    setVisits(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, []);
        return visits
    }


    function deleteRow(id, e) {
        axios.delete(`http://127.0.0.1:8000/api/patients/delete/${id}/`)
            .then(res => {
                console.log(res);
                console.log(res.data);

                const posts = data.filter(item => item.id !== id);
                setData(posts);
            })
    }
    toast.configure()

    const notify = () => toast.success(`Patient Updated!`);
    const notify2 = () => toast.success(`Appointment Added!`);

    const [pendingBalance, setpendingBalance] = useState("");
    const [totalBalance, settotalBalance] = useState("");

    function updateFinances(id, firstName, lastName, PhoneNumber, email, birthDate, address, gender, E_firstName, E_lastName, E_contactNumber, e) {
        e.preventDefault();
        const form = {
            firstName,
            lastName,
            PhoneNumber,
            email,
            birthDate,
            address,
            gender,
            E_firstName,
            E_lastName,
            E_contactNumber,
            totalBalance,
            pendingBalance
        };
        console.log(form);
        axios({
            method: "PUT",
            url: `http://127.0.0.1:8000/api/patients/update/${id}/`,
            data: form,
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }


    function getPatientVisit(id) {
        axios
            .get(`http://127.0.0.1:8000/api/patients/visits/${id}/`)
            .then((res) => {
                console.log("Result:", res.data);
                return (res.data.length);
            })
            .catch((error) => {
                console.log(error);
                return "error"
            });
    }

    const [operations, setOperations] = useState("");

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


    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [operation, setOperation] = useState(1);

    const addNewAppointment = async (firstName, lastName, email, e) => {
        e.preventDefault()
        const form = {
            firstName,
            lastName,
            email,
            date,
            time,
            operation
        };
        console.log(form);
        await axios({
            method: "POST",
            url: "http://127.0.0.1:8000/api/appointments/create/",
            data: form,
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
        
        
        var name = firstName + " " + lastName
        var subject = "Appointment Booked"
        var message = "Appointment Booked for " + name + " on " + date + " at " + time
        const values = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };
        emailjs.send("service_cdbgjsl", "template_kpdebor", values, 'UbFpX8EG6MxSiWGwd')
            .then(response => {
                console.log('SUCCESS!', response);
            }, error => {
                console.log('FAILED...', error);
            });

    };
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
                                <th style={{ 'color': "#535356" }}>Edit Finances</th>
                                <th style={{ 'color': "#535356" }}>Delete</th>

                            </tr>
                        </thead>

                        <tbody>
                            {data.map((patient, index) => (
                                <>
                                    <tr data-toggle="collapse" data-target={`#demo${index}`} class="accordion-toggle">
                                        <td style={{ 'color': "#5D5C63" }}><pre>{patient.firstName} {patient.lastName}</pre></td>
                                        <td style={{ 'color': "#5D5C63" }}>{patient.email}</td>
                                        <td style={{ 'color': "#5D5C63" }}>{patient.PhoneNumber}</td>
                                        <td style={{ 'color': "#5D5C63" }}>{patient.totalBalance - patient.pendingBalance}$</td>
                                        <td style={{ 'color': "#5D5C63" }}><button type="button" class="btn btn-info" onClick={() => setEditPopup(true)}>Edit Finances</button> </td>
                                        <td style={{ 'color': "#5D5C63" }}><button type="button" class="btn btn-danger" onClick={(e) => deleteRow(patient._id, e)}>Delete</button></td>

                                        <br />
                                        <PopupPatient trigger={EditPopup} setTrigger={setEditPopup}>
                                            <div className="container-fluid bg-primary my-5 py-5">
                                                <div className="col-lg-6" style={{ "width": "100%", "margin": "auto" }}>
                                                    <div className="bg-white text-center rounded p-5">
                                                        <h1 className="mb-4">Edit Patient Finances</h1>
                                                        <br />
                                                        <form>
                                                            <div className="row g-3">
                                                                <div className="col-12 col-sm-6">
                                                                    <label for="date">Total Balance</label>
                                                                    <input type="number" className="form-control bg-light border-0" style={{ height: '55px' }}
                                                                        value={totalBalance}
                                                                        name="totalBalance"
                                                                        onChange={(e) => settotalBalance(e.target.value)}
                                                                    />
                                                                </div>
                                                                <div className="col-12 col-sm-6">
                                                                    <label for="date">Pending Balance</label>
                                                                    <input type="number" className="form-control bg-light border-0" step="1" min="0" max="1000" style={{ height: '55px' }}
                                                                        placeholder={`${patient.pendingBalance}`} 
                                                                        value={pendingBalance}
                                                                        name="pendingBalance"
                                                                        onChange={(e) => setpendingBalance(e.target.value)}
                                                                    />
                                                                </div>
                                                                <div className="col-12" >
                                                                    <button className="btn btn-primary w-100 py-3" type="submit" onClick={(e) => { updateFinances(patient._id, patient.firstName, patient.lastName, patient.PhoneNumber, patient.email, patient.birthDate, patient.address, patient.gender, patient.E_firstName, patient.E_lastName, patient.E_contactNumber, e); notify(e) }}>Submit</button>
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
                                            <div class="accordian-body collapse" id={`demo${index}`}>

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
                                                                                    <select
                                                                                        className="form-select bg-light border-0"
                                                                                        name="operation"
                                                                                        value={operation}
                                                                                        onChange={(e) => setOperation(e.target.value)}
                                                                                        style={{ height: "55px" }}
                                                                                    >
                                                                                        <option selected> Select Operation </option>
                                                                                        {operations.map((op) => (<option value={op._id}>{op.title} {op.cost}$ </option>))}
                                                                                    </select>
                                                                                </div>
                                                                                <div className="col-12 col-sm-6">
                                                                                    <div className="date" id="date" data-target-input="nearest">
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
                                                                                        <input
                                                                                            name="time"
                                                                                            type="time"
                                                                                            value={time}
                                                                                            onChange={(e) => setTime(e.target.value)}
                                                                                            className="form-control bg-light border-0 datetimepicker-input"
                                                                                            style={{ height: "55px" }}
                                                                                            min="09:00"
                                                                                            max="18:00"
                                                                                            step="1800"
                                                                                            required
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-12 col-sm-6">
                                                                                </div>
                                                                                <div className="col-12" >
                                                                                    <button
                                                                                        className="btn btn-primary w-100 py-3"
                                                                                        type="submit"
                                                                                        onClick={(e) => { addNewAppointment(patient.firstName , patient.lastName , patient.email , e); notify2(); }}
                                                                                    >Add Appointment</button>
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
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {/* {getPatientVisit(patient._id).map((patient, index) => (
                                                            <tr data-toggle="collapse" class="accordion-toggle">
                                                                <td style={{ 'color': "#5D5D60" }}>2016/09/27</td>
                                                                <td style={{ 'color': "#5D5D60" }}>Root Canal</td>
                                                                <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                                <td style={{ 'color': "#5D5D60" }}> 100$ </td>
                                                                <td style={{ 'color': "#5D5D60" }}> 0$</td>
                                                            </tr>
                                                        ))} */}
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

