import Partner from "./pages/partner/Partner";
import Hero from "./pages/hero/Hero";
import Register from "./pages/register/Register";
import Stores from "./pages/stores/Stores";
import Login from "./components/Login";
import Product from "./pages/product/Product";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/"exact element={<Hero />} />
          <Route path="/register"exact element={<Register />} />
          <Route path="/partner"exact element={<Partner />} />
          <Route path="/stores"exact element={<Stores />} />
          <Route path="/login"exact element={<Login />} />
          <Route path="/product"exact element={<Product />} />
        </Routes>
      </Router>
  );
}

export default App;
