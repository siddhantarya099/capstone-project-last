package com.Natwest.Register.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;




@Document(collection = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
    public class User {
        @Id

        private String id;

        private String firstName;
        private String lastName;
        private String email;
    private String role;
    private String mobileNumber;
        private String password;
        private String confirmPassword;


    }

