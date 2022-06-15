import React, {useState, useEffect} from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ColorList from './ColorList';
import FilterColors from './FilterColors';
import NewColorForm from "./NewColorForm";

function App() {

  const initialColors = JSON.parse(localStorage.getItem("colors")) || ["blue"];
  const [colors, updateColors] = useState(initialColors);
  
    useEffect(
      () => localStorage.setItem("colors", JSON.stringify(colors)),
      [colors]);

  console.log(colors);

  const checkColor = (color) => {
    for (let i in colors) {
      if (colors[i] === color ){
        return true;
      }
    }
  }

  const addColor = (newColor) => {

    if (checkColor(newColor)){
      return alert("Color already exists.");
    }

    updateColors(colors => ([...colors, newColor]))
    console.log(newColor);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/colors" element={<ColorList colors={colors} />}/>
          <Route path="/colors/addcolor" element={<NewColorForm addColor={addColor} />}/>
          <Route path="/colors/:color" element={<FilterColors colors={colors} />} />
        </Routes>   
      </ BrowserRouter>
    </div>
  );
}

export default App;