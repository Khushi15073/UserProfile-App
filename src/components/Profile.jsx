import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";
function Profile({ setCleanupCount }) {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.log("Error:", error));

    console.log("profile data", user);

    return () => {
      console.log("Home cleanup running...");
      setCleanupCount((prev) => prev + 1);
    };
  }, [id]);

  return (
    <>
      <div className="profile-container">
        <h1>Profile ID: {id}</h1>

        <div className="profile-item">
          <strong>Name:</strong> {user.name}
        </div>

        <div className="profile-item">
          <strong>Username:</strong> {user.username}
        </div>

        <div className="profile-item">
          <strong>Email:</strong> {user.email}
        </div>

        <div className="profile-item">
          <strong>Phone:</strong> {user.phone}
        </div>
      </div>
    </>
  );
}
export default Profile;
