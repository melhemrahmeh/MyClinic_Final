import SideBar from "../../dashboard/Bar/Sidebar.js";// import Navbar from "../../dashboard/Navbar.js";
import UserProfile from "../../dashboard/UserProfile.js";
import ScrollButton from "../../Scrollbutton/ScrollButton.js"
import UserProfileTable from "../../tables/UserProfileTable"
import React from 'react';


export default function UserProfilePage() { 
    return (
        <div>
            <SideBar is_dentist={true} is_admin={false} is_nurse={false} is_secretary={false} />
            <UserProfile />
            <UserProfileTable />
            <ScrollButton />
        </div>

    );
}