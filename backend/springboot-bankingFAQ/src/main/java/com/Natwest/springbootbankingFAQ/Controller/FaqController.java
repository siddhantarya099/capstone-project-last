package com.Natwest.springbootbankingFAQ.Controller;

import com.Natwest.springbootbankingFAQ.Entity.FaqInfo;
import com.Natwest.springbootbankingFAQ.Service.FaqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/banking")
@CrossOrigin("http://localhost:3000/")
public class FaqController {

    @Autowired
    private FaqService faqService;

    @PostMapping("/faq")
    public FaqInfo addFaq(@RequestBody FaqInfo faqInfo){

        return faqService.addFaq(faqInfo);
    }
    @GetMapping("/faq/data")
    public List<FaqInfo> getAllFaq(){
        return faqService.getAllFaq();
    }
}
