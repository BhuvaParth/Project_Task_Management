import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[98vh]">
        <div className="bg-gray-800 rounded w-2/6 p-4">
          <div className="text-2xl font-semibold">Login</div>
          <input
            type="username"
            placeholder="Username"
            name="username"
            className="bg-gray-700 rounded w-full px-3 py-2 my-3"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            className="bg-gray-700 rounded w-full px-3 py-2 my-3"
          />
          <div className="flex justify-between items-center w-full">
            <button className="text-black text-l font-semibold bg-blue-400 rounded px-4 py-2">
              Login
            </button>
            <Link to="/signup" className="text-gray-400 hover:text-gray-200 transition-all duration-300">Not haveing account? SignUp hear</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
