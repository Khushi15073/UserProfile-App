import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";

function App() {
  const [cleanupCount, setCleanupCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <h2 style={{ textAlign: "center" }}>
          Cleanup happened: {cleanupCount} times
        </h2>

        <Routes>
          <Route
            path="/"
            element={<Home setCleanupCount={setCleanupCount} />}
          />
          <Route
            path="/about"
            element={<About setCleanupCount={setCleanupCount} />}
          />
          <Route
            path="/profile/:id"
            element={<Profile setCleanupCount={setCleanupCount} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
