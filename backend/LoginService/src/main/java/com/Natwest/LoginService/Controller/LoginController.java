package com.Natwest.LoginService.Controller;

import com.Natwest.LoginService.Model.User;
import com.Natwest.LoginService.Repository.UserRepository;
import com.Natwest.LoginService.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/users")
@CrossOrigin("http://localhost:3000")
public class LoginController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/authenticate")
    public String authenticate(@RequestBody User user) {
        User checkEmail = userRepository.findByEmail(user.getEmail());
        if (checkEmail == null) {
            return "User Not registered yet!";
        }
        User existingUser = userRepository.findByEmail(user.getEmail());
        System.out.println(user.getEmail()+"&"+user.getConfirmPassword());
        if (checkEmail != null && user.getConfirmPassword().equals(existingUser.getConfirmPassword())) {
            return (existingUser.getRole());
        } else {
            return ("Invalid password");
        }
    }

    @PostMapping("/getId")
    public String getId(@RequestBody User user) {
        User checkEmail = userRepository.findByEmail(user.getEmail());
        return checkEmail.getId();
    }



}