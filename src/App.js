import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// =======
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Google from "./pages/Google";
import { Navigate, Outlet } from "react-router";

// Other Libraries

/* <== Pages import ==> */
// Home
import Hero from "./pages/hero/Hero";

// Product
import Product from "./pages/product/Product";
import Stores from "./pages/stores/Stores";

import Partner from "./pages/partner/Partner";

import "./App.css";

// authentications
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Activate from "./pages/activate/Activate";
import ResetPassword from "./pages/resetpassword/ResetPassword";
import ResetPasswordConfirm from "./pages/resetpassword/ResetPasswordConfirm";
import "./App.css";
import Home from "../src/components/AdminComponents/Pages/Home/Home";

import Layout from "./pages/layout/Layout";

import ProductList from "../src/components/AdminComponents/Pages/ProductList/ProductList";
// import Product from "../src/components/AdminComponents/Pages/Product/Product";
import NewProduct from "../src/components/AdminComponents/Pages/NewProduct/NewProduct";
import AdminProduct from "../src/components/AdminComponents/Pages/Product/AdminProduct";

import Facebook from "./pages/Facebook";
import CheckMail from "./pages/checkmail/CheckMail";

// user
import UserDashboard from "./pages/user-dashboard/UserDashboard";
import UserOverview from "./pages/user-dashboard/UserOverview";
import UserAccount from "./pages/user-dashboard/UserAccount";
import UserOrders from "./pages/user-dashboard/UserOrders";
// General UI & Layouts
import NotFoundPage from "./pages/general/NotFoundPage";
import Thanks from "./pages/general/Thanks";
import SignInReq from "./pages/general/SignInReq";

// Components

import Cart from "./components/cart/Cart";
import OrderCheckout from "./pages/cart/OrderCheckout";

// styling
import { ContactUs } from "./pages/ContactUs";
import GeoMap from "./components/map/GeoMap";
import { useSelector } from "react-redux";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GeoMap />
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

            <Route path="/dashboard" element={<UserDashboard />}>
              <Route path="overview" element={<UserOverview />} />
              <Route path="account" element={<UserAccount />} />
              <Route path="orders" element={<UserOrders />} />
            </Route>

            {/* Admin */}
            <Route path="/owner/" exact element={<Home />} />
            <Route path="/owner/ProductList" element={<ProductList />} />
            {/* <Route path="/admin/Product/:ProductId" element={<Product />} /> */}
            <Route path="/owner/newproduct" element={<NewProduct />} />
            <Route path="/owner/product/:storeId" element={<AdminProduct />} />

            {/* Stores */}
            <Route path="/:name/stores/" element={<Stores />} />
            <Route path="/stores/" element={<Stores />} />

            {/* Product */}

            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/products/:storeId" element={<Product />} />
            <Route path="/order" element={<OrderCheckout />} />

            {/* General  */}
            {/* <Route path="/test" element={<Test />} /> */}
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/thanks" element={<Thanks />} />

            <Route path="/signreq" element={<SignInReq />} />
          </Routes>
          {/* Shared */}
        </Layout>
        <Cart />
      </Router>
    </Provider>
  );
}

export default App;
