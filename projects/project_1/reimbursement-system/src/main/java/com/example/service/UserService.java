package com.example.service;

import com.example.model.User;
import com.example.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User register(String username, String password) {
        if(userRepository.findByUsername(username) != null) {
            throw new RuntimeException("Username already exists");
        }
        User user = new User(username, password, "EMPLOYEE");
        return userRepository.save(user);
    }

    public User login(String username, String password) {
        User user = userRepository.findByUsername(username);
        if(user == null || !user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid credentials");
        }
        return user;
    }

    public User promoteToManager(int userId, User currentUser) {
        if(!"MANAGER".equals(currentUser.getRole())) {
            throw new RuntimeException("Only managers can promote employees");
        }
        User userToPromote = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("User not found"));
        userToPromote.setRole("MANAGER");
        return userRepository.save(userToPromote);
    }

    public User findById(int userId) {
        return userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("User not found"));
    }
}
