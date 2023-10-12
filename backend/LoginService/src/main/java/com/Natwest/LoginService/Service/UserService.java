package com.Natwest.LoginService.Service;

import com.Natwest.LoginService.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


//    public User findByUsername(String username) {
//        return userRepository.findByUsername(username);
//    }
//    public String authenticate(User user) {
//        User existingUser =userRepository.findByMobileNumber(user.getMobileNumber());
//
//    }

    // Add other service methods as needed, e.g., saveUser, updateUser, deleteUser, etc.
}


