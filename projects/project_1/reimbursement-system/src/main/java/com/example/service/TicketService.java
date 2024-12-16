package com.example.service;

import com.example.model.Ticket;
import com.example.model.User;
import com.example.repository.TicketRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TicketService {
    private final TicketRepository ticketRepository;

    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public Ticket submitTicket(User user, double amount, String description) {
        if(amount <= 0 || description == null || description.isBlank()) {
            throw new RuntimeException("Invalid ticket input");
        }

        Ticket t = new Ticket();
        t.setAmount(amount);
        t.setDescription(description);
        t.setStatus("PENDING");
        t.setSubmittedAt(LocalDateTime.now());
        t.setUser(user);
        return ticketRepository.save(t);
    }

    public List<Ticket> getPendingTickets() {
        return ticketRepository.findByStatus("PENDING");
    }

    public List<Ticket> getTicketsForUser(int userId) {
        return ticketRepository.findByUserId(userId);
    }

    public Ticket processTicket(int ticketId, String action, User currentUser) {
        if(!"MANAGER".equals(currentUser.getRole())) {
            throw new RuntimeException("Only managers can process tickets");
        }
        
        Ticket ticket = ticketRepository.findById(ticketId)
            .orElseThrow(() -> new RuntimeException("Ticket not found"));
        
        if(!"PENDING".equals(ticket.getStatus())) {
            throw new RuntimeException("Ticket already processed");
        }

        if("approve".equalsIgnoreCase(action)) {
            ticket.setStatus("APPROVED");
        } else if ("deny".equalsIgnoreCase(action)) {
            ticket.setStatus("DENIED");
        } else {
            throw new RuntimeException("Invalid action");
        }
        return ticketRepository.save(ticket);
    }
}
