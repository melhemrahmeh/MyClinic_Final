import React from 'react'
import { Routes, Route } from "react-router-dom"

// importing from the dashboard pages
import MyAppointments from "./components/Pages/DashboardPages/MyAppointmentsPage.js"
import AfterVisitPage from "./components/Pages/DashboardPages/AfterVisitPage.js"
import AddEmployeePage from "./components/Pages/DashboardPages/AddEmployeePage.js"
import AddPatientPage from "./components/Pages/DashboardPages/AddPatientPage.js"
import MainDash from "./components/Pages/DashboardPages/MainDash.js"
import EmplTable from "./components/Pages/DashboardPages/MyEmpl.js"
import PatientTable from "./components/Pages/DashboardPages/MyPatients.js"
import Settings from "./components/Pages/DashboardPages/Settings.js"

import AddOperationPage from "./components/Pages/DashboardPages/AddOperationsPage.js"
import OperationsTable from "./components/Pages/DashboardPages/MyOperations.js"

import AddRoomPage from "./components/Pages/DashboardPages/AddRoomPage.js"
import RoomsTable from "./components/Pages/DashboardPages/MyRooms.js"

import MyContactRequests from "./components/Pages/DashboardPages/MyContactRequests.js"

// importing from my clinic pages
import AboutUs from "./components/Pages/MyClinicPages/AboutUs.js"
import TeamPage from "./components/Pages/MyClinicPages/TeamPage.js"
import Login from "./components/Pages/MyClinicPages/Login.js"
import ContactUsPage from "./components/Pages/MyClinicPages/ContactUsPage.js"
import BookAppointment from "./components/Pages/MyClinicPages/BookAppointment.js"
import MainPage from "./components/Pages/MyClinicPages/MainPage.js"
import UserProfilePage from './components/Pages/DashboardPages/UserProfilePage.js'
import { useState, useEffect } from 'react'

import axios from "axios";
import emailjs from 'emailjs-com';


export default function App() {
  const [data, setData] = useState([])
  const WAIT_TIME = 10;

  useEffect(() => {
    const id = setInterval(() => {
      axios
        .get("http://127.0.0.1:8000/api/appointments/")
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, WAIT_TIME);
    return () => clearInterval(id);
  }, [data]);

  for (let index = 0; index < data.length; index++) {
    var date1 = new Date();

    let end = new Date(data[index].date + "T" + data[index].time + "+03:00")
    end.setHours(end.getHours() - 1);
    console.log(end);
    console.log(date1.getTime());
    if (end.getTime() === date1.getTime()) {
      var name = data[index].firstName + " " + data[index].lastName
      var email = data[index].email
      var dateSent = data[index].date
      var timeSent = data[index].time
      const values = {
        name: name,
        email: email,
        date: dateSent,
        time: timeSent,
      };
      emailjs.send("service_cdbgjsl", "template_sqmg6cb", values, 'UbFpX8EG6MxSiWGwd')
        .then(response => {
          console.log('SUCCESS!', response);
        }, error => {
          console.log('FAILED...', error);
      });
    }
  }


  return (
    <div>
      <Routes>
        <Route index path="" element={<MainPage />} />
        <Route path="about/" element={<AboutUs />} />
        <Route path="bookappointment/" element={<BookAppointment />} />
        <Route path="team/" element={<TeamPage />} />
        <Route path="login/" element={<Login />} />
        <Route path="contactus/" element={<ContactUsPage />} />

        <Route path="visit/" element={<AfterVisitPage />} />
        <Route path="addemployee/" element={<AddEmployeePage />} />
        <Route path="addpatient/" element={<AddPatientPage />} />
        <Route path="myemployees/" element={<EmplTable />} />
        <Route path="mypatients/" element={<PatientTable />} />
        <Route path="dashboard/" element={<MainDash />} />
        <Route path="myappointments/" element={<MyAppointments />} />
        <Route path="profile/" element={<Settings />} />
        <Route path="user/" element={<UserProfilePage />} />
        <Route path="addoperation/" element={<AddOperationPage />} />
        <Route path="myoperations/" element={<OperationsTable />} />
        <Route path="mycontactrequests/" element={<MyContactRequests />} />
        <Route path="addroom/" element={<AddRoomPage />} />
        <Route path="myrooms/" element={<RoomsTable />} />
      </Routes>
    </div>
  );
}