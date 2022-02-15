import Partner from "./pages/partner/Partner";
import Hero from "./pages/hero/Hero";
import Register from "./pages/register/Register";
import Stores from "./pages/stores/Stores";
import Login from "./components/Login";
import Cart from "./components/Cart";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import react from "react";
import reactDom from "react-dom";
import Product from "./pages/product/Product"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/register" element={<Register />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
