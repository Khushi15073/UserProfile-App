import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { MyContext } from "../context/UserContext";

function About() {
  const { data, error, loading,setCleanupCount } = useContext(MyContext);
  const navigate = useNavigate();
useEffect(()=>{
   return () => {
      console.log("Home cleanup running...");
      setCleanupCount((prev) => prev + 1);
    };
},[]);
  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <div className="profile-container">
        <h1> About </h1>

        {data.map((item) => (
          <div
            className="profile-item"
            key={item.id}
            onClick={() => navigate(`/profile/${item.id}`)}
          >
            <strong>Name:</strong> {item.name}
          </div>
        ))}
      </div>
    </>
  );
}

export default About;
