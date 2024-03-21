import "./App.css";
import Home from "./Pages/Home/Home";
import Topbar from "./Components/Topbar/Topbar";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./Components/Post/Post";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

function App() {
  const user = false;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="register" element={user ? <Home /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="login" element={user ? <Home /> : <Login />} />
      </Routes>
      <Routes>
        <Route path="write" element={user ? <Write /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="settings" element={user ? <Settings /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="post" element={<Single />} />
      </Routes>
      <Routes>
        <Route path="about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
