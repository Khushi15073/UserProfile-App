// // import { useNavigate } from "react-router-dom";
// // import { NavLink } from "react-router-dom";
// // import { useContext } from "react";
// // import myImage from "../assets/user1icon.png";
// // import {FaMoon, FaSun} from "react-icons/fa"
// // import { ModeContext } from "../context/ThemeContext";
// // import { MyContext } from "../context/UserContext";

// // function Navbar() {
// //   const{cleanupCount } = useContext(MyContext)
// //   const navigate = useNavigate();
// //     const{ mode, setMode} = useContext(ModeContext);
// //     console.log('toggle', mode);
// //   return (
// //     <nav>
// //       <img src={myImage} alt="user image" onClick={() => navigate("/")} />
// //       <NavLink to="/">Home</NavLink>
// //       <NavLink to="/about">About</NavLink>
// //       {/* <NavLink to="/profile">Profile</NavLink> */}
// //       <NavLink to='/createUser'>Create User</NavLink>
// //       <button className="btn"  onClick={() => setMode((prev)=>!prev)}>
// //       {!mode ? <FaMoon/> :  <FaSun/>}
      
// //       </button>
// //      <NavLink>Count: {cleanupCount}</NavLink>
    

// //     </nav>
// //   );
// // }
   
// // export default Navbar;
// import { NavLink, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import myImage from "../assets/user1icon.png";
// import { FaMoon, FaSun } from "react-icons/fa";
// import { ModeContext } from "../context/ThemeContext";
// import { MyContext } from "../context/UserContext";

// function Navbar() {
//   const { cleanupCount } = useContext(MyContext);
//   const { mode, setMode } = useContext(ModeContext);
//   const navigate = useNavigate();

//   return (
//  <nav className="bg-blue-600 text-white p-4 flex gap-6">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
//         {/* Logo */}
//         <div
//           className="flex items-center gap-3 cursor-pointer"
//           onClick={() => navigate("/")}
//         >
//           <img
//             src={myImage}
//             alt="user"
//             className="w-10 h-10 rounded-full object-cover"
//           />
//           <span className="text-xl font-bold">UserProfile</span>
//         </div>

//         {/* Links */}
//         <div className="flex gap-6">
//           {["/", "/about", "/createUser"].map((path, i) => (
//             <NavLink
//               key={i}
//               to={path}
//               className={({ isActive }) =>
//                 isActive
//                   ? "font-semibold border-b-2 border-white"
//                   : "hover:text-gray-200"
//               }
//             >
//               {path === "/" ? "Home" : path.replace("/", "").replace("User", " User")}
//             </NavLink>
//           ))}
//         </div>

//         {/* Right */}
//         <div className="flex items-center gap-4">
//           <button
//             onClick={() => setMode((prev) => !prev)}
//             className="p-2 rounded-full bg-blue-500 hover:bg-blue-700"
//           >
//             {mode ? <FaSun /> : <FaMoon />}
//           </button>

//           <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm">
//             Count: {cleanupCount}
//           </span>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import myImage from "../assets/user1icon.png";
import { FaMoon, FaSun } from "react-icons/fa";
import { ModeContext } from "../context/ThemeContext";
import { MyContext } from "../context/UserContext";

function Navbar() {
  const { cleanupCount } = useContext(MyContext);
  const { mode, setMode } = useContext(ModeContext);
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white  shadow-md px-6 py-3 flex items-center justify-between">
      
    
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src={myImage}
          alt="user"
          className="w-12 h-12 rounded-full"
        />
        <span className="text-xl font-semibold text-gray-800 ">
          UserProfile
        </span>
      </div>

     
      <div className="flex gap-6 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-medium ${
              isActive
                ? "text-gray-900 bg-blue-500 rounded-lg p-2 px-4"
                : "text-gray-900 "
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-medium ${
              isActive
                ? "text-gray-900 bg-blue-500 rounded-lg p-2 px-4"
                : "text-gray-900 "
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/createUser"
          className={({ isActive }) =>
            `font-medium ${
              isActive
                ? "text-gray-900 bg-blue-500 rounded-lg p-2 px-4"
                : "text-gray-900"
            }`
          }
        >
          Create User
        </NavLink>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setMode((prev) => !prev)}
          className="p-3 rounded-full bg-gray-200"
        >
          {mode ? 
            <FaSun className="text-yellow-400" />
          : 
            <FaMoon className="text-gray-800" />
          }
        </button>

        <span className="text-sm text-gray-900 ">
          Count: {cleanupCount}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
