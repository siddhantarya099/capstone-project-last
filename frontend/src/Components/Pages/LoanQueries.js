import React, { Fragment } from 'react';
import { Card, CardContent, Typography, Grid, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import TopNavbar from '../Header/TopNavbar';
import Footer from '../Footer/Footer';
import loanQueries from '../css/loanQueries.css';

const LoanQueriesFAQ = () => {
  const faqItems = [
    {
      heading: 'Personal Loan:',
    },
    {
      question: 'What is a personal loan?',
      answer: 'A personal loan is an unsecured loan that you can use for various personal expenses such as medical bills, debt consolidation, travel, or home improvements.',
    },
    {
      question: 'How can I qualify for a personal loan?',
      answer: 'Qualifications vary by lender, but typically, lenders consider your credit score, income, employment history, and debt-to-income ratio when assessing your eligibility for a personal loan.',
    },
    {
      question: 'What is the typical interest rate for a personal loan?',
      answer: 'Interest rates for personal loans can vary widely depending on your creditworthiness and the lender. They can range from single-digit percentages to higher rates for borrowers with poor credit.',
    },
    {
      heading: 'Home Loan:',
    },
    {
      question: 'What is a home loan (mortgage)?',
      answer: 'A home loan, also known as a mortgage, is a loan provided by a financial institution to help you purchase a home. You repay the loan over a specified period with interest.',
    },
    {
      question: 'What are the different types of home loans available?',
      answer: 'There are various types of home loans, including fixed-rate mortgages, adjustable-rate mortgages (ARMs), FHA loans, VA loans, and more. Each type has its own terms and eligibility criteria.',
    },
    {
      question: 'How much down payment do I need for a home loan?',
      answer: 'The down payment requirement varies but is typically a percentage of the home\'s purchase price, often around 20%. Some loan programs may require less.',
    },
    {
      heading: 'Car Loan:',
    },
    {
      question: 'What is a car loan?',
      answer: 'A car loan is a type of financing that helps you purchase a vehicle. The loan is secured by the vehicle itself, and you make monthly payments until the loan is paid off.',
    },
    {
      question: 'Can I get a car loan with bad credit?',
      answer: 'It\'s possible to get a car loan with bad credit, but you may face higher interest rates and stricter terms. Some lenders specialize in bad credit auto loans.',
    },
    {
      question: 'What is a down payment for a car loan?',
      answer: 'A down payment for a car loan is an initial payment you make toward the purchase of the vehicle. It reduces the amount you need to borrow and can affect your monthly payments.',
    },
    {
      heading: 'Student Loan:',
    },
    {
      question: 'What is a student loan?',
      answer: 'A student loan is a type of financial aid that helps students pay for education expenses such as tuition, books, and living expenses. These loans must be repaid with interest.',
    },
    {
      question: 'How do I apply for federal student loans?',
      answer: 'To apply for federal student loans in the United States, you need to complete the Free Application for Federal Student Aid (FAFSA) online. The FAFSA determines your eligibility for various federal aid programs.',
    },
    {
      question: 'Can I refinance or consolidate my student loans?',
      answer: 'Yes, many private lenders offer student loan refinancing or consolidation options. Refinancing can help you get a lower interest rate and combine multiple loans into one for easier management.',
    },
    {
      heading: 'Small Business Loan:',
    },
    {
      question: 'What is a small business loan?',
      answer: 'A small business loan is a type of financing provided to small businesses to help them start, expand, or manage their operations. These loans can be used for various business purposes, such as purchasing equipment, working capital, or funding growth.',
    },
    {
      question: 'How can I qualify for a small business loan?',
      answer: 'Qualifications for a small business loan may vary by lender, but they typically consider factors like your credit score, business plan, financial statements, and the purpose of the loan when assessing eligibility.',
    },
    {
      question: 'What types of small business loans are available?',
      answer: 'There are different types of small business loans, including traditional term loans, SBA loans, business lines of credit, and microloans. Each type has its own terms, rates, and eligibility criteria.',
    }
  ];



  const renderFAQ = () => {
    const groupedFAQs = [];
    let currentGroup = null;

    for (const item of faqItems) {
      if (item.heading) {
        if (currentGroup) {
          groupedFAQs.push(currentGroup);
        }
        currentGroup = { heading: item.heading, items: [] };
      } else {
        currentGroup.items.push(item);
      }
    }

    if (currentGroup) {
      groupedFAQs.push(currentGroup);
    }

    return groupedFAQs.map((group, index) => (
      <Grid item xs={12} key={index}>
        <Card style={{ backgroundColor: '#F5F5F5', borderRadius: '8px' }}>
          <CardContent>
            <div style={{ padding: '8px', marginBottom: '8px' }}>
              <Typography variant="h4" style={{ color: '#F78E99' }}>{group.heading}</Typography>
            </div>
            {group.items.map((item, index) => (
              <div key={index}>
                <Typography variant="h6">{item.question}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.answer}
                </Typography>
              </div>
            ))}
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  return (
    <Fragment>
      <TopNavbar />
      <div className="loan-queries-faq-container">
        <Container style={{ paddingTop: '70px', paddingLeft: '130px' }}>
          <h1>Frequently Asked Questions</h1>
          <Grid container spacing={2}>
            {renderFAQ()}
          </Grid>
          {/* Back button */}
          <Button component={Link} to="/customersupport" variant="contained" style={{
            backgroundColor: '#401664',
            marginTop: '20px',
            marginLeft: '475px',
            marginBottom: '20px'
          }}>
            Back
          </Button>
        </Container>
      </div>
      <Footer />
    </Fragment>
  );
};

export default LoanQueriesFAQ;