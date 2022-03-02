import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import SideBar from "../../SideBar/SideBar";
import { backendAPI } from "../../../../store/index";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector } from "react-redux";

export default function ProductList() {
  const user = useSelector((state) => state.auth.user);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    if (!user) return;
    backendAPI
      .get("/store/store-data/", {
        params: { owner_id: user.id },
      })
      .then((res) => {
        setProductData(res.data);
        console.log(res.data);
      });
  }, [user]);

  useEffect(() => {
    // fetchstore();
  }, [user]);

  useEffect(() => {
    console.log("rerender++++");
  }, [productData]);

  const handleDelete = (inputID) => {
    console.log("delete function");
    backendAPI
      .delete("store/store-data/", {
        data: {
          owner_id: user.id,
          product_price_id: inputID,
        },
      })
      .then((res) => {
        console.log(res.data);
        setProductData(res.data);
      });
  };
  /**
   * @param inputValue the new price value
   * @param inputID the product price ID
   */
  let queryTimeOut;
  const priceChangeHandler = (inputValue, inputID) => {
    clearTimeout(queryTimeOut);
    if (!inputValue) return;

    queryTimeOut = setTimeout(() => {
      backendAPI
        .put("store/store-data/", {
          owner_id: user.id,
          product_price_id: inputID,
          product_price_value: inputValue,
        })
        .then((res) => {
          console.log(res.data);
          setProductData(res.data);
        });
    }, 1000);
  };
  const columns = [
    {
      field: "id",
      headerName: "id",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.id}
          </div>
        );
      },
    },
    {
      field: "product",
      headerName: "product",
      width: 200,
      renderCell: (params) => {
        // console.log(params);
        return (
          <div className="userListUser">
            <img src={params.row.product.image} alt="" height={50} width={50} />
            {params.row.product.name}
          </div>
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
              {params.row.product.description}
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
            <div className="productListItem">{params.row.store_id}</div>
          </>
        );
      },
    },
    {
      field: "price",
      headerName: "price",
      width: 130,
      renderCell: (params) => {
        // console.log(productData);
        // console.log(params);
        return <>{params.row.price} LE</>;
      },
    },
    {
      field: "new price",
      headerName: " new price",
      width: 130,
      renderCell: (params) => {
        // console.log(productData);
        // console.log(params);
        return (
          <>
            <input
              type="number"
              defaultValue={params.row.price}
              onChange={(e) =>
                priceChangeHandler(e.target.value, params.row.id)
              }
            ></input>
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
            {/* <Link to={"/owner/Product/"}>
              <button className="productListEdit" onClick={() => handleEdit()}>
                edit item
              </button>
            </Link> */}
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
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