import { Link } from "react-router-dom";
import "./AdminProduct.css";

import { productData } from "../../DummyData";
import { Publish } from "@material-ui/icons";

import SideBar from "../../SideBar/SideBar";
import { useState } from "react";

export default function Product() {
  return (
    <>
      <div className="productContainer">
        <SideBar />
        <div className="product">
          <div className="productTitleContainer">
            <h1 className="productTitle">Product Edit </h1>
          
          </div>
         
          <div className="productBottom">
            <form className="productForm">
              <div className="productFormLeft">
                <label>Product Name</label>
                <input type="text" placeholder="Apple " value={""} />
                <label>Quantity</label>
                <select name="inStock" id="idStock">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <label>Active</label>
                <select name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="productFormRight">
                <div className="productUpload">
                  <img
                    src="https://www.collinsdictionary.com/images/full/apple_158989157.jpg"
                    alt=""
                    className="productUploadImg"
                  />
                  <label htmlFor="file">
                    <Publish />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="productButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
