import React, { Fragment, useState, useEffect } from 'react';
import TopNavbar from '../Header/TopNavbar';
import Footer from '../Footer/Footer';
import '../css/faq.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header'


const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8086/banking/faq/data')
      .then((response) => setFaqs(response.data))
      .catch((error) => console.error('Error fetching FAQ data:', error));
  }, []);

  useEffect(() => {
    // Filter the FAQ items based on the search term if it's not empty
    if (searchTerm) {
      const filtered = faqs.filter((faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredFaqs(filtered);
    } else {
      // If the search term is empty, display all data normally
      setFilteredFaqs(faqs);
    }
  }, [searchTerm, faqs]);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const highlightText = (text) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  };

  const email = sessionStorage.getItem('email');


  return (
    <Fragment>
      {email?<Header/>:<TopNavbar/>}
      <div className="faq-header">
        <h2 style={{ color: '#5a287d', marginRight: '10px' }}>General FAQs</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </div>
      <div className="faq-content">
        <ul>
          {filteredFaqs.map((faq) => (
            <li key={faq.id}>
              <strong>Q: </strong><span dangerouslySetInnerHTML={{ __html: highlightText(faq.question) }} /><br />
              <span><strong>A: </strong><span dangerouslySetInnerHTML={{ __html: highlightText(faq.answer) }} /></span>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </Fragment>
  );
};

export default FAQ;
