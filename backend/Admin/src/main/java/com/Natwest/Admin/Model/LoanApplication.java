package com.Natwest.Admin.Model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;

@Document(collection = "loan_applications") // Specify the MongoDB collection name
@Data
public class LoanApplication {
    @Id
    private String id;

    private String firstName;
    private String lastName;
    private String dob;
    private String aadhaarCard;
    private String mobileNumber;
    private String email;
    private Double monthlyIncome;
    private Integer loanAmount;
    private Integer loanTerm;
    private String typeOfLoan;
    private String interestRateType;
    private Boolean approvalStatus;
}
