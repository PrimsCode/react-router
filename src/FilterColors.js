import React from "react";
import {useParams, Navigate} from "react-router-dom";
import Color from "./Color"

function FilterColors({colors}){
    const {color} = useParams();

    if (color) {
        const selectedColor = colors.find(c => c === color);
        return <Color color={selectedColor} />;
    }

    return <Navigate replace to="/colors" />
}

export default FilterColors;