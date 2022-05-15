import React, { useReducer } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
//STYLE SHEET
import "./styles.scss";




const root = createRoot(document.querySelector("#root"));
root.render(<App />)
