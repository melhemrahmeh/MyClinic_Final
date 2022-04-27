import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
export default function AddRoom() {

    const [room_name, setroom_name] = useState("");
    const notify = () => toast(`Room ${room_name} Added!`);
    const addNewRoom = async () => {
        const form = {
            room_name,
        };
        console.log(form);
        await axios({
            method: "POST",
            url: "http://127.0.0.1:8000/api/rooms/create/",
            data: form,
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    return (
        <div className="container-fluid bg-primary my-5 py-5">
            <div
                className="container py-5"
                style={{ width: "100%", alignItems: "center" }}
            >
                <div className="row gx-5" style={{ margin: "auto" }}>
                    <div className="col-lg-6" style={{ width: "70%", margin: "auto" }}>
                        <div className="bg-white text-center rounded p-5">
                            <h1 className="mb-4">Add Room</h1>
                            <br />
                            <form>
                                <div className="row g-3">
                                    <div
                                        className="col-12 col-sm-6"
                                        style={{ width: "60%", margin: "auto" }}
                                    >
                                        <label for="date"> Room Name</label>
                                        <input
                                            type="text"
                                            className="form-control bg-light border-0"
                                            placeholder="Room Name"
                                            name="room_name"
                                            value={room_name}
                                            onChange={(e) => setroom_name(e.target.value)}
                                            style={{ height: "55px" }}
                                        />
                                    </div>
                                    <div
                                        className="col-12"
                                        style={{ width: "70%", margin: "auto" }}
                                    >
                                        <br />
                                        <br />
                                        <br />
                                        <button
                                            className="btn btn-primary w-100 py-3"
                                            onClick={() => { addNewRoom(); notify(); }}
                                        >
                                            Add Room
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <ToastContainer
                                autoClose={10000}
                                hideProgressBar={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}