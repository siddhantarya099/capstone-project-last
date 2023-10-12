package com.Natwest.springbootbankingFAQ.Service;

import com.Natwest.springbootbankingFAQ.Entity.FaqInfo;
import com.Natwest.springbootbankingFAQ.Repository.FaqRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FaqService {

    @Autowired
    private FaqRepo faqRepo;
    public FaqInfo addFaq(FaqInfo faqInfo) {

        return faqRepo.save(faqInfo);
    }

    public List<FaqInfo> getAllFaq() {
        return faqRepo.findAll();
    }
}
