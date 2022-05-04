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
    }, []);
    const [state, setState] = useState([]);

    console.log(operations.length);
    let arr = []
    arr.length = operations.length
    arr.fill(false)
    console.log(arr);
    setState(arr)
    const [total, setTotal] = useState(0);

    const handleOnChange = (position) => {
        const updatedCheckedState = arr.map((item, index) =>
            index === position ? !item : item
        );
        setState(updatedCheckedState)

        const totalPrice = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState) {
                    return sum + parseInt(operations[index].cost);
                }
                return sum;
            },
            0
        );
        setTotal(totalPrice);
    };

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
                                                checked={arr[index]}
                                                onChange={() => handleOnChange(index)}
                                            />
                                            <label htmlFor={`custom-checkbox-${index}`}>{title}</label>
                                        </div>
                                        <div className="right-section">{cost}</div>
                                    </div>
                                </li>
                            );
                        })}
                        <li>
                            <div className="toppings-list-item">
                                <div className="left-section">Total Amount Due:</div>
                                <div className="right-section">{total} $</div>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div >
    );
}
