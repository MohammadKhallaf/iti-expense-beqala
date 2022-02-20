import React from "react";
import "./Navbar.css";
import { NotificationsNone , Language , Settings} from "@material-ui/icons";
import photo from '../images/magdi.jpeg';
export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbarWrapper">
          <div className="topLeft">
            <span className="logo">MGX</span>
          </div>
          <div className="topRight">
            <div className="navbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="navbarIconContainer">
              <Language/>
              <span className="topIconBadge">2</span>
            </div>
            <div className="navbarIconContainer">
              <Settings />
            </div>
            <img src={photo} className="topAvatar" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
