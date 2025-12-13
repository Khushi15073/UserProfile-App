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

  if (loading) return <p className="text-center mt-10">Loading data...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

return (
  <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">
        Users List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/profile/${item.id}`)}
            className="cursor-pointer bg-white rounded-xl shadow-md p-5
                       hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <p className="text-lg font-semibold text-gray-800">
              {item.name}
            </p>
            <p className="text-gray-500">{item.username}</p>
            <p className="text-gray-600">{item.phone}</p>
            <p className="text-gray-600">{item.email}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

}

export default Home;
