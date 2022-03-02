import React, { useEffect } from "react";
import "./ProductList.css";
import { DataGrid } from "@mui/x-data-grid";
// import { productRows } from "../../DummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import SideBar from "../../SideBar/SideBar";
import { backendAPI } from "../../../../store/index";
// import Navbar from "../../Navbar/Navbar";
// import axios from "axios";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function ProductList() {
  const user = useSelector((state) => state.auth.user);

  const navigate = useNavigate();

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    if (!user) return;
    backendAPI
      .get(`product/product/`)
      .then((res) => {
        setProductData(res.data);
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
    // .catch((err) => console.log(err));
  }, [user]);

  const handleDelete = () => {
    // setData(data.filter((item) => item.id !== id));
    // console.log("deletedItem", e);
    console.log("delete function");

    // backendAPI
    //   .delete(`product/product/${e}`)
    //   .then((res) => {
    //     backendAPI.get(`product/product/`).then((res) => {
    //       setProductData(res.data);
    //       console.log(res.data);
    //     });
    //   })
    //   .catch((err) => console.log(err));
    // setProductData(res.data);
  };

  useEffect(() => {
    console.log("rerender");
  }, [productData]);

  const handleEdit = (product_id) => {
    console.log(product_id);
    backendAPI
      .post("/store/store-data/", {
        owner_id: user.id,
        product_id,
      })
      .then((res) => console.log("OUR DATA\t", res.data));
    // .then((_) => navigate("/owner/product/1"));
    // console.log(e.target.value);
    console.log("handle functon");
    // backendAPI
    //   .get(`product/product/${e}`)
    //   .then((res) => {
    //     setProductData(res.data);
    //     // console.log("+++++++++++++" + res.data);
    //   })
    //   .catch((err) => console.log(err));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: "name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.image} alt="" height={50} width={50} />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "brand",
      headerName: "Brand",
      width: 130,
      renderCell: (params) => {
        console.log(params);
        return (
          <>
            <div className="productListItem">{params.row.brand}</div>
          </>
        );
      },
    },
    {
      field: "description",
      headerName: "description",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <div className="productListItem">
              {/* <img className="productListImg" src={params.row.img} alt="" /> */}
              {params.row.description}
            </div>
          </>
        );
      },
    },
    {
      field: "category",
      headerName: "category",
      sortable: "text",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <div className="productListItem">{params.row.category.name}</div>
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "action",
      width: 150,
      renderCell: (params) => {
        // console.log(params.row.id);
        return (
          <>
            {/* <Link to={"/owner/Product/"}> */}
            <button
              onClick={handleEdit.bind(this, params.row.id)}
              className="productListEdit"
            >
              Add item
            </button>
            {/* </Link> */}
          </>
        );
      },
    },
  ];
  return (
    <>
      {/* <Navbar /> */}
      <div className="ProductListContainer">
        <SideBar />
        <div className="ProductList">
          <DataGrid
            disableSelectionOnClick
            rows={productData}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
}
