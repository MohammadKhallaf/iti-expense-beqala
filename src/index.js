import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./pages/hero/Hero";
import Register from "./pages/register/Register";
import Partner from "./pages/partner/Partner";
import Stores from "./pages/stores/Stores";
import Login from "./components/Login";

ReactDOM.render(

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/partner" element={<Partner/>} />
      <Route path="/stores" element={<Stores/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  </BrowserRouter>

    
    
    , document.getElementById("root"));
