import React from "react";
import { Link } from "react-router-dom";
import Title from './Title';

const NotFound = () => {
  return (
    <div className="main">
      <Title />
      <div className="notfound-container">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-text">Oops! The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="notfound-button">Return to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
