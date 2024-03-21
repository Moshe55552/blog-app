import "./Singlepost.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Singlepost() {
  return (
    <div className="singlepost">
      <div className="singlepostWrapper">
        <img
          src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt=""
          className="singlepostImg"
        />
        <h1 className="singlepostTitle">
          My H1 Title !
          <div className="singlepostEdit">
            <FaEdit className="faEdit" />
            <MdDelete className="mdDelete" />
          </div>
        </h1>
        <div className="singlepostInfo">
          <span className="singlepostAuthor">
            Autor: <b>Moshe</b>
          </span>
          <span className="singlepostDate">1 hour ago</span>
        </div>
        <p className="singlepostDesc">random sentences !!!</p>
      </div>
    </div>
  );
}
