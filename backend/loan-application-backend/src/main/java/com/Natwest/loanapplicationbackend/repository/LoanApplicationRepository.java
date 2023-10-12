package com.Natwest.loanapplicationbackend.repository;

import com.Natwest.loanapplicationbackend.entity.LoanApplication;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LoanApplicationRepository extends MongoRepository<LoanApplication, String> {

    LoanApplication findByemail(String email);
    List<LoanApplication> findByEmail(String email);
}
