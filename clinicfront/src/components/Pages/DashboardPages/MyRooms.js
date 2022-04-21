import SideBar from "../../dashboard/Bar/Sidebar.js";
import ScrollButton from "../../Scrollbutton/ScrollButton.js"
import ClinicRooms from "../../tables/ClinicRooms.js"
import React from 'react';

export default function MyAppointments() {
    return (
        <div>
            <SideBar is_dentist={true} is_admin={false} is_nurse={false} is_secretary={false} />
            <ClinicRooms />
            <ScrollButton />
        </div>
    );
}