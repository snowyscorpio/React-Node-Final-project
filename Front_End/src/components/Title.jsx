import React from 'react';
import logo from '../assets/images/LogoFlowerShop.png';

function Title() {
  return (

    <div className="title__wrap">
      <div className="title">
        <img src={logo} alt="store's logo" className="logo" />
        <div className="title_text">
          <h1>✦ - MOON's FLOWER SHOP - ✦</h1>
          <h4 className="names">by LOREN RACHEL CHEZRONY  and  SALEH KHATIB</h4>
          <h4>────୨ৎ────</h4>
        </div>

      </div>
    </div>

  );
}
export default Title;
