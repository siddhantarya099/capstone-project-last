import React from 'react';
import { Link } from 'react-router-dom';
import '../css/LoanTypes.css'

function LoanTypes() {
  const loanTypes = [
    {
      name: 'Personal Loan',
      interestRate: 'Low interest rate: 5%',
    },
    {
      name: 'Home Loan',
      interestRate: 'Lowest interest rate: 3.5%',
    },
    {
      name: 'Car Loan',
      interestRate: 'Competitive interest rate: 4%',
    },
    {
      name: 'Student Loan',
      interestRate: 'Education-focused loan: 3%',
    },
    {
      name: 'Business Loan',
      interestRate: 'Support for entrepreneurs: 4.5%',
    },
  ];

  return (
    <div className="loan-types-container">
      {loanTypes.map((loan, index) => (
        <div key={index} className="loan-card">
          <h3 className="loan-title">{loan.name}</h3>
          <p className="loan-rate">{loan.interestRate}</p>
          <Link to="/apply-for-loan" className="apply-button">
            Apply for {loan.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default LoanTypes;
