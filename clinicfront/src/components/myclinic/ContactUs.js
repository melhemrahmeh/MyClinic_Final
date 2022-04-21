import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ContactUs() {

    let navigate = useNavigate();
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [subject, setSubject] = useState(null);
    const [message, setMessage] = useState(null);
    const [PhoneNumber, setPhoneNumber] = useState(null);


    const addContact = async () => {
        const form = {
            name,
            email,
            subject,
            message,
            PhoneNumber
        };
        console.log(form);
        await axios({
            method: "POST",
            url: "http://127.0.0.1:8000/api/forms/create/",
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
            <div className="container py-5" style={{ "width": "100%", "alignItems": "center" }}>
                <div className="row gx-5" style={{ "margin": "auto" }}>
                    <div className="col-lg-6" style={{ "margin": "auto" }}>
                        <div className="bg-white text-center rounded p-5">
                            <h1 className="mb-4">Contact Us</h1>
                            <h5>Please let us know your query</h5>
                            <br />
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Name</label>
                                        <input type="text"
                                            className="form-control bg-light border-0"
                                            placeholder="Your Full Name"
                                            name="name"
                                            value={name}
                                            //   onChange={handleChange}
                                            onChange={(e) => setName(e.target.value)}
                                            style={{ height: "55px" }}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Email</label>
                                        <input type="email"
                                            className="form-control bg-light border-0"
                                            placeholder="Your Email"
                                            name="email"
                                            value={email}
                                            //   onChange={handleChange}
                                            onChange={(e) => setEmail(e.target.value)}
                                            style={{ height: "55px" }}
                                        />
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
                                        <label for="date"> Subject</label>
                                        <input type="text"
                                            className="form-control bg-light border-0"
                                            placeholder="The reason"
                                            name="subject"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            style={{ height: "55px" }}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6" style={{
                                        "width": "100%"
                                    }}>
                                        <br />
                                        <label for="date"> Message</label>
                                        <textarea rows="4" cols="80" className="form-control bg-light border-0" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message please!">
                                        </textarea>

                                    </div>
                                    <div className="col-12">
                                        <button
                                            className="btn btn-primary w-100 py-3"
                                            type="submit"
                                            onClick={addContact}
                                        >
                                            Send
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
