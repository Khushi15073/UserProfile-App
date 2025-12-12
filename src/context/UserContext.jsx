import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MyContext = createContext();

export function UserContext({ children }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [cleanupCount, setCleanupCount] = useState(0);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
        console.log("home data", data);
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

  return (
    <MyContext.Provider
      value={{
        data,
        setData,
        error,
        setError,
        loading,
        setLoading,
        cleanupCount,
        setCleanupCount,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
