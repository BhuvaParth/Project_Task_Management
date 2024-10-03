import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,8}$/;

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
      errors.password = "Password must be 6 to 8 characters long";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await axios.get("http://localhost:3000/users");
      const users = response.data;

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        console.log("Login successful");
        localStorage.setItem("isAuthenticated", "true"); // Set authentication state
        onLogin();
        navigate("/");
      } else {
        setErrors({ login: "Invalid email or password" });
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-[98vh]">
      <div className="bg-gray-800 rounded w-2/6 p-4">
        <div className="text-2xl font-semibold">Login</div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="bg-gray-700 rounded w-full px-3 py-2 my-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="bg-gray-700 rounded w-full px-3 py-2 my-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
        {errors.login && <p className="text-red-500">{errors.login}</p>}
        <div className="flex justify-between items-center w-full">
          <button
            className="text-black text-l font-semibold bg-blue-400 rounded px-4 py-2"
            onClick={handleSubmit}
          >
            Login
          </button>
          <Link
            to="/signup"
            className="text-gray-400 hover:text-gray-200 transition-all duration-300"
          >
            Not having an account? SignUp here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
