import React from 'react'
import PopupOperation from '../forms/PopupOperation';
import { useState, useEffect } from 'react';
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ClinicOperation() {
    const [operations, setOperations] = useState([]);
    const WAIT_TIME = 200;

    useEffect(() => {
        const id = setInterval(() => {
            axios
                .get("http://127.0.0.1:8000/api/operations/")
                .then((res) => {
                    setOperations(res.data);
                    console.log("Result:", res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, WAIT_TIME);
        return () => clearInterval(id);
    }, [operations]);


    const [buttonPopup, setButtonPopup] = useState(false);

    toast.configure()

    const [title, setTitle] = useState(null);
    const [cost, setCost] = useState(null);
    const [description, setDescription] = useState(null);

    const notify = () => toast.success(`Operation ${title} Updated!`);

    const updateOperation = async (id, e , room) => {
        e.preventDefault();
        const form = {
            title,
            cost,
            description,
            room,
        };
        console.log(form);
        await axios({
            method: "PUT",
            url: `http://127.0.0.1:8000/api/operations/update/${id}/`,
            data: form,
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    function deleteRow(id, e) {
        axios.delete(`http://127.0.0.1:8000/api/operations/delete/${id}/`)
            .then(res => {
                console.log(res);
                console.log(res.data);

                const posts = operations.filter(item => item.id !== id);
                setOperations(posts);
            })
    }

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
                            {operations.map((operation) => (
                                <>

                                    <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                        <td style={{ 'color': "#5D5C63" }}>{operation.title}</td>
                                        <td style={{ 'color': "#5D5C63" }}>{operation.description}</td>
                                        <td style={{ 'color': "#5D5C63" }}>{operation.cost}</td>
                                        <td style={{ 'color': "#5D5C63" }}> <button type="button" class="btn btn-info" onClick={() => setButtonPopup(true)}>Edit</button>   or   <button type="button" class="btn btn-danger" onClick={(e) => deleteRow(operation._id, e)} >Delete</button></td>

                                        <br />
                                        <PopupOperation trigger={buttonPopup} setTrigger={setButtonPopup}>
                                            <div className="container-fluid bg-primary my-5 py-5">
                                                <div className="col-lg-6" style={{ "width": "100%", "margin": "auto" }}>
                                                    <div className="bg-white text-center rounded p-5">
                                                        <h1 className="mb-4">Edit Operation</h1>
                                                        <br />
                                                        <form>
                                                            <div className="row g-3">
                                                                <div
                                                                    className="col-12 col-sm-6"
                                                                    style={{ width: "60%", margin: "auto" }}
                                                                >
                                                                    <label for="date"> Operation Name</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control bg-light border-0"
                                                                        placeholder="Operation Name"
                                                                        value={title}
                                                                        name="title"
                                                                        onChange={(e) => setTitle(e.target.value)}
                                                                        style={{ height: "55px" }}
                                                                    />
                                                                </div>
                                                                <div
                                                                    className="col-12 col-sm-6"
                                                                    style={{ width: "60%", margin: "auto" }}
                                                                >
                                                                    <br />
                                                                    <label for="date"> Price</label>
                                                                    <input
                                                                        type="number"
                                                                        className="form-control bg-light border-0"
                                                                        placeholder="Operation Price"
                                                                        step="1"
                                                                        min="0"
                                                                        max="1000"
                                                                        name="cost"
                                                                        value={cost}
                                                                        onChange={(e) => setCost(e.target.value)}
                                                                        style={{ height: "55px" }}
                                                                    />
                                                                </div>
                                                                <div
                                                                    className="col-12 col-sm-6"
                                                                    style={{ width: "60%", margin: "auto" }}
                                                                >
                                                                    <br />
                                                                    <label for="myfile"> Description</label>
                                                                    <textarea
                                                                        rows="4"
                                                                        cols="80"
                                                                        placeholder="Operation Description"
                                                                        className="form-control bg-light border-0"
                                                                        name="description"
                                                                        value={description}
                                                                        onChange={(e) => setDescription(e.target.value)}
                                                                    ></textarea>
                                                                </div>
                                                                <div
                                                                    className="col-12"
                                                                    style={{ width: "70%", margin: "auto" }}
                                                                >
                                                                    <br />
                                                                    <button
                                                                        className="btn btn-primary w-100 py-3"
                                                                        type="submit"
                                                                        onClick={(e) => { updateOperation(operation._id, e, operation.room); notify(e)}}
                                                                    >
                                                                        Update Operation
                                                                    </button>
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

