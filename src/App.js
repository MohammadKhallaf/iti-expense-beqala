// <<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Product from "./pages/product/Product";
import Partner from "./pages/partner/Partner";
// =======
// React (react-dom-router-redux) imports
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

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
// =======
import Google from "./pages/Google";
import Facebook from "./pages/Facebook";
import CheckMail from "./pages/checkmail/CheckMail";

// user
import UserDashboard from "./pages/user-dashboard/UserDashboard";
import UserAccount from "./pages/user-dashboard/UserAccount";
// General UI & Layouts
import Layout from "./pages/layout/Layout";
import NotFoundPage from "./pages/NotFoundPage";

// Components
import BasketButton from "./components/cart/BasketButton";

// Test
//import Test from "./test/pages/Test";

// styling
import "./App.css";
import Cart from "./components/cart/Cart";
import OrderCheckout from "./pages/cart/OrderCheckout";

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

            <Route path="/order" element={<OrderCheckout/>} />
            {/* General  */}
            {/* <Route path="/test" element={<Test />} /> */}
            <Route path="*" element={<NotFoundPage />} />
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
