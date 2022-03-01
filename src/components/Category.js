import React, { useEffect } from "react";

/*
to store in local storage :
1. { json object } 
2. add or remove to that object
*/
import { useState } from "react";
import Categories from "./Categories";
import Product from "./../pages/product/Product.css";
import { backendAPI } from "../store";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM } from "../redux/actions/types";
import { useTranslation } from "react-i18next";
import FallbackImage from "./../files/market.png";
import { addToCard } from "../redux/actions/cart";
import { Card } from "react-bootstrap";

const Category = (props) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [data, setData] = useState(props.storeData);
  const [filtered, setFilter] = useState(props.storeData);
  const [input, setInput] = useState("");
  const user = useSelector((state) => state.auth.user);
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
    // [/]
    // <---{ SERVER DB }--->
    const {
      store: store_id,
      product: { id: product_id },
    } = values;

    if (user) {
      // if logged in => store in DB, no need for local storage
      dispatch(addToCard(user.id, store_id, product_id, 1));
      return;
    }

    // <---{ LOCAL STORAGE }--->
    const cartObject = {
      store_id,
      product_id,
      quantity: 1,
    };
    // case 1 : there is no previous cart
    // case 2 : there is a previous cart - with different product
    // case 3 : there is a previous cart - with same product

    const reqObj = JSON.parse(localStorage.getItem(`cart-${store_id}`)); // []

    // there is a cart for that store
    if (reqObj != null) {
      const productList = reqObj; // []
      const ourProduct = reqObj.filter(
        (product) => product.product_id === product_id
      )[0];

      if (ourProduct) {
        // if the product is in the list
        const index = reqObj.findIndex(
          (product) => product.product_id === product_id
        );
        const newQuantity = ourProduct.quantity + 1;
        const newProductObj = {
          ...ourProduct,
          quantity: newQuantity,
        };
        productList.splice(index, 1, newProductObj);
      } else {
        // case 2.1: array => product is not existed in the array
        productList.push(cartObject);
      }

      localStorage.setItem(`cart-${store_id}`, JSON.stringify(productList));
    } else {
      // if there is no any carts for that store
      localStorage.setItem(`cart-${store_id}`, JSON.stringify([cartObject]));
    }
  };
  // app -> render pages -> request |-> re render
  useEffect(() => {
    i18n.changeLanguage("ar");
    setData(props.storeData);
    setFilter(props.storeData);
  }, [props.storeData]);
  

  const handelonchange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  useEffect(() => {
    if (input.length > 0) {
      setFilter(
        data.filter((item, index, array) => {
          console.log(array, index);
          return (
            item.product.name.toLowerCase().indexOf(input.toLowerCase()) > -1
          );
        })
      );
      console.log(data);
      console.log(input);
    } else {
      setFilter(data);
    }
  }, [input]);

  return (
    <>
      <div className="container mb-3 ">
        <input
          type="text"
          placeholder="search"
          className="form-control py-2"
          onChange={handelonchange}
          value={input}
        />
      </div>

      <div className="container">
        <div className="row ">
          <div>
            {data
              .map((item) => item.product.category.name)
              .filter((name, index, array) => {
                return array.indexOf(name) === index;
              })
              .map((name, index) => (
                <button
                  className="btn btn-outline-success mb-4 col-lg-3 py-2"
                  onClick={() => filterResult(name)}
                >
                  {t(`category.${name}`, name)}
                </button>
              ))}
            <button
              className="btn btn-outline-success mb-4 col-lg-3 py-2"
              onClick={() => setFilter(props.storeData)}
            >
              All
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row ">
          {filtered.map((values, index) => {
            const {
              id: product_price_id,
              product: {
                id: product_id,
                name: title,
                description: discreption,
                image: img,
              },
              price,
              store: store_id,
            } = values;
            return (
              <Link
                className="col-lg-3 col-md-6 col-sm-8  cardsGrid "
                to="#"
                style={{ textDecoration: "none" }}
                key={index}
              >
                <div>
                  <div className="card my-3 storeCard" style={{}}>
                    <img
                      src={img || FallbackImage}
                      className="card-img-top background"
                      alt="..."
                      style={{ height: "15rem" }}
                    />
                    <div className="card-body cardTitle">
                      {t(`category.${title}`, title)}
                    </div>
                    <div className="card-body cardText">
                      <p> Price: {price} </p>
                      <button
                        className="btn btn-light"
                        onClick={addToCartHandler.bind(this, values)}
                      >
                        <i className="fas fa-cart-arrow-down"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
