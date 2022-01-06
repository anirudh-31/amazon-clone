import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__nav">
        <ul>
          <span className="footer__title">Get to know us</span>
          <li className="footer__links">About us</li>
          <li className="footer__links">Careers</li>
          <li className="footer__links">Press Release</li>
          <li className="footer__links">Amazon Cares</li>
          <li className="footer__links">Gift a smile</li>
        </ul>
        <ul>
          <span className="footer__title">Connect with us</span>
          <li className="footer__links">Facebook</li>
          <li className="footer__links">Instagram</li>
          <li className="footer__links">Twitter</li>
        </ul>
        <ul>
          <span className="footer__title">Make Money with Us </span>
          <li className="footer__links">Sell on Amazon</li>
          <li className="footer__links">Sell under Amazon Accelerator</li>
          <li className="footer__links">Amazon Global Selling</li>
          <li className="footer__links">Become an Affiliate</li>
          <li className="footer__links">Fulfilment by Amazon</li>
          <li className="footer__links">Advertise Your Products</li>
          <li className="footer__links">Amazon Pay on Merchants</li>
        </ul>
        <ul>
          <span className="footer__title">Let us help you </span>
          <li className="footer__links">COVID-19 and Amazon</li>
          <li className="footer__links">Your Account</li>
          <li className="footer__links">Return Centre</li>
          <li className="footer__links">100% Purchase Protection</li>
          <li className="footer__links">Amazon App Download</li>
          <li className="footer__links">Amazon Assistant Download</li>
          <li className="footer__links">Help</li>
        </ul>
      </div>

      <div className="footer__rowTwo">
        <div className="footer__image">
          <img
            className="footer__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon-logo"
          />
        </div>
        <div className="footer__countries">
          <ul>
            <li>Australia</li>
            <li>Brazil</li>
            <li>Canada</li>
            <li>China</li>
            <li>France</li>
            <li>Germany</li>
            <li>Italy</li>
            <li>Japan</li>
            <li>Mexico</li>
            <li>Neatherlands</li>
            <li>Poland</li>
            <li>Singapore</li>
            <li>Spain</li>
            <li>Turkey</li>
            <li>United Arab Emirates</li>
            <li>United Kingdom</li>
            <li>United States</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
