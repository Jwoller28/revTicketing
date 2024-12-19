import React, { useEffect, useState } from "react";
import { fetchUserTickets, submitTicket } from "../../services/api";
import { useAuth } from "../../utils/AuthContext";
import Logout from "../Auth/Logout";

const EmployeeDashboard = () => {
    const { currentUser } = useAuth();
    const [tickets, setTickets] = useState([]);
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const getTickets = async () => {
            try {
                const response = await fetchUserTickets(currentUser.id);
                setTickets(response.data);
            } catch (error) {
                console.error("Failed to fetch tickets", error);
            }
        };
        getTickets();
    }, [currentUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await submitTicket({
                userId: currentUser.id,
                amount,
                description,
            });
            setTickets([...tickets, response.data]); // Add new ticket
            setAmount("");
            setDescription("");
            alert("Ticket submitted successfully!");
        } catch (error) {
            console.error("Failed to submit ticket", error);
            alert("Failed to submit ticket.");
        }
    };

    return (
        <div className="container">
            <h2>Welcome, {currentUser.username}</h2>
            <h3>Your Tickets:</h3>
            <ul>
                {tickets.map((ticket) => (
                    <li key={ticket.id}>
                        {ticket.description} - {ticket.status} (${ticket.amount})
                    </li>
                ))}
            </ul>
            <h3>Submit a New Ticket:</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            <Logout />
        </div>
    );
};

export default EmployeeDashboard;



