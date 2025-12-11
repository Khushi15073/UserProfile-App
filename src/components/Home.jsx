import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";

function Home({ setCleanupCount }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
        setError("");
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();

    return () => {
      console.log("Home cleanup running...");
      setCleanupCount((prev) => prev + 1);
    };
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;

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
