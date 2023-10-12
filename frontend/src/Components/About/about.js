import React, { Fragment } from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import TopNavbar from '../Header/TopNavbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';  // Import Link for routing
import { Button } from '@mui/material';

function About() {
  const paperStyle = {
    padding: '20px',
    backgroundColor: '#FEDFE2', // Set the background color here
  };

  const whoWeAreStyle = {
    fontSize: '30px',  // Custom font size
    fontWeight: 'bold',  // Custom font weight (bold)
    color: 'purple',  // Custom font color
    marginTop: '20px', // Add margin on top
    marginBottom: '10px', // Add margin on bottom
    marginLeft: '20px',
  };

  const personalLoanStyle = {
    flex: 1,
    padding: '20px',
    backgroundColor: '#F9F9F9', // Background color for Personal Loan section
    marginTop: '20px', // Add margin on top
    display: 'flex', // Add flex display
    flexDirection: 'column', // Stack items vertically
    alignItems: 'flex-end', // Align items to the right
  };
  const personalloan = {
    fontSize: '30px',  // Custom font size
    fontWeight: 'bold',  // Custom font weight (bold)
    color: 'purple',  // Custom font color
    marginTop: '10px', // Add margin on top
    marginBottom: '10px', // Add margin on bottom
    marginLeft: '20px',
    marginRight: '130px',
  };

  const homeLoanStyle = {
    flex: 1,
    padding: '20px',
    backgroundColor: '#FEDFE2', // Background color for Home Loan section (same as Who We Are)
    marginTop: '20px', // Add margin on top
    display: 'flex', // Add flex display
    flexDirection: 'column', // Stack items vertically, reversing the order
    alignItems: 'flex-end', // Align items to the right
  };
  const homeloan = {
    fontSize: '30px',  // Custom font size
    fontWeight: 'bold',  // Custom font weight (bold)
    color: 'purple',  // Custom font color
    marginBottom: '10px', // Add margin on bottom
    marginLeft: '20px',
    marginRight: '800px', // Adjust margin-right to move the heading to the right
    textAlign: '', // Align text to the right
  };
  const CarLoanStyle = {
    flex: 1,
    padding: '20px',
    backgroundColor: '#F9F9F9', // Background color for Personal Loan section
    marginTop: '20px', // Add margin on top
    //display: 'flex', // Add flex display
    flexDirection: 'column', // Stack items vertically
    alignItems: 'flex-end', // Align items to the right
  };
  const carloan = {
    fontSize: '30px',  // Custom font size
    fontWeight: 'bold',  // Custom font weight (bold)
    color: 'purple',  // Custom font color
    marginTop: '20px', // Add margin on top
    marginBottom: '10px', // Add margin on bottom
    marginLeft: '800px',
    marginRight: '20px',
  };
  const StudentLoanStyle = {
    flex: 1,
    padding: '20px',
    backgroundColor: '#FEDFE2', // Background color for Home Loan section (same as Who We Are)
    marginTop: '20px', // Add margin on top
    display: 'flex', // Add flex display
    flexDirection: 'column', // Stack items vertically, reversing the order
    alignItems: 'flex-end', // Align items to the right
  };
  const studentloan = {
    fontSize: '30px',  // Custom font size
    fontWeight: 'bold',  // Custom font weight (bold)
    color: 'purple',  // Custom font color
    marginTop: '20px', // Add margin on top
    marginBottom: '10px', // Add margin on bottom
    marginLeft: '20px',
    marginRight: '800px',
  };
  const BusinessLoanStyle = {
    flex: 1,
    padding: '20px',
    backgroundColor: '#F9F9F9', // Background color for Personal Loan section
    marginTop: '20px', // Add margin on top
    //display: 'flex', // Add flex display
    flexDirection: 'column', // Stack items vertically
    alignItems: 'flex-end', // Align items to the right
  };
  const businessloan = {
    fontSize: '30px',  // Custom font size
    fontWeight: 'bold',  // Custom font weight (bold)
    color: 'purple',  // Custom font color
    marginTop: '20px', // Add margin on top
    marginBottom: '10px', // Add margin on bottom
    marginLeft: '800px',
    marginRight: '20px',
  };


  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'row', // Set flexDirection to 'row' for horizontal alignment
    justifyContent: 'space-between', // Move text and image to opposite ends
  };

  const textContainerStyle = {
    flex: 1, // Allow text to take up remaining space
    marginLeft: '20px', // Adjust left margin to move text more to the left
    marginRight: '40px', // Adjust right margin to move text more to the right
    marginTop: '20px', // Add margin on top
  };
  const textContainerStyle1 = {
    flex: 1, // Allow text to take up remaining space
    marginLeft: '600px', // Adjust left margin to move text more to the left
    marginRight: '0px', // Adjust right margin to move text more to the right
    marginTop: '40px', // Add margin on top
    alignItems:'Right',
  };
  const textContainerStyle2 = {
    flex: 1, // Allow text to take up remaining space
    marginLeft: '20px', // Adjust left margin to move text more to the left
    marginRight: '500px', // Adjust right margin to move text more to the right
    marginTop: '20px',
  };
  const textContainerStyle3 = {
    flex: 1, // Allow text to take up remaining space
    marginLeft: '500px', // Adjust left margin to move text more to the left
    marginRight: '0px', // Adjust right margin to move text more to the right
    marginTop: '40px', // Add margin on top
    alignItems:'Right',
  };
  const textContainerStyle4 = {
    flex: 1, // Allow text to take up remaining space
    marginLeft: '20px', // Adjust left margin to move text more to the left
    marginRight: '450px', // Adjust right margin to move text more to the right
    marginTop: '20px',
  };
  const textContainerStyle5 = {
    flex: 1, // Allow text to take up remaining space
    marginLeft: '430px', // Adjust left margin to move text more to the left
    marginRight: '0px', // Adjust right margin to move text more to the right
    marginTop: '40px', // Add margin on top
    alignItems:'Right',
  };

  const imageStyle = {
    maxWidth: '50%', // Adjust the width as needed
    height: 'auto',
    marginTop: '-50px', // Add margin on top
    marginRight: '40px',
  };
  const imageStyle1 = {
    maxWidth: '50%', // Adjust the width as needed
    height: 'auto',
    marginTop: '-250px', // Add margin on top
    marginRight: '550px',
    marginBottom:'80px',
    marginLeft: '40px',
  
  };
  const imageStyle3 = {
    maxWidth: '30%', // Adjust the width as needed
    height: 'auto',
    marginTop: '-200px', // Add margin on top
    marginRight: '40px',
    marginBottom:'20px'
  };
  const imageStyle4 = {
    maxWidth: '40%', // Adjust the width as needed
    height: 'auto',
    marginTop: '-230px', // Add margin on top
    marginRight: '-50px',
    marginLeft: '30px',
    marginBottom:'20px'
  };
  const imageStyle5 = {
    maxWidth: '30%', // Adjust the width as needed
    height: 'auto',
    marginTop: '-210px', // Add margin on top
    marginRight: '50px',
    marginLeft: '30px',
    marginBottom:'20px'
  };
  const imageStyle6 = {
    maxWidth: '30%', // Adjust the width as needed
    height: 'auto',
    marginTop: '-250px', // Add margin on top
    marginRight: '50px',
    marginLeft: '30px',
  };
  
  const email = sessionStorage.getItem('email');
  

  return (
    <Fragment>
      {email?<Header/>:<TopNavbar/>}
    <Container>
      
      <Box pt={10}>
        <Paper elevation={3} style={paperStyle}>
          <Typography variant="h4" gutterBottom style={whoWeAreStyle}>
            Who We Are
          </Typography>
          <div style={contentContainerStyle}>
            <div style={textContainerStyle}>
              <Typography variant="body1">
                NatWest Group is a relationship bank for a digital world. We champion potential;
                breaking down barriers and building financial confidence so the 19 million people,
                families, and businesses we serve in communities throughout the UK and Ireland can
                rebuild and thrive. If our customers succeed, so will we.
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              
        </div>
            </div>
            <img
              src="/Images/about.jpg" // Replace with the correct image path and extension
              alt="" // Provide a meaningful description
              style={imageStyle}
            />
          </div>
        </Paper>
      </Box>
      <Box pt={3}>
        <Paper elevation={3} style={personalLoanStyle}>
          <Typography variant="h5" gutterBottom style={personalloan}>
            Personal Loan
          </Typography>
          <div style={textContainerStyle1}>
            <Typography variant="body1">
            "Experience a world of financial opportunities with our personal loans. Whether it's an unexpected expense, your dream vacation, or consolidating debt for a brighter future, our competitive 5% interest rates and effortless application process are your keys to success. With a generous maximum term of 5 years, we're dedicated to helping you realize your financial goals and enjoy the journey towards a better tomorrow."
            </Typography>
            <Button
                component={Link}  // Use Link to navigate to the Apply for Loan page
                to="/apply-for-loan"  // Provide the path to your Apply for Loan page
                variant="contained"
                style={{ backgroundColor: '#5a287d', color: 'white',marginTop:'20px', marginLeft:'170px' }}
              >
                Apply Now
              </Button>
          </div>
          <img
            src="/Images/personal-loan-4.jpg" // Replace with the correct image path and extension
            alt="" // Provide a meaningful description
            style={imageStyle1}
          />
        </Paper>
      </Box>
      
      <Box pt={3}>
        <Paper elevation={3} style={homeLoanStyle}>
          <Typography variant="h5" gutterBottom style={homeloan}>
            Home Loan
          </Typography>
          <div style={textContainerStyle2}>
            <Typography variant="body1">
           
              "Imagine the keys to your dream home in your hands! Our tailored home loans open doors to your homeownership aspirations. With an array of options boasting competitive interest rates and the added perk of tax benefits, you're not just buying a house; you're securing your future. Let us be your trusted partner, leading you to the home you've always envisioned."
                Lowest interest rate: 3.5%

                  Maximum term: 30 years
            </Typography>
          </div>
          <img
            src="/Images/home-loan.jpg" // Replace with the correct image path and extension
            alt="" // Provide a meaningful description
            style={imageStyle3}
          />
        </Paper>
      </Box>
      <Box pt={3}>
        <Paper elevation={3} style={CarLoanStyle}>
          <Typography variant="h5" gutterBottom style={carloan}>
            Car Loan
          </Typography>
          <div style={textContainerStyle3}>
            <Typography variant="body1">
            "Experience the thrill of driving your dream car with our car loans. Our competitive 4% interest rates and flexible repayment options are tailored to put you in the driver's seat of the vehicle you desire. Start your journey towards car ownership today and trust us to be your partner on the road to making your dream car a reality. With a maximum term of 7 years, we're committed to providing you with the financing you need to hit the open road with confidence and satisfaction."
            </Typography>
          </div>
          <img
            src="/Images/car-loan.jpg" // Replace with the correct image path and extension
            alt="" // Provide a meaningful description
            style={imageStyle4}
          />
        </Paper>
      </Box>
      <Box pt={3}>
        <Paper elevation={3} style={StudentLoanStyle}>
          <Typography variant="h5" gutterBottom style={studentloan}>
            Student Loan
          </Typography>
          <div style={textContainerStyle4}>
            <Typography variant="body1">
            "Invest in your education and future with our student loans. Our education-focused loans come with a competitive 3% interest rate and student-friendly repayment plans designed to ease your financial burden while pursuing your academic goals. Let us be your partner in supporting your educational journey, and with a maximum term of 15 years, we're committed to helping you achieve your educational dreams and build a strong foundation for your future success."
            </Typography>
          </div>
          <img
            src="/Images/education-loan.jpg" // Replace with the correct image path and extension
            alt="" // Provide a meaningful description
            style={imageStyle5}
          />
        </Paper>
      </Box>
      <Box pt={3}>
        <Paper elevation={3} style={BusinessLoanStyle}>
          <Typography variant="h5" gutterBottom style={businessloan}>
            Business Loan
          </Typography>
          <div style={textContainerStyle5}>
            <Typography variant="body1">
            
            "Empower your entrepreneurial journey with our small business loans. Access the capital essential for your business's growth and prosperity, backed by our flexible terms and a competitive interest rate of 4.5%. Begin forging the future of your business today, and rely on us as your trusted partner in realizing your business aspirations. With a maximum term of 10 years, we're dedicated to providing the financial foundation needed for your business to thrive and reach new heights of success."
            </Typography>
          </div>
          <img
            src="/Images/business-loan.jpg" // Replace with the correct image path and extension
            alt="" // Provide a meaningful description
            style={imageStyle6}
          />
          
        </Paper>
      </Box>
    </Container>
    <Footer/>
    </Fragment>
  );
}

export default About;
