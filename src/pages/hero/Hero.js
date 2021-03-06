import React from 'react'
import Header from '../../components/Header';
import Location from '../../components/Location';
import Partener from '../../components/PartnerFeatures';
import SectionsFeatures from '../../components/SectionsFeatures';
import Services from '../../components/Services';
import {Navigate } from 'react-router-dom';
import { login } from '../../redux/actions/auth';
import { connect } from 'react-redux';
import { useTranslation } from "react-i18next";
import './Hero.css'

const Hero = ({ manager }) => {

    if ( manager === true ){
        return <Navigate to='/owner' />
    }

    return (
     
        <div >
        <Header />
        <Services />
        <Location/>
        <Partener/>
        {/* <Section sFeatures/>   */}
        </div>
    
    )
}

const mapStateToProps = (state) => ({
    manager: state.auth.manager
})

export default connect(mapStateToProps, { login } )(Hero);
