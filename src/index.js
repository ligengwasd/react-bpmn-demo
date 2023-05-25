import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "./dashbordContainer.css";
import "./font-awsome-min.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
