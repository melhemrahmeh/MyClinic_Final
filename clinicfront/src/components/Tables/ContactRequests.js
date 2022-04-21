import React from 'react'
import PopupOperation from '../forms/PopupOperation';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function ContactRequests() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/forms/")
            .then((res) => {
                setData(res.data);
                console.log("Result:", data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const [buttonPopup, setButtonPopup] = useState(false);

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

