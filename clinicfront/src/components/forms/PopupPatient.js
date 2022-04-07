import React from 'react'
import "./popup.css"

export default function PopupPatient(props) {
    return (
        (props.trigger) ? (
            <div className='popup'>
                <div className='popup-inner'>
                    <button className='close-btn btn btn-danger' onClick={() => props.setTrigger(false)}>Close</button>
                    {props.children}
                </div>
            </div>
        ) : ""
    );
}
