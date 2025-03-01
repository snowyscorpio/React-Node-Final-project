import React from 'react';
import loadingGif from '../assets/images/loading.gif';

const Loading = () => {
  return (
    <div className="main">
      <div className="main-loading">
        <div className="loading-container">
          <img src={loadingGif} alt="Loading..." />
        </div>
      </div>
    </div>
  );
};

export default Loading;
