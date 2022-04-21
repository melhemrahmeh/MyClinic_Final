import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddRoom() {
    let navigate = useNavigate();
    const [room_name, setroom_name] = useState(null);

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
                navigate("/myrooms");
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
                                            placeholder="Operation Name"
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
                                            type="submit"
                                            onClick={addNewRoom}
                                        >
                                            Add Room
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}