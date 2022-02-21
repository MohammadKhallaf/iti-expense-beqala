import React from 'react';
import { useState } from 'react';
import Categories from './Categories';
import Product from './../pages/product/Product.css'
import { backendAPI } from '../store';



const Category = () => {
    const [data, setData] = useState(Categories);
    const filterResult = (catItem) => {
        const result = Categories.filter((curData) => {
            return curData.category === catItem;
        });
        setData(result)
    }
    /**
     * add to cart 
     * send to server: card 
     *  - user id
     *  - store id
     *  - product id
     *  - quantity = 1 (add just one item)
     * 
     * check the response from the server
     * if the response is succeed => add to cart in the frontend
     */
     
    const addToCartHandler = (values)=>{
        backendAPI.post("/cart",{
            "user_id": 1,
            "store_id":5,
            "product_id":values.id,
            "quantity":1
        }).then(response=>console.log(response))
    }
    return (
        <>
            <h1></h1>
            <div className='container-fluid mx-2'>
                <div className='row mt-5 mx-2'>
                    <div className='col-md-3'>
                        <div className='row'>
                        <button className='btn btn-outline-success mb-4' onClick={() => filterResult('Fruits')}>Fruits</button>
                        <button className='btn btn-outline-success mb-4' onClick={() => filterResult('vegtables')}>vegtables</button>
                        <button className='btn btn-outline-success mb-4' onClick={() => filterResult('milk')}>milk</button>
                        <button className='btn btn-outline-success mb-4' onClick={() => filterResult('productName')}>productName</button>
                        <button className='btn btn-outline-success mb-4' onClick={() => setData(Categories)}>All</button>
                  </div>
                    </div>
                    <div className='col-md-9'>
                        <div className='row'>
                            {data.map((values) => {
                                const { id, title, price, img, discreption } = values;
                                return (
                                    <>
                                        <div className='col-md-4' key={id}>


                                            <div className="card m-2" style={{ width: "15rem", height:"28rem" }} id="card">
                                                <img src={img} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{title}</h5>
                                                    <p>Price: {price}</p>
                                                    <p className="card-text">{discreption}</p>
                                                    <div id='bttn'>
                                                    <button className="btn btn-light" >
                                                        <i className="fa-fw far fa-eye"></i>
                                                    </button>
                                                    <button className="btn btn-light" onClick={addToCartHandler.bind(this,values)}>
                                                        <i className="fas fa-cart-arrow-down"></i>
                                                    </button>
                                                    <button className="btn btn-light">
                                                        <i className="far fa-heart"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>

        </>

    )


}

export default Category;