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
import Settings from  "./components/Pages/DashboardPages/Settings.js"

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
import OperationsPages from "./components/Pages/MyClinicPages/OperationsPage.js"
import JoinPatient from "./components/Pages/MyClinicPages/JoinPatient.js"
import JoinWorker from "./components/Pages/MyClinicPages/JoinWorker.js"
import JoinClinic from "./components/Pages/MyClinicPages/JoinDentist.js"
import MainPage from "./components/Pages/MyClinicPages/MainPage.js"
import UserProfilePage from './components/Pages/DashboardPages/UserProfilePage.js'
import MeetTheTeamPage from "./components/Pages/MyClinicPages/MeetTheTeamPage.js"
import ContactUs from './components/myclinic/ContactUs.js'

export default function App() {
  return (
    <div>
      <Routes>
        <Route index path="" element={<MainPage />} />
        <Route path="about/" element={<AboutUs />} />
        <Route path="bookappointment/" element={<BookAppointment />} />
        <Route path="operations/" element={<OperationsPages />} />
        <Route path="team/" element={<TeamPage />} />
        <Route path="login/" element={<Login />} />
        <Route path="joinpatient/" element={<JoinPatient />} />
        <Route path="joinworker/" element={<JoinWorker />} />
        <Route path="joinclinic/" element={<JoinClinic />} />
        <Route path="ourteam/" element={<MeetTheTeamPage />} />
        <Route path="contactus/" element={<ContactUsPage />} />

        
        <Route path="aftervisit/" element={<AfterVisitPage />} />
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