import React, { useState } from 'react'

export default function Login() {

    const [userForm, setUserForm] = useState({
        userEmail: "",
        userPassword: "",
      });
    
      const [userFormErrors, setUserFormErrors] = useState({
        userEmailErr: null,
        passwordErr: null,
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userForm);
      };
      const [passwordShown, setPasswordShown] = useState(false);
      const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
    
      const handleChange = (e) => {
        if (e.target.name === "email") {
          setUserForm({
            ...userForm,
            userEmail: e.target.value,
          });
          setUserFormErrors({
            ...userFormErrors,
            userEmailErr:
              e.target.value.length === 0 ? "This Field is required" : null,
          });
        } else if (e.target.name === "password") {
          setUserForm({
            ...userForm,
            userPassword: e.target.value,
          });
          setUserFormErrors({
            ...userFormErrors,
            passwordErr:
              e.target.value.length === 0
                ? "This Field is required"
                : e.target.value.length < 8
                ? "Length must not be less than 8"
                : null,
          });
        }
      };
    return (
        <>
        <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">          
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-light"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                value={userForm.userEmail}
                name="email"
                placeholder="Example@gmial.com"
                onChange={(e) => handleChange(e)}
                id="exampleInputEmail1"
              />
              <div>
                <small className="text-danger">
                  {userFormErrors.userEmailErr}
                </small>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword6" className="form-label text-light">
                Password
              </label>
              <div>
                <input
                  type={passwordShown ? "text" : "password"}
                  className="form-control"
                  value={userForm.userPassword}
                  name="password"
                  minLength={8}
                  placeholder="Enter Your Password"
                  onChange={(e) => handleChange(e)}
                  id="inputPassword6"
                />
                <span>
                  <i
                    onClick={togglePasswordVisiblity}
                    style={{
                      cursor: "pointer",
                      float: "right",
                      marginTop: -28,
                      marginRight: 15,
                    }}
                    className="far fa-eye"
                  ></i>
                </span>
              </div>
              <div>
                <small className="text-danger">
                  {userFormErrors.passwordErr}
                </small>
              </div>
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-primary">
            Login Now
            </button>
            <a to={"/register"} className="text-center text-dark m-3" href="#">
              Register Now
            </a>
            </div>
          </form>
          </div>
        </div>
      </div>
        </>
    )
}
