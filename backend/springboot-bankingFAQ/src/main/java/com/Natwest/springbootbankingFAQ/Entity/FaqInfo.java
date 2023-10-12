package com.Natwest.springbootbankingFAQ.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "faq")
public class FaqInfo {
    @Id
    private String id;
    private String question;
    private String answer;

}
