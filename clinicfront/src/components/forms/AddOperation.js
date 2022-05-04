import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export default function AddOperation() {
  const [title, setTitle] = useState(null);
  const [cost, setCost] = useState(null);
  const [description, setDescription] = useState(null);
  const [room, setRoom] = useState(1);
  const notify = () => toast.success(`Operation ${title} Added!`);
  const addNewOperation = async (e) => {
    e.preventDefault();
    const form = {
      title,
      cost,
      description,
      room,
    };
    console.log(form);
    await axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/operations/create/",
      data: form,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/rooms/")
      .then((res) => {
        setData(res.data);
        console.log("Result:", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (data.length !== 0) {
    return (
      <div className="container-fluid bg-primary my-5 py-5">
        <div
          className="container py-5"
          style={{ width: "100%", alignItems: "center" }}
        >
          <div className="row gx-5" style={{ margin: "auto" }}>
            <div className="col-lg-6" style={{ width: "70%", margin: "auto" }}>
              <div className="bg-white text-center rounded p-5">
                <h1 className="mb-4">Add Operation</h1>
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
                      <label for="myfile"> Room </label>
                      <select
                        className="form-select bg-light border-0"
                        name="room"
                        value={room}
                        onChange={(e) => {
                          console.log(e.target.value)
                          setRoom(e.target.value)
                        }}
                        style={{ height: "55px" }}
                        size="1"
                      >
                        <option value="default" selected> Select Room </option>
                        {data.map((room) => (
                          <option value={room._id}> {room.room_name}</option>
                        ))
                        }
                      </select>
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
                      <br />
                      <br />
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                        onClick={(e) => { addNewOperation(e); notify(); }}
                      >
                        Add Operation
                      </button>
                    </div>
                  </div>
                </form>
                <ToastContainer
                  autoClose={4000}
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
      </div>
    );
  }
  else {
    return (
      <div class="alert alert-danger" role="alert" style={{ "width": "50%", "margin": "auto", "textAlign": "center" }}>
        <h4 class="alert-heading"> No Rooms Added. </h4>
        Please click<Link to={"/addroom"} class="alert-link"> here </Link> to then add a room to be able to add an operation
      </div>
    )
  }
}