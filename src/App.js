import Partner from "./pages/partner/Partner";
import Hero from "./pages/hero/Hero";
import Register from "./pages/register/Register";
import Stores from "./pages/stores/Stores";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/AdminComponents/Pages/Home/Home";
import UserList from "../src/components/AdminComponents/Pages/UserList/UserList";


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
          <Route  path="/home" exact element={<Home />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
