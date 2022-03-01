import React, { useEffect } from "react";
import "./ProductList.css";
import { DataGrid } from "@mui/x-data-grid";
// import { productRows } from "../../DummyData";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { useState } from "react";
import SideBar from "../../SideBar/SideBar";
import { backendAPI } from "../../../../store/index";
// import Navbar from "../../Navbar/Navbar";
// import axios from "axios";

export default function ProductList() {
  // const [data, setData] = useState([]);

  // const [id, setId] = useState("");
  // const [description, setDescription] = useState("");
  // const [brand, setBrand] = useState("");
  // const [category, setCategory] = useState("");
  // const getData = async () => {
  //   console.log("enter getData function");
  //   let { productResponse } = await axios.get(
  //     `http://127.0.0.1:8000/product/product/`
  //   );
  //   console.log((await productResponse.data) + "00000000000000000");
  //   // .then((response) => console.log(response.data))
  //   // .catch((err) => console.log(err + "****************"));
  //   // setData(response.data);
  // };
  // const [name, setName] = useState(response.data.name);
  // getData();
  // useEffect(() => {
  //   getData();
  // }, []);

  const [productData, setProductData] = useState([]);
  // const rowData = productData.map((item) => (
  //   <div key={item.id} className="productListItem">
  //     {/* <img className="productListImg" src={item} alt="" /> */}
  //     {item.brand}
  //   </div>
  // ));

  useEffect(() => {
    backendAPI
      .get(`product/product/`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem("access")}`,
        },
      })
      .then((res) => {
        setProductData(res.data);
        // console.log(res.data);
      });
    // .catch((err) => console.log(err));
  }, []);

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

  const handleEdit = () => {
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
            <img src={params.row.image} alt="" />
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
        return (
          <>
            <div className="productListItem">
              {/* <img className="productListImg" src={params.row.img} alt="" /> */}
              {params.row.brand}
            </div>
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
      field: "price",
      headerName: "Price",
      sortable: "number",
      width: 160,
    },
    {
      field: "action",
      headerName: "action",
      width: 150,
      renderCell: (params) => {
        // console.log(params.row.id);
        return (
          <>
            <Link to={"/admin/Product/"}>
              <button onClick={() => handleEdit()} className="productListEdit">
                Edit
              </button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete()}
            />
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
