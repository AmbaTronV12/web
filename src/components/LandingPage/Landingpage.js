import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Contact from './Contact';
import './Landing.css';
import logo from '../../assets/Logo.svg'



function LandingPage() {
  const location = useLocation();
  const isHome = location.pathname === '/'
  const navigate = useNavigate();
  const handleNavigate= () => {
    navigate('/Register')
  }

  const handNavigateAbout = () => {
    navigate('/AboutUs')
  }

  const [isContactOpen, setContactOpen] = useState(false);

  const handleTextClick = () => {
    setContactOpen(true); // Open the modal when the text is clicked
  };

  const handleCloseContact = () => {
    setContactOpen(false); // Close the modal
  };

  return (
    <div className='background'>
      <header>
        <img src={logo} alt='logoFudiy'/>
        <div className='nav'>
          <nav>
            <Link
            className='hometext'
            style={{ color: isHome ? '#FF8906' : 'white' }}>
              <h4>HOME</h4>
            </Link>
          </nav>
          <h4 onClick={handleTextClick}>CONTACT</h4>
          <h4 onClick={handNavigateAbout}>ABOUT US</h4>
        </div>
      </header>

      <Contact isOpen={isContactOpen} onClose={handleCloseContact}>
        <p>Telephone: +62-891-234-5678</p>
        <p>Website: www.Fudiy.com</p>
        <p>Email: Fudiy@gmail.com</p>
          
      </Contact>

      <div className='mainText'>
        <p className='centerText'>FIND YOUR BEST<br/> TASTE HERE </p>
        <p className='mediumText'>AVAILABLE FOR PICK UP & DELIVERY</p>
      </div>
      <div className='button'>
        <button className='landingButton'>Login</button>
        <button onClick={handleNavigate} className='landingButton'>Sign Up</button>
      </div>
    </div>
  );
}

export default LandingPage;