import React, { useState } from "react";
import "../../styles/Dashboard.css";

function SubmitTicket({ onTicketSubmit }) {
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const userId = localStorage.getItem("userId");
        if (!userId) {
            alert("User ID is missing. Please log in again.");
            return;
        }

        const parsedAmount = parseFloat(amount);

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
                userId: parseInt(userId, 10),
                amount: parsedAmount,
                description,
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
                    alert("Ticket submitted successfully!");
                    setAmount("");
                    setDescription("");
                    onTicketSubmit(ticket); // Notify parent component of the new ticket
                }
            })
            .catch((error) => {
                console.error("Error submitting ticket:", error);
                alert("Failed to submit the ticket. Please try again.");
            });
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-box">
                <h2>Submit Ticket</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        step="0.01"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit" className="dashboard-button">
                        Submit Ticket
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SubmitTicket;
