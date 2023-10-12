import React, { Fragment, useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  IconButton
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router';
import CloseIcon from '@mui/icons-material/Close';
import TopNavbar from '../Header/TopNavbar';
import Footer from '../Footer/Footer';
import login from '../css/login.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!email || !password) {
      toast.error('Enter all the fields');
      return;
    }

    const user = {
      email: email,
      confirmPassword: password,
    };

    axios.post("http://localhost:8081/users/authenticate", user)
      .then((response) => {
        if (response.data === "admin" || response.data === "customer") {
          axios.post("http://localhost:8081/users/getId", user).then((resp) => {
            sessionStorage.setItem("id", resp.data);
            sessionStorage.setItem("email", email);
          })
          console.log(response)
          toast.success('Login Successful', {
            position: "top-right",autoClose: 3000, hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,});
          if (response.data === "admin") {
            navigate("/admin");
          }
          else {
            navigate("/userdashboard");
          }
        }
        else if (response.data === "User Not registered yet!") {
          toast.error('You are not registered yet. Kindly Sign up.');
        } else {
          toast.error('Entered Incorrect Password', {
            position: "top-right",autoClose: 3000, hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,});
          
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="page-background">
      <TopNavbar></TopNavbar>
      <Container maxWidth="sm">
        <div className="styled-box">
          <Box bgcolor="#572780" p={2} mb={2} mt={-1}>
            <Typography variant="body" align="center" gutterBottom style={{ color: 'white',fontWeight: 'bold' }}>
              Login
            </Typography>
          </Box>
          <Typography variant="body2" align="left" gutterBottom style={{ color: '#572780',fontWeight: 'bold' }}>
            Welcome to NatWest Group!!
          </Typography>
          <Typography variant="body2" align="left" gutterBottom>
            Please enter your Email Id and password.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          {/* Center the "Continue" button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleContinue}
              style={{ backgroundColor: '#572780', color: 'white', }}
            >
              Continue
            </Button>
          </div>
        </div>
        {/* Add the "New user? Sign up" button below the container */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px',marginBottom:'50px' }}>
          <Button
            variant="text"
            color="primary"
            style={{ textDecoration: 'underline', color: '#572780', backgroundColor: 'transparent ' }}
            onClick={() => {
              // Handle the sign-up button click, e.g., navigate to the sign-up page
              navigate("/register");
            }}
          >
            New user? Sign up
          </Button>
        </div>
        <style>
          {`
            .styled-box {
              padding: 20px;
              border: 1px solid #ccc;
              border-radius: 5px;
              background-color: #f9f9f9;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              margin-top: 100px;
            }
          `}
        </style>
      </Container>
      
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default Login;
