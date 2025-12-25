import {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";

function Login({ setIsAuthenticated }) {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();


    const handleLogin=async (e)=>{
        e.preventDefault();

        try{
            const response=await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({email,password}),
                }
            );

            const data=await response.json();

            if (!response.ok){
                alert(data.message || "Login failed");
                return;
            }

            localStorage.setItem("token",data.token);
            setIsAuthenticated(true);
            navigate("/profile");
            console.log("Stored token:",data.token);

            setEmail("");
            setPassword("");

        }catch(error){
            console.error(error);
            alert("Server error");
        }
    };

    return (
        <div className="register-container">
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;