import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./Components/App";

alert("GamingZone is Live now!");
const root = document.getElementById('root');
const rootInstance = createRoot(root);
rootInstance.render(<App />);
