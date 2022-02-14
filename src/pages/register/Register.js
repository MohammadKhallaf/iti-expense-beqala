import React, { useState } from 'react'

export default function Register() {
    const [userForm2, setUserForm2]= useState ({
        userEmail: "",
        userPassword: "",
        name:"",
        userName:"",
        coNpassword:"",
      });
    
      const [userFormErrors2, setUserFormErrors2] = useState({
        userEmailErr: null,
        passwordErr: null,
        nameErr:null,
        userNameErr: null,
        coNpasswordErr:null,
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
      };
      const [passwordShown, setPasswordShown] = useState(false);
      const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
      const validUsernameReg = new RegExp(/^\S*$/);
    
      const handleChange2 = (e) => {
        if (e.target.name === "email") {
          setUserForm2({
            ...userForm2,
            userEmail: e.target.value,
          });
          setUserFormErrors2({
            ...userFormErrors2,
            userEmailErr:
              e.target.value.length === 0
                ? "This Field is required"
                : null,
          });
        } else if (e.target.name === "password") {
          setUserForm2({
            ...userForm2,
            userPassword: e.target.value,
          });
          setUserFormErrors2({
            ...userFormErrors2,
            passwordErr:
              e.target.value.length === 0
                ? "This Field is required"
                : e.target.value.length < 8
                ? "Length must not be less than 8"
                : null,
          });
          
        }
        else if (e.target.name === "name") {
          setUserForm2({
            ...userForm2,
            name: e.target.value,
          });
          setUserFormErrors2({
            ...userFormErrors2,
            nameErr:
              e.target.value.length === 0
                ? "This Field is required"
                : null,
          });
        }
        
      };
      
      const handleChange3 = (e) => { if (e.target.name === "coNpassword") {
        setUserForm2({
          ...userForm2,
          coNpassword: e.target.value,
        });
        setUserFormErrors2({
          ...userFormErrors2,
          coNpasswordErr:
            e.target.value.length === 0
              ? "This Field is required"
              : e.target.value !== userForm2.userPassword ? "Not Matched"
              : null,
        }); 
      }} 
    
      const handleChange4 = (e) => { if (e.target.name === "userName") {
        setUserForm2({
          ...userForm2,
          userName: e.target.value,
        });
        setUserFormErrors2({
          ...userFormErrors2,
          userNameErr:
            e.target.value.length === 0
              ? "This Field is required"
              :validUsernameReg.test(e.target.value) === false ? "Invalid Value" : null,
        });
      }} 
      return (
        <div className="container col-md-3 m-auto p-5">
          <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-light">
                Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={userForm2.name}
                  name="name"
                  placeholder="Your Name"
                  onChange={(e) => handleChange2(e)}
                  id="name"
                />
                <div>
                    <small className="text-danger">{userFormErrors2.nameErr}</small>
                </div>
                <label htmlFor="exampleInputEmail2" className="form-label text-light">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={userForm2.userEmail}
                  name="email"
                  placeholder="Example@gmial.com"
                  onChange={(e) => handleChange2(e)}
                  id="exampleInputEmail2"
                />
                <div>
                    <small className="text-danger">{userFormErrors2.userEmailErr}</small>
                </div>
                <label htmlFor="userName" className="form-label text-light">
                UserName
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={userForm2.userName}
                  name="userName"
                  placeholder="Your userName"
                  pattern="('/^\S*$/')"
                  title="No space allowed"
                  onChange={(e) => handleChange4(e)}
                  id="userName"
                />
                <div>
                    <small className="text-danger">{userFormErrors2.userNameErr}</small>
                </div>
                <label htmlFor="inputPassword7" className="form-label text-light">
                  Password
                </label>
                <div>
                <input
                  type={passwordShown ? "text" : "password"}
                  className="form-control"
                  value={userForm2.userPassword}
                  name="password"
                  minLength={8}
                  placeholder="Enter Your Password"
                  onChange={(e) => handleChange2(e)}
                  id="inputPassword7"
                  pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$"
                  title="Must contain at least One lowercase, one uppercase, one number and one special character."
                /><span><i onClick={togglePasswordVisiblity} style={{cursor: 'pointer', float: 'right', 'marginTop':-28, 'marginRight': 15}} className="far fa-eye"></i></span>
                </div>
                  <div>
                      <small className="text-danger">{userFormErrors2.passwordErr}</small>
                  </div>
                
                <label htmlFor="inputPassword8" className="form-label text-light">
                  Confirm Password
                </label>
                <div>
                <input
                  type="password"
                  className="form-control"
                  value={userForm2.coNpassword}
                  name="coNpassword"
                  minLength={8}
                  placeholder="Confirm Password"
                  onChange={(e) => handleChange3(e)}
                  id="inputPassword8"
                  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                />
                </div>
                  <div>
                      <small className="text-danger">{userFormErrors2.coNpasswordErr}</small>
                  </div>
                </div>
            <button type="submit" className="btn btn-primary">
              Resiter Now
            </button>
          </form>
        </div>
      );
}
