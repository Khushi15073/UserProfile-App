import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import CreatePost from "./components/CreatePost";
import { ModeContext } from "./context/ThemeContext";


function App() {
  const { mode } = useContext(ModeContext);

  return (
    <div
      className={
        mode ? `container container-light` : `container container-dark`
      }
    >
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/createUser" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
