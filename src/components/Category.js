import React, { useEffect } from "react";
import { useState } from "react";
import Categories from "./Categories";
import Product from "./../pages/product/Product.css";
import { backendAPI } from "../store";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "../redux/actions/types";
import FallbackImage from "./../files/market.png";
const Category = (props) => {
  const dispatch = useDispatch();

  const [data, setData] = useState(props.storeData);
  const [filtered, setFilter] = useState(props.storeData);

  /**
   * 
   * @param  catItem category name
   */
  const filterResult = (catItem) => {
    const result = props.storeData.filter(
      (currentData) => {
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
    console.log(values);
    //TODO:
    backendAPI
      .post("cart/", {
        user_id: 1, //!hard coded
        store_id: values.store_id, 
        product_id: values.id, 
        quantity: 1, //!hard coded
      })
      .then((response) => {
        console.log(response);
        dispatch({ type: ADD_ITEM, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
  // app -> render pages -> request |-> re render
  useEffect(() => {
    setData(props.storeData);
    setFilter(props.storeData)
  }, [props.storeData]);

  return (
    <>
      <h1></h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <div className="row">
              {
                (data.map(item=>item.product.category.name))
                .filter((name,index,array)=>{
                  console.log(array,index,name)
                  return array.indexOf(name) === index;
                })
                .map(name=>
                  <button
                className="btn btn-outline-success mb-4"
                onClick={() => filterResult(name)}
              >
                {name}
              </button>
                  
                  )
              }
              <button
                className="btn btn-outline-success mb-4"
                onClick={() => setFilter(props.storeData)}
              >
                All
              </button>
              {/* <button
                className="btn btn-outline-success mb-4"
                onClick={() => filterResult("Fruits")}
              >
                Fruits
              </button>
              <button
                className="btn btn-outline-success mb-4"
                onClick={() => filterResult("vegtables")}
              >
                vegtables
              </button>
              <button
                className="btn btn-outline-success mb-4"
                onClick={() => filterResult("milk")}
              >
                milk
              </button>
              <button
                className="btn btn-outline-success mb-4"
                onClick={() => filterResult("productName")}
              >
                productName
              </button>
              <button
                className="btn btn-outline-success mb-4"
                onClick={() => setData(props.storeData)}
              >
                All
              </button> */}
            </div>
          </div>
          <div className="col-md-9">
            <div className="row ">
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
                    <div className="card my-3 storeCard" style={{ width: "15rem" }} >
                      <img src={ img || FallbackImage } className="card-img-top background" alt="..." style={{ height:"20rem" }}/>
                      <div className="card-body cardTitle">
                        <p className="card-title  cardTitle">{title}</p>
                      </div>
                      <div>
                        <p>Price: {price}</p>
                        <p className="card-text">{discreption}</p>
                        <button
                            className="btn btn-light"
                            onClick={addToCartHandler.bind(this, values)}
                          >
                            <i className="fas fa-cart-arrow-down"></i>
                          </button>
                          <button className="btn btn-light">
                            <i className="far fa-heart"></i>
                          </button>
                      </div>
                    </div>
                  </div>
                </Link>
                  // <div className="col-md-6 col-lg-4 me-3" key={index}>
                  //   <div
                  //     className="card m-2"
                  //     style={{ width: "15rem", height: "28rem" }}
                  //     id="card"
                  //   >
                  //     <img
                  //       src= {img || FallbackImage }
                  //       className="card-img-top"
                  //       alt="..."
                  //     />
                  //     <div className="card-body">
                  //       <h5 className="card-title">{title}</h5>
                  //       <p>Price: {price}</p>
                  //       <p className="card-text">{discreption}</p>
                  //       <div id="bttn">
                  //         {/* <button className="btn btn-light">
                  //           <i className="fa-fw far fa-eye"></i>
                  //         </button> */}
                  //         <button
                  //           className="btn btn-light"
                  //           onClick={addToCartHandler.bind(this, values)}
                  //         >
                  //           <i className="fas fa-cart-arrow-down"></i>
                  //         </button>
                  //         <button className="btn btn-light">
                  //           <i className="far fa-heart"></i>
                  //         </button>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </div>
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
