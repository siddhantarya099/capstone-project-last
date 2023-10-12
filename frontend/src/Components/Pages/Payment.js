import React, { Fragment, useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import TopNavbar from '../Header/Header';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PaymentSuccessPopup from './PaymentSuccessPopup';
import '../css/payment.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import paymentsuccesspopup from '../css/paymentsuccesspopup.css';

const Payment = () => {

  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardNumber, setCardNumber] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [cvv, setCVV] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [paymentDate, setPaymentDate] = useState('');
  const [upiId, setUpiId] = useState('');
  const [paymentOption, setPaymentOption] = useState('full');
  const [maskedCVV, setMaskedCVV] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanType, setLoanType] = useState('');
  const [balanceAmount, setBalanceAmount] = useState('');
  const [paidAmount, setPaidAmount] = useState('');
  const [paymentError, setPaymentError] = useState('');
  const [paymentAmount, setPaymentAmount] = useState(balanceAmount);
  const navigate = useNavigate();



  const email = sessionStorage.getItem("email"); // Retrieve email from session storage
  console.log(email);


  const generateReferenceNumber = () => {
    return uuidv4(); // Generate a unique UUID as the reference number
  };

  const handlePaymentAmountChange = (e) => {
    setPaymentAmount(e.target.value);
    setPaymentError('');
  };
  const handleLoanTypeChange = (e) => {
    setLoanType(e.target.value);
  };
  const handleCVVChange = (e) => {
    const cvvValue = e.target.value;
    setCVV(cvvValue); // Update the actual CVV

    // Create a masked CVV with asterisks
    const maskedValue = '*'.repeat(cvvValue.length);
    setMaskedCVV(maskedValue); // Update the masked CVV
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  const handleUpiIdChange = (e) => {
    setUpiId(e.target.value);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8083/api/loan-history/${email}`)
      .then((response) => {
        const loanData = response.data[0]; // Use [0] because it's an array
  
        // Update state variables with fetched data
        // setLoanAmount(loanData.loanAmount);
        // setBalanceAmount(loanData.balanceAmount);
        // setPaidAmount(loanData.paidAmount);
        // setPaymentAmount(loanData.balanceAmount);
        setLoanType(loanData.typeOfLoan);
        setLoanAmount(loanData.loanAmount);
        setBalanceAmount(loanData.balanceAmount);
        setPaidAmount(loanData.paidAmount);
        setPaymentAmount(loanData.balanceAmount);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [email]);

    //fetchLoanAmount();
 
  const handlePaymentOptionChange = (e) => {
    const selectedOption = e.target.value;
    setPaymentOption(selectedOption);
    // Set payment amount based on the selected option
    if (selectedOption === 'full') {
      setPaymentAmount(balanceAmount); // Full balance amount
    } else if (selectedOption === 'partial') {
      setPaymentAmount(''); // Monthly loan amount
    }
  };

  // useEffect to initialize the payment amount when the component mounts
  useEffect(() => {
    // Set the initial payment amount based on the default payment option ('full' or 'partial')
    if (paymentOption === 'full') {
      setPaymentAmount(balanceAmount); // Full balance amount
    } else if (paymentOption === 'partial') {
      setPaymentAmount(''); // Monthly loan amount
    }
  }, [paymentOption]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const floatPaymentAmount = parseFloat(paymentAmount);
    if (floatPaymentAmount > parseFloat(balanceAmount)) {
      // Display an error message to the user or handle it as needed
      setPaymentError('Payment amount exceeds the balance amount.');
      return;
    }
    const referenceNumber = generateReferenceNumber();
    // Perform payment processing here (e.g., validation, API call)
    // Create a paymentInfo object with the payment details
    const email = sessionStorage.getItem("email");
    const paymentInfo = {
      paymentAmount,
      paymentMethod,
      cardNumber,
      nameOnCard,
      expirationMonth,
      expirationYear,
      cvv,
      bankAccount,
      accountHolderName,
      ifscCode,
      referenceNumber,
      paymentDate,
      upiId,
      loanType,
      email,
    };
    const payment = {
      balanceAmount,
      paidAmount,
    };

    try {


      console.log('Payment successful');
      console.log(referenceNumber);

      const newBalanceAmount = balanceAmount - paymentAmount;
      console.log(newBalanceAmount);
      const newPaidAmount = parseFloat(paidAmount) + parseFloat(paymentAmount);
      console.log(newPaidAmount);
      setBalanceAmount(newBalanceAmount);
      setPaidAmount(newPaidAmount);
      setPaymentAmount('');
      setPaymentMethod('creditCard');
      setCardNumber('');
      setNameOnCard('');
      setExpirationMonth('');
      setExpirationYear('');
      setCVV('');
      setBankAccount('');
      setAccountHolderName('');
      setIfscCode('');
      setUpiId('');

      const updatedUserData = {
        email, // Assuming you already have the email stored in a variable
        newBalanceAmount: newBalanceAmount,
        newPaidAmount: newPaidAmount,
      };
      await axios.put(`http://localhost:8083/api/loan/${email}/update-payment`, updatedUserData);
      setShowSuccessPopup(true);

    } catch (error) {
      console.error('Error making payment', error);
    }
  }

  const inputStyles = {
    width: '100%',
    padding: '8px',
    fontSize: '14px',
    borderRadius: '5px',
    marginBottom: '10px',
    transition: 'border-color 0.3s ease-in-out',
  };

  const handleInputHover = (e) => {
    e.target.style.borderColor = '#5a287d';
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = '#ccc';
  };
  const handleBankAccountChange = (e) => {
    setBankAccount(e.target.value);
  };

  const handleAccountHolderNameChange = (e) => {
    setAccountHolderName(e.target.value);
  };

  const handleIfscCodeChange = (e) => {
    setIfscCode(e.target.value);
  };
  // Generate an array of years starting from the current year up to 10 years in the future
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 11 }, (_, i) => currentYear + i);
  return (
    <div className="payment-page">
      <TopNavbar />
      <Container fluid className="payment-container">
        <h1 className="payment-heading">Loan Payment</h1>
        <div>
          <p className="payment-info">Total Loan Amount: {loanAmount}</p>
          <p className="payment-info">Outstanding Loan Amount (inc. interest): {balanceAmount}</p>
          <p className="payment-info">Paid Loan Amount: {paidAmount}</p>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label className="payment-label">Loan Type</Form.Label>
            <Form.Control
              as="select"
              value={loanType}
              onChange={handleLoanTypeChange}
              className="payment-select"
            >
              <option value="personal">Personal Loan</option>
              <option value="home">Home Loan</option>
              <option value="student">Student Loan</option>
              <option value="auto">Auto Loan</option>
              <option value="business">Business Loan</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label className="payment-label">Payment Option</Form.Label>
            <Form.Control
              as="select"
              value={paymentOption}
              onChange={handlePaymentOptionChange}
              className="payment-select"
              disabled={showSuccessPopup}
            >
              <option value="full">Full Amount</option>
              <option value="partial">Partial Amount</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label className="payment-label">Payment Amount</Form.Label>
            <Form.Control
              type="number"
              value={paymentAmount}
              onChange={handlePaymentAmountChange}
              required
              className="payment-input"
              disabled={paymentOption === 'full' || showSuccessPopup}
            />
            {paymentError && (
              <div className="full-payment-error">{paymentError}</div>
            )}

          </Form.Group>
          <Form.Group>
            <Form.Label className="payment-label">Payment Method</Form.Label>
            <Form.Control
              as="select"
              onChange={handlePaymentMethodChange}
              className="payment-select"
            >
              <option value="creditCard">Credit/Debit Card</option>
              <option value="bankTransfer">Bank Transfer</option>
              <option value="upi">UPI</option>
            </Form.Control>
          </Form.Group>
          {paymentMethod === 'creditCard' && (
            <Fragment>
              <Form.Group>
                <Form.Label className="payment-label">Card Number</Form.Label>
                <Form.Control
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  pattern="^\d{16}$"
                  required
                  style={inputStyles}
                  onMouseEnter={handleInputHover}
                  onMouseLeave={handleInputBlur}
                  onBlur={handleInputBlur}
                  className="payment-input"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="payment-label">Name on Card</Form.Label>
                <Form.Control
                  type="text"
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                  required
                  style={inputStyles}
                  onMouseEnter={handleInputHover}
                  onMouseLeave={handleInputBlur}
                  onBlur={handleInputBlur}
                  className="payment-input"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="payment-label">CVV</Form.Label>
                <Form.Control
                  type="text"
                  value={maskedCVV}
                  onChange={handleCVVChange}
                  required
                  pattern="^.{3}$" // Use pattern attribute to enforce 3 digits
                  style={inputStyles}
                  onMouseEnter={handleInputHover}
                  onMouseLeave={handleInputBlur}
                  onBlur={handleInputBlur}
                  className="payment-input"
                />
                <small className="text-muted">Enter a 3-digit CVV number.</small>
              </Form.Group>
              <Form.Group>
                <Form.Label className="payment-label">Expiration Date</Form.Label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Form.Control
                    as="select"
                    value={expirationMonth}
                    onChange={(e) => setExpirationMonth(e.target.value)}
                    required
                    style={{ ...inputStyles, flex: 1, marginRight: '5px' }}
                  >
                    <option value="">Month</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </Form.Control>
                  <Form.Control
                    as="select"
                    value={expirationYear}
                    onChange={(e) => setExpirationYear(e.target.value)}
                    required
                    style={{ ...inputStyles, flex: 1 }}
                  >
                    <option value="">Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </Form.Control>
                </div>
              </Form.Group>

            </Fragment>
          )}
          {paymentMethod === 'bankTransfer' && (
            <Fragment>
              <Form.Group>
                <Form.Label className="payment-label">Account Number</Form.Label>
                <Form.Control
                  type="text"
                  value={bankAccount}
                  onChange={handleBankAccountChange}
                  required
                  className="payment-input"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="payment-label">Account Holder Name</Form.Label>
                <Form.Control
                  type="text"
                  value={accountHolderName}
                  onChange={handleAccountHolderNameChange}
                  required
                  className="payment-input"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="payment-label">IFSC Code</Form.Label>
                <Form.Control
                  type="text"
                  value={ifscCode}
                  onChange={handleIfscCodeChange}
                  pattern="^[A-Z]{4}0[A-Za-z0-9]{6}$"
                  required
                  className="payment-input"
                />
              </Form.Group>
            </Fragment>
          )}
          {paymentMethod === 'upi' && (
            <Fragment>
              <Form.Group>
                <Form.Label className="payment-label">UPI ID</Form.Label>
                <Form.Control
                  type="text"
                  value={upiId}
                  onChange={handleUpiIdChange}
                  required
                  pattern="[a-zA-Z0-9]+@[a-zA-Z0-9]+[a-zA-Z]{2,}"
                  style={inputStyles}
                  onMouseEnter={handleInputHover}
                  onMouseLeave={handleInputBlur}
                  onBlur={handleInputBlur}
                  className="payment-input"
                />
              </Form.Group>
            </Fragment>
          )}
          <div>
            <Button type="submit" className="payment-button" 
            onMouseOver={(e) => (e.target.style.backgroundColor = '#c5a0df')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#5a287d')}>
              Submit Payment
            </Button>
          </div>
        </Form>
      </Container>
      <Footer />
      {showSuccessPopup && (
        <PaymentSuccessPopup
          onClose={() => setShowSuccessPopup(false)}
        />
      )}
    </div>
  );
};

export default Payment;