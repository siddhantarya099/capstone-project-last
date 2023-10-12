package com.Natwest.springbootbankingFAQ.Repository;

import com.Natwest.springbootbankingFAQ.Entity.FaqInfo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FaqRepo extends MongoRepository<FaqInfo, String> {
}
