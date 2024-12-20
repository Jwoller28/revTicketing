package com.example.service;

import com.example.model.Ticket;
import com.example.model.User;
import com.example.repository.TicketRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class TicketServiceTest {

    @InjectMocks
    private TicketService ticketService;

    @Mock
    private TicketRepository ticketRepository;

    private User manager;
    private User employee;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        manager = new User();
        manager.setId(1);
        manager.setUsername("manager");
        manager.setRole("MANAGER");

        employee = new User();
        employee.setId(2);
        employee.setUsername("employee");
        employee.setRole("EMPLOYEE");
    }

    @Test
    void testSubmitTicket_Success() {
        Ticket ticket = new Ticket();
        ticket.setAmount(100.0);
        ticket.setDescription("Test Ticket");
        ticket.setUser(employee);
        ticket.setStatus("PENDING");
        ticket.setSubmittedAt(LocalDateTime.now());

        when(ticketRepository.save(any(Ticket.class))).thenReturn(ticket);

        Ticket result = ticketService.submitTicket(employee, 100.0, "Test Ticket");

        assertNotNull(result);
        assertEquals("Test Ticket", result.getDescription());
        assertEquals(100.0, result.getAmount());
        assertEquals(employee, result.getUser());
        assertEquals("PENDING", result.getStatus());
    }

    @Test
    void testSubmitTicket_InvalidAmount() {
        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            ticketService.submitTicket(employee, -10.0, "Invalid Ticket");
        });
        assertEquals("Invalid ticket input", exception.getMessage());
    }

    @Test
    void testSubmitTicket_BlankDescription() {
        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            ticketService.submitTicket(employee, 100.0, "");
        });
        assertEquals("Invalid ticket input", exception.getMessage());
    }

    @Test
    void testGetPendingTickets() {
        Ticket ticket1 = new Ticket();
        ticket1.setStatus("PENDING");

        Ticket ticket2 = new Ticket();
        ticket2.setStatus("PENDING");

        when(ticketRepository.findByStatus("PENDING")).thenReturn(List.of(ticket1, ticket2));

        List<Ticket> result = ticketService.getPendingTickets();

        assertNotNull(result);
        assertEquals(2, result.size());
    }

    @Test
    void testGetTicketsForUser() {
        Ticket ticket1 = new Ticket();
        ticket1.setUser(employee);

        Ticket ticket2 = new Ticket();
        ticket2.setUser(employee);

        when(ticketRepository.findByUserId(employee.getId())).thenReturn(List.of(ticket1, ticket2));

        List<Ticket> result = ticketService.getTicketsForUser(employee.getId());

        assertNotNull(result);
        assertEquals(2, result.size());
    }

    @Test
    void testProcessTicket_Approve() {
        Ticket ticket = new Ticket();
        ticket.setId(1);
        ticket.setStatus("PENDING");

        when(ticketRepository.findById(1)).thenReturn(Optional.of(ticket));
        when(ticketRepository.save(any(Ticket.class))).thenReturn(ticket);

        Ticket result = ticketService.processTicket(1, "approve", manager);

        assertNotNull(result);
        assertEquals("APPROVED", result.getStatus());
    }

    @Test
    void testProcessTicket_Deny() {
        Ticket ticket = new Ticket();
        ticket.setId(1);
        ticket.setStatus("PENDING");

        when(ticketRepository.findById(1)).thenReturn(Optional.of(ticket));
        when(ticketRepository.save(any(Ticket.class))).thenReturn(ticket);

        Ticket result = ticketService.processTicket(1, "deny", manager);

        assertNotNull(result);
        assertEquals("DENIED", result.getStatus());
    }

    @Test
    void testProcessTicket_InvalidAction() {
        Ticket ticket = new Ticket();
        ticket.setId(1);
        ticket.setStatus("PENDING");

        when(ticketRepository.findById(1)).thenReturn(Optional.of(ticket));

        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            ticketService.processTicket(1, "invalid_action", manager);
        });
        assertEquals("Invalid action", exception.getMessage());
    }

    @Test
    void testProcessTicket_NotManager() {
        Ticket ticket = new Ticket();
        ticket.setId(1);
        ticket.setStatus("PENDING");

        when(ticketRepository.findById(1)).thenReturn(Optional.of(ticket));

        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            ticketService.processTicket(1, "approve", employee);
        });
        assertEquals("Only managers can process tickets", exception.getMessage());
    }

    @Test
    void testProcessTicket_AlreadyProcessed() {
        Ticket ticket = new Ticket();
        ticket.setId(1);
        ticket.setStatus("APPROVED");

        when(ticketRepository.findById(1)).thenReturn(Optional.of(ticket));

        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            ticketService.processTicket(1, "approve", manager);
        });
        assertEquals("Ticket already processed", exception.getMessage());
    }
}
