import SideBar from "../../dashboard/Bar/Sidebar.js";// import Navbar from "../../dashboard/Navbar.js";
import ScrollButton from "../../Scrollbutton/ScrollButton.js"
import ContactRequests from "../../tables/ContactRequests.js"

import React from 'react';

export default function MyContactRequests() {
    return (
        <div>
            {/* <NavBar/> */}
            <SideBar is_dentist={true} is_admin={false} is_nurse={false} is_secretary={false} />
            <ContactRequests />
            <ScrollButton />
        </div>
    );
}