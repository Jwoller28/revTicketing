package com.example.config;

import com.example.model.User;
import com.example.service.UserService;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class AuthInterceptor implements HandlerInterceptor {
    private final UserService userService;

    public AuthInterceptor(UserService userService) {
        this.userService = userService;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        // Mock authentication: inject a User object for demonstration purposes
        // Replace this logic with real authentication, e.g., extracting user details from a token
        User mockUser = userService.findById(1); // Replace with your actual logic
        request.setAttribute("currentUser", mockUser);
        return true;
    }
}
