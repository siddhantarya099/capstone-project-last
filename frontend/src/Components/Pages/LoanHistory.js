import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/LoanHistory.css';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import Header from '../Header/Header'


const API_URL = 'http://localhost:8083/api';

const LoanHistoryDetails = () => {
  const [loanHistory, setLoanHistory] = useState([]);
  const email = sessionStorage.getItem("email"); // Retrieve email from session storage

  useEffect(() => {
    if (!email) {
      // Handle the case when email is not available in session storage
      console.error('Email not found in session storage');
      return;
    } 

    axios
      .get(`${API_URL}/loan-history/${email}`) // Pass email as a query parameter
      .then((response) => {
        const dataWithEMI = response.data.map((loan) => {
          const principal = parseFloat(loan.loanAmount);
          const annualInterestRate = 7.4; 
          const monthlyInterestRate = (annualInterestRate / 12) / 100;
          const loanTermMonths = parseInt(loan.loanTerm);
          
          const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths)) / (Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1);
          
          return {
            ...loan,
            emi: emi.toFixed(2) // Rounding to 2 decimal places
          };
        });
        setLoanHistory(dataWithEMI);
      })
      .catch((error) => {
        console.error('Error fetching loan history:', error);
      });
  }, [email]); // Include email in the dependency array to re-fetch when it changes

  return (
    <div>
      <Header />
      <div className='loan-history-details'>
        <h2 className='page-title'>Loan History Details</h2>
        <table className='loan-table'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Aadhaar Card Number</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>Monthly Income</th>
              <th>Loan Amount</th>
              <th>Type of Loan</th>
              <th>Loan Term</th>
              <th>Monthly EMI</th>
            </tr>
          </thead>
          <tbody>
            {loanHistory.map((loan, index) => (
              <tr key={index}>
                <td>{loan.firstName}</td>
                <td>{loan.lastName}</td>
                <td>{loan.dob}</td>
                <td>{loan.aadhaarCard}</td>
                <td>{loan.mobileNumber}</td>
                <td>{loan.email}</td>
                <td>{loan.monthlyIncome}</td>
                <td>{loan.loanAmount}</td>
                <td>{loan.typeOfLoan}</td>
                <td>{loan.loanTerm}</td>
                <td>{loan.emi}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='centered'>
          <Link to='/payment' className='make-payment-button'>
            Make Payment
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoanHistoryDetails;
