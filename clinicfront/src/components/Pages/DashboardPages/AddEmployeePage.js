import AddEmployee from "../../forms/AddEmployee.js"
import SideBar from "../../dashboard/Bar/Sidebar.js";
import ScrollButton from "../../Scrollbutton/ScrollButton.js"
import React from 'react'

export default function AddEmployeePage() {
    return (
        <div>
            <SideBar is_dentist={true} is_admin={false} is_nurse={false} is_secretary={false}/>
            <AddEmployee />
            <ScrollButton />
        </div>
    );
}