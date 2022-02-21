import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../redux/actions/auth';
import axios from 'axios';

import './Register.css'


const Register = ({ signup, isAuthenticated }) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordShown2, setPasswordShown2] = useState(false);
    
      const [Regdisplayi, setRegdisplayi] = useState({
        show: { display: 'inline' },
        hide: { display: 'none' }
      });
    
      const showRegPassword = () => {
        setRegdisplayi({
          ...Regdisplayi,
          show: { display: 'none' },
          hide: { display: 'inline' }
        })
        setPasswordShown(!passwordShown);
      };
      const hideRegPassword = () => {
        setRegdisplayi({
          ...Regdisplayi,
          show: { display: 'inline' },
          hide: { display: 'none' }
        })
        setPasswordShown(!passwordShown);
      };

      const [Regdisplay, setRegdisplay] = useState({
        show: { display: 'inline' },
        hide: { display: 'none' }
      });
    
      const showRegPassword2 = () => {
        setRegdisplay({
          ...Regdisplayi,
          show: { display: 'none' },
          hide: { display: 'inline' }
        })
        setPasswordShown2(!passwordShown2);
      };
      const hideRegPassword2 = () => {
        setRegdisplay({
          ...Regdisplayi,
          show: { display: 'inline' },
          hide: { display: 'none' }
        })
        setPasswordShown2(!passwordShown2);
      };
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name:'',
        email: '',
        password: '',
        re_password: ''
    });
    const [error, setError] = useState({
      conPasswordErr: ""
    })

    const { first_name, last_name, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(first_name, last_name, email, password, re_password);
            setAccountCreated(true);
        } else {
          setError({
            ...error,
            conPasswordErr : "Not Matched"
          })
        }
    };

    const continueWithGoogle = async () => {
      try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

          window.location.replace(res.data.authorization_url);
      } catch (err) {

      }
  };

  const continueWithFacebook = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/facebook`)

        window.location.replace(res.data.authorization_url);
    } catch (err) {

    }
};

    // if (isAuthenticated) {
    //     return <Navigate to='/' />
    // }
    if (accountCreated) {
        return <Navigate to='/checkmail' />
    }

    return (
        <div className='container regists mt-5 pt-5'>
            <h1>Sign Up</h1>
            <p>Create your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                
            <div className='form-group p-2 m-2'>
            <input
                className='form-control'
                type='text'
                placeholder='First Name*'
                name='first_name'
                value={first_name}
                onChange={e => onChange(e)}
                required
            />
        </div>
        <div className='form-group p-2 m-2'>
            <input
                className='form-control'
                type='text'
                placeholder='Last Name*'
                name='last_name'
                value={last_name}
                onChange={e => onChange(e)}
                required
            />
        </div>
                <div className='form-group p-2 m-2'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email*'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group p-2 m-2'>
                    <input
                        className='form-control'
                        type={passwordShown ? "text" : "password"}
                        placeholder='Password*'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                    <button className='togglePasswd' style={Regdisplayi.show} onClick={showRegPassword}> <i className="far fa-eye"></i></button>
                    <button className='togglePasswd' style={Regdisplayi.hide} onClick={hideRegPassword}> <i className="far fa-eye-slash"></i> </button>
                </div>
                <div className='form-group p-2 m-2'>
                    <input
                        className='form-control'
                        type={passwordShown2 ? "text" : "password"}
                        placeholder='Confirm Password*'
                        name='re_password'
                        value={re_password}
                        onChange={e => onChange(e)}
                        minLength='8'
                        required
                    />
                    <button className='togglePasswd' style={Regdisplay.show} onClick={showRegPassword2}> <i className="far fa-eye"></i></button>
                    <button className='togglePasswd' style={Regdisplay.hide} onClick={hideRegPassword2}> <i className="far fa-eye-slash"></i> </button>
                </div>
                <small className="text-danger">{error.conPasswordErr}</small>
                <button className='btn btn-primary' type='submit'>Register</button>
            </form>
            <button className='btn btn-danger mt-3' onClick={continueWithGoogle}>
                Continue With Google
            </button>
            <br />
            <button className='btn btn-primary mt-3' onClick={continueWithFacebook}>
                Continue With Facebook
            </button>
            <p className='mt-3'>
                Already have an account? <Link to='/login'>Login</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Register);