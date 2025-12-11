import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./About.css";

function About({ setCleanupCount }) {
  const navigate = useNavigate();
  const [dataAbout, setDataAbout] = useState([]);
    const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   const fetchdata =  async ()=>{
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setDataAbout(response.data)
      setError('');
    } catch (err) {
      setError(err.message);
      setDataAbout(null)
    }
     finally {
        setLoading(false);
      }
   };
 fetchdata();

    return () => {
      console.log("Home cleanup running...");
      setCleanupCount((prev) => prev + 1);
    };


  }, []);
  
  if(loading) return <p>Loading data...</p>;
  if(error) return <p>Error: {error}</p>;
  return (
    <>
      <div className="profile-container">
        <h1> About </h1>

        {dataAbout.map((item) => (
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
