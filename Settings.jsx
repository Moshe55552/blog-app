import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Settings.css";
import { FaUser } from "react-icons/fa";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitles">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingProfilePicture">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQGVcuo04SNJiA/profile-displayphoto-shrink_800_800/0/1688105558686?e=2147483647&v=beta&t=OiNw26I_yVcek06A0CXBeHOBUKzuezN5rR5JPZoRP5A"
              alt=""
            />
            <label htmlFor="fileInput">
              <FaUser className="faUser" />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username:</label>
          <input type="text" placeholder="Moshe" />
          <label>Email:</label>
          <input type="email" placeholder="moshe@gmail.com" />
          <label>Password:</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
