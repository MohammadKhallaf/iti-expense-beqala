import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../../redux/actions/auth";
import Footer from "../../components/Footer";
import './style.css'
import ChatBox from './../ChatBox';
const Layout = ({ checkAuthenticated, load_user, children }) => {
  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, []);

  return (
    <div>
      <Navbar />
      {children}
      <input type="checkbox" id="check" />{" "}
      <label className="chat-btn" htmlFor="check">
        {" "}
        <i className="fab fa-rocketchat"></i>{" "}
        <i className="fa fa-close close"></i>{" "}
      </label>
      <div className="wrapper chatbox">
        <div className="header">
          <h6 className='text-center'>ExpenseBeqala <i className="text-danger fas fa-heart"></i> </h6>
        </div>
        
       <ChatBox />
      </div>
      <Footer />
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
