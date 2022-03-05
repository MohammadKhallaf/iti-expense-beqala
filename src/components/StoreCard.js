import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Nav, Tab, Tabs } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import FallbackImage from "./../files/market.png";

const StoreCard = (props) => {
  const [key, setKey] = useState("all");
  const { t, i18n } = useTranslation();
  const [data, setData] = useState(props.storeData);
  const [filtered, setFilter] = useState(props.storeData);
  const [input, setInput] = useState("");

  /**
   *
   * @param  catItem category name
   */
  const filterResult = (catItem) => {
    const result = props.storeData.filter((currentData) => {
      return currentData.category_name.name == catItem;
    });
    setFilter(result);
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
          return item.name.toLowerCase().indexOf(input.toLowerCase()) > -1;
        })
      );
    } else {
      setFilter(data);
    }
  }, [input]);

  return (
    <>
      <h1></h1>
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
        <div className="row px-3">
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
              .map((item) => item.category_name.name)
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
        <div className="row justify-content-center">
          {filtered.map((values, index) => {
            const {
              id: id,
              description: discreption,
              name: title,
              image: img,
            } = values;
            return (
              <Link
                className="col-lg-3 col-md-6 col-sm-8  cardsGrid p-0 m-3"
                to={`/products/${id}`}
                style={{
                  textDecoration: "none",
                 
                }}
                key={index}
              >
                <div className="card my-3 storeCard ">
                  <img
                    src={img || FallbackImage}
                    loading="auto"
                    className="card-img-top background"
                    alt={t(`category.${title}`, title)}
                    style={{ height: "15rem" }}
                  />
                  <div className="card-body cardTitle">
                    {t(`category.${title}`, title)}
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

export default StoreCard;
