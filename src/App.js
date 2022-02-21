// React (react-dom-router-redux) imports
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// Other Libraries

/* <== Pages import ==> */
// Home
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
import Test from "./test/pages/Test";

// styling
import "./App.css";

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
            {/* Product */}
            <Route path="/product" element={<Product />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/dashboard" element={<UserDashboard />} />

            {/* General  */}
            {/* <Route path="/test" element={<Test />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          {/* Shared */}
        </Layout>
        <BasketButton />
      </Router>
    </Provider>
  );
}

export default App;
