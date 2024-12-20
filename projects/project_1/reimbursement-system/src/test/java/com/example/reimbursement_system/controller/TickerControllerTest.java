package com.example.controller;

import com.example.model.Ticket;
import com.example.model.User;
import com.example.service.TicketService;
import com.example.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class TicketControllerTest {

    @InjectMocks
    private TicketController ticketController;

    @Mock
    private TicketService ticketService;

    @Mock
    private UserService userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testSubmitTicket_Success() {
        User user = new User();
        user.setId(1);

        Ticket ticket = new Ticket();
        ticket.setDescription("Test Ticket");

        when(userService.findById(1)).thenReturn(user);
        when(ticketService.submitTicket(any(User.class), anyDouble(), anyString())).thenReturn(ticket);

        TicketController.TicketRequest ticketRequest = new TicketController.TicketRequest();
        ticketRequest.setUserId(1);
        ticketRequest.setAmount(100.0);
        ticketRequest.setDescription("Test Ticket");

        Ticket result = ticketController.submitTicket(ticketRequest);

        assertNotNull(result);
        assertEquals("Test Ticket", result.getDescription());
    }
}
