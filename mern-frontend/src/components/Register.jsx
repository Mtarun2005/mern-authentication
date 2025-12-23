import {useState} from "react";
import "../styles/register.css";

function Register(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit=async (e) =>{
        e.preventDefault();
        
        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Registration failed");
                return;
            }

            alert("Registration successful");

            setName("");
            setEmail("");
            setPassword("");

        } catch (error) {
            console.error(error);
            alert("Server error");
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>

            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />

                <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />

                <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />

                <button type="submit">Register</button>

            </form>
        </div>
    );
}

export default Register;