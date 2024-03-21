import "./Sidebar.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaPinterest,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/163176/home-laptop-tablet-lifestyle-163176.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt=""
        />
        <p>Random Text !!!!</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cenema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <FaFacebook className="sidebarIcon" />
          <FaInstagramSquare className="sidebarIcon" />
          <FaTwitter className="sidebarIcon" />
          <FaPinterest className="sidebarIcon" />
        </div>
      </div>
    </div>
  );
}
