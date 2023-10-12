package com.Natwest.Register.service;

import com.Natwest.Register.model.User;
import com.Natwest.Register.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    @Qualifier("userRepo")
    private UserRepo userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder; // Used for password hashing

    public Optional<User> findById(String id) {
        return userRepository.findById(id);
    }

    public Optional<User> getUserById(String id) {
        return userRepository.findById(id);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User registerUser(User user) {

            if (userRepository.existsByEmail(user.getEmail())) {
                throw new RuntimeException("Email is already registered.");
            }

            // Check if the password and confirmPassword fields match
            if (!user.getPassword().equals(user.getConfirmPassword())) {
                throw new RuntimeException("Password and confirm password do not match.");
            }

            // Hash the user's password before saving it
            String hashedPassword = passwordEncoder.encode(user.getPassword());
            user.setPassword(hashedPassword);

            return userRepository.save(user);
        }



    public Optional<User> updateUser(String id, User updatedUser) {
        if (!userRepository.existsById(id)) {
            return Optional.empty();
        }
        updatedUser.setId(id); // Ensure the ID is set to the correct value
        User savedUser = userRepository.save(updatedUser);
        return Optional.of(savedUser);
    }

    public boolean deleteUser(String id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }


}
