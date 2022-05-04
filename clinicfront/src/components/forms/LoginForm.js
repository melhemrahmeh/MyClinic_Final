import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState("")
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/employees/")
            .then((res) => {
                setData(res.data);
                console.log("Result:", res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    var button = <button className="btn btn-primary w-100 py-3" type="submit">Login</button>

    console.log(data);
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if (email == element.email) {
            button = <Link to={"/dashboard"} ><button className="btn btn-primary w-100 py-3" type="submit">Login</button></Link>
            break
        }
    }


    return (
        <div className="container-fluid bg-primary my-5 py-5">
            <div className="container py-5" style={{ "width": "100%", "alignItems": "center" }}>
                <div className="row gx-5" style={{ "margin": "auto" }}>
                    <div className="col-lg-6" style={{ "width": "60%", "margin": "auto" }}>
                        <div className="bg-white text-center rounded p-5">
                            <h1 className="mb-4">Login</h1>
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6" style={{ "width": "70%", "margin": "auto" }}>
                                        <br />
                                        <label for="date"> Email</label>
                                        <input type="email" className="form-control bg-light border-0" placeholder="domain@example.com" style={{ height: '55px', "margin": "auto" }}
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6" >
                                        <br />
                                    </div>
                                    <div className="col-12 col-sm-6" style={{ "width": "70%", "margin": "auto" }}>
                                        <label for="date"> Password</label>
                                        <input type="password" className="form-control bg-light border-0" placeholder="Password" style={{ height: '55px' }}
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-12" style={{ "width": "70%", "margin": "auto" }}>
                                        <br /><br />
                                        {button}
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