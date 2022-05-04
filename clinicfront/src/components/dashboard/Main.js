import styles from './styles.css';
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Main(props) {

    const [data, setData] = useState([]);

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

    var totalBalanceInt = 0.0
    var pendingBalanceint = 0.0

    for (let index = 0; index < data.length; index++) {
        totalBalanceInt += parseFloat(data[index].totalBalance);
        pendingBalanceint += parseFloat(data[index].pendingBalance);
    }


    var is_dentist = props.is_dentist;
    var is_admin = props.is_admin;
    var is_nurse = props.is_nurse;
    var is_secretary = props.is_secretary;

    var totalBalance = <></>
    if (!is_admin && !is_nurse) {
        totalBalance = <li>
            <i className="bx bxs-dollar-circle" />
            <span className="text">
                <h3>${totalBalanceInt.toFixed(2)}</h3>
                <p>Total Balance</p>
            </span>
        </li>
    }
    return (<>
        <section id="content">
            {/* <nav>
                    <a href="javascript:void(0);" data-target="basicSidebar" data-placement="left" data-position="slidepush" is-open="true" is-open-width="1000" class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect pmd-sidebar-toggle"><i className="bx bx-menu" /></a>
                    <a class="navbar-brand nav-link" href="#">
                        Categories
                    </a>
                    <form action="#">
                        <div className="form-input">
                            <input type="search" placeholder="Search..." />
                            <button type="submit" className="search-btn">
                                <i className="bx bx-search" />
                            </button>
                        </div>
                    </form>
                    <input type="checkbox" id="switch-mode" hidden="" />
                    <label htmlFor="switch-mode" className="switch-mode" />
                    <a href="#" className="notification">
                        <i className="bx bxs-bell" />
                        <span className="num">8</span>
                    </a>
                    <a href="#" className="profile">
                        <img src="assets/dashboard/img/people.png" />
                    </a>
                </nav>
                <br /> */}

            <main>
                <div className="head-title">
                    <div className="left">
                        <h1>Dashboard</h1>
                        <ul className="breadcrumb">
                            <li>
                                <a href="#">Dashboard</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right" />
                            </li>
                            <li>
                                <a className="active" href="#">
                                    Home
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <a href="#" className="btn-download">
                        <Link to={"../myemployees"}><span className="text" style={{ color: "white" }}>Add Appointment </span></Link>
                    </a> */}
                </div>
                <div>
                    <ul className="box-info">
                        <li>
                            <i className="bx bxs-calendar-check" />
                            <span className="text">
                                <h3>${pendingBalanceint.toFixed(2)}</h3>
                                <p>Pending Balance</p>
                            </span>
                        </li>
                        <li>
                            <i className="bx bxs-group" />
                            <span className="text">
                                <h3>{data.length}</h3>
                                <p>Number of Patients</p>
                            </span>
                        </li>
                        {totalBalance}
                    </ul>

                </div>
                <br />


            </main>

        </section>

    </>
    );
}
