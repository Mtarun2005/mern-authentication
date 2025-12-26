import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Profile from "./components/Profile";
import AuthPage from "./components/AuthPage";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
              <AuthPage setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />

        <Route
          path="/register"
          element={
            isAuthenticated ? (
              <Navigate to="/profile" />
            ) : (
              <AuthPage setIsAuthenticated={setIsAuthenticated} />
            )
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
