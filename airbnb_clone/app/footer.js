import React from 'react';
import './footer.css';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerContainer'>
      <hr className='footerDivider' />
        <div className='footerSection'>
            <h1>EloClone</h1>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dui nec velit faucibus tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dui nec velit faucibus tempus.</p> <br /><p>www.Eloclone.in
            </p>
            <br />
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>
        <div className='footerSection'>
          <h4>Support</h4>
          <ul>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/support">Support</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div className='footerSection'>
          <h4>Follow Us</h4>
          <ul className='socialIcons'>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
          </ul>
        </div>
      </div>
      
      <div className='footerBottom'>
     
        <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
