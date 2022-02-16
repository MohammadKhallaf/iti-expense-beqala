import Partner from "./pages/partner/Partner";
import Hero from "./pages/hero/Hero";
import Register from "./pages/register/Register";
import Stores from "./pages/stores/Stores";
import Login from "./components/Login";
import Cart from "./components/Cart";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/product/Product";

import UserDashboard from "./pages/user-dashboard/UserDashboard";
import Test from "./test/pages/Test";
import UserProfile from "./pages/user-dashboard/UserProfile";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register" element={<Register />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/dashboard" element={<UserDashboard />}>
          <Route path="profile" element={<UserProfile />}/>
        </Route>
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
