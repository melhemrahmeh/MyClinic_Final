import SideBar from "../../dashboard/Bar/Sidebar.js";// import Navbar from "../../dashboard/Navbar.js";
import AfterVisit from "../../forms/AfterVisit.js"
import ScrollButton from "../../Scrollbutton/ScrollButton.js"
import React from 'react';

export default function AfterVisitPage() {
    return (
        <div>
            <SideBar is_dentist={true} is_admin={false} is_nurse={false} is_secretary={false} />
            <AfterVisit />
            <ScrollButton />
        </div>
    );
}