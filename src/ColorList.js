import React from "react";
import {Link} from "react-router-dom";
import "./ColorList.css"

function ColorList({colors}){

    return (
        <div>
            <div className="ColorList-header">
                <h1>Welcome to the Color Factory</h1>
                <p><b><Link to="/colors/addcolor">Add A Color</Link></b></p>

            </div>

            <div className="ColorList-list">
                <p>Pick your color!</p>
                {colors.map(c => 
                        <p><Link to={`/colors/${c}`}>{c}</Link></p>)}
            </div>
        </div>

    )

}

export default ColorList;