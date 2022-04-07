import SideBar from "../../dashboard/Bar/Sidebar.js";// import Navbar from "../../dashboard/Navbar.js";
import AddPatient from "../../forms/AddPatient.js"
import ScrollButton from "../../Scrollbutton/ScrollButton.js"
import React from 'react'


export default function AddPatientPage() {

    return (
        <div>
            {/* <NavBar/> */}
            <SideBar is_dentist={true} is_admin={false} is_nurse={false} is_secretary={false} />
            <AddPatient />
            <ScrollButton />
        </div>
    );
}