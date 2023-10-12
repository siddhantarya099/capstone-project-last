// MyAccount.js
import React, { useState } from 'react';
import { Card, CardContent, TextField, Button } from '@mui/material';

function MyAccount() {
  // Define state variables for user's personal information
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to handle form submission, e.g., send updates to the server.
    // For this example, we'll just display the updated information.
    console.log('Updated Personal Information:');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <div>
      <h2>My Account</h2>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              margin="normal"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default MyAccount;
