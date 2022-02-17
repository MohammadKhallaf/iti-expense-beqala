
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/product/Product"
import Partner from "./pages/partner/Partner";
import Hero from "./pages/hero/Hero";
import Register from "./pages/register/Register";
import Stores from "./pages/stores/Stores";
import Login from "./pages/login/Login";
import Activate from "./pages/activate/Activate";
import ResetPassword from "./pages/resetpassword/ResetPassword";
import ResetPasswordConfirm from "./pages/resetpassword/ResetPasswordConfirm";
import { Provider } from 'react-redux';
import store from './redux/store'
import "./App.css";
import Layout from "./pages/layout/Layout";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/"exact element={<Hero />} />
            <Route path="/register"exact element={<Register />} />
            <Route path="/partner"exact element={<Partner />} />
            <Route path="/stores"exact element={<Stores />} />
            <Route path="/login"exact element={<Login />} />
            <Route path="/reset-password"exact element={<ResetPassword />} />
            <Route path="/password/reset/confirm/:uid/:token"exact element={<ResetPasswordConfirm />} />
            <Route path="/activate/:uid/:token"exact element={<Activate />} />
            <Route path="/product"exact element={<Product />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
