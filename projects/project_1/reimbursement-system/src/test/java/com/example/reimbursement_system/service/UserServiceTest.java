package com.example.service;

import com.example.model.User;
import com.example.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class UserServiceTest {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testRegister_Success() {
        User user = new User("testUser", "password", "EMPLOYEE");

        when(userRepository.findByUsername("testUser")).thenReturn(null);
        when(userRepository.save(any(User.class))).thenReturn(user);

        User result = userService.register("testUser", "password");

        assertNotNull(result);
        assertEquals("testUser", result.getUsername());
    }

    @Test
    void testRegister_UsernameAlreadyExists() {
        User existingUser = new User("testUser", "password", "EMPLOYEE");

        when(userRepository.findByUsername("testUser")).thenReturn(existingUser);

        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            userService.register("testUser", "password");
        });

        assertEquals("Username already exists", exception.getMessage());
    }

    @Test
    void testLogin_Success() {
        User user = new User("testUser", "password", "EMPLOYEE");

        when(userRepository.findByUsername("testUser")).thenReturn(user);

        User result = userService.login("testUser", "password");

        assertNotNull(result);
        assertEquals("testUser", result.getUsername());
    }

    @Test
    void testLogin_InvalidCredentials() {
        when(userRepository.findByUsername("testUser")).thenReturn(null);

        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            userService.login("testUser", "wrongPassword");
        });

        assertEquals("Invalid credentials", exception.getMessage());
    }

    @Test
    void testPromoteToManager_Success() {
        User employee = new User("employee", "password", "EMPLOYEE");
        employee.setId(2);

        User manager = new User("manager", "password", "MANAGER");

        when(userRepository.findById(2)).thenReturn(Optional.of(employee));
        when(userRepository.save(any(User.class))).thenReturn(employee);

        User result = userService.promoteToManager(2, manager);

        assertNotNull(result);
        assertEquals("MANAGER", result.getRole());
    }
}
