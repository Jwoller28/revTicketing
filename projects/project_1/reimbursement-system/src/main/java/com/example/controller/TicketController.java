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

    // Employee submits a ticket:
    @PostMapping
    public Ticket submitTicket(@RequestParam int userId, @RequestParam double amount, @RequestParam String description) {
        User user = userService.findById(userId);
        return ticketService.submitTicket(user, amount, description);
    }

    // Manager views pending tickets:
    @GetMapping("/pending")
    public List<Ticket> getPendingTickets(@RequestAttribute("currentUser") User currentUser) {
        if(!"MANAGER".equals(currentUser.getRole())) {
            throw new RuntimeException("Only managers can view pending tickets");
        }
        return ticketService.getPendingTickets();
    }

    // Manager processes a ticket (approve or deny):
    @PatchMapping("/{id}/{action}")
    public Ticket processTicket(@PathVariable int id, @PathVariable String action, @RequestAttribute("currentUser") User currentUser) {
        return ticketService.processTicket(id, action, currentUser);
    }

    // Employee views their own tickets:
    @GetMapping("/user/{userId}")
    public List<Ticket> getUserTickets(@PathVariable int userId, @RequestAttribute("currentUser") User currentUser) {
        // If you want to ensure only that user or a manager can see these, add checks here.
        return ticketService.getTicketsForUser(userId);
    }
}
