package com.Natwest.loanapplicationbackend.services;

import com.Natwest.loanapplicationbackend.entity.LoanApplication;
import com.Natwest.loanapplicationbackend.repository.LoanApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoanApplicationService {

    @Autowired
    private LoanApplicationRepository loanApplicationRepository;

    public LoanApplication applyForLoan(LoanApplication loanApplication) {
        return loanApplicationRepository.save(loanApplication);
    }

//    public List<LoanApplication> getAllLoans() {
//        return loanApplicationRepository.findAll();
//    }


//    public void deleteLoan(String id) {
//        loanApplicationRepository.deleteById(id);
//    }
    public LoanApplication getLoanByEmail(String email) {
        return (LoanApplication) loanApplicationRepository.findByemail(email);
    }

    public LoanApplication updateLoan(LoanApplication loan) {
        return loanApplicationRepository.save(loan);
    }
    public List<LoanApplication> getLoanHistoryByEmail(String email) {
        // Implement the logic to fetch loan history based on the provided email
        // You can use methods from the loanRepository to access the database
        return loanApplicationRepository.findByEmail(email);
    }
}



