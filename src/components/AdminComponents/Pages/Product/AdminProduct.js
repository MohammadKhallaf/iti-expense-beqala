import { Link } from "react-router-dom";
import "./AdminProduct.css";
import Charts from "../../Charts/Charts";
import { productData } from "../../DummyData";
import { Publish } from "@material-ui/icons";
import Navbar from "../../Navbar/Navbar";
import SideBar from "../../SideBar/SideBar";
import { useState } from "react";

export default function Product() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="productContainer">
        <SideBar />
        <div className="product">
          <div className="productTitleContainer">
            <h1 className="productTitle">Product Edit </h1>
            {/* <Link to="/admin/newproduct">
              <button className="productAddButton">Create</button>
            </Link> */}
          </div>
          {/* <div className="productTop">
            <div className="productTopLeft">
              <Charts
                data={productData}
                dataKey="Sales"
                title="Sales Performance"
              />
            </div>
            <div className="productTopRight">
              <div className="productInfoTop">
                <img
                  src="https://www.collinsdictionary.com/images/full/apple_158989157.jpg"
                  alt=""
                  className="productInfoImg"
                />
                <span className="productName">Apple</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfoKey">price:</span>
                  <span className="productInfoValue">5123</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">active:</span>
                  <span className="productInfoValue">yes</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">Quantity:</span>
                  <span className="productInfoValue">15</span>
                </div>
              </div>
            </div>
          </div> */}
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
                  <label for="file">
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
