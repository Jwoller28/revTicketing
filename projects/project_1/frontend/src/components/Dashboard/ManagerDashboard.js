import React, { useState, useEffect } from "react";
import "../../styles/Dashboard.css";

function ManagerDashboard() {
    const [pendingTickets, setPendingTickets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/tickets/pending", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setPendingTickets(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching pending tickets:", error);
                setLoading(false);
            });
    }, []);

    const handleTicketAction = (id, action) => {
        fetch(`http://localhost:8080/tickets/${id}/${action}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => response.json())
            .then((updatedTicket) => {
                setPendingTickets((prevTickets) =>
                    prevTickets.filter((ticket) => ticket.id !== updatedTicket.id)
                );
            })
            .catch((error) => console.error("Error processing ticket:", error));
    };

    const handlePromotePage = () => {
        window.location.href = "/dashboard/manager/promote";
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-box">
                <div className="container">
                    <h2>Manager Dashboard</h2>
                    {loading ? (
                        <p>Loading pending tickets...</p>
                    ) : pendingTickets.length === 0 ? (
                        <p>No pending tickets</p>
                    ) : (
                        <ul>
                            {pendingTickets.map((ticket) => (
                                <li key={ticket.id}>
                                    {ticket.description} - ${ticket.amount}
                                    <button
                                        className="dashboard-button approve-button"
                                        onClick={() => handleTicketAction(ticket.id, "approve")}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className="dashboard-button deny-button"
                                        onClick={() => handleTicketAction(ticket.id, "deny")}
                                    >
                                        Deny
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                    <button className="dashboard-button" onClick={handlePromotePage}>
                        Promote Employees
                    </button>
                    <button className="dashboard-button logout-button" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ManagerDashboard;
