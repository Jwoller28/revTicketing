import React, { useState, useEffect } from "react";
import "../../styles/Dashboard.css";

function EmployeeDashboard() {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newTicket, setNewTicket] = useState({ amount: "", description: "" });

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (!currentUser) {
            alert("User ID is missing. Please log in again.");
            window.location.href = "/login";
            return;
        }

        fetch(`http://localhost:8080/tickets/user/${currentUser.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setTickets(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching tickets:", error);
                setTickets([]);
                setLoading(false);
            });
    }, []);

    const handleTicketSubmit = (e) => {
        e.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (!currentUser) {
            alert("User ID is missing. Please log in again.");
            return;
        }

        const parsedAmount = parseFloat(newTicket.amount);
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            alert("Please enter a valid amount greater than 0.");
            return;
        }

        fetch("http://localhost:8080/tickets/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
                userId: currentUser.id,
                amount: parsedAmount,
                description: newTicket.description,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return response.json().then((data) => {
                        console.error("Server Error:", data);
                        alert("Failed to submit the ticket. Check the backend logs.");
                        return null;
                    });
                }
            })
            .then((ticket) => {
                if (ticket) {
                    setTickets([...tickets, ticket]);
                    setNewTicket({ amount: "", description: "" });
                }
            })
            .catch((error) => {
                console.error("Error submitting ticket:", error);
            });
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
        window.location.href = "/login";
    };

    return (
        <div className="dashboard-content">
            <div className="form-box">
                <h2>Employee Dashboard</h2>
                <h3>Submit new ticket</h3>
                <form onSubmit={handleTicketSubmit}>
                    <input
                        type="number"
                        step="0.01"
                        placeholder="Amount"
                        value={newTicket.amount}
                        onChange={(e) =>
                            setNewTicket({ ...newTicket, amount: e.target.value })
                        }
                        required
                    />
                    <textarea
                        placeholder="Description"
                        value={newTicket.description}
                        onChange={(e) =>
                            setNewTicket({ ...newTicket, description: e.target.value })
                        }
                        required
                    ></textarea>
                    <button type="submit" className="dashboard-button">
                        Submit Ticket
                    </button>
                </form>
                <button className="dashboard-button logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <div className="tickets-box">
                <h2>Your Tickets</h2>
                {loading ? (
                    <p>Loading tickets...</p>
                ) : tickets.length === 0 ? (
                    <p>No tickets submitted yet.</p>
                ) : (
                    <ul>
                        {tickets.map((ticket) => (
                            <li key={ticket.id}>
                                <strong>Description:</strong> {ticket.description || "N/A"} <br />
                                <strong>Amount:</strong> ${ticket.amount ? ticket.amount.toFixed(2) : "0.00"} <br />
                                <strong>Status:</strong> {ticket.status || "Unknown"}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default EmployeeDashboard;
