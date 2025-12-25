import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Sync auth state with localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div className="page-center">
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/profile" /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/profile" />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />

        <Route
          path="/register"
          element={
            isAuthenticated ? <Navigate to="/profile" /> : <Register />
          }
        />

        <Route
          path="/profile"
          element={
            isAuthenticated ? (
              <Profile setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
