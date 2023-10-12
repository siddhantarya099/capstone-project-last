import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Button, ButtonGroup } from '@mui/material';
import LoanApplications from './LoanApplications';
import ApprovedApplications from './ApprovedApplications';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';


function AdminDashboard() {
  const [showApprovedApplications, setShowApprovedApplications] = useState(false);
  const [showLoanApplications, setShowLoanApplications] = useState(true);

  const handleShowLoanApplications = () => {
    setShowApprovedApplications(false);
    setShowLoanApplications(true);
  };

  const handleShowApprovedApplications = () => {
    setShowApprovedApplications(true);
    setShowLoanApplications(false);
  };

  return (
    <div>

      <AppBar position="fixed" style={{ backgroundColor: '#572780' }}>
        <Toolbar>
          <img
            src="https://th.bing.com/th/id/OIP.aXME-cZqYY0vpyOnLG8nRgHaHa?pid=ImgDet&rs=1"
            alt="NatWest Logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          NatWest
          <Typography variant="h6" style={{
            marginRight: '20px',
            marginLeft: '20px',
            fontSize: '25px'
          }}>
            Admin Dashboard
          </Typography>
          <ButtonGroup>
            <Button
              variant="text"
              color="inherit"
              style={{
                whiteSpace: 'nowrap',
                marginLeft: '20px',
                color: showApprovedApplications ? 'grey' : 'inherit', // Apply grey color when not active
              }}
              onClick={handleShowLoanApplications}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#c5a0df')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#5a287d')}
            >
              Loan Applications
            </Button>
            <Button
              variant="text"
              color="inherit"
              style={{
                whiteSpace: 'nowrap',
                marginLeft: '20px',
                color: showLoanApplications ? 'grey' : 'inherit', // Apply grey color when not active
              }}
              onClick={handleShowApprovedApplications}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#c5a0df')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#5a287d')}
            >
              Approved Loans
            </Button>
          </ButtonGroup>
          <div style={{ marginLeft: 'auto' }}>
            <Button
              component={Link}
              to="/"
              variant="contained"
              style={{
                backgroundColor: '#401664',
                color: '#fff',
                padding: '10px 20px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            >
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '80px' }}>
        {showApprovedApplications ? <ApprovedApplications /> : <LoanApplications />}
      </Container>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
