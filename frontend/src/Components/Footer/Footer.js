// Footer.js

import React from 'react';
import './footer.css';

const Footer = () => {
    const spaceBetweenLinksStyle = {
        marginBottom: '20px',
        marginTop: '10px', // Adjust the value as needed
      };

  return (
    // <div className = "fixed-bottom">
    <div className="footer">
      <nav>
        <ul className="footer-links">
        <div style={spaceBetweenLinksStyle}>
            <a href="" target="blank" className="footer-link">
              Cookie policy
            </a>
            <a href="" target="blank" className="footer-link">
              Privacy notice
            </a>
            <a href="" target="blank" className="footer-link">
              Legal information
            </a>
            <a href="" target="blank" className="footer-link">
              Site map
            </a>
            <a href="" target="blank" className="footer-link">
              Accessibility
            </a>
            </div>
        </ul>
      </nav>
      <span>
        Copyright © National Westminster Bank plc 2023. Registered office: 250 Bishopsgate, London, EC2M 4AA.
      </span>
    </div>
    // </div>
  );
};

export default Footer;
