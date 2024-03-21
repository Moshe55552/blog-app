import React from "react";
import "./Topbar.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaPinterest,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Topbar() {
  const user = false;
  const handleFacebookClick = () => {
    window.location.href = "https://www.facebook.com";
  };
  const handleTwitterClick = () => {
    window.location.href = "https://twitter.com/";
  };
  const handleIntagramrClick = () => {
    window.location.href = "https://www.instagram.com/";
  };
  const handlePinterestClick = () => {
    window.location.href = "https://www.pinterest.com";
  };
  return (
    <div className="top">
      <div className="topLeft">
        <FaFacebook
          className="topIcon"
          onClick={handleFacebookClick}
        ></FaFacebook>
        <FaInstagramSquare className="topIcon" onClick={handleIntagramrClick} />
        <FaTwitter className="topIcon" onClick={handleTwitterClick} />
        <FaPinterest className="topIcon" onClick={handlePinterestClick} />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <a href="https://postimg.cc/WqG9pQJ9" target="_blank">
            <img
              className="topImg"
              src="https://i.postimg.cc/vmfHq1Dv/1688105558686.jpg"
              alt="image"
            />
          </a>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <FaSearch className="topSearchIcon" />
      </div>
    </div>
  );
}
