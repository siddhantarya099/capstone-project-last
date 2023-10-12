import React from 'react';
//import './paymentsuccesspopup.css'; // Import the CSS file with correct casing
import { useNavigate } from 'react-router-dom';

const PaymentSuccessPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const handlePopupClose = () => {
    onClose();
    navigate('/userdashboard', { replace: true });
  };

  return (
    <div className="payment-success-popup">
      <h2>Payment Successful!</h2>
      <p>Your payment has been successfully processed.</p>
      <button onClick={handlePopupClose}>Close</button>
    </div>
  );
};

export default PaymentSuccessPopup;
