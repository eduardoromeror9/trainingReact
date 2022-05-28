import React from "react";
// import ReactDOM from "react-dom";
// import render from "react-dom";
import { createRoot } from 'react-dom/client'; // Nuevo
import PrimerApp from "./PrimerApp";
import "./index.css";



const divRoot = document.querySelector("#root");

// ReactDOM.render(saludar, divRoot);

// render.render(saludar, divRoot);

createRoot(divRoot).render(<PrimerApp saludo= 'Hola, soy Eduardo'/>); // Nuevo
