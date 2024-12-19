import React from "react";
import { useAuth } from "../../utils/AuthContext";

const Logout = () => {
    const { setCurrentUser } = useAuth();

    const handleLogout = () => {
        localStorage.removeItem("currentUser"); // Clear session
        setCurrentUser(null);
        window.location.href = "/login";
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
