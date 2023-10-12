import React, { Fragment, useState, useEffect } from 'react'
import TopNavbar from '../Header/TopNavbar'
import Footer from '../Footer/Footer';
import '../css/Home.css'; // Import your CSS file for styling
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Link } from 'react-router-dom';



const Home = () => {

  const data = [
    { name: 'Mortage', ratings: 65 },
    { name: 'Wealth', ratings: 59 },
    { name: 'Overdraft', ratings: 80 },
    { name: 'Finance', ratings: 81 },
    { name: 'Economy', ratings: 56 },
  ];

  return (
    <Fragment>
      <TopNavbar />
      <div className="content-container">
        <div className="content">
          <span className="span">
            <h1>
              Open an account and keep your <br />
              banking in one place.
            </h1>
            <h5>
              Switch to NatWest today and we'll even move over your direct debits. It only <br />
              takes 7 days!
            </h5>
          </span>
          <img
            src="https://www.natwest.com/content/dam/natwest/assets/personal/photography/dmm/hero/image.dim.667.young-woman-sitting-on-yellow-sofa-using-laptop-CASS-510x340.jpg"
            alt="Your Image"
            height="200"
            className="right-corner-image"
          />{' '}
        </div>
      </div>

      <div clasName="spacer">
        <div className="image-gallery">
          <div className="image-container">
            <img
              src="https://thumbs.dreamstime.com/b/mortgage-icon-doodle-hand-drawn-outline-style-financial-activity-set-vector-217419609.jpg"
              alt="Image 1"
            />
            <div className="image-description">
              <a href="https://www.natwest.com/">Select the right mortage</a>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://th.bing.com/th/id/OIP.NhlE5XYj0RTiir0HisTmcgHaHa?pid=ImgDet&rs=1"
              alt="Choose from our credit cards"
            />
            <div className="image-description">
              <a href="https://www.natwest.com/">Choose from credit cards</a>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://thumbs.dreamstime.com/z/bank-credit-card-icon-outline-bank-credit-card-vector-icon-web-design-isolated-white-background-bank-credit-card-icon-157800518.jpg?w=768"
              alt="Choose from our credit cards"
            />
            <div className="image-description">
              <a href="https://www.natwest.com/">Banking with NatWest</a>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://th.bing.com/th/id/OIP.wZhiiIAB3lAroEUSN-O7-AHaGJ?w=219&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Choose from our credit cards"
            />
            <div className="image-description">
              <a href="https://www.natwest.com/">see our savings products</a>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://static.vecteezy.com/system/resources/previews/015/221/267/large_2x/man-with-a-headset-icon-outline-style-vector.jpg"
              alt="Choose from our credit cards"
            />
            <div className="image-description">
              <a href="https://www.natwest.com/">Visit Support Centre</a>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://media.istockphoto.com/id/1432775341/vector/a-woman-in-polo-shirt-using-laptop-computer-for-browsing-web-sites-digital-marketing-payment.jpg?s=612x612&w=0&k=20&c=qIWGBAzqORvYcssh0dg2d2z14LA59lDiDxbQwP-Rdig="
              alt="Choose from our credit cards"
            />
            <div className="image-description">
              <a href="https://www.natwest.com/">Login to Online Banking</a>
            </div>
          </div>
        </div>
      </div>
      
      <section className="banking-section">
        <div className="banking-content">
          <h2>Apply for a new Loan Now!</h2>
          <p>
            Are you eyeing that dream purchase but want to spread the cost over time? Our "Buy Now, Pay Later"
            loans offer you the flexibility you need. Whether it's a new car,
            a home renovation, or a dream vacation, you can make your purchase today and
            repay it in manageable installments.
            We offer a wide range of banking services to meet your financial needs.
            Whether you're saving for the future, managing your daily expenses, or
            planning for retirement, we have you covered.
          </p>
          <Link to='/register'>
            <button className="btn-primary">Apply Now</button>
          </Link>
        </div>
        <div className="banking-image">
          <img
           src="https://www.natwest.com/content/dam/natwest/personal/loans/article/resized/image.dim.480.nw-pers-photo-couple-breakfast-table-article.jpg" 
           alt="Your Image" 
           width={800}
           />
        </div>
      </section>

      <div className='page-container'>
        <div className="chart-container">

          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid stroke="transparent" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis hide="true" />
              <Tooltip />
              <Legend />
              <Bar dataKey="ratings" fill="#d33737" barSize={40}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
                ))}
              </Bar>
            </BarChart>

          </ResponsiveContainer>
        </div>
        <div className="chart-description">
          <h2>Banking Ratings</h2>
          <p>
            This chart displays the ratings for different banking categories. 
            We are committed to providing top-notch banking services to meet 
            your financial needs and ensure your financial success.The 5 most 
            important banking services are checking and 
            savings accounts, loan and mortgage services, wealth management,
             providing Credit and Debit Cards, Overdraft services. You can read about
              the Types of Banks in India – Category and Functions of Banks in India in 
              the given link.
          </p>
        </div>
      </div>
      <div className="image1-container">
        <div className="image1-description">
          <img src="https://www.natwest.com/content/dam/royal_bank_of_scotland/personal/climate/article/image.dim.480.rb-pers-photo-girl-switching-light-switch-450x280.jpg"
            alt="Image Description" />
          <h2>Tackle the rising cost of  the energy</h2>
          <p>We know how hard it is to keep up with the changing cost of energy.

            Small changes around the house could help you save energy and improve your monthly household budget.</p>
        </div>
        <div className="image1-description">
          <img src="https://www.natwest.com/content/dam/natwest/assets/personal/photography/article/image.dim.480.photo-web-article-happy-couple-stanfing-near-their-house-with-solar-panels-450x280.jpg"
            alt="Image Description" />
          <h2>Upgrade your home's energy efficiency</h2>
          <p>We’re showing you some home efficiency improvements you could make to:

            Save money over the long term,
            Help improve the value of your home,
            Take a look now.</p>
        </div>
        <div className="image1-description">
          <img src="https://www.natwest.com/content/dam/natwest_com/Life-space-Moments/image.dim.480.nw-cost-of-living.jpg"
            alt="Image Description" />
          <h2>Prices are up. Let's ease the squeeze.</h2>
          <p>We're experiencing the biggest price hike for 50 years. Inflation, energy prices, tax rises and the Russian invasion of Ukraine, have all played a part. It's squeezing all our pockets.</p>
        </div>
      </div>

      <Footer />
    </Fragment>
  )
}

export default Home