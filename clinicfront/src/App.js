import AboutUs from "./components/Pages/AboutUs.js"
import MainPage from "./components/Pages/MainPage.js"
import Schedule from "./components/schedule/Schedule.js"
import BookAppointment from "./components/Pages/BookAppointment.js"
import OperationsPages from "./components/Pages/OperationsPage.js"
import AfterVisitPage from "./components/Pages/AfterVisitPage.js"
import AddEmployeePage from "./components/Pages/AddEmployeePage.js"
import AddPatientPage from "./components/Pages/AddPatientPage.js"
import TeamPage from "./components/Pages/TeamPage.js"
import Login from "./components/Pages/Login.js"
import Join from "./components/Pages/Join.js"
import Material_Table from "./components/Tables/Material_Table.js"
import PatientTable from "./components/Tables/PatientTable.js"
import Main from "./Dashboard/Main.js"
import React from 'react';


import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"

export default function App() {

  return (
    <div>
      <Routes>
        <Route index path="" element={<MainPage />} />
        <Route path="about/" element={<AboutUs />} />
        <Route path="schedule/" element={<Schedule />} />
        <Route path="bookappointment/" element={<BookAppointment />} />
        <Route path="operations/" element={<OperationsPages />} />
        <Route path="aftervisit/" element={<AfterVisitPage />} />
        <Route path="addemployee/" element={<AddEmployeePage />} />
        <Route path="addpatient/" element={<AddPatientPage />} />
        <Route path="team/" element={<TeamPage />} />
        <Route path="login/" element={<Login />} />
        <Route path="join/" element={<Join />} />
        <Route path="myemployees/" element={<Material_Table />} />
        <Route path="mypatients/" element={<PatientTable />} />
        <Route path="admin/" element={<Main />} />
      </Routes>
    </div>
  );
}