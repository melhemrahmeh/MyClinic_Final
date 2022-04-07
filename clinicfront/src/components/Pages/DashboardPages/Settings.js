import SideBar from "../../dashboard/Bar/Sidebar.js";// import Navbar from "../../dashboard/Navbar.js";
import Settings from "../../dashboard/Profile/profile.js"
import ScrollButton from "../../Scrollbutton/ScrollButton.js"
import React from 'react';

export default function MyAppointments() {
    return (
        <div>
            <SideBar is_dentist={true} is_admin={false} is_nurse={false} is_secretary={false} />
            <Settings />
            <ScrollButton />
        </div>
    );
}