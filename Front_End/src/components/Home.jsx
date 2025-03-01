import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Title from './Title';
import About from './About';
import Loading from './Loading'; 
import Preview from '../assets/images/home-pic.jpg';

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/users/current', { withCredentials: true });
        setTimeout(() => {
          if (response.data) {
            setIsLoggedIn(true);
          }
          setLoading(false);
        }, 1000);
      } catch (error) {
        setTimeout(() => {
          setIsLoggedIn(false);
          setLoading(false);
        }, 1000);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="main">
      <Title />
      <h2>Welcome!</h2>
      <div className="home-container">
        <div className="home-info-wrap">
          <img src={Preview} alt="home-pic" className="home-pic" />
          <div className="login-home-container">
            <div className="container">
            <About />
            </div>
            {isLoggedIn ? (
              <div className="login-button-container">
                <p className="p-contact-upper">Thank You For Logging In And Joining Us</p>
                <Link to={`/shop`} className="login-button-home">Shop Now</Link>
              </div>
            ) : (
              <div className="login-button-container">
                <p className="p-contact-upper">Please Log In To View The Shop</p>
                <Link to={`/login`} className="login-button-home">Log in</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
