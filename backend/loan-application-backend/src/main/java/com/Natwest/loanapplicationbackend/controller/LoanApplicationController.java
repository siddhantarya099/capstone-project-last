package com.Natwest.loanapplicationbackend.controller;

import com.Natwest.loanapplicationbackend.entity.LoanApplication;
import com.Natwest.loanapplicationbackend.entity.PaymentUpdateRequest;
import com.Natwest.loanapplicationbackend.services.LoanApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class LoanApplicationController {

    @Autowired
    private LoanApplicationService loanApplicationService;

    @PostMapping("/apply-for-loan")
    public ResponseEntity<LoanApplication> applyForLoan(@RequestBody LoanApplication loanApplication) {
        LoanApplication savedApplication = loanApplicationService.applyForLoan(loanApplication);
        return ResponseEntity.ok(savedApplication);
    }

//    @GetMapping("/loan-history")
//    public List<LoanApplication> getAllLoanHistory() {
//        return loanApplicationService.getAllLoans();
//    }

//    @GetMapping("/loan-history/{id}")
//    public ResponseEntity<LoanApplication> getLoanById(@PathVariable String id) {
//        Optional<LoanApplication> loanApplication = loanApplicationService.getLoanById(id);
//        if (loanApplication.isPresent()) {
//            return ResponseEntity.ok(loanApplication.get());
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }

//    @DeleteMapping("/loan-history/{id}")
//    public ResponseEntity<Void> deleteLoan(@PathVariable String id) {
//        loanApplicationService.deleteLoan(id);
//        return ResponseEntity.noContent().build();
//    }

    @PutMapping("/loan/{email}/update-payment")
    public ResponseEntity<LoanApplication> updatePaymentDetails(@PathVariable String email,
                                                                @RequestBody PaymentUpdateRequest paymentUpdateRequest) {
        LoanApplication loan = loanApplicationService.getLoanByEmail(email);
        if (loan != null) {
            loan.setBalanceAmount(paymentUpdateRequest.getNewBalanceAmount());
            loan.setPaidAmount(paymentUpdateRequest.getNewPaidAmount());

            // Save the updated loan application to the database
            LoanApplication updatedLoan = loanApplicationService.updateLoan(loan);

            return ResponseEntity.ok(updatedLoan);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/loan-history/{email}")
    public List<LoanApplication> getLoanHistory(@PathVariable String email) {
        // Call the service to fetch loan history based on the provided email
        return loanApplicationService.getLoanHistoryByEmail(email);
    }


}
