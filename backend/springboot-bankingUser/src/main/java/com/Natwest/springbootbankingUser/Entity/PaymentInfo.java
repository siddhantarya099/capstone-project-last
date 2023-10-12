package com.Natwest.springbootbankingUser.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="payment")
public class PaymentInfo {
    @Id
    private String id;
    private String email;
    private BigDecimal paymentAmount;
    private String paymentMethod;
    private String cardNumber;
    private String NameOnCard;
    private String expirationMonth;
    private String expirationYear;
    private String cvv;
    private String bankAccount;
    private String accountHolderName;
    private String ifscCode;
    private Date paymentDate;
    private String referenceNumber;
    private String upiId;

}
