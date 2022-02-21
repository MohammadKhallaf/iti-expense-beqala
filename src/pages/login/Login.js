import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth';
import axios from 'axios';

const Login = ({ login, isAuthenticated, error, manager }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };
    // login using google auth
    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };
    // login using facebook auth
    const continueWithFacebook = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/facebook`)

            window.location.replace(res.data.authorization_url);
            

        } catch (err) {

        }
    };
    // is the user authenticated
    if (isAuthenticated && manager === false){
        return <Navigate to='/' />
    }
    else if(isAuthenticated && manager === true) {
        return <Navigate to='/register' />
    }
   

    const error_m = () => (
        <p className='text-danger'>Please Enter valid Data</p>
    );
    const empty = () => (
            <p></p>
        );
    return (
        <div className='container mt-5 pt-5'>
            <h1>Sign In</h1>
            <p>Sign into your Account</p>
            {error ? error_m() : empty()}
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Login</button>
            </form>
            <button className='btn btn-danger mt-3' onClick={continueWithGoogle}>
                Continue With Google
            </button>
            <br />
            <button className='btn btn-primary mt-3' onClick={continueWithFacebook}>
                Continue With Facebook
            </button>
            <p className='mt-3'>
                Don't have an account? <Link to='/register'>Sign Up</Link>
            </p>
            <p className='mt-3'>
                Forgot your Password? <Link to='/reset-password'>Reset Password</Link>
            </p>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error,
    manager: state.auth.manager
})

export default connect(mapStateToProps , { login })(Login);