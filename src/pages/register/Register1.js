import React, { useState } from "react";
import "./Register.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Register() {
  const RemoveRedEyeIcon = "far fa-eye";
  const VisibilityOffIcon = "far fa-eye-slash";
  const [regData, setregData] = useState({
    regUserEmail: "",
    regPassword: "",
    username: "",
    name: "",
    conPassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(regData);
  };
  const [regDataErr, setregDataErr] = useState({
    regUserEmailInvalid: "",
    regPasswordInvalid: "",
    usernameErr: "",
    nameErr: "",
    conPasswordErr: "",
  });
  const [regpasswordShown, setregPasswordShown] = useState(false);

  const [Regdisplayi, setRegdisplayi] = useState({
    show: { display: "inline" },
    hide: { display: "none" },
  });

  const showRegPassword = () => {
    setRegdisplayi({
      ...Regdisplayi,
      show: { display: "none" },
      hide: { display: "inline" },
    });
    setregPasswordShown(!regpasswordShown);
  };
  const hideRegPassword = () => {
    setRegdisplayi({
      ...Regdisplayi,
      show: { display: "inline" },
      hide: { display: "none" },
    });
    setregPasswordShown(!regpasswordShown);
  };
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validregPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
  const validUsernameReg = new RegExp("/^S*$/");

  return (
    <>
      <Navbar />
      <div className="container-fluid regist py-5 mt-5 px-4">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h1 className="text-center">Registration</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group py-4">
                <label htmlhtmlFor="exampleName">Name</label>

                <input
                  type="text"
                  value={regData.name}
                  onChange={(e) => {
                    setregData({
                      ...regData,
                      name: e.target.value,
                    });
                    setregDataErr({
                      ...regDataErr,
                      nameErr:
                        e.target.value.length === 0 ? "Required value" : null,
                    });
                  }}
                  className="form-control regInput my-3"
                  id="exampleName"
                  placeholder="Enter Your Name"
                ></input>
                <small className="text-danger">{regDataErr.nameErr}</small>
              </div>
              <div className="form-group py-4">
                <label htmlhtmlFor="regEmail1">Email address</label>

                <input
                  type="email"
                  value={regData.regUserEmail}
                  onChange={(e) => {
                    setregData({
                      ...regData,
                      regUserEmail: e.target.value,
                    });
                    setregDataErr({
                      ...regDataErr,

                      regUserEmailInvalid:
                        e.target.value.length === 0
                          ? "Required value"
                          : validEmail.test(e.target.value) === false
                          ? "Invalid Value"
                          : null,
                    });
                  }}
                  className="form-control regInput my-3 "
                  id="regEmail1"
                  placeholder="Enter email"
                ></input>
                <small className="text-danger">
                  {regDataErr.regUserEmailInvalid}
                </small>
              </div>
              <div className="form-group py-4">
                <label htmlhtmlFor="exampleUsername">Username</label>

                <input
                  type="text"
                  value={regData.username}
                  onChange={(e) => {
                    setregData({
                      ...regData,
                      username: e.target.value,
                    });
                    setregDataErr({
                      ...regDataErr,
                      usernameErr:
                        e.target.value.length === 0
                          ? "Required value"
                          : validUsernameReg.test(e.target.value) === false
                          ? "Invalid Value"
                          : null,
                    });
                  }}
                  className="form-control regInput my-3"
                  id="exampleUsername"
                  placeholder="Enter Your Name"
                ></input>
                <small className="text-danger">{regDataErr.usernameErr}</small>
              </div>
              <div className="form-group py-4">
                <label htmlhtmlFor="regregPassword1">Password</label>
                <div className="container-fluid  justify-content-start input my-4 mx-0 px-0">
                  <div className="row passwdBox justify-content-start py-0 mx-1">
                    <div className="col-lg-10 col-md-10 col-sm-10 ">
                      <input
                        type={regpasswordShown ? "text" : "password"}
                        value={regData.regPassword}
                        onChange={(e) => {
                          setregData({
                            ...regData,
                            regPassword: e.target.value,
                          });
                          setregDataErr({
                            ...regDataErr,

                            regPasswordInvalid:
                              e.target.value.length === 0
                                ? "Required value"
                                : validregPassword.test(e.target.value) ===
                                  false
                                ? "Invalid Password"
                                : null,
                          });
                        }}
                        className="form-control regInput  border-0"
                        id="regregPassword1"
                        placeholder="Password"
                      ></input>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 pt-2 text-end ">
                      <button
                        className="togglePasswd"
                        style={Regdisplayi.show}
                        onClick={showRegPassword}
                      >
                        {" "}
                        <i className={RemoveRedEyeIcon}></i>
                      </button>
                      <button
                        className="togglePasswd"
                        style={Regdisplayi.hide}
                        onClick={hideRegPassword}
                      >
                        {" "}
                        <i className={VisibilityOffIcon}></i>{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <small className="text-danger">
                  {regDataErr.regPasswordInvalid}
                </small>
              </div>
              <div className="form-group py-4 ">
                <label htmlhtmlFor="regPassword1">Confirm Password</label>
                <div className="container-fluid  justify-content-start input my-4 mx-0 px-0">
                  <div className="row passwdBox  justify-content-start py-0 mx-1">
                    <div className="col-lg-8  col-md-8 col-sm-8 ">
                      <input
                        type={regpasswordShown ? "text" : "password"}
                        value={regData.conPassword}
                        onChange={(e) => {
                          setregData({
                            ...regData,
                            conPassword: e.target.value,
                          });
                          setregDataErr({
                            ...regDataErr,

                            conPasswordErr:
                              e.target.value.length === 0
                                ? "Required value"
                                : e.target.value !== regData.regPassword
                                ? "Not Matched"
                                : null,
                          });
                        }}
                        className="form-control regInput border-0"
                        id="regPassword1"
                        placeholder="Password"
                      ></input>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 pt-2 text-end ">
                      <button
                        className="togglePasswd"
                        style={Regdisplayi.show}
                        onClick={showRegPassword}
                      >
                        {" "}
                        <i className={RemoveRedEyeIcon}></i>{" "}
                      </button>
                      <button
                        className="togglePasswd"
                        style={Regdisplayi.hide}
                        onClick={hideRegPassword}
                      >
                        {" "}
                        <i className={VisibilityOffIcon}></i>{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <small className="text-danger">
                  {regDataErr.conPasswordErr}
                </small>
              </div>

              <button type="submit" className="btn  my-4 sub">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
