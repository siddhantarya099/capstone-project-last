import React, { useState } from 'react';
import '../css/LoanApplicationForm.css';
import axios from 'axios';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const API_URL = 'http://localhost:8083/api';

const LoanApplicationForm = () => {
  const [balanceAmount, setBalanceAmount] = useState('');
  const [paidAmount, setPaidAmount] = useState('');
  const [formData, setFormData] = useState({
    // Define your form fields here
    firstName: '',
    lastName: '',
    dob: '',
    aadhaarCard: '',
    mobileNumber: '',
    email: '',
    monthlyIncome: '',
    loanAmount: '',
    typeOfLoan: 'personalLoan',
    loanTerm: '',
    balanceAmount: '',

  });

  const [validationErrors, setValidationErrors] = useState({
    firstName: null,
    lastName: null,
    dob: null,
    aadhaarCard: null,
    mobileNumber: null,
    email: null,
    monthlyIncome: null,
    loanAmount: null,
    loanTerm: null,
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate specific fields based on their name
    if (name === 'aadhaarCard') {
      if (!/^\d{12}$/.test(value)) {
        setValidationErrors({ ...validationErrors, [name]: 'Aadhaar card must be 12 digits' });
      } else {
        setValidationErrors({ ...validationErrors, [name]: null });
      }
    } else if (name === 'mobileNumber') {
      if (!/^\d{10}$/.test(value)) {
        setValidationErrors({ ...validationErrors, [name]: 'Mobile number must be 10 digits' });
      } else {
        setValidationErrors({ ...validationErrors, [name]: null });
      }
    } else if (name === 'email') {
      if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)) {
        setValidationErrors({ ...validationErrors, [name]: 'Invalid email address' });
      } else {
        setValidationErrors({ ...validationErrors, [name]: null });
      }
    } else if (name === 'monthlyIncome') {
      const monthlyIncome = parseFloat(value);
      if (isNaN(monthlyIncome) || monthlyIncome < 20000) {
        setValidationErrors({ ...validationErrors, [name]: 'Monthly income must be at least 20000' });
      } else {
        setValidationErrors({ ...validationErrors, [name]: null });
      }
    }

    // Update form data
    setFormData({
      ...formData,
      [name]: value,
      balanceAmount: formData.loanAmount*0.8,
      [name]:value,
      paidAmount: formData.paidAmount,
    });
  };
 
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check for validation errors before submitting
      if (
        Object.values(validationErrors).filter((error) => error !== null).length === 0
      ) {

        // Send form data to the backend API for processing
        await axios.post(`${API_URL}/apply-for-loan`, formData);

        toast.success('Application Received, In Process', {
          position: "top-right",autoClose: 3000, hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,});

        // Clear the form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          dob: '',
          aadhaarCard: '',
          mobileNumber: '',
          email: '',
          monthlyIncome: '',
          loanAmount: '',
          typeOfLoan: 'personalLoan',
          loanTerm: '',
          balanceAmount: '',
          paidAmount:'',
        });
      } else {
        Object.values(validationErrors).forEach((error) => {
          if (error) {
            toast.error(error, {
              position: "top-right",autoClose: 3000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,});
          }
        });
      }
    } catch (error) {
      toast.error('Error submitting loan application', { position: "top-right",autoClose: 3000, hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,});
    }
  };

return (
  <div className="loan-application-page">
    <Header />
    <ToastContainer />
    <div className="loan-application-form">
      <h2>Apply for Loan</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
          </div>
        </div>

        <div className="form-row">
        <div className="form-group">
          <label htmlFor='dob'>Date of Birth</label>
          <input type='date' id='dob' name='dob' value={formData.dob} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="aadhaarCard">Aadhaar Card Number</label>
            <input type="text" id="aadhaarCard" name="aadhaarCard" value={formData.aadhaarCard} onChange={handleInputChange} required />
            {validationErrors.aadhaarCard && (
              <p className="error-message">{validationErrors.aadhaarCard}</p>
            )}
          </div>
          </div>

          <div className="form-row">
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input type="tel" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} required />
            {validationErrors.mobileNumber && (
              <p className="error-message">{validationErrors.mobileNumber}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Id</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            {validationErrors.email && (
              <p className="error-message">{validationErrors.email}</p>
            )}
          </div>
          </div>

          <div className="form-row">
          <div className="form-group">
            <label htmlFor="monthlyIncome">Monthly Income</label>
            <input type="number" id="monthlyIncome" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleInputChange} required />
            {validationErrors.monthlyIncome && (
              <p className="error-message">{validationErrors.monthlyIncome}</p>
            )}
          </div>

          <div className="form-row">
          <div className="form-group">
            <label htmlFor='loanAmount'>Loan Amount</label>
            <input type='number' id='loanAmount' name='loanAmount' value={formData.loanAmount} onChange={handleInputChange} required/>
        </div>
        </div>

        <div className="form-group">
            <label htmlFor='loanTerm'>Loan Term</label>
            <input type='number' id='loanTerm' name='loanTerm' value={formData.loanTerm} onChange={handleInputChange} required/>
        </div>
        </div>

        <div className="form-group">
            <label htmlFor="typeOfLoan">Type of Loan</label>
            <select id="typeOfLoan" name="typeOfLoan" value={formData.typeOfLoan} onChange={handleInputChange} required>
              <option value="personalLoan">Personal Loan</option>
              <option value="homeLoan">Home Loan</option>
              <option value="autoLoan">Auto Loan</option>
              <option value="studentLoan">Student Loan</option>
              <option value="businessLoan">Business Loan</option>
            </select>
          </div>
        
        <button type="submit"
        onMouseOver={(e) => (e.target.style.backgroundColor = '#c5a0df')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#5a287d')}>
          Submit</button>
      </form>
    </div>
    <Footer />
  </div>
);
};

export default LoanApplicationForm;