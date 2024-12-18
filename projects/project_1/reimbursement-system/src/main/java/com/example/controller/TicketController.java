package com.example.controller;

import com.example.model.Ticket;
import com.example.model.User;
import com.example.service.TicketService;
import com.example.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tickets")
@CrossOrigin
public class TicketController {
    private final TicketService ticketService;
    private final UserService userService;

    public TicketController(TicketService ticketService, UserService userService) {
        this.ticketService = ticketService;
        this.userService = userService;
    }

    // Employee submits a ticket
    @PostMapping("/submit")
    public Ticket submitTicket(@RequestBody TicketRequest ticketRequest) {
        User user = userService.findById(ticketRequest.getUserId());
        return ticketService.submitTicket(user, ticketRequest.getAmount(), ticketRequest.getDescription());
    }

    // Manager views pending tickets
    @GetMapping("/pending")
    public List<Ticket> getPendingTickets(@RequestAttribute("currentUser") User currentUser) {
        if (!"MANAGER".equals(currentUser.getRole())) {
            throw new RuntimeException("Only managers can view pending tickets");
        }
        return ticketService.getPendingTickets();
    }

    // Manager processes a ticket (approve or deny)
    @PatchMapping("/{id}/{action}")
    public Ticket processTicket(@PathVariable int id, @PathVariable String action, @RequestAttribute("currentUser") User currentUser) {
        return ticketService.processTicket(id, action, currentUser);
    }

    // Employee views their own tickets
    @GetMapping("/user/{userId}")
    public List<Ticket> getUserTickets(@PathVariable int userId, @RequestAttribute("currentUser") User currentUser) {
        return ticketService.getTicketsForUser(userId);
    }

    // Nested DTO class for cleaner request handling
    static class TicketRequest {
        private int userId;
        private double amount;
        private String description;

        // Getters and Setters
        public int getUserId() { return userId; }
        public void setUserId(int userId) { this.userId = userId; }
        public double getAmount() { return amount; }
        public void setAmount(double amount) { this.amount = amount; }
        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }
    }
}
