import React, { useState } from "react";
import { useAuth } from "../../utils/AuthContext";
import { loginUser } from "../../services/api";
import { useNavigate } from "react-router-dom";
import "../../styles/Login.css";

const Login = () => {
    const { setCurrentUser } = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser({ username, password });
            const user = response.data;
    
            // Save user data in localStorage
            localStorage.setItem("currentUser", JSON.stringify(user));
            localStorage.setItem("userId", user.id); // Explicitly store userId
    
            // Redirect based on role
            if (user.role === "MANAGER") {
                window.location.href = "/dashboard/manager";
            } else {
                window.location.href = "/dashboard/employee";
            }
        } catch (error) {
            console.error("Login failed:", error.response?.data || error.message);
            alert("Login failed. Please check your credentials.");
        }
    };
    

    const handleRegisterRedirect = () => {
        navigate("/register");
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
            </form>
            <button onClick={handleRegisterRedirect}>Register</button>
        </div>
    );
};

export default Login;
