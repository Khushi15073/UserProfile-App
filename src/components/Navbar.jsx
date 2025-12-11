import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import myImage from "../assets/user1icon.png";
import "./Navbar.css";
function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <img src={myImage} alt="user image" onClick={() => navigate("/")} />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
}

export default Navbar;
