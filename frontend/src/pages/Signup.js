import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const validateForm = () => {
    const errors = {};
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,8}$/;

    // Username validation
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    } else if (!usernameRegex.test(formData.username)) {
      errors.username =
        "Username must be 3-20 characters and can include letters, numbers, and underscores";
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    // Password validation
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      errors.password = "Password must be 6 to 8 characters long";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:3000/users",
          formData
        );
        console.log("User registered successfully:", response.data);
        navigate("/");
      } catch (error) {
        console.error("Error registering user:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex items-center justify-center h-[98vh]">
      <div className="bg-gray-800 rounded w-2/6 p-4">
        <div className="text-2xl font-semibold">Signup</div>

        {/* Username Input */}
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="bg-gray-700 rounded w-full px-3 py-2 my-3"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p className="text-red-500">{errors.username}</p>}

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="bg-gray-700 rounded w-full px-3 py-2 my-3"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="bg-gray-700 rounded w-full px-3 py-2 my-3"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}

        {/* Submit Button */}
        <div className="flex justify-between items-center w-full">
          <button
            className="text-black text-l font-semibold bg-blue-400 rounded px-4 py-2"
            onClick={handleSubmit}
          >
            Signup
          </button>
          <Link
            to="/login"
            className="text-gray-400 hover:text-gray-200 transition-all duration-300"
          >
            Already have an account? Log in here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
