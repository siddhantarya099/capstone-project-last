import React, { useState} from 'react';
import '../css/EmiCalculator.css';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import Footer from "../Footer/Footer";
import TopNavbar from "../Header/TopNavbar";
import Header from '../Header/Header';


const EmiCalculator = () => {
  // State to store user input and calculated values
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emi, setEmi] = useState(null);
  const [principalAmount, setPrincipalAmount] = useState(null);
  const [interestAmount, setInterestAmount] = useState(null);
  const [totalAmountPayable, setTotalAmountPayable] = useState(null);

  // Event handlers for input fields
  const handleLoanAmountChange = (e) => {
    setLoanAmount(e.target.value);
  };

  const handleInterestRateChange = (e) => {
    setInterestRate(e.target.value);
  };

  const handleLoanTenureChange = (e) => {
    setLoanTenure(e.target.value);
  };

  // Function to handle form submission (calculate EMI)
  const calculateEmi = () => {
    // Convert interest rate to a monthly rate (annual rate / 12 / 100)
    const monthlyInterestRate = (interestRate / 1200 );

    // Calculate EMI, Principal Amount, Interest Amount, Total Amount Payable
    const emiValue = parseFloat(
      (
        loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenure)
      ) / (
        Math.pow(1 + monthlyInterestRate, loanTenure)-1 
      )
    );

    const principalValue = parseFloat(loanAmount);
    const interestValue = parseFloat((emiValue * loanTenure) - loanAmount);
    const totalValue = parseFloat(emiValue * loanTenure);

    // Update the state with calculated values
    setEmi(emiValue.toFixed(2));
    setPrincipalAmount(principalValue.toFixed(2));
    setInterestAmount(interestValue.toFixed(2));
    setTotalAmountPayable(totalValue.toFixed(2)); 
  };

  const chartData = [
    { name: 'Principal Amount', value: parseFloat(principalAmount) },
    { name: 'Interest Amount', value: parseFloat(interestAmount) },
  ];

  // Colors for the pie chart segments
  const colors = ['#36A2EB', '#FFCE56'];
  const email = sessionStorage.getItem('email');


  return (
    
      <div className="page-background">
       {email?<Header/>:<TopNavbar/>}
        <div className="emi-calculator">
      <h2>EMI Calculator</h2>
      <form>
        <div className="form-group">
          <label htmlFor="loanAmount">Loan Amount (INR)</label>
          <input type="number" id="loanAmount" name="loanAmount" value={loanAmount} onChange={handleLoanAmountChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="interestRate">Interest Rate (%)</label>
          <input type="number" id="interestRate" name="interestRate" value={interestRate} onChange={handleInterestRateChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="loanTenure">Loan Tenure (months)</label>
          <input type="number" id="loanTenure" name="loanTenure" value={loanTenure} onChange={handleLoanTenureChange} required/>
        </div>
        <button type="button" onClick={calculateEmi}>
          Calculate EMI
        </button>
      </form>
      {emi !== null && (
        <div className="result">
          <h2>Break-up Of Total Payment</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie dataKey="value" data={chartData} outerRadius={80} fill="#8884d8" label >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p>Loan EMI: INR {emi}</p>
          <p>Principal Amount: INR {principalAmount}</p>
          <p>Interest Amount: INR {interestAmount}</p>
          <p>Total Amount Payable: INR {totalAmountPayable}</p>
        </div>
      )}
      </div>
      <Footer/>
    </div>
  );
};
 
export default EmiCalculator;
