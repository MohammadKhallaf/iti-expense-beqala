import React from 'react'

import Bakery from "./../files/services/Bakery.jpg"
import Pharmacy from "./../files/services/Pharmacy.jpg"
import Supermaket from "./../files/services/Supermarket.jpg"

export default function Services() {
    return ( 
        <>
        <div id='home-services' className="container-fluid marketing  text-center py-5 service">
        <h3 className="my-3" >Our Available Services</h3>
        <div className="row text-center py-5">
          <div className="col-lg-4">
          <img className="bd-placeholder-img rounded-circle " width="200" height="200" src ={Supermaket} role="img" />
    
            <h2 className="my-3" >Supermarkets</h2>
          </div>
          <div className="col-lg-4">
            <img className="bd-placeholder-img rounded-circle "  width="200" height="200" src ={Bakery} role="img" />
    
            <h2 className="my-3" >Bakeries</h2>
          </div>
          <div className="col-lg-4">
          <img className="bd-placeholder-img rounded-circle " width="200" height="200" src ={Pharmacy} role="img" />
    
            <h2 className="my-3" >Pharmacies</h2>
          </div>
        </div>
        </div>
        </>
    )
}
