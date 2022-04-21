import React from 'react'
import PopupOperation from '../forms/PopupOperation';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function ClinicRooms() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/rooms/")
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
                    <h1 style={{ "margin": "auto" }}>My Rooms</h1>
                    <br />
                </div>
                <div class="panel-body table-responsive-sm">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th style={{ 'color': "#535356" }}>Room Name</th>
                                <th style={{ 'color': "#535356" }}>Description</th>
                                <th style={{ 'color': "#535356" }}>Price</th>
                                <th style={{ 'color': "#535356" }}>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((room) => (
                                <>

                                    <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                        <td style={{ 'color': "#5D5C63" }}>{room.room_name}</td>
                                        <td style={{ 'color': "#5D5C63" }}>1</td>
                                        <td style={{ 'color': "#5D5C63" }}>cost</td>
                                        <td style={{ 'color': "#5D5C63" }}> <button type="button" class="btn btn-info" onClick={() => setButtonPopup(true)}>Edit</button>   or   <button type="button" class="btn btn-danger">Delete</button></td>
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

