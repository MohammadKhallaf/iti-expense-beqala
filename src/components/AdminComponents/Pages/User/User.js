import React from "react";
import "./User.css";
export default function User() {
  return (
    <div className="User">
      <div className="userTitleConatiner">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddBtn">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg"
              alt=""
            />
          </div>
          <div className="userShowBottom"></div>
        </div>
        <div className="userUpdate"></div>
      </div>
    </div>
  );
}
