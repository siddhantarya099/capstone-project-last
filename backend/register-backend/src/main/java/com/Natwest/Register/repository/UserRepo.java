package com.Natwest.Register.repository;

import com.Natwest.Register.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface UserRepo extends MongoRepository<User,String> {
    boolean existsByEmail(String email);
}
