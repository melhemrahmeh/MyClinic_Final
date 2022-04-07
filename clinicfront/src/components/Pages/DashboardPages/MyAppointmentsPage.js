import SideBar from "../../dashboard/Bar/Sidebar.js";// import Navbar from "../../dashboard/Navbar.js";
import Schedule from "../../schedule/Schedule.js"
import ScrollButton from "../../Scrollbutton/ScrollButton.js"
import React from 'react';

export default function MyAppointments() {
    return (
        <div>
            {/* <NavBar/> */}
            <SideBar is_dentist={true} is_admin={false} is_nurse={false} is_secretary={false} />
            <Schedule />
            <ScrollButton />
        </div>
    );
}