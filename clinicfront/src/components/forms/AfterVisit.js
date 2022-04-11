import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AfterVisit() {
    
  let navigate = useNavigate();
  const [state, setState] = useState({});
  const [firstName, setfirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [PhoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [birthDate, setbirthDate] = useState(null);
  const [address, setaddress] = useState(null);
  const [gender, setgender] = useState(null);
  const [medicattions, setmedicattions] = useState(null);
  const [med_text, setmed_text] = useState(null);
  const [allergies, setallergies] = useState(null);
  const [allergies_text, setallergies_text] = useState(null);
  const [E_firstName, setE_firstName] = useState(null);
  const [E_lastName, setE_lastName] = useState(null);
  const [E_contactNumber, setE_contactNumber] = useState(null);

    // const handleChange = (e) => {
    //   setState({ ...state, [e.target.name]: e.target.value });
    // };

  const addNewPatient = async () => {
    // let formField = new FormData();
    // formField.append("firstname", firstName);
    // formField.append("lastname", lastName);
    // formField.append("phoneNumber", phoneNumber);
    // formField.append("email", email);
    // formField.append("Birthdate", Birthdate);
    // formField.append("address", address);
    // formField.append("gender", gender);
    // formField.append("medications", medications);
    // formField.append("med_text", med_text);
    // formField.append("allergies", allergies);
    // formField.append("allergies_text", allergies_text);
    // formField.append("e_firstName", e_firstName);
    // formField.append("e_lastName", e_lastName);
    // formField.append("e_contactNumber", e_contactNumber);
    const form = {
      firstName,
      lastName,
      email,
      birthDate,
      address,
      // gender,
      medicattions,
      med_text, 
      allergies,
      allergies_text,
      E_firstName,
      E_lastName,
      E_contactNumber,
    };
    console.log(form);
    await axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/patients/create/",
      data: form,
    })
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

    return (
        <div className="container-fluid bg-primary my-5 py-5">
            <div className="container py-5" style={{ "width": "100%", "alignItems": "center" }}>
                <div className="row gx-5" style={{ "margin": "auto" }}>
                    <div className="col-lg-6" style={{ "width": "70%", "margin": "auto" }}>
                        <div className="bg-white text-center rounded p-5">
                            <h1 className="mb-4">After Visit Summary</h1>
                            <br />
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Patient First Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control bg-light border-0" 
                                            placeholder="First Name" 
                                            name="firstname"
                                            style={{ height: '55px' }}                       
                                            value={firstName}
                                            //   onChange={handleChange}
                                            onChange={(e) => setfirstName(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Patient Last Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control bg-light border-0" 
                                            placeholder="Last Name" 
                                            style={{ height: '55px' }} 
                                            name="lastName"
                                            value={lastName}
                                            //   onChange={handleChange}
                                            onChange={(e) => setfirstName(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Patient Email</label>
                                        <input type="email" className="form-control bg-light border-0" placeholder="Email" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <br /> <br />
                                        <label for="myfile"> Operation</label>
                                        <select className="form-select bg-light border-0" style={{ height: '55px' }}>
                                            <option selected>Select Operation</option>
                                            <option value="Broken Tooth"> Broken Tooth </option>
                                            <option value="Brushing"> Brushing </option>
                                            <option value="Check-Up"> Check-Up </option>
                                            <option value="Dental Implants"> Dental Implants </option>
                                            <option value="Dental Caries"> Dental Caries </option>
                                            <option value="Diagnostics"> Diagnostics </option>
                                            <option value="Endodontics"> Endodontics </option>
                                            <option value="Extraction"> Extraction </option>
                                            <option value="Gum Treatment"> Gum Treatment </option>
                                            <option value="Odontogenic Cyst"> Odontogenic Cyst </option>
                                            <option value="Orthodontics"> Orthodontics </option>
                                            <option value="Osteoplasty"> Osteoplasty </option>
                                            <option value="Root Canal"> Root Canal </option>
                                            <option value="Whitening"> Whitening </option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="date" id="date" data-target-input="nearest">
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <br />
                                        <div className="date" id="date" data-target-input="nearest">
                                            <label for="date"> Today's Visit</label>
                                            <input type="date" value="2017-06-01" className="form-control bg-light border-0 datetimepicker-input" data-target="#date" data-toggle="datetimepicker" style={{ height: '55px' }} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="date" id="date" data-target-input="nearest">
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <br />
                                        <div className="date" id="date" data-target-input="nearest">
                                            <label for="date"> Next Visit</label>
                                            <input type="date" value="2017-06-01" className="form-control bg-light border-0 datetimepicker-input" data-target="#date" data-toggle="datetimepicker" style={{ height: '55px' }} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <br /> <br />
                                        <div className="time" id="time" data-target-input="nearest">
                                            <input type="time" id="appt" name="appt" className="form-control bg-light border-0 datetimepicker-input" data-target="#time" data-toggle="datetimepicker" style={{ height: '55px' }} value="09:00" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <br /> <br />
                                        <textarea rows="4" cols="80" className="form-control bg-light border-0">
                                            Medicaments List
                                        </textarea>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                    </div>

                                    <div className="col-12 col-sm-6">

                                        <div >
                                            <br />
                                            <label for="myfile"> Please upload file needed, if needed</label>
                                            <input type="file" id="myfile" name="myfile" className="form-control bg-light border-0" />
                                        </div>

                                    </div>
                                    <div className="col-12" style={{ "width": "70%", "margin": "auto" }}>
                                        <br /><br />
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send</button>
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