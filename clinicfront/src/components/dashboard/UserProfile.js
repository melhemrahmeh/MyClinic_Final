import styles from './styles.css';
import { Link } from 'react-router-dom'
import React from 'react'

export default function UserProfile() {
    return (<>
        <section id="content">
            <main>
                <div className="head-title">
                    <div className="left">
                        <h1>Melhem Rahmeh</h1>
                        <ul className="breadcrumb">
                            <li>
                                <a>User</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right" />
                            </li>
                            <li>
                                <a className="active">
                                    Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="#" className="btn-download">
                        <Link to={"../bookappointment"}><span className="text" style={{ color: "white" }}>Add Appointment </span></Link>
                    </a>
                </div>

                <div style={{ "width": "50%" }}>
                    <ul className="box-info">
                        <li >
                            <span className="text">
                                <h3>melhem.rahmehh@gmail.com</h3>
                                <h3>+961 71 589 832</h3>
                            </span>
                        </li>
                    </ul>

                </div>


                <div>
                    <ul className="box-info">
                        <li>
                            <i className="bx bxs-calendar-check" />
                            <span className="text">
                                <h3>5</h3>
                                <p>Total Appointments</p>
                            </span>
                        </li>
                        <li>
                            <i className="bx bxs-dollar-circle" />
                            <span className="text">
                                <h3>$100</h3>
                                <p>Amount Due</p>
                            </span>
                        </li>
                    </ul>

                </div>

            </main>

        </section>

    </>
    );
}
