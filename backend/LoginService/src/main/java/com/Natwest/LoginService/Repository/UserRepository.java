package com.Natwest.LoginService.Repository;

import com.Natwest.LoginService.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepository extends MongoRepository<User, String> {
    //    User findByUsername(String username); // Custom query method to find a user by username (customer ID or phone number)
    // You can add more custom query methods as needed
    User findByEmail(String email);
}

