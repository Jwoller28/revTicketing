import React, { useEffect, useState } from "react";
import { fetchPendingTickets, processTicket } from "../../services/api";
import Logout from "../Auth/Logout";



const ManagerDashboard = () => {
    const [pendingTickets, setPendingTickets] = useState([]);

    useEffect(() => {
        const getPendingTickets = async () => {
            try {
                const response = await fetchPendingTickets();
                setPendingTickets(response.data);
            } catch (error) {
                console.error("Failed to fetch pending tickets", error);
            }
        };
        getPendingTickets();
    }, []);

    const handleAction = async (ticketId, action) => {
        try {
            await processTicket(ticketId, action);
            alert(`Ticket ${ticketId} ${action}d successfully!`);
            setPendingTickets(pendingTickets.filter((ticket) => ticket.id !== ticketId));
        } catch (error) {
            console.error(`Failed to ${action} ticket`, error);
            alert(`Failed to ${action} ticket.`);
        }
    };

    return (
        <div className="container">
            <h2>Manager Dashboard</h2>
            <h3>Pending Tickets:</h3>
            <ul>
                {pendingTickets.map((ticket) => (
                    <li key={ticket.id}>
                        {ticket.description} - ${ticket.amount}
                        <button onClick={() => handleAction(ticket.id, "approve")}>
                            Approve
                        </button>
                        <button onClick={() => handleAction(ticket.id, "deny")}>
                            Deny
                        </button>
                    </li>
                ))}
            </ul>
            <Logout />
        </div>
    );
};

export default ManagerDashboard;
