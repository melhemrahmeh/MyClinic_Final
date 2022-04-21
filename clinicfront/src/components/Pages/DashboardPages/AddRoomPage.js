import SideBar from "../../dashboard/Bar/Sidebar.js";
import AddRoom from "../../forms/AddRoom.js"
import ScrollButton from "../../Scrollbutton/ScrollButton.js"
import React from 'react'


export default function AddPatientPage() {

    return (
        <div>
            <SideBar is_dentist={true} is_admin={false} is_nurse={false} is_secretary={false} />
            <AddRoom />
            <ScrollButton />
        </div>
    );
}