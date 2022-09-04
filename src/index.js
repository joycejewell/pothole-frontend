import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Map from "./Map";
import RegistrationForm from "./components/RegistrationForm";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/" element={<Map />} />
        <Route exact path="/RegistrationForm" element={<RegistrationForm />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  rootElement
);
