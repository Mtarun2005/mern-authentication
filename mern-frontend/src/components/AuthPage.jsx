import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "../styles/auth.css";

function AuthPage({ setIsAuthenticated }) {

  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className={`auth-container ${isRegister ? "right-active" : ""}`}>

      <div className="form-container sign-in-container">
        <Login setIsAuthenticated={setIsAuthenticated} />
      </div>

      <div className="form-container sign-up-container">
        <Register />
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h2>Welcome Back!</h2>
            <p>To keep connected, please login with your details</p>
            <button className="ghost" onClick={() => setIsRegister(false)}>
              SIGN IN
            </button>
          </div>

          <div className="overlay-panel overlay-right">
            <h2>Hello, Friend!</h2>
            <p>Enter your personal details and start your journey</p>
            <button className="ghost" onClick={() => setIsRegister(true)}>
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
