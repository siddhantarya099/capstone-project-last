import React,{Fragment} from 'react'
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import TopNavbar from '../Header/TopNavbar'
import Footer from '../Footer/Footer'
import '../css/CustomerSupport.css'
import Header from '../Header/Header';


const peopleData = [
  {
    name: 'Satinder Kaur',
    email: 'satinderkaur2001s@gmail.com',
    whatsapp: '9056919609',
  },
  {
    name: 'Nandini',
    email: 'Nandini@example.com',
    whatsapp: '9876543210',
  },
  {
    name: 'Sneha',
    email: 'sneha@example.com',
    whatsapp: '84756253627',
  },
  {
    name: 'Siddhant',
    email: 'siddhantarya@gmail.com',
    whatsapp: '7043412169',
  },
];

const email = sessionStorage.getItem('email');



const CustomerSupport = () => {
  return (
    <div className="cust-page">
    <Fragment>
   {email?<Header/>:<TopNavbar/>}
    <Container maxWidth="md" className="customer-support-container">
      <Typography variant="h8" component="h1" align="center" gutterBottom className="customer-support-heading">
        Customer Support
      </Typography>
      
      <Grid container spacing={2} justifyContent="center">
        {/* FAQ Card */}
        <Grid item xs={12} sm={6}>
        <Card style={{ backgroundColor: '#f0f0f0' ,height:"400px" }}>

            <CardContent>
              <Typography variant="h4" gutterBottom className="card-title">
                FAQ About Loans
              </Typography>
              <Typography variant="h6" gutterBottom className="faq-text">
                      Frequently Asked Questions 
              </Typography>
              <Typography variant="h6" gutterBottom className="faq-text1">
                     In this section you can refer all the questions asked by the mostly customers
              </Typography>
            </CardContent>
            <CardContent className="card-button">
              <Button component={Link} to="/loanqueriesfaq" variant="contained" style={{ backgroundColor: '#401664' }}>
                Go to Loan Queries
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Write Us Card */}
        <Grid item xs={12} sm={6}>
        <Card style={{ backgroundColor: '#f0f0f0' ,height:"400px" }}>

    <CardContent>
      <Typography variant="h4" gutterBottom className="card-title">
        Write Us
      </Typography>
      {peopleData.map((person, index) => (
        <div key={index}>
          <Typography variant="h6"> {/* Increase font size here */}
            {person.name}
          </Typography>
          <Typography variant="body2">
            Email: {person.email}
          </Typography>
          <Typography variant="body2">
            WhatsApp: {person.whatsapp}
          </Typography>
        </div>
      ))}
    </CardContent>
  </Card>
</Grid>

      </Grid>
    </Container>
    </Fragment>
        <Footer/>
    </div>

  )
}

export default CustomerSupport

