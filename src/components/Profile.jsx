import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { MyContext } from "../context/UserContext";

function Profile() {
  const { id } = useParams();
  const { data, error, loading, setCleanupCount } = useContext(MyContext);

  const user = data.find((u) => u.id == id);

  useEffect(() => {
    return () => {
      console.log("Home cleanup running...");
      setCleanupCount((prev) => prev + 1);
    };
  }, [id]);

  if (loading)
    return <p className="text-center text-gray-500 mt-10">Loading data...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-10">Error: {error}</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white  shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        Profile ID: {id}
      </h1>

      <div className="space-y-4 " >
        <div className="p-4 bg-gray-100 text-gray-950 rounded shadow">
          <strong>
            Name:
          </strong>
          {user.name}
        </div>
        <div className="p-4 bg-gray-100  text-gray-950 rounded shadow">
          <strong >
            Username:
          </strong>{" "}
          {user.username}
        </div>
        <div className="p-4 bg-gray-100 text-gray-950 rounded shadow">
          <strong >
            Email:
          </strong>{" "}
          {user.email}
        </div>
        <div className="p-4 bg-gray-100 text-gray-950 rounded shadow">
          <strong >
            Phone:
          </strong>{" "}
          {user.phone}
        </div>
      </div>
    </div>
  );
}

export default Profile;
