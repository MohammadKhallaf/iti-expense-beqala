import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Location from '../../components/Location';
import Partener from '../../components/Partener';
import SectionsCart from '../../components/SectionsCart';
import Services from '../../components/Services';

import './Header.css'

export default function Hero() {
    return (
        <>
        <Header />
        <Services />
        <Location/>
        <Partener/>
        <SectionsCart />
        <Footer/>  
        </>
    )
}
