import React from 'react'
import { useState } from 'react';
import PopupEmployee from '../forms/PopupEmployee';

export default function Material_Table() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <>
            <br />
            <div class="container">
                <div class="panel-heading">
                    <h1 style={{ "margin": "auto" }}>My Employees</h1>
                    <br />
                </div>
                <div class="panel-body table-responsive-sm">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th style={{ 'color': "#535356" }}>Name</th>
                                <th style={{ 'color': "#535356" }}>Email</th>
                                <th style={{ 'color': "#535356" }}>Phone Number</th>
                                <th style={{ 'color': "#535356" }}>Position</th>
                                <th style={{ 'color': "#535356" }}>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                <td style={{ 'color': "#5D5C63" }}>Melhem Rahmeh</td>
                                <td style={{ 'color': "#5D5C63" }}>melhem.rahmehh@gmail.com</td>
                                <td style={{ 'color': "#5D5C63" }}>71 589 832</td>
                                <td style={{ 'color': "#5D5C63" }}>Administrator</td>
                                <td style={{ 'color': "#5D5C63" }}> <button type="button" class="btn btn-info" onClick={() => setButtonPopup(true)}>Edit</button>   or   <button type="button" class="btn btn-danger">Delete</button></td>

                                <br />
                                <PopupEmployee trigger={buttonPopup} setTrigger={setButtonPopup}>
                                    <div className="container-fluid bg-primary my-5 py-5">
                                        <div className="col-lg-6" style={{ "width": "100%", "margin": "auto" }}>
                                            <div className="bg-white text-center rounded p-5">
                                                <h1 className="mb-4">Edit Employee</h1>
                                                <br />
                                                <form>
                                                    <div className="row g-3">
                                                        <div className="col-12 col-sm-6">
                                                            <label for="date"> Name</label>
                                                            <input type="text" className="form-control bg-light border-0" placeholder="Name" style={{ height: '55px' }} />
                                                        </div>
                                                        <div className="col-12 col-sm-6">
                                                            <label for="date"> Position</label>
                                                            <select className="form-select bg-light border-0" style={{ height: '55px' }}>
                                                                <option selected>Select Position</option>
                                                                <option value="Administrator"> Administrator </option>
                                                                <option value="Dentist Assistant"> Dentist Assistant </option>
                                                                <option value="Nurse">  Nurse </option>
                                                                <option value="Secretary">  Secretary </option>
                                                            </select>
                                                        </div>
                                                        <div className="col-12 col-sm-6" >
                                                            <label for="myfile"> Salary</label>
                                                            <input type="number" className="form-control bg-light border-0" placeholder="Salary" step="1" min="0" max="1000" style={{ height: '55px' }} />
                                                        </div>
                                                        <div className="col-12" >
                                                            <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </PopupEmployee>
                                <br />


                            </tr>

                            <tr>
                                <td colspan="12" class="hiddenRow">
                                    <div class="accordian-body collapse" id="demo1">
                                        <h5>Melhem Rahmeh's Information</h5>
                                        <table class="table table-striped">
                                            <thead>
                                                <tr class="info">
                                                    <th style={{ 'color': "#5D5C63" }}>Employment Type</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Salary</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Address</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Age</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr data-toggle="collapse" class="accordion-toggle">
                                                    <td style={{ 'color': "#5D5D60" }}>Full Time</td>
                                                    <td style={{ 'color': "#5D5D60" }}> 1000$ </td>
                                                    <td style={{ 'color': "#5D5D60" }}> Byblos </td>
                                                    <td style={{ 'color': "#5D5D60" }}> 20</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </td>
                            </tr>

                            <tr data-toggle="collapse" data-target="#demo2" class="accordion-toggle">
                                <td style={{ 'color': "#5D5C63" }}>Melhem Rahmeh</td>
                                <td style={{ 'color': "#5D5C63" }}>melhem.rahmehh@gmail.com</td>
                                <td style={{ 'color': "#5D5C63" }}>71 589 832</td>
                                <td style={{ 'color': "#5D5C63" }}>Administrator</td>
                                <td style={{ 'color': "#5D5C63" }}> <button type="button" class="btn btn-info" onClick={() => setButtonPopup(true)}>Edit</button>   or  <button type="button" class="btn btn-danger">Delete</button></td>


                                <br />
                                <PopupEmployee trigger={buttonPopup} setTrigger={setButtonPopup}>
                                    <div className="container-fluid bg-primary my-5 py-5">
                                        <div className="col-lg-6" style={{ "width": "100%", "margin": "auto" }}>
                                            <div className="bg-white text-center rounded p-5">
                                                <h1 className="mb-4">Edit Employee</h1>
                                                <br />
                                                <form>
                                                    <div className="row g-3">
                                                        <div className="col-12 col-sm-6">
                                                            <label for="date"> Name</label>
                                                            <input type="text" className="form-control bg-light border-0" placeholder="Name" style={{ height: '55px' }} />
                                                        </div>
                                                        <div className="col-12 col-sm-6">
                                                            <label for="date"> Position</label>
                                                            <select className="form-select bg-light border-0" style={{ height: '55px' }}>
                                                                <option selected>Select Position</option>
                                                                <option value="Administrator"> Administrator </option>
                                                                <option value="Dentist Assistant"> Dentist Assistant </option>
                                                                <option value="Nurse">  Nurse </option>
                                                                <option value="Secretary">  Secretary </option>
                                                            </select>
                                                        </div>
                                                        <div className="col-12 col-sm-6" >
                                                            <label for="myfile"> Salary</label>
                                                            <input type="number" className="form-control bg-light border-0" placeholder="Salary" step="1" min="0" max="1000" style={{ height: '55px' }} />
                                                        </div>
                                                        <div className="col-12" >
                                                            <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </PopupEmployee>
                                <br />
                            </tr>

                            <tr>
                                <td colspan="12" class="hiddenRow">
                                    <div class="accordian-body collapse" id="demo2">
                                        <h5>Melhem Rahmeh's Information</h5>
                                        <table class="table table-striped">
                                            <thead>
                                                <tr class="info">
                                                    <th style={{ 'color': "#5D5C63" }}>Employment Type</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Salary</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Address</th>
                                                    <th style={{ 'color': "#5D5C63" }}>Age</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr data-toggle="collapse" class="accordion-toggle">
                                                    <td style={{ 'color': "#5D5D60" }}>Full Time</td>
                                                    <td style={{ 'color': "#5D5D60" }}> 1000$ </td>
                                                    <td style={{ 'color': "#5D5D60" }}> Byblos </td>
                                                    <td style={{ 'color': "#5D5D60" }}> 20</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
