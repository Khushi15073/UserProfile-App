import { useContext ,  useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";
import { MyContext } from "../context/UserContext";

function Home() {
const {data, error,   loading ,setCleanupCount } = useContext(MyContext)
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
   <div> <div className="home-container">
      <h1>Users List</h1>

      <div className="user-list">
        {data.map((item) => (
          <div
            className="user-card"
            key={item.id}
            onClick={() => navigate(`/profile/${item.id}`)}
          >
            <p>
              <strong>{item.name}</strong>
            </p>
            <p>{item.username}</p>
            <p>{item.phone}</p>
            <p>{item.email}</p>
          </div>
        ))}
      </div>
    </div></div>
  );
}

export default Home;
