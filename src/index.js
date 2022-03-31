import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import App from "./App";
// import NC from "./Components/NC/NC";
// import "./index.css";
// import "./style.css";
// import "./Styles/index.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // <NC />,
  document.getElementById("root")
);
