import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home({ setCleanupCount }) {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((jsondata) => setData(jsondata))
      .catch((error) => console.log("Error:", error));

    return () => {
      console.log("Home cleanup running...");
      setCleanupCount((prev) => prev + 1);
    };
  }, []);

  return (
    <div className="home-container">
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
    </div>
  );
}

export default Home;
