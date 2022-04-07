import React from 'react'
import PopupOperation from '../forms/PopupOperation';
import { useState, useEffect } from 'react';
import axios from "axios";
 
export default function ClinicOperation() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/operations/")
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
                    <h1 style={{ "margin": "auto" }}>My Operations</h1>
                    <br />
                </div>
                <div class="panel-body table-responsive-sm">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th style={{ 'color': "#535356" }}>Name</th>
                                <th style={{ 'color': "#535356" }}>Description</th>
                                <th style={{ 'color': "#535356" }}>Price</th>
                                <th style={{ 'color': "#535356" }}>Actions</th>
                            </tr>
                        </thead>
 
                        <tbody>
                            {data.map((operation) => (
                                <>
 
                                    <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                        <td style={{ 'color': "#5D5C63" }}>{operation.title}</td>
                                        <td style={{ 'color': "#5D5C63" }}>{operation.description}</td>
                                        <td style={{ 'color': "#5D5C63" }}>{operation.cost}</td>
                                        <td style={{ 'color': "#5D5C63" }}> <button type="button" class="btn btn-info" onClick={() => setButtonPopup(true)}>Edit</button>   or   <button type="button" class="btn btn-danger">Delete</button></td>

                                        <br />
                                        <PopupOperation trigger={buttonPopup} setTrigger={setButtonPopup}>
                                            <div className="container-fluid bg-primary my-5 py-5">
                                                <div className="col-lg-6" style={{ "width": "100%", "margin": "auto" }}>
                                                    <div className="bg-white text-center rounded p-5">
                                                        <h1 className="mb-4">Edit Operation</h1>
                                                        <br />
                                                        <form>
                                                            <div className="row g-3">
                                                                <div className="col-12 col-sm-6">
                                                                    <label for="date"> Operation Name</label>
                                                                    <input type="text" className="form-control bg-light border-0" placeholder="Operation Name" style={{ height: '55px' }} />
                                                                </div>
                                                                <div className="col-12 col-sm-6">
                                                                    <label for="date"> Price</label>
                                                                    <input type="number" className="form-control bg-light border-0" placeholder="Operation Price" step="1" min="0" max="1000" style={{ height: '55px' }} />
                                                                </div>
                                                                <div className="col-12 col-sm-6" >
                                                                    <label for="myfile"> Description</label>
                                                                    <textarea rows="4" cols="80" className="form-control bg-light border-0">
                                                                    </textarea>
                                                                </div>
                                                                <div className="col-12" >
                                                                    <button className="btn btn-primary w-100 py-3" type="submit">Book</button>
                                                                </div>
 
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </PopupOperation>
                                        <br />
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
 
