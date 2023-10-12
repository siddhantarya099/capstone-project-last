import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';
import axios from 'axios';

function RejectedApplications() {
  const [rejectedLoanApplications, setRejectedLoanApplications] = useState([]);
  const [expandedUserIds, setExpandedUserIds] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:8082/loan_applications/admin")
      .then((response) => {
        const rejectedApplications = response.data.filter(application => !application.approvalStatus);
        setRejectedLoanApplications(rejectedApplications);
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
    axios.put(`http://localhost:8083/loan_applications/admin/${id}`, { approvalStatus: true })
      .then((response) => {
        // Update the UI to reflect the change
        const updatedApplications = rejectedLoanApplications.filter(application => application.id !== id);
        setRejectedLoanApplications(updatedApplications);
      })
      .catch((error) => {
        console.error("Error accepting application:", error);
      });
  };

  const toggleExpandedUser = (id) => {
    // Toggle the expanded user based on the current state
    setExpandedUserIds(prevIds => {
      if (prevIds.includes(id)) {
        // User is already expanded, so close it
        return prevIds.filter(prevId => prevId !== id);
      } else {
        // User is not expanded, so open it
        return [...prevIds, id];
      }
    });
  };

  return (
    <div>
      <h2 style={{ color: '#431c53', alignSelf: 'Center', marginLeft: '450px' }}>Rejected Applications</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {rejectedLoanApplications.map(application => (
          <div key={application.id} style={{ width: '30%', marginBottom: '20px' }}>
            <Card style={{ backgroundColor: '#FEDFE2' }}>
              <CardContent>
                <p><strong>Name:</strong> {application.firstName} {application.lastName}</p>
                <p><strong>Email:</strong> {application.email}</p>
                <p><strong>Loan Amount:</strong> {application.loanAmount}</p>
                {expandedUserIds.includes(application.id) ? (
                  <>
                    <Typography variant="h6">More Details</Typography>
                    <p><strong>Aadhaar Card:</strong> {application.aadhaarCard}</p>
                    <p><strong>Date of Birth:</strong> {application.dob}</p>
                    <p><strong>Phone Number:</strong> {application.mobileNumber}</p>
                    <p><strong>Monthly Income:</strong> {application.monthlyIncome}</p>
                    <p><strong>Type of Loan:</strong> {application.typeOfLoan}</p>
                    <Button variant="contained" color="primary" onClick={() => toggleExpandedUser(application.id)}>
                      Close
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => handleAccept(application.id)}>
                      Want to Accept
                    </Button>
                  </>
                ) : (
                  <Button variant="contained" color="primary" onClick={() => toggleExpandedUser(application.id)}>
                    More Info
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RejectedApplications;
