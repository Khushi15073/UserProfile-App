import {useContext,useEffect } from "react";
import { useParams } from "react-router-dom";


import { MyContext } from "../context/UserContext";
function Profile() {
  const { id } = useParams();
  const { data, error,   loading ,setCleanupCount} = useContext(MyContext);


  const user = data.find((u) => u.id == id);
useEffect(()=>{
   return () => {
      console.log("Home cleanup running...");
      setCleanupCount((prev) => prev + 1);
    };
},[id]);

  if (loading) return <p>Loading data....</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="profile-page">
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
    </div>
  );
}
export default Profile;
