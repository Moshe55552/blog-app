import Sidebar from "../../Components/Sidebar/Sidebar";
import Singlepost from "../../SinglePost/Singlepost";
import "./Single.css";

export default function Single() {
  return (
    <div className="single">
      {/* post */}
      <Singlepost />
      <Sidebar />
    </div>
  );
}
