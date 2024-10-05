import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import { Home } from "./pages/Home";
import ImportantTasks from "./pages/ImportantTasks";
import IncompletedTasks from "./pages/IncompletedTasks";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authState = localStorage.getItem("isAuthenticated");
    if (authState === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    toast.success("Login successful!"); 
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    toast.info("Logged out successfully.");
  };

  return (
    <>
      <div className="bg-gray-900 text-white h-screen p-2 relative">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Home onLogout={handleLogout} />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            >
              <Route
                index
                element={
                  isAuthenticated ? <AllTasks /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/importantTasks"
                element={
                  isAuthenticated ? (
                    <ImportantTasks />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route
                path="/completedTasks"
                element={
                  isAuthenticated ? (
                    <CompletedTasks />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route
                path="/incompletedTasks"
                element={
                  isAuthenticated ? (
                    <IncompletedTasks />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          </Routes>
        </Router>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
