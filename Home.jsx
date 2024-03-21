import "./Home.css";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="Home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
