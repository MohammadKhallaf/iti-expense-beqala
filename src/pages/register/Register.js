import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../redux/actions/auth";
import axios from "axios";

import "./Register.css";

const Register = ({ signup, isAuthenticated, error }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);

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
    setPasswordShown(!passwordShown);
  };
  const hideRegPassword = () => {
    setRegdisplayi({
      ...Regdisplayi,
      show: { display: "inline" },
      hide: { display: "none" },
    });
    setPasswordShown(!passwordShown);
  };

  const [Regdisplay, setRegdisplay] = useState({
    show: { display: "inline" },
    hide: { display: "none" },
  });

  const showRegPassword2 = () => {
    setRegdisplay({
      ...Regdisplayi,
      show: { display: "none" },
      hide: { display: "inline" },
    });
    setPasswordShown2(!passwordShown2);
  };
  const hideRegPassword2 = () => {
    setRegdisplay({
      ...Regdisplayi,
      show: { display: "inline" },
      hide: { display: "none" },
    });
    setPasswordShown2(!passwordShown2);
  };
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });
  const [errorcon, setError] = useState({
    conPasswordErr: "",
  });

  const { first_name, last_name, email, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      signup(first_name, last_name, email, password, re_password);
      setAccountCreated(true);
    } else {
      setError({
        ...errorcon,
        conPasswordErr: "error! cofirm password not match password",
      });
    }
  };

  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  const continueWithFacebook = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/facebook`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  // if (isAuthenticated) {
  //     return <Navigate to='/' />
  // }
  if (accountCreated && error === false) {
    return <Navigate to="/checkmail" />;
  }

  // errors
  const error_m = () => (
    <p className="text-danger">
      Your email or password not valid, please try again.
    </p>
  );
  const empty = () => <p></p>;

  return (
    <div className="container-fluid text-center regist mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="border box border-secondary col-xl-4 col-lg-6 col-md-9 col-sm-12 p-5 m-5">
        <h2> Welcome to ExpenseBeqala <i class="text-danger fas fa-heart"></i></h2>
          <h4 classNow="text-secondary p-5 m-2">SignUp now and Enjoy!</h4>
          {error ? error_m() : empty()}
          <small className="text-danger  "> {errorcon.conPasswordErr}</small>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group  p-2 m-2">
              <input
                className="form-control"
                type="text"
                placeholder="First Name*"
                name="first_name"
                value={first_name}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="form-group p-2 m-2">
              <input
                className="form-control"
                type="text"
                placeholder="Last Name*"
                name="last_name"
                value={last_name}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="form-group p-2 m-2">
              <input
                className="form-control"
                type="email"
                placeholder="Email*"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="form-group p-2 m-2">
              <div className="col-lg-12 col-md-12 col-sm-10">
                <input
                  className="form-control"
                  type={passwordShown ? "text" : "password"}
                  placeholder="Password*"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  minLength="8"
                  required
                />
                
                <div className="field-icon col-lg-2 col-md-2 col-sm-2  text-end ">
                  <button
                    className="togglePasswd"
                    style={Regdisplayi.show}
                    onClick={showRegPassword}
                  >
                    <i className="far fa-eye"></i>
                  </button>
                  <button
                    className="togglePasswd"
                    style={Regdisplayi.hide}
                    onClick={hideRegPassword}
                  >
                    <i className="far fa-eye-slash navicon"></i>
                  </button>
                </div>
                <small className='text-danger'>Passwords must be 8 characters and not similar to name or email.</small>
              </div>
            </div>

            <div className="form-group p-2 m-2 ">
              <div className="col-lg-12 col-md-12 col-sm-10 ">
                <input
                  className="form-control"
                  type={passwordShown2 ? "text" : "password"}
                  placeholder="Confirm Password*"
                  name="re_password"
                  value={re_password}
                  onChange={(e) => onChange(e)}
                  minLength="8"
                  required
                />
                <div className=" field-icon col-lg-2 col-md-4 col-sm-2 text-end ">
                  <button
                    className="togglePasswd"
                    style={Regdisplay.show}
                    onClick={showRegPassword2}
                  >
                    <i className="far fa-eye"></i>
                  </button>
                  <button
                    className="togglePasswd"
                    style={Regdisplay.hide}
                    onClick={hideRegPassword2}
                  >
                    <i className="far fa-eye-slash"></i>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button className="btn btn-lg btn-dark my-4 btn-r col-lg-7 col-md-7 col-sm-12" type="submit">
                Register
              </button>
              <p className="mt-3">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
          <p> OR</p>
          <button
            className="btn m-2 btn-light border border-secondary  btn-r col-lg-7 col-md-7 col-sm-12"
            onClick={continueWithGoogle}
          >
          <i class="fab fa-google m-2 "></i> continue with Google
          </button>
          <br className="p-4 m-4" />
          <button
            className="btn p-2 m-2 btn-primary btn-r col-lg-7 col-md-7 col-sm-12"
            onClick={continueWithFacebook}
          >
          <i class="fab fa-facebook-f m-2"> </i>continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
});

export default connect(mapStateToProps, { signup })(Register);
