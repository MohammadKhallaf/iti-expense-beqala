import React, { useEffect } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { googleAuthenticate } from '../redux/actions/auth';
import queryString from 'query-string';

const Google = ({ googleAuthenticate, isAuthenticated, error, manager}) => {
    let location = useLocation();

    useEffect(() => {
        const values = queryString.parse(location.search);
        const state = values.state ? values.state : null;
        const code = values.code ? values.code : null;

        console.log('State: ' + state);
        console.log('Code: ' + code);

        if (state && code) {
            googleAuthenticate(state, code);
        }
    }, [location]);

    if (isAuthenticated && manager === false){
        return <Navigate to='/' />
    }
    else if(isAuthenticated && manager === true) {
        return <Navigate to='/UserDashboard' />
    }

    return (
        <div className='container'>
            <div class='jumbotron mt-5'>
                <h1 class='display-4'>Welcome to ExpenseBeqala!</h1>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error,
    manager: state.auth.manager
})

export default connect(mapStateToProps, { googleAuthenticate })(Google);
