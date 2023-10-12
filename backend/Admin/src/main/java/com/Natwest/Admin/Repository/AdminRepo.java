package com.Natwest.Admin.Repository;

import com.Natwest.Admin.Model.LoanApplication;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AdminRepo extends MongoRepository<LoanApplication,String> {
}
