import React from "react"
import marketTest from "./../files/fresh-market-logo-test.jpg"

export default function ProductCard() {
    const gallery = [
      "product1",
      "product1",
      "product1",
      "product1",
      "product1",
      "product1",
      "product1",
      "product1",
      "25"
    ];


    return(
        <>
        {gallery.map((product) =>{
            <div className="card shadow"  style={{width:'18em'}}>
            <img src={marketTest} className="card-img-top" alt="NotFound"/>
            <div className="card_body">
            <h5 className="card_title p-1 ">{product}</h5>
            <p className="card_price p-1">{25} EGP</p>
            <button className="btn btn-success m-2"
            >Add to cart</button>
            </div>
            </div>
       

})}
        
        </>
    )
}
    
