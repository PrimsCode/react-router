import React from "react";
import {Link, Navigate} from "react-router-dom";
import "./Color.css"

function Color({color}){

    if(!color){
        <Navigate replace to="/colors" />
    }

    return (
        <div className="Color" style={{backgroundColor: color }} >
            <div className="Color-content">
                <h1>{color}</h1>
                <p><Link to="/colors">Home</Link></p>
            </div>
        </div>
    )

}

export default Color;