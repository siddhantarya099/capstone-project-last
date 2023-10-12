package com.Natwest.LoginService.Model;

import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Document(collection = "users") // Specify the MongoDB collection name
@Data // Add the @Data annotation from Lombok
public class User {

    private String email;
    private String confirmPassword;
    private String role;
    private String id;

}