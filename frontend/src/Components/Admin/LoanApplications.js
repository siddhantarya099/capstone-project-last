import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import axios from 'axios';
import '../css/LoanApplications.css';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />


function LoanApplications() {
  const [pendingLoanApplications, setPendingLoanApplications] = useState([]);
  const [expandedUserIds, setExpandedUserIds] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:8082/loan_applications/admin")
      .then((response) => {
        const pendingApplications = response.data.filter(
          (application) => !application.approvalStatus
        );
        setPendingLoanApplications(pendingApplications);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAccept = (id) => {
    // Send a request to update the approvalStatus to true for the specified application
    axios
      .put(`http://localhost:8082/loan_applications/admin/${id}`, {
        approvalStatus: true,
      })
      .then((response) => {
        // Update the UI to reflect the change
        const updatedApplications = pendingLoanApplications.filter(
          (application) => application.id !== id
        );
        setPendingLoanApplications(updatedApplications);
      })
      .catch((error) => {
        console.error("Error accepting application:", error);
      });
  };

  const handleReject = (id) => {
    // Send a request to update the approvalStatus to false for the specified application
    axios
      .put(`http://localhost:8082/loan_applications/admin/${id}`, {
        approvalStatus: false,
      })
      .then((response) => {
        // Update the UI to reflect the change
        setPendingLoanApplications((prevApplications) => {
          return prevApplications.filter((application) => application.id !== id);
        });
      })
      .catch((error) => {
        console.error("Error rejecting application:", error);
      });
  };

  const toggleExpandedUser = (id) => {
    // Toggle the expanded user based on the current state
    setExpandedUserIds((prevIds) => {
      if (prevIds.includes(id)) {
        // User is already expanded, so close it
        return prevIds.filter((prevId) => prevId !== id);
      } else {
        // User is not expanded, so open it
        return [...prevIds, id];
      }
    });
  };

  return (
    <div>
      <h2 className="header">
        Loan Applications
      </h2>
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>SNo</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Name</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Email</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Loan Amount</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Monthly Income</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Loan Type</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pendingLoanApplications.map((application, index) => (
              <TableRow key={application.id} className="table-row">
                <TableCell className="table-cell" style={{ fontSize: '16px', fontWeight: 'bold', color: '#431c53' }}>
                  {index + 1}
                </TableCell>
                <TableCell className="table-cell" style={{ fontSize: '16px', fontWeight: 'bold', color: '#431c53' }}>
                  {application.firstName} {application.lastName}
                </TableCell>
                <TableCell style={{ fontSize: '16px', fontWeight: 'bold', color: 'black' }}>{application.email}</TableCell>
                <TableCell style={{ fontSize: '16px', fontWeight: 'bold', color: 'black' }}>{application.loanAmount}</TableCell>
                <TableCell style={{ fontSize: '16px', fontWeight: 'bold', color: 'black' }}>{application.monthlyIncome}</TableCell>
                <TableCell style={{ fontSize: '16px', fontWeight: 'bold', color: 'black' }}>{application.typeOfLoan}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => toggleExpandedUser(application.id)}
                    className="button"
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#c5a0df')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#5a287d')}
                  >
                    {expandedUserIds.includes(application.id)
                      ? "Close"
                      : "More Info"}
                  </Button>
                  {expandedUserIds.includes(application.id) && (
                    <>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ backgroundColor: 'green' }}
                        onClick={() => handleAccept(application.id)}
                        onMouseOver={(e) => (e.target.style.backgroundColor = 'rgb(87, 172, 87)')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = 'green')}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{ backgroundColor: 'rgb(162, 37, 37)' }}
                        onClick={() => handleReject(application.id)}
                        onMouseOver={(e) => (e.target.style.backgroundColor = 'rgb(237, 99, 99)')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = 'rgb(162, 37, 37)')}
                      >
                        Reject
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default LoanApplications;
