import React, { useState } from "react";
import { registerUser } from "../../services/api";
import { useNavigate } from "react-router-dom";
import "../../styles/Login.css"; // Reuse styles for simplicity

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ username, password });
            alert("Registration successful! Please log in.");
            navigate("/login");
        } catch (error) {
            console.error("Registration failed:", error.response?.data || error.message);
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
            <button onClick={() => navigate("/login")}>Back to Login</button>
        </div>
    );
};

export default Register;
