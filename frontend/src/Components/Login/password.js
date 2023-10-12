import React, { useState } from 'react';
import {
  Container,
  Typography,
  Select,
  MenuItem,
  TextField,
  Button,
  Grid,
  Box,
} from '@mui/material';

function Password() {
  const [loginOption, setLoginOption] = useState('customer'); // Default login option

  const handleOptionChange = (event) => {
    setLoginOption(event.target.value);
  };

  const handleContinue = () => {
    // Handle the "Continue" button click here
  };

  return (
    <Container maxWidth="xs">
      <div className="styled-box">
        <Box
          bgcolor="#572780" // Add background color here
          p={2} // Add padding here
          mb={2} // Add margin bottom here
          ml={2}
          mr={2}
          width="90%" // Set width to 100% for full-width
          display="flex" // Use flex display
          flexDirection="column" // Stack items vertically
          alignItems="center" // Center horizontally
          justifyContent="left" // Center vertically
        >
          <Typography variant="body" align="left" gutterBottom style={{ color: 'white' }}>
            Log in - Step 2
          </Typography>
        </Box>
        {/* Add margin to create space below the text */}
        <Typography variant="body2" style={{ marginBottom: '20px' }}></Typography>
        <TextField
          type="password"
          label="Enter your password"
          variant="outlined"
          Width="200%"
          color="primary"
        />
        <div style={{ marginTop: '20px', marginBottom: '20px', marginLeft: '30px', marginRight: '20px' }}>
          <Button
            variant="contained"
            //color="primary"
            style={{ backgroundColor: '#572780', color: '#fff' }}
            Width='50%'
            onClick={handleContinue}
          >
            Continue
          </Button>
        </div>
        <Typography variant="body2" align="center" gutterBottom>
          <a href="/forgot-password" style={{ textDecoration: 'underline' }}>
            Forgot password? Click here
          </a>
        </Typography>
      </div>
      <style>
        {`
          .styled-box {
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center; /* Center text horizontally */
            margin-top: 100px;
          }
        `}
      </style>
    </Container>
  );
}

export default Password;
