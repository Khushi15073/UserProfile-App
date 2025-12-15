import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/UserContext";

function Home() {
  const { data, error, loading, setCleanupCount } = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      console.log("Home cleanup running...");
      setCleanupCount((prev) => prev + 1);
    };
  }, []);

  if (loading)
    return <p className="text-center mt-10 text-gray-500 dark:text-gray-400">Loading data...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-500 dark:text-red-400">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
    <h1 className="text-3xl font-bold text-center mb-6 dark:text-gray-300">Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/profile/${item.id}`)}
            className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 
                       hover:shadow-xl hover:-translate-y-1 transform transition-all duration-200"
          >
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {item.name}
            </p>
            <p className="text-gray-500 dark:text-gray-300">{item.username}</p>
            <p className="text-gray-600 dark:text-gray-300">{item.phone}</p>
            <p className="text-gray-600 dark:text-gray-300">{item.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
