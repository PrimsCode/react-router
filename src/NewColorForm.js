import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./NewColorForm.css";

const NewColorForm = ({addColor}) => {

    const [formData, setFormData] = useState("")

    const handleChange = (e) => {
        setFormData(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(formData);
        setFormData("");
    }

    return (
        <div>
            <div className="NewColorForm-header">
                <h1>Add A New Color</h1>
                <p><Link to="/colors">Home</Link></p>
            </div>

            <div className="NewColorForm-form">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        id="color"
                        name="color" 
                        placeholder="add a color here" 
                        value={formData}
                        onChange={handleChange} />
                    <button>Add Color</button>
                </form>
            </div>        
            
        </div>
    )

}

export default NewColorForm;