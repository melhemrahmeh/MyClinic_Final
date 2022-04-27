import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./styles.css";


export default function OperationsFormVisit(props) {

    const [operations, setOperations] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/operations/")
            .then((res) => {
                setOperations(res.data);
                console.log("Result:", res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    } , []);



    const getFormattedPrice = (price) => `${price}`;
    const [total, setTotal] = useState(0);

    const [checkedState, setCheckedState] = useState(
        new Array(operations.length).fill(false)
    );
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        const totalPrice = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + operations[index].cost;
                }
                return sum;
            },
            0
        );

        setTotal(totalPrice);
    };


    var is_admin = props.is_admin;
    if (is_admin) { return <></>; }
    return (
        <div style={{ "marginLeft": "10px" }}>
            <br />
            <div class="container">
                <div class="panel-heading">
                    <h3 style={{ "margin": "auto" }}>Operations</h3>
                    <br />
                </div>
                <div class="panel-body table-responsive-sm">
                    <ul className="toppings-list">
                        {operations.map(({ title, cost }, index) => {
                            return (
                                <li key={index}>
                                    <div className="toppings-list-item">
                                        <div className="left-section">
                                            <input
                                                type="checkbox"
                                                id={`custom-checkbox-${index}`}
                                                name={title}
                                                value={title}
                                                checked={checkedState[index]}
                                                onChange={() => handleOnChange(index)}
                                            />
                                            <label htmlFor={`custom-checkbox-${index}`}>{title}</label>
                                        </div>
                                        <div className="right-section">{getFormattedPrice(cost)}</div>
                                    </div>
                                </li>
                            );
                        })}
                        <li>
                            <div className="toppings-list-item">
                                <div className="left-section">Total:</div>
                                <div className="right-section">{getFormattedPrice(total)}</div>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div >
    );
}
