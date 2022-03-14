import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../src/assets/index.css";
import {MovieProvider} from "./context/MoviesContext";

ReactDOM.render(
  <React.StrictMode>
    <MovieProvider>
    <App />
    </MovieProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
