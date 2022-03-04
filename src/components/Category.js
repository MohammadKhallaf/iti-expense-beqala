import React, { useEffect } from "react";

/*
to store in local storage :
1. { json object } 
2. add or remove to that object
*/
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import FallbackImage from "./../files/market.png";
import { addToCard } from "../redux/actions/cart";
import { Card } from "react-bootstrap";
import { addToLocalCart } from "../redux/actions/local";

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
   * 
   */


  

  const addToCartHandler = (values) => {
    // [/]
    // <---{ SERVER DB }--->
    const {
      store: { id: store_id },
      product: { id: product_id },
    } = values;

    if (user) {
      // if logged in => store in DB, no need for local storage
      dispatch(addToCard(user.id, store_id, product_id, 1));
      return;
    }

    // <---{ LOCAL STORAGE }--->
    const cartObject = {
      store: values.store,
      product: values.product,
      quantity: 1,
    };

    dispatch(addToLocalCart(cartObject));
  };

  useEffect(() => {
    
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
          return (
            item.product.name.toLowerCase().indexOf(input.toLowerCase()) > -1
          );
        })
      );
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
              store: { id: store_id },
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
                    <p>{t(`category.${discreption}`, discreption)}</p>
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
