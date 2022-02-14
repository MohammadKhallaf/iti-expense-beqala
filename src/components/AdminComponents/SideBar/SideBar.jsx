import React from "react";
import "./SideBar.css";
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
  Error
} from "@material-ui/icons";
export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sidebarWapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTittle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active ">
              <LineStyle className="sidebarIcon" className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem ">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem ">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTittle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active ">
              <PersonOutline className="sidebarIcon" className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarListItem ">
              <AddShoppingCart className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarListItem ">
              <AttachMoney className="sidebarIcon" />
              Transcations
            </li>
            <li className="sidebarListItem ">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTittle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active ">
              <MailOutline className="sidebarIcon" className="sidebarIcon" />
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
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTittle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active ">
              <WorkOutline className="sidebarIcon" className="sidebarIcon" />
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
          </ul>
        </div>
      </div>
    </div>
  );
}
