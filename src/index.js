import React from "react";
// import ReactDOM from "react-dom";
// import render from "react-dom";
import { createRoot } from 'react-dom/client'; // Nuevo
// import PrimerApp from "./PrimerApp";
import CounterApp from "./CounterApp";
import "./index.css";



const divRoot = document.querySelector("#root");

// ReactDOM.render(saludar, divRoot);

// render.render(saludar, divRoot);

createRoot(divRoot).render(<CounterApp value={32} />); // Nuevo
