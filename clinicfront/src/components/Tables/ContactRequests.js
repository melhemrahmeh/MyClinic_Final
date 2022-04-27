import React from 'react'
import PopupOperation from '../forms/PopupOperation';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function ContactRequests() {
    const [data, setData] = useState([]);


    const WAIT_TIME = 200;

    useEffect(() => {
        const id = setInterval(() => {
            axios
                .get("http://127.0.0.1:8000/api/forms/")
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
        axios.delete(`http://127.0.0.1:8000/api/forms/delete/${id}/`)
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
                    <h1 style={{ "margin": "auto" }}>Contact Requests</h1>
                    <br />
                </div>
                <div class="panel-body table-responsive-sm">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th style={{ 'color': "#535356" }}>Name</th>
                                <th style={{ 'color': "#535356" }}>Email</th>
                                <th style={{ 'color': "#535356" }}>Phone Number</th>
                                <th style={{ 'color': "#535356" }}>Subject</th>
                                <th style={{ 'color': "#535356" }}>Message</th>
                                <th style={{ 'color': "#535356" }}>Delete Request</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((req) => (
                                <>

                                    <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                        <td style={{ 'color': "#5D5C63" }}>{req.name}</td>
                                        <td style={{ 'color': "#5D5C63" }}>{req.email}</td>
                                        <td style={{ 'color': "#5D5C63" }}>{req.PhoneNumber}</td>
                                        <td style={{ 'color': "#5D5C63" }}>{req.subject}</td>
                                        <td style={{ 'color': "#5D5C63" }}>{req.message}</td>
                                        <td style={{ 'color': "#5D5C63" }}><button type="button" class="btn btn-danger" onClick={(e) => deleteRow(req._id, e)} >Delete</button></td>
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

