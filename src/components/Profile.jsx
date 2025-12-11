import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";
import axios from "axios";
function Profile({ setCleanupCount }) {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const[error ,setError]=useState('')
  const[loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchdata = async ()=>{
      try{
        const response = await axios.get(`https://jsonplaceholder.typicodE.com/users/${id}`)
        setUser(response.data)
        setError('')
      }
      catch(err){
setError(err.message)
setUser(null)
      }
      finally{
        setLoading(false)
      }
    }
fetchdata();
    return () => {
      console.log("Home cleanup running...");
      setCleanupCount((prev) => prev + 1);
    };
  }, [id]);


  if(loading) return <p>Loading data....</p>
  if(error) return <p>Error: {error}</p>
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
