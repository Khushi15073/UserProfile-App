import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { MyContext } from "../context/UserContext";

function About() {
  const { data, error, loading, setCleanupCount } = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      console.log("Home cleanup running...");
      setCleanupCount((prev) => prev + 1);
    };
  }, []);

  if (loading) return <p className="text-gray-500 text-center mt-10">Loading data...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">Error: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">User List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/profile/${item.id}`)}
            className="cursor-pointer bg-white  shadow-md rounded-lg p-3 hover:scale-105 transform transition duration-200"
          >
            <p className="text-lg font-semibold text-gray-800 ">
              Name: <span className="font-normal">{item.name}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
