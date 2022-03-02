import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutline,
  AddShoppingCart,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Error,
} from "@material-ui/icons";
export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sidebarWapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTittle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active ">
              <Link className="link" to={"/owner"}>
                <LineStyle className="sidebarIcon" />
                Home
              </Link>
            </li>
            <li className="sidebarListItem ">
              <Link className="link" to={"/owner/newproduct"}>
                <Timeline className="sidebarIcon" />
                Add product
              </Link>
            </li>
            {/* <li className="sidebarListItem ">
              <Link className="link" to={"/admin/users"}>
                <PersonOutline className="sidebarIcon" />
                Users
              </Link>
            </li> */}
            <li className="sidebarListItem ">
              <Link className="link" to={"/owner/ProductList"}>
                <AddShoppingCart className="sidebarIcon" />
                products
              </Link>
            </li>
            {/* <li className="sidebarListItem ">
              <Link className="link" to={"/admin"}>
                <TrendingUp className="sidebarIcon" />
                Sales
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTittle">Quick Menu</h3> */}
          <ul className="sidebarList">
            {/* <li className="sidebarListItem ">
              <AttachMoney className="sidebarIcon" />
              Transcations
            </li>
            <li className="sidebarListItem ">
              <BarChart className="sidebarIcon" />
              Reports
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTittle">Notifications</h3> */}
          {/* <ul className="sidebarList">
            <li className="sidebarListItem active ">
              <MailOutline className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem ">
              <DynamicFeed className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem ">
              <ChatBubbleOutline className="sidebarIcon" />
              Sales
            </li>
          </ul> */}
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTittle">Staff</h3> */}
          {/* <ul className="sidebarList">
            <li className="sidebarListItem active ">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem ">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem ">
              <Error className="sidebarIcon" />
              Reports
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}
