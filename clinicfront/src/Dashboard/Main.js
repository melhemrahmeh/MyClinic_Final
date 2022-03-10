import styles from './styles.css';
import { Link } from 'react-router-dom'


export default function Main() {
    
    return (
        <>
            <section id="sidebar">
                <a href="#" className="brand">
                    <i class='bx bx-home-smile' ></i>
                    <span className="text"> My Clinic</span>
                </a>
                <ul className="sideMenu top">
                    <li className="active">
                        <a href="#">
                            <i className="bx bxs-dashboard" />
                            <span className="text">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bxs-calendar" />
                            <Link to={"../Schedule"}><span className="text" >My Appointments </span></Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bxs-bar-chart-alt-2" />
                            <Link to={"../mypatients"}><span className="text" >My Patients </span></Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bxs-add-to-queue" />
                            <Link to={"../addpatient"}><span className="text" >Add Patient </span></Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bxs-doughnut-chart" />
                            <Link to={"../myemployees"}><span className="text" >My Employees</span></Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bxs-file-plus" />
                            <Link to={"../addemployee"}><span className="text" >Add Employees</span></Link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bx bx-plus-medical"></i>
                            <Link to={"../aftervisit"}><span className="text" >After Visit Summary</span></Link>
                        </a>
                    </li>
                </ul>
                <ul className="sideMenu">
                    <li>
                        <a href="#">
                            <i className="bx bxs-cog" />
                            <span className="text">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="logout">
                            <i className="bx bxs-log-out-circle" />
                            <Link to={"../"}><span className="text" >Logout</span></Link>
                        </a>
                    </li>
                </ul>
            </section>

            <section id="content">
                <nav>
                    <i className="bx bx-menu" />
                    <a href="#" className="nav-link">
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
                            <li>
                                <i className="bx bxs-dollar-circle" />
                                <span className="text">
                                    <h3>$2543</h3>
                                    <p>Total Balance</p>
                                </span>
                            </li>
                        </ul>

                    </div>
                    <br />
                    <div className="table-data">
                        <div className="order">
                            <div className="head">
                                <h3>Recent Appointments</h3>
                                <i className="bx bx-filter" />
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Date and Time</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src="assets/dashboard/img/people.png" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2020</td>
                                        <td>
                                            <span className="status completed">Completed</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="assets/dashboard/img/people.png" />
                                            <p>Melhem Rahmeh</p>
                                        </td>
                                        <td>18-11-2021</td>
                                        <td>
                                            <span className="status pending">Pending</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="assets/dashboard/img/people.png" />
                                            <p>Nathalie Nassar</p>
                                        </td>
                                        <td>19-05-2022</td>
                                        <td>
                                            <span className="status process">Process</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="assets/dashboard/img/people.png" />
                                            <p>Mohammad Lahib</p>
                                        </td>
                                        <td>01-07-2021</td>
                                        <td>
                                            <span className="status pending">Pending</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="assets/dashboard/img/people.png" />
                                            <p>Israa Diab</p>
                                        </td>
                                        <td>11-08-2022</td>
                                        <td>
                                            <span className="status completed">Completed</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </main>
            </section>
        </>
    );
}