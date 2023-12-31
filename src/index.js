import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { Provider as LocalProvider } from "./context/locaization";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LocalProvider>
    <App />
  </LocalProvider>
);
