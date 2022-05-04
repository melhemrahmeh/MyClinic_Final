import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import emailjs from 'emailjs-com';

toast.configure()

export default function AddEmployee() {

    const [firstName, setfirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [gender, setgender] = useState(null);
    const [E_firstName, setE_firstName] = useState(null);
    const [E_lastName, setE_lastName] = useState(null);
    const [E_contactNumber, setE_contactNumber] = useState(null);
    const [salary, setsalary] = useState(null);
    const [employment, setemployment] = useState(null);
    const [start_date, setstart_date] = useState(null);
    const [position, setposition] = useState(null);
    const [PhoneNumber, setPhoneNumber] = useState(null);

    //uuidv4()
    const password = uuidv4().substring(0, 8)

    const notify = () => toast.success(`${position} ${firstName + " " + lastName} Added!`);

    const addNewEmployee = async (e) => {
        e.preventDefault();
        const form = {
            firstName,
            lastName,
            email,
            gender,
            PhoneNumber,
            E_firstName,
            E_lastName,
            E_contactNumber,
            salary,
            employment,
            start_date,
            position,
            password
        };
        console.log(form);
        await axios({
            method: "POST",
            url: "http://127.0.0.1:8000/api/employees/create/",
            data: form,
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const handleSubmit = (e) => {
        const values = {
            name: firstName + " " + lastName,
            email: email,
            position: position,
            password: password,
        };

        e.preventDefault();

        emailjs.send("service_cdbgjsl", "template_6ko26ys", values, 'UbFpX8EG6MxSiWGwd')
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
                            <h1 className="mb-4">New Employee Enrollment</h1>
                            <br />
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Employee First Name</label>
                                        <input type="text" className="form-control bg-light border-0" placeholder="First Name" name="firstname"
                                            value={firstName}
                                            onChange={(e) => setfirstName(e.target.value)}
                                            style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Employee Last Name</label>
                                        <input type="text" className="form-control bg-light border-0" placeholder="Last Name"
                                            name="lastname"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Employee Email</label>
                                        <input type="email" className="form-control bg-light border-0" placeholder="Email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="123-45-678"
                                            value={PhoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                            className="form-control bg-light border-0"
                                            style={{ height: "55px" }}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="myfile"> Gender</label>
                                        <select
                                            className="form-select bg-light border-0"
                                            name="gender"
                                            value={gender}
                                            onChange={(e) => setgender(e.target.value)}
                                            style={{ height: "55px" }}
                                        >
                                            <option value="FEMALE"> Female </option>
                                            <option value="MALE"> Male </option>
                                            <option value="OTHER" selected> Prefer not to Say </option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                            <br /><br /><br /><br />


                            <h2 className="mb-4">In Case of Emergency</h2>
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Emergency Contact First Name</label>
                                        <input
                                            type="text"
                                            className="form-control bg-light border-0"
                                            placeholder="First Name"
                                            value={E_firstName}
                                            onChange={(e) => setE_firstName(e.target.value)}
                                            style={{ height: "55px" }}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Emergency Contact Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control bg-light border-0"
                                            placeholder="Last Name"
                                            value={E_lastName}
                                            onChange={(e) => setE_lastName(e.target.value)}
                                            style={{ height: "55px" }}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Contact Number</label>
                                        <input
                                            type="tel"
                                            placeholder="123-45-678"
                                            value={E_contactNumber}
                                            onChange={(e) => setE_contactNumber(e.target.value)}
                                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                            className="form-control bg-light border-0"
                                            style={{ height: "55px" }}
                                        />
                                    </div>
                                </div>
                            </form>
                            <br /><br />
                            <h2 className="mb-4">Position Information</h2>
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Position Type</label>
                                        <select className="form-select bg-light border-0" style={{ height: '55px' }} name="position"
                                            value={position}
                                            onChange={(e) => setposition(e.target.value)}
                                        >
                                            <option selected>Select Position</option>
                                            <option value="Administartor"> Administrator </option>
                                            <option value="Dentist_Assistant"> Dentist Assistant </option>
                                            <option value="Nurse">  Nurse </option>
                                            <option value="Secretary">  Secretary </option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Employment Type</label>
                                        <select className="form-select bg-light border-0" name="employment_type"
                                            value={employment}
                                            onChange={(e) => setemployment(e.target.value)}
                                            style={{ height: '55px' }}>
                                            <option selected>Select Employment Type</option>
                                            <option value="Full Time"> Full Time </option>
                                            <option value="Part_Time"> Part Time </option>
                                            <option value="Contract">  Contract </option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Salary</label>
                                        <input type="text" className="form-control bg-light border-0" placeholder="Salary" name="salary"
                                            value={salary}
                                            onChange={(e) => setsalary(e.target.value)}
                                            style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <label for="date"> Start Date</label>
                                            <input type="date" className="form-control bg-light border-0 datetimepicker-input" name="start_date"
                                                value={start_date}
                                                onChange={(e) => setstart_date(e.target.value)}
                                                data-target="#date" data-toggle="datetimepicker" style={{ height: '55px' }} />
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <br /><br />
                            <div className="col-12" style={{ "width": "80%", "margin": "auto" }}>
                                <br /><br /><br />
                                <button className="btn btn-primary w-100 py-3" type="submit" onClick={(e) => { addNewEmployee(e); notify(); handleSubmit(e) }}>Add Employee</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}