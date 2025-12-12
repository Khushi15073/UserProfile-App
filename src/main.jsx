import { createRoot } from "react-dom/client";
import { ThemeContext } from "./context/ThemeContext.jsx";
import {UserContext} from "./context/UserContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  
  
  <UserContext>
    <ThemeContext>
    <App />
  </ThemeContext>
  </UserContext>
  
);
