import SideBar from "../../dashboard/Bar/Sidebar.js";// import Navbar from "../../dashboard/Navbar.js";
import Main from "../../dashboard/Main.js";
import ScrollButton from "../../Scrollbutton/ScrollButton.js"
import DashMainTables from "../../tables/DashMainTables.js"
import React from 'react';

export default function MainDash() {
    return (
        <div>
            <SideBar is_dentist={true} is_admin={false} is_nurse={false} is_secretary={false} />
            <Main is_dentist={true} is_admin={false} is_nurse={false} is_secretary={false}/>
            <DashMainTables is_dentist={true} is_admin={false} is_nurse={false} is_secretary={false} />
            <ScrollButton />
        </div>
    );
}