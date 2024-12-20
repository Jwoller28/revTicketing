import React, { useState } from "react";
import "../../styles/Dashboard.css";

function PromoteEmployees() {
    const [userId, setUserId] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        if (!userId) {
            alert("Please enter a valid User ID");
            return;
        }

        setLoading(true);
        fetch(`http://localhost:8080/auth/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert("User not found");
                    setUser(null);
                    return null;
                }
            })
            .then((data) => {
                if (data && data.role === "EMPLOYEE") {
                    setUser(data);
                } else if (data) {
                    alert("The user is not an employee and cannot be promoted");
                    setUser(null);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching user:", error);
                setLoading(false);
            });
    };

    const handlePromote = () => {
        if (!user) {
            alert("No user selected for promotion");
            return;
        }

        fetch(`http://localhost:8080/auth/promote/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => {
                if (response.ok) {
                    alert("Employee promoted to Manager!");
                    setUser(null); // Clear the promoted user
                    setUserId(""); // Clear the search bar
                } else {
                    alert("Failed to promote employee.");
                }
            })
            .catch((error) => console.error("Error promoting employee:", error));
    };

    const handleBack = () => {
        window.location.href = "/dashboard/manager";
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-box">
                <div className="container">
                    <h2>Promote Employees</h2>
                    <input
                        type="text"
                        placeholder="Enter User ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className="dashboard-input"
                    />
                    <button className="dashboard-button" onClick={handleSearch}>
                        Search
                    </button>
                    {loading && <p>Loading user...</p>}
                    {user && (
                        <div>
                            <p>
                                <strong>Username:</strong> {user.username}
                            </p>
                            <p>
                                <strong>Role:</strong> {user.role}
                            </p>
                            <button
                                className="dashboard-button promote-button"
                                onClick={handlePromote}
                            >
                                Promote to Manager
                            </button>
                        </div>
                    )}
                    <button className="dashboard-button" onClick={handleBack}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PromoteEmployees;
