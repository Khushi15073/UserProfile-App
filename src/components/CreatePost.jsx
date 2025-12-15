import axios from "axios";
import { useContext, useState } from "react";
import { MyContext } from "../context/UserContext";

function CreatePost() {
  const { setData } = useContext(MyContext);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    username: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        formData
      );
      console.log("post data", response);
      setData((prev) => [formData, ...prev]);
    } catch (err) {
      console.log("error", err);
    }
    setFormData({
      id: "",
      name: "",
      username: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        Create Post
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter Your Id"
          name="id"
          required
          value={formData.id}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Enter Your Username"
          name="username"
          required
          value={formData.username}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Enter Your Phone Number"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
