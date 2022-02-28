import React, { useEffect } from "react";
import { useState } from "react";
import Categories from "./Categories";
import Product from "./../pages/product/Product.css";
import { backendAPI } from "../store";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "../redux/actions/types";
import FallbackImage from "./../files/market.png";
import { addToCard } from "../redux/actions/cart";
import { Card } from 'react-bootstrap';
const Category = (props) => {
  const dispatch = useDispatch();

  const [data, setData] = useState(props.storeData);
  const [filtered, setFilter] = useState(props.storeData);
  const [input, setInput] = useState('');

  /**
   *
   * @param  catItem category name
   */
  const filterResult = (catItem) => {
    const result = props.storeData.filter((currentData) => {
      return currentData.product.category.name == catItem;
    });
    setFilter(result);
  };
  
  // const Category = (props) => {
  //   const dispatch = useDispatch();
  
    // const [data, setData] = useState(props.productcategory);
    // const filterResult = (catItem) => {
    //   const result = props.productcategory.filter((curData) => {
    //     return curData.category === catItem;
    //   });
    //   setData(result);
    // };
    
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

  const addToCartHandler = (values) => {
    console.log("Your cvalues are", values);
    //TODO:
    const {
      store: store_id,
      product: { id: product_id },
    } = values;
    dispatch(addToCard(1, store_id, product_id, 1)); //! hard-coded
  };
  // app -> render pages -> request |-> re render
  useEffect(() => {
    setData(props.storeData);
    setFilter(props.storeData);
  }, [props.storeData]);

  const handelonchange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  useEffect(()=>{
  if (input.length > 0) {
    setFilter(data.filter((item, index, array) => {
      console.log(array, index)
      return (item.product.name.toLowerCase().indexOf(input.toLowerCase()) > -1);
    }));
    console.log(data)
    console.log(input)
  }
  else{
    setFilter(data)
  }

},[input])


  return (
    <>
    <input type="text" placeholder="search" style={{ width: '12em', height: '2em' }} onChange={handelonchange} value={input} />
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <div className="btn-group col-md-9 col-sm-12 col-lg-4" role="group">
              {data
                .map((item) => item.product.category.name)
                .filter((name, index, array) => {
                  return array.indexOf(name) === index;
                })
                .map((name, index) => (
                  <button type="button" class="btn btn-secondary btn-lg" style={{ padding: '1em', margin: '0.7em' }}
                    key={index}
                    className="btn btn-outline-success mb-4"
                    onClick={() => filterResult(name)}
                  >
                    {name}
                  </button>
                ))}
              <button type="button" class="btn btn-secondary btn-lg" style={{ padding: '1em', margin: '0.7em' }}
                className="btn btn-outline-success mb-4"
                onClick={() => setFilter(props.storeData)}
              >
                All
              </button>
              
            </div>
          </div>
          <div className="row">
            <div className="card-group">
              {filtered.map((values, index) => {
                
                const {
                  id: product_price_id,
                  product: {
                    id: product_id,
                    name: title,
                    description: discreption,
                    image:img,
                  },
                  price,
                  store: store_id,
                } = values;
                return (
                  <Link className="col-lg-4 col-md-8 col-sm-8  cardsGrid " to="#" style={{ textDecoration: 'none' }} key={index}>
                  <div >
                    <div style={{ marginTop: '2em'}}>
                    <div key={index}>
                      <Card className=" shadow-lg " style={{ width: '20em', height: '20em', margin: '1em'}} >
                        <Card.Img variant="top" src={img || FallbackImage} style={{ width: '12em', height: '10em', marginLeft: '3.5em' }} />
                        <Card.Body>
                          <Card.Title style={{ padiingTop: '2em' }}>{title}</Card.Title>
                          <Card.Text> Price: {price} </Card.Text>
                          {/* <Card.Text> {discreption} </Card.Text> */}
                          <Card.Text>
                            <button className="btn btn-light"
                              onClick={addToCartHandler.bind(this, values)}>
                              <i className="fas fa-cart-arrow-down"></i>
                            </button>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                  </div>
                </Link>
                  
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;