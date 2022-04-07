import MaterialTable from "material-table";
import React from 'react'

export default function LatestOp(props) {
    var is_admin = props.is_admin;
    if (is_admin) { return <></>; }
    return (
        <div style={{"marginLeft":"100px"}}>
            <br />
            <div class="container">
                <div class="panel-heading">
                    <h1 style={{ "margin": "auto" }}>Latest Visits</h1>
                    <br />
                </div>
                <div class="panel-body table-responsive-sm">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th style={{ 'color': "#535356" }}>Name</th>
                                <th style={{ 'color': "#535356" }}>Date and Time</th>
                                <th style={{ 'color': "#535356" }}>Status</th>
                                <th style={{ 'color': "#535356" }}>Fee</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                <td style={{ 'color': "#5D5C63" }}>Melhem Rahmeh</td>
                                <td style={{ 'color': "#5D5C63" }}>20-2-2022 at 3.15 PM</td>
                                <td style={{ 'color': "#5D5C63" }}>Completed</td>
                                <td style={{ 'color': "#5D5C63" }}>100$</td>
                            </tr>
                            <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                <td style={{ 'color': "#5D5C63" }}>Melhem Rahmeh</td>
                                <td style={{ 'color': "#5D5C63" }}>20-2-2022 at 3.15 PM</td>
                                <td style={{ 'color': "#5D5C63" }}>Completed</td>
                                <td style={{ 'color': "#5D5C63" }}>100$</td>
                            </tr>
                            <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                <td style={{ 'color': "#5D5C63" }}>Melhem Rahmeh</td>
                                <td style={{ 'color': "#5D5C63" }}>20-2-2022 at 3.15 PM</td>
                                <td style={{ 'color': "#5D5C63" }}>Completed</td>
                                <td style={{ 'color': "#5D5C63" }}>100$</td>
                            </tr>
                            <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                <td style={{ 'color': "#5D5C63" }}>Melhem Rahmeh</td>
                                <td style={{ 'color': "#5D5C63" }}>20-2-2022 at 3.15 PM</td>
                                <td style={{ 'color': "#5D5C63" }}>Completed</td>
                                <td style={{ 'color': "#5D5C63" }}>100$</td>
                            </tr>
                        </tbody>
                    </table>
                    <br /><br />
                </div>
            </div>
        </div>

    );
}
