import React from "react";
import ReactDOM from "react-dom";
/* Add NavLink to import */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

/* add the NavBar component to our render method */
ReactDOM.render(
  <BrowserRouter>
    <NavBar /> 
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);