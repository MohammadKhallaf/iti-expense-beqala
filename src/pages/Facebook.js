import React, { useEffect } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { facebookAuthenticate } from '../redux/actions/auth';
import queryString from 'query-string';

const Facebook = ({ isAuthenticated,manager, facebookAuthenticate }) => {
    let location = useLocation();

    useEffect(() => {
        const values = queryString.parse(location.search);
        const state = values.state ? values.state : null;
        const code = values.code ? values.code : null;

        console.log('State: ' + state);
        console.log('Code: ' + code);

        if (state && code) {
            facebookAuthenticate(state, code);
        }
    }, [location]);

    if (isAuthenticated && manager === false){
        return <Navigate to='/' />
    }
    else if(isAuthenticated && manager === true) {
        return <Navigate to='/register' />
    }

    return (
        <div className='container'>
            <div className='jumbotron mt-5'>
                <h1 className='display-4'>Welcome to ExpenseBeqala!</h1>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error,
    manager: state.auth.manager
})

export default connect(mapStateToProps, { facebookAuthenticate })(Facebook);
