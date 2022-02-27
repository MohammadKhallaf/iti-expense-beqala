import "./NewProduct.css";
import Navbar from "../../Navbar/Navbar";
import SideBar from "../../SideBar/SideBar";
import React, { useState } from "react";
import axios from "axios";

export default function NewProduct() {
  // const [product , setProduct] = useState('')
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  const postData = (event) => {
    event.preventDefault();
    console.log("enter postData function");
    axios
      .post(`http://127.0.0.1:8000/product/product/`, {
        id,
        name,
        description,
        brand,
        category,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    console.log(id);
    console.log(name);
    console.log(description);
    console.log(brand);
    console.log(category);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="newProductContainer">
        <SideBar />
        <div className="newProduct">
          <h1 className="addProductTitle">Create New Product</h1>
          <form className="addProductForm" onSubmit={postData}>
            {/* <div className="addProductItem product-id">
              <label>id</label>
              <input
                onChange={(e) => setId(e.target.value)}
                type="text"
                placeholder="product ID"
              />
            </div> */}
            <div className="addProductItem product-name">
              <label>name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Add new product"
              />
            </div>
            <div className="addProductItem product-description">
              <label>Description</label>
              <input
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="123"
              />
            </div>
            <div className="addProductItem product-brand">
              <label>Brand</label>
              <input
                onChange={(e) => setBrand(e.target.value)}
                type="text"
                placeholder="123"
              />
            </div>
            <div className="addProductItem product-category">
              <label>Category</label>
              <input
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="123"
              />
            </div>

            <button className="addProductButton" type="submit">
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
