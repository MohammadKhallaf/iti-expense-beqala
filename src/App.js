// <<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// =======
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Google from "./pages/Google";

// Other Libraries

/* <== Pages import ==> */
// Home
// >>>>>>> 9ad5e1b9be1e3098e85e5397394236b6f9e9e770
import Hero from "./pages/hero/Hero";

// Product
import Product from "./pages/product/Product";
import Stores from "./pages/stores/Stores";

import Partner from "./pages/partner/Partner";

// authentications
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Activate from "./pages/activate/Activate";
import ResetPassword from "./pages/resetpassword/ResetPassword";
import ResetPasswordConfirm from "./pages/resetpassword/ResetPasswordConfirm";
// <<<<<<< HEAD
import "./App.css";
// <<<<<<< HEAD
import Home from "../src/components/AdminComponents/Pages/Home/Home";
import UserList from "../src/components/AdminComponents/Pages/UserList/UserList";
// =======
import Layout from "./pages/layout/Layout";
// >>>>>>> ebd0cb925ec34061491f9afd136b9f614d4ac3a1
import ProductList from "../src/components/AdminComponents/Pages/ProductList/ProductList";
// import Product from "../src/components/AdminComponents/Pages/Product/Product";
import NewProduct from "../src/components/AdminComponents/Pages/NewProduct/NewProduct";

import Facebook from "./pages/Facebook";
import CheckMail from "./pages/checkmail/CheckMail";

// user
import UserDashboard from "./pages/user-dashboard/UserDashboard";
import UserAccount from "./pages/user-dashboard/UserAccount";
// General UI & Layouts
import NotFoundPage from "./pages/NotFoundPage";

// Components

// Test
//import Test from "./test/pages/Test";

// styling
import "./App.css";
import Cart from "./components/cart/Cart";
import OrderCheckout from "./pages/cart/OrderCheckout";

// =======

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Hero />} />
            {/* Authentication */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/activate/:uid/:token" element={<Activate />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route
              path="/password/reset/confirm/:uid/:token"
              element={<ResetPasswordConfirm />}
            />
            <Route path="/partner" element={<Partner />} />
            <Route path="/google" element={<Google />} />
            <Route path="/facebook" element={<Facebook />} />
            <Route path="/checkmail" element={<CheckMail />} />
            {/* User */}
            <Route path="/account" element={<UserAccount />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            {/* Product */}
            <Route path="/product" element={<Product />} />
            <Route path="/stores" element={<Stores />} />

            <Route path="/order" element={<OrderCheckout />} />
            {/* General  */}
            {/* <Route path="/test" element={<Test />} /> */}
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/admin/" exact element={<Home />} />
            <Route path="/admin/users" element={<UserList />} />
            <Route path="/admin/ProductList" element={<ProductList />} />
            <Route path="/admin/Product/:ProductId" element={<Product />} />
            <Route path="/admin/newproduct" element={<NewProduct />} />
          </Routes>
          {/* Shared */}
        </Layout>
        <Cart />
      </Router>
    </Provider>
    // >>>>>>> 9ad5e1b9be1e3098e85e5397394236b6f9e9e770
  );
}

export default App;
