package com.Natwest.Admin.Services;

import com.Natwest.Admin.Model.LoanApplication;
import com.Natwest.Admin.Repository.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class AdminService {
    @Autowired
    private AdminRepo adminRepo;

    public List<LoanApplication> getLoanApplicationsForAdmin() {
        return adminRepo.findAll(); // Retrieve all loan applications from the repository
    }

    public String updateApprovalStatus(String id, Map<String, Boolean> changeStatus) {
        LoanApplication application = adminRepo.findById(id).orElse(null);
        if(application!=null){
        application.setApprovalStatus(changeStatus.get("approvalStatus"));
        adminRepo.save(application);
        return "Updated Approval Status";
        }
        else {
            return "No application found";
        }
    }
}
