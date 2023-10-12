package com.Natwest.loanapplicationbackend.entity;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public class PaymentUpdateRequest {
    private Double newBalanceAmount;
    private Double newPaidAmount;

    public Double getNewBalanceAmount() {
        return newBalanceAmount;
    }

    public void setNewBalanceAmount(Double newBalanceAmount) {
        this.newBalanceAmount = newBalanceAmount;
    }

    public Double getNewPaidAmount() {
        return newPaidAmount;
    }

    public void setNewPaidAmount(Double newPaidAmount) {
        this.newPaidAmount = newPaidAmount;
    }
}
