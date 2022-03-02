import "./NewProduct.css";

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
  const [image, setImage] = useState("");

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
        image,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    console.log(id);
    console.log(name);
    console.log(description);
    console.log(brand);
    console.log(category);
    console.log(image);
  };

  return (
    <>
  
      <div className="newProductContainer">
        <SideBar />
        <div className="newProduct ">
          <h1 className="addProductTitle">Create New Product</h1>
          <form className="addProductForm container " onSubmit={postData}>
            {/* <div className="addProductItem product-id">
              <label>id</label>
              <input className="form-control"
                onChange={(e) => setId(e.target.value)}
                type="text"
                placeholder="product ID"
              />
            </div> */}
            <div className="addProductItem product-name w-100">
              <label>name</label>
              <input
                value={"crystal"}
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                type="text"
                // placeholder="Add new product"
              />
            </div>
            <div className="addProductItem product-description w-100">
              <label>Description</label>
              <input
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="123"
              />
            </div>
            <div className="addProductItem product-brand w-100">
              <label>Brand</label>
              <input
                className="form-control"
                onChange={(e) => setBrand(e.target.value)}
                type="text"
                placeholder="123"
              />
            </div>
            <div className="addProductItem product-category w-100">
              <label>Category</label>
              <input
                className="form-control"
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="123"
              />
            </div>
            <div className="addProductItem product-image w-100">
              <label>image</label>
              <input
                className="form-control"
                onChange={(e) => setImage(e.target.value)}
                type="text"
                placeholder="image link"
              />
            </div>

            <button
              className="addProductButton form-control btn btn-outline-info"
              type="submit"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
