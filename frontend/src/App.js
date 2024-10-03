import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import AllTasks from "./pages/AllTasks";
import ImportantTasks from "./pages/ImportantTasks";
import CompletedTasks from "./pages/CompletedTasks";
import IncompletedTasks from "./pages/IncompletedTasks";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      <div className="bg-gray-900 text-white h-screen p-2 relative">
        <Router>
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
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
    </>
  );
};

export default App;
