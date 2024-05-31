import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../src/App"
import "./index.css";
import SignupPage from "./pages/signupPage";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/signUp" element={<SignupPage />} />
      </Routes>
    </Router>
);
