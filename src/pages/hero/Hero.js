import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Location from '../../components/Location';
import Partener from '../../components/PartnerFeatures';
import SectionsFeatures from '../../components/SectionsFeatures';
import Services from '../../components/Services';

import './Hero.css'

export default function Hero() {
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
