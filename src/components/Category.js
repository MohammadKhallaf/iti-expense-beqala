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
import { Card, Tab, Tabs } from "react-bootstrap";
import { addToLocalCart } from "../redux/actions/local";

const Category = (props) => {
  //<--store-->
  const user = useSelector((state) => state.auth.user);

  //<--states-->
  const [key, setKey] = useState("all");
  const [data, setData] = useState(props.storeData);
  const [filtered, setFilter] = useState(props.storeData);
  const [input, setInput] = useState("");

  //<--hooks-->
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  //<==Functions==>
  /**
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
          <Tabs
            fill
            lang={i18n.language}
            dir={i18n.language === "ar" ? "rtl" : null}
            activeKey={key}
            onSelect={(k) => {
              setKey(k);
              if (k !== "all") {
                filterResult(k);
              } else {
                setFilter(props.storeData);
              }
            }}
            className="mb-0 justify-content-center flex-column flex-sm-row"
          >
            <Tab
              eventKey="all"
              title={t("category.All")}
              className="w-100"
              onClick={() => setFilter(props.storeData)}
            ></Tab>
            {data
              .map((item) => item.product.category.name)
              .filter((name, index, array) => {
                return array.indexOf(name) === index;
              })
              .map((name, index) => (
                <Tab
                  eventKey={name}
                  title={t(`category.${name}`, name)}
                  // onClick={() => filterResult(name)}
                  key={index}
                ></Tab>
              ))}
          </Tabs>
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
