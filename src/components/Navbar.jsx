import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import myImage from "../assets/user1icon.png";
import {FaMoon, FaSun} from "react-icons/fa"
import { ModeContext } from "../context/ThemeContext";
import { MyContext } from "../context/UserContext";
import "./Navbar.css";
function Navbar() {
  const{cleanupCount } = useContext(MyContext)
  const navigate = useNavigate();
    const{ toggleMode} = useContext(ModeContext);
  return (
    <nav>
      <img src={myImage} alt="user image" onClick={() => navigate("/")} />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to='/createUser'>Create User</NavLink>
      <button className="btn"  onClick={toggleMode}><FaMoon/><FaSun/></button>
     <NavLink>Count: {cleanupCount}</NavLink>
    

    </nav>
  );
}
   
export default Navbar;
