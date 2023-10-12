package com.Natwest.Admin.Controller;

import com.Natwest.Admin.Model.LoanApplication;
import com.Natwest.Admin.Services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/loan_applications")
@CrossOrigin("http://localhost:3000")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping("/hi")
    public String hi(){
        return "hi";
    }
    @GetMapping("/admin")
    public List<LoanApplication> getLoanApplicationsForAdmin() {
        // You should implement a method in your service to retrieve loan applications for an admin
        return adminService.getLoanApplicationsForAdmin();
    }

    @PutMapping("/admin/{id}")
    public String updateApprovalStatus(@PathVariable String id,@RequestBody Map<String,Boolean> changeStatus){
        return adminService.updateApprovalStatus(id,changeStatus);
    }
}
