import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Product from "./pages/product/Product";
import Partner from "./pages/partner/Partner";
import Hero from "./pages/hero/Hero";
import Register from "./pages/register/Register";
import Stores from "./pages/stores/Stores";
import Login from "./pages/login/Login";
import Activate from "./pages/activate/Activate";
import ResetPassword from "./pages/resetpassword/ResetPassword";
import ResetPasswordConfirm from "./pages/resetpassword/ResetPasswordConfirm";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import "./App.css";
// <<<<<<< HEAD
import Home from "../src/components/AdminComponents/Pages/Home/Home";
import UserList from "../src/components/AdminComponents/Pages/UserList/UserList";
// =======
import Layout from "./pages/layout/Layout";
// >>>>>>> ebd0cb925ec34061491f9afd136b9f614d4ac3a1
import ProductList from "../src/components/AdminComponents/Pages/ProductList/ProductList";
import Product from "../src/components/AdminComponents/Pages/Product/Product";
import NewProduct from "../src/components/AdminComponents/Pages/NewProduct/NewProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register" element={<Register />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin/" exact element={<Home />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/ProductList" element={<ProductList />} />
        <Route path="/admin/Product/:ProductId" element={<Product />} />
        <Route path="/admin/newproduct" element={<NewProduct />} />
      </Routes>
      {/* <Layout> */}
      <Routes>
        <Route path="/" exact element={<Hero />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/partner" exact element={<Partner />} />
        <Route path="/stores" exact element={<Stores />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/reset-password" exact element={<ResetPassword />} />
        <Route
          exact
          path="/password/reset/confirm/:uid/:token"
          element={<ResetPasswordConfirm />}
        />
        <Route path="/activate/:uid/:token" exact element={<Activate />} />
        {/* <Route path="/product" exact element={<Product />} /> */}
      </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;
