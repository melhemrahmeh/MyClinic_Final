import React, { useEffect, useState } from "react";
import PopupEmployee from '../forms/PopupEmployee';
import axios from "axios";

export default function Material_Table() {
    const [data, setData] = useState([]);

    const WAIT_TIME = 200;

    useEffect(() => {
        const id = setInterval(() => {
            axios
                .get("http://127.0.0.1:8000/api/employees/")
                .then((res) => {
                    setData(res.data);
                    console.log("Result:", data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, WAIT_TIME);
        return () => clearInterval(id);
    }, [data]);

    function deleteRow(id, e) {
        axios.delete(`http://127.0.0.1:8000/api/employees/delete/${id}/`)
            .then(res => {
                console.log(res);
                console.log(res.data);

                const posts = data.filter(item => item.id !== id);
                setData(posts);
            })
    }




    return (
        <>
            <br />
            <div class="container">
                <div class="panel-heading">
                    <h1 style={{ "margin": "auto" }}>My Employees</h1>
                    <br />
                </div>
                <div class="panel-body table-responsive-sm">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th style={{ 'color': "#535356" }}>Name</th>
                                <th style={{ 'color': "#535356" }}>Email</th>
                                <th style={{ 'color': "#535356" }}>Phone Number</th>
                                <th style={{ 'color': "#535356" }}>Position</th>
                                <th style={{ 'color': "#535356" }}>Salary</th>
                                <th style={{ 'color': "#535356" }}>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((emp, index) => (
                                <>
                                    <tr data-toggle="collapse" data-target="#demo" class="accordion-toggle">
                                        <td style={{ 'color': "#5D5C63" }}>{emp.firstName} {emp.lastName}</td>
                                        <td style={{ 'color': "#5D5C63" }}>{emp.email}</td>
                                        <td style={{ 'color': "#5D5C63" }}>{emp.PhoneNumber}</td>
                                        <td style={{ 'color': "#5D5C63" }}>{emp.position}</td>
                                        <td style={{ 'color': "#5D5C63" }}>{ emp.salary}$</td>
                                        <td style={{ 'color': "#5D5C63" }}><button type="button" class="btn btn-danger" onClick={(e) => deleteRow(emp._id, e)}>Delete</button></td>
                                    </tr>
                                </>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
