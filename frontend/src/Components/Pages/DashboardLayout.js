import React, { useState, useEffect, Fragment } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LoanTypes from './LoanTypes';
import Footer from '../Footer/Footer';
import '../css/dashboardlayout.css'; // Include your CSS file here
import Header from '../Header/Header';

const API_URL = 'http://localhost:8083/api';
const email = sessionStorage.getItem('email'); // Retrieve email from session storage
const sid=sessionStorage.getItem('id')

function DashboardLayout({ id }) {
  const user = { id: id };
  const [openLoanTypesDialog, setOpenLoanTypesDialog] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [balanceAmount, setBalanceAmount] = useState(0);
  const [paidAmount, setPaidAmount] = useState(0);
  const [firstName,setFirstName]=useState(0);
  const[lastName,setLastName]=useState(0);
  useEffect(() => {
    axios
      .get(`${API_URL}/loan-history/${email}`)
      .then((response) => {
        const loanData = response.data[0]; // Use [0] because it's an array
  
        // Update state variables with fetched data
        setLoanAmount(loanData.loanAmount);
        setBalanceAmount(loanData.balanceAmount);
        setPaidAmount(loanData.paidAmount);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [email]);
  
    axios
      .get(`http://localhost:8084/register/users/${sid}`)
      .then((response) => {
        const userData = response.data;
        // You can use userData if needed
        setLastName(userData.lastName);
        setFirstName(userData.firstName);
        //console.log("API Response:", userData);
      
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  

  const carouselImages = ['/Images/image1.jpg', '/Images/image2.jpg', '/Images/image3.jpg'];

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const handleOpenLoanTypesDialog = () => {
    setOpenLoanTypesDialog(true);
  };

  const handleCloseLoanTypesDialog = () => {
    setOpenLoanTypesDialog(false);
  };

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  // Payment details component
  function PaymentCard({ paymentData }) {
    const handleMakePayment = () => {
      // Redirect to the '/payment' page when the button is clicked
      window.location.href = '/payment';
    };

    // const [loanAmount, setLoanAmount] = useState(0);
    // const [balanceAmount, setBalanceAmount] = useState(0);
    // const [paidAmount, setPaidAmount] = useState(0);

    // useEffect(() => {
    //   axios
    //     .get(`${API_URL}/loan-history/${email}`)
    //     .then((response) => {
    //       console.log('API Response:', response.data);
    //       const loanData = response.data;

    //       // Set the state variables
    //       setLoanAmount(loanData.loanAmount);
    //       setBalanceAmount(loanData.balanceAmount);
    //       setPaidAmount(loanData.paidAmount);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching data:', error);
    //     });
    // }, [email]);

    return (
      <Card className="dashboard-card">
        <CardContent>
          <Typography variant="h6" gutterBottom style={{color: "purple",fontWeight:'bold'}}>
            Payment Details
          </Typography>
          <div style={{ marginBottom: '18px' , marginTop:'35px'}}>
            <Typography variant="body2">
              Total Loan Amount: {loanAmount || 'N/A'}
            </Typography>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <Typography variant="body2">
              Paid Loan Amount: {paidAmount || 'N/A'}
            </Typography>
          </div>
          <div style={{ marginBottom: '16px',fontSize:'15px' }}>
            <Typography variant="body2">
              Balance Loan Amount: {balanceAmount || 'N/A'}
            </Typography>
          </div>
          <div style={{ marginTop: '40px' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleMakePayment}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#c5a0df')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#5a287d')}
            >
              Make a Payment
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Fragment>
      <Header />
      <div className="dashboard-container">
        <AppBar position="static" className="app-bar" style={{ backgroundColor: 'white' }}>
          <Toolbar className="centered-text">
            <Typography variant="h4" className="app-title" style={{ color: 'black' }}>
              Welcome Back {firstName} {lastName}
            </Typography>
          </Toolbar>
        </AppBar>
        <Container className="container">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {/* Image Carousel */}
              <div className="image-carousel">
                <button className="carousel-button" onClick={handlePreviousImage}>
                  &lt; {/* Left arrow */}
                </button>
                <img
                  src={carouselImages[selectedImageIndex]}
                  alt={`Image ${selectedImageIndex + 1}`}
                />
                <button className="carousel-button" onClick={handleNextImage}>
                  &gt; {/* Right arrow */}
                </button>
              </div>
            </Grid>

            <Grid item xs={3}>
              {/* Container for Make a Payment */}
              <PaymentCard />
            </Grid>

            <Grid item xs={3}>
              {/* Container for Apply Loan */}
              <Card className="dashboard-card">
                <CardContent>
                  <Typography variant="h6" style={{color: "purple",fontWeight:'bold'}}>
                    Apply for Loan</Typography>
                  <p>
                    Apply for a loan to get started with your financial journey.
                    We'll help you find the perfect loan for your needs.
                  </p>
                  <Button
                    component={Link}
                    to="/apply-for-loan"
                    variant="contained"
                    style={{ backgroundColor: '#5a287d', color: 'white' }}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              {/* Container for Loan History */}
              <Card className="dashboard-card">
                <CardContent>
                  <Typography variant="h6" style={{color: "purple",fontWeight:'bold'}}>Loan History </Typography>
                  <p>
                  View your loan and transaction history to keep track of your payments and outstanding balances efficiently.
                  </p>
                  <Button
                    component={Link}
                    to="/loan-history"
                    variant="contained"
                    style={{ backgroundColor: '#5a287d', color: 'white' }}
                  >
                    View History
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              {/* Container for Types of Loan */}
              <Card className="dashboard-card">
                <CardContent>
                  <Typography variant="h6" style={{color: "purple",fontWeight:'bold'}}>Types of Loan</Typography>
                  <p>
                  Explore the wide range of different types of loans we offer. Find the one that perfectly suits your needs and finances.
                  </p>
                  <Button
                    onClick={handleOpenLoanTypesDialog}
                    variant="contained"
                    style={{
                      backgroundColor: '#5a287d',
                      color: 'white',
                      fontSize: '14px',
                      padding: '5px 0',
                    }}
                  >
                    Explore
                  </Button>
                  <Dialog open={openLoanTypesDialog} onClose={handleCloseLoanTypesDialog}>
                    <DialogTitle>Loan Types</DialogTitle>
                    <DialogContent>
                      <LoanTypes />
                    </DialogContent>
                    <DialogActions>
                      <Button
                        onClick={handleCloseLoanTypesDialog}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#c5a0df')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#5a287d')}
                      >
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </Fragment>
  );
}


export default DashboardLayout;

