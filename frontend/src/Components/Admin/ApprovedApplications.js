import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';
import '../css/LoanApplications.css';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />


function ApprovedApplications() {
  const [acceptedLoanApplications, setAcceptedLoanApplications] = useState([]);
  const [expandedUserId, setExpandedUserId] = useState(null);

  const fetchData = () => {
    axios.get("http://localhost:8082/loan_applications/admin")
      .then((response) => {
        const Applications = response.data.filter(application => application.approvalStatus);
        setAcceptedLoanApplications(Applications);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleExpandedUser = (id) => {
    setExpandedUserId(prevId => (prevId === id ? null : id));
  };

  return (
    <div>
      <h2 className="header">Approved Applications</h2>
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>S.No</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Name</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Email</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Loan Amount</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Monthly Income</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Loan Type</TableCell>
              {/* <TableCell>Actions</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {acceptedLoanApplications.map((application, index) => (
              <TableRow key={application.id} className="table-row">
                <TableCell style={{ fontSize: '16px', fontWeight: 'bold', color: 'black' }}>
                  {index + 1}
                </TableCell>
                <TableCell style={{ fontSize: '16px', fontWeight: 'bold', color: 'black' }}>
                  {application.firstName} {application.lastName}
                </TableCell>
                <TableCell style={{ fontSize: '16px', fontWeight: 'bold', color: 'black' }}>{application.email}</TableCell>
                <TableCell style={{ fontSize: '16px', fontWeight: 'bold', color: 'black' }}>{application.loanAmount}</TableCell>
                <TableCell style={{ fontSize: '16px', fontWeight: 'bold', color: 'black' }}>{application.monthlyIncome}</TableCell>
                <TableCell style={{ fontSize: '16px', fontWeight: 'bold', color: 'black' }}>{application.typeOfLoan}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ApprovedApplications;
