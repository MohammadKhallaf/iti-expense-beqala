import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../redux/actions/auth";
import axios from "axios";
import { useTranslation } from "react-i18next";


const Login = ({ login, isAuthenticated, error, manager }) => {
  const { t, i18n } = useTranslation();
  const [passwordShown, setPasswordShown] = useState(false);

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
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };
  // login using google auth
  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };
  // login using facebook auth
  const continueWithFacebook = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/facebook`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };
  // normal user authenticated
  if (isAuthenticated && manager === false) {
    return <Navigate to="/" />;
  } // manager user authenticated
  else if (isAuthenticated && manager === true) {
    return <Navigate to="/owner" />;
  }

  // errors
  const error_m = () => (
    <p className="text-danger">
      {t("Login.Your email or password not valid, please try again.")}
    </p>
  );
  const empty = () => <p></p>;
  return (
    <div className="container-fluid text-center regist mt-5 pt-5" lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : null}>
      <div className="row justify-content-center">
        <div className="border border-secondary col-lg-4 col-md-6 col-sm-12 m-5 p-5 ">
          <h2>
            {" "}
            {t("Login.Welcome to ExpenseBeqala")}{" "}
            <i className="text-danger fas fa-heart"></i>
          </h2>

          <h3>{t("Login.Login now and enjoy!")}</h3>
          {error ? error_m() : empty()}
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group p-2 m-4">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="form-group p-2 m-4">
              <input
                className="form-control"
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                minLength="6"
                required
              />
              <div className="field-icon col-lg-2 col-md-2 col-sm-2  text-end ">
                <button
                  type="button"
                  className="togglePasswd"
                  style={Regdisplayi.show}
                  onClick={showRegPassword}
                >
                  <i className="far fa-eye"></i>
                </button>
                <button
                  type="button"
                  className="togglePasswd"
                  style={Regdisplayi.hide}
                  onClick={hideRegPassword}
                >
                  <i className="far fa-eye-slash navicon"></i>
                </button>
              </div>
              <p className="mt-2">
                <Link className="text-dark" to="/reset-password">
                  {t("Login.Forgot your Password?")}
                </Link>
              </p>
            </div>
            <button
              className="btn btn-lg btn-dark my-2 btn-r col-lg-7 col-md-7 col-sm-12"
              type="submit"
            >
              {t("Login.Login")}
            </button>
          </form>
          <p> {t("Login.OR")}</p>
          <button
            className="btn m-2 btn-light border border-secondary  btn-r col-lg-7 col-md-7 col-sm-12"
            onClick={continueWithGoogle}
          >
            <i className="fab fa-google m-2 "></i> {t("Login.continue with Google")}
          </button>
          <br className="p-4 m-4" />
          <button
            className="btn p-2 m-2 btn-primary btn-r col-lg-7 col-md-7 col-sm-12"
            onClick={continueWithFacebook}
          >
          <i className="fab fa-facebook-f m-2"> </i>{t("Login.continue with Facebook")}
          </button>
          <p className="mt-3">
            {t("Login.Don't have an account?")} <Link to="/register">{t("Login.Sign Up")}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
  manager: state.auth.manager,
});

export default connect(mapStateToProps, { login })(Login);
