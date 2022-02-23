import "./UserList.css";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../DummyData";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { useState } from "react";
import SideBar from "../../SideBar/SideBar";
import Navbar from "../../Navbar/Navbar";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "user",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} alt="" />
            {params.row.userName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "status",
      headerName: "status",
      width: 120,
    },
    {
      field: "Transaction",
      headerName: "Transaction",
      description: "This column has a value getter and is not sortable.",
      sortable: "number",
      width: 160,
    },
    {
      field: "action",
      headerName: "action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      {/* <Navbar/> */}
      <div className="UserListContainer">
        <SideBar />
        <div className="UserList">
          <DataGrid
            disableSelectionOnClick
            rows={data}
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
