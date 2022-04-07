import styles from './styles.css';
import { Link } from 'react-router-dom'
import React from 'react'

export default function Main(props) {

    var is_dentist = props.is_dentist;
    var is_admin = props.is_admin;
    var is_nurse = props.is_nurse;
    var is_secretary = props.is_secretary;

    var totalBalance = <></>
    if (!is_admin && !is_nurse ) { 
        totalBalance = <li>
            <i className="bx bxs-dollar-circle" />
            <span className="text">
                <h3>$2543</h3>
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
                    <a href="#" className="btn-download">
                        <Link to={"../bookappointment"}><span className="text" style={{ color: "white" }}>Add Appointment </span></Link>
                    </a>
                </div>
                <div>
                    <ul className="box-info">
                        <li>
                            <i className="bx bxs-calendar-check" />
                            <span className="text">
                                <h3>1020</h3>
                                <p>New Order</p>
                            </span>
                        </li>
                        <li>
                            <i className="bx bxs-group" />
                            <span className="text">
                                <h3>2834</h3>
                                <p>All Patient</p>
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
