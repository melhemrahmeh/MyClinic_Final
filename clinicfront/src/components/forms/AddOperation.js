import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddEmployee() {
  let navigate = useNavigate();
  // const [state, setState] = useState({});
  const [title, settitle] = useState(null);
  const [cost, setcost] = useState(null);
  const [room, setRoom] = useState(null);
  const [description, setdescription] = useState(null);

  const addNewOperation = async () => {
    const form = {
      title,
      cost,
      room,
      description,
    };
    console.log(form);
    await axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/operations/create/",
      data: form,
    })
      .then((response) => {
        console.log(response.data);
        navigate("/myoperations");
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
        console.log("Result:", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
                      onChange={(e) => settitle(e.target.value)}
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
                      value={cost}
                      onChange={(e) => setcost(e.target.value)}
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
                      onChange={(e) => setRoom(e.target.value)}
                      style={{ height: "55px" }}
                    >
                      {data.map((room) => (
                        <option value={room._id}>{ room.room_name}</option>
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
                      className="form-control bg-light border-0"
                      value={description}
                      onChange={(e) => setdescription(e.target.value)}
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
                      onClick={addNewOperation}
                    >
                      Add Operation
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
