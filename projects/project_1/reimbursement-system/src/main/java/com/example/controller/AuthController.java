package com.example.controller;

import com.example.model.User;
import com.example.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {
    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public User register(@RequestBody User userData) {
        return userService.register(userData.getUsername(), userData.getPassword());
    }

    @PostMapping("/login")
    public User login(@RequestBody User userData) {
        return userService.login(userData.getUsername(), userData.getPassword());
    }
    
    @PatchMapping("/promote/{id}")
    public User promoteToManager(@PathVariable int id, @RequestAttribute("currentUser") User currentUser) {
        return userService.promoteToManager(id, currentUser);
    }

    @GetMapping("/{userId}")
    public User getUserById(@PathVariable int userId) {
        return userService.findById(userId);
    }


}
