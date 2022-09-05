import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Map from "./Map";
import About from "./components/About";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/" element={<Map />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/RegistrationForm" element={<RegistrationForm />} />
        <Route exact path="/LoginForm" element={<LoginForm />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  rootElement
);
