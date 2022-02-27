import React from 'react'
import Header from '../../components/Header';
import Location from '../../components/Location';
import Partener from '../../components/PartnerFeatures';
import SectionsFeatures from '../../components/SectionsFeatures';
import Services from '../../components/Services';
import {Navigate } from 'react-router-dom';
import { login } from '../../redux/actions/auth';
import { connect } from 'react-redux';
import './Hero.css'

const Hero = ({ manager }) => {

    if ( manager === true ){
        return <Navigate to='/admin' />
    }

    return (
        <>
        <Header />
        <Services />
        <Location/>
        <Partener/>
        <SectionsFeatures/>  
        </>
    )
}

const mapStateToProps = (state) => ({
    manager: state.auth.manager
})

export default connect(mapStateToProps, { login } )(Hero);
