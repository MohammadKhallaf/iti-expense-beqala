import "./NewProduct.css";
import Navbar from "../../Navbar/Navbar";
import SideBar from "../../SideBar/SideBar";
export default function NewProduct() {
  return (
    <>
      <Navbar />
      <div className="newProductContainer">
        <SideBar />
        <div className="newProduct">
          <h1 className="addProductTitle">New Product</h1>
          <form className="addProductForm">
            <div className="addProductItem">
              <label>Image</label>
              <input type="file" id="file" />
            </div>
            <div className="addProductItem">
              <label>Name</label>
              <input type="text" placeholder="Add new product" />
            </div>
            <div className="addProductItem">
              <label>Stock</label>
              <input type="text" placeholder="123" />
            </div>
            <div className="addProductItem">
              <label>Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <button className="addProductButton">Create</button>
          </form>
        </div>
      </div>
    </>
  );
}
