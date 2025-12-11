import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
function About({ setCleanupCount }) {
  const navigate = useNavigate();
  const [dataAbout, setDataAbout] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => {
        setDataAbout(user);
        console.log("about user data", user);
      })

      .catch((error) => console.log("Error:", error));

    return () => {
      console.log("Home cleanup running...");
      setCleanupCount((prev) => prev + 1);
    };
  }, []);
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
