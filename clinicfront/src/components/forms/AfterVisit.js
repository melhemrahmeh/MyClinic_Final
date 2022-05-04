import React, { useState, useEffect } from "react";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

toast.configure()

export default function AfterVisit() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/patients/")
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


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

    const [patient, setPatient] = useState(1);
    const [visitdate, setVisitDate] = useState(1);
    const [operation, setOperation] = useState("");
    const [medicaments, setMedicaments] = useState("");
    const [notes, setNotes] = useState("");
    const [file, setFile] = useState("");
    const [discount, setDiscount] = useState("");
    const notify = () => toast.success(`Visit Summary sent!`);

    const addVisit = async (e) => {
        e.preventDefault();
        const form = {
            patient,
            visitdate,
            operation,
            medicaments,
            notes,
            file
        };
        //console.log(form);
        await axios({
            method: "POST",
            url: "http://127.0.0.1:8000/api/visits/create/",
            data: form,
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };


    // const [patient, setPatient] = useState(1);
    // const [visitdate, setVisitDate] = useState(1);
    // const [operation, setOperation] = useState("");
    // const [medicaments, setMedicaments] = useState("");
    // const [notes, setNotes] = useState("");
    // const [file, setFile] = useState("");
    // const [discount, setDiscount] = useState("");
    // const notify = () => toast.success(`Visit Summary sent!`);

    // const addVisit = async (e) => {
    //     e.preventDefault();
    //     const form = {
    //         patient,
    //         visitdate,
    //         operation,
    //         medicaments,
    //         notes,
    //         file
    //     };
    //     //console.log(form);
    //     await axios({
    //         method: "POST",
    //         url: "http://127.0.0.1:8000/api/visits/create/",
    //         data: form,
    //     })
    //         .then((response) => {
    //             console.log(response.data);
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // };



    // const [title, setTitle] = useState(null);
    // const [cost, setCost] = useState(null);

    // const updateJournal = async (e) => {
    //     e.preventDefault();
    //     const form = {
    //         title,
    //         cost,
    //         description,
    //         room,
    //     };
    //     console.log(form);
    //     await axios({
    //         method: "POST",
    //         url: "http://127.0.0.1:8000/api/operations/create/",
    //         data: form,
    //     })
    //         .then((response) => {
    //             console.log(response.data);
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // };



    const handleSubmit = (e) => {
        var patientData = []
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            if (parseInt(element._id) === parseInt(patient)) {
                patientData = element
            }
        }

        var operationName = []
        for (let index = 0; index < operations.length; index++) {
            const element = operations[index];
            if (parseInt(element._id) === parseInt(operation)) {
                operationName = element.title
            }
        }

        const values = {
            name: patientData.firstName + " " + patientData.lastName,
            email: patientData.email,
            visitdate: visitdate,
            operation: operationName,
            medicaments: medicaments,
            notes: notes,
            visitcost: 0,
            pending: 0,
        };

        e.preventDefault();

        emailjs.send("service_cdbgjsl", "template_q3tckkd", values, 'UbFpX8EG6MxSiWGwd')
            .then(response => {
                console.log('SUCCESS!', response);
            }, error => {
                console.log('FAILED...', error);
            });
    }
    return (
        <div className="container-fluid bg-primary my-5 py-5">
            <div className="container py-5" style={{ "width": "100%", "alignItems": "center" }}>
                <div className="row gx-5" style={{ "margin": "auto" }}>
                    <div className="col-lg-6" style={{ "width": "70%", "margin": "auto" }}>
                        <div className="bg-white text-center rounded p-5">
                            <h1 className="mb-4">Visit Summary</h1>
                            <br />
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <label for="date">Patient</label>
                                        <select
                                            className="form-select bg-light border-0"
                                            name="patient"
                                            value={patient}
                                            onChange={(e) => setPatient(e.target.value)}
                                            style={{ height: "55px" }}
                                        >
                                            <option selected> Select Patient </option>
                                            {data.map((patient) => (<option value={patient._id}>{patient.firstName} {patient.lastName} </option>))}
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <label for="date"> Visit Date</label>
                                            <input
                                                type="date"
                                                className="form-control bg-light border-0 datetimepicker-input"
                                                data-target="#date"
                                                data-toggle="datetimepicker"
                                                name="visitdate"
                                                value={visitdate}
                                                onChange={(e) => setVisitDate(e.target.value)}
                                                style={{ height: '55px' }} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <br />
                                        <label for="date">Operation</label>
                                        <select
                                            className="form-select bg-light border-0"
                                            name="operation"
                                            value={operation}
                                            onChange={(e) => setOperation(e.target.value)}
                                            style={{ height: "55px" }}
                                        >
                                            <option selected> Select Operation </option>
                                            {operations.map((operation) => (<option value={operation._id}>{operation.title} {operation.cost}$</option>))}
                                        </select>
                                    </div>

                                    <div className="col-12 col-sm-6">
                                        <br />
                                        <div className="date" id="date" data-target-input="nearest">
                                            <label for="quantity">Discount (between 0% and 100%):</label>
                                            <input className="form-control bg-light border-0" type="number" min="0" max="100" placeholder="0"
                                                name="discount"
                                                value={discount}
                                                onChange={(e) => setDiscount(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6">
                                        <br />
                                        <label for="date">Medicaments List</label>
                                        <textarea
                                            rows="4"
                                            cols="80"
                                            className="form-control bg-light border-0"
                                            placeholder='Medicaments List'
                                            name="medicaments"
                                            value={medicaments}
                                            onChange={(e) => setMedicaments(e.target.value)}
                                        >
                                        </textarea>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <br />
                                        <label for="date">Notes</label>
                                        <textarea
                                            rows="4"
                                            cols="80"
                                            className="form-control bg-light border-0"
                                            placeholder='Notes'
                                            name="notes"
                                            value={notes}
                                            onChange={(e) => setNotes(e.target.value)}
                                        >
                                        </textarea>
                                    </div>

                                    <div >
                                        <br />
                                        <label for="myfile"> Please upload files, if needed</label>
                                        <input
                                            type="file"
                                            className="form-control bg-light border-0"
                                            name="file"
                                            value={file}
                                            onChange={(e) => setFile(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-12" style={{ "width": "70%", "margin": "auto" }}>
                                    <br /><br />
                                    <button
                                        className="btn btn-primary w-100 py-3"
                                        type="submit"
                                        onClick={(e) => { addVisit(e); notify(); handleSubmit(e) }}
                                    >
                                        Send Visit Summary
                                    </button>
                                    <ToastContainer
                                        autoClose={4000}
                                        hideProgressBar={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                    />
                                </div>
                            </form>
                        </div>
                    </div >
                </div >
            </div >
        </div >
    );
}
