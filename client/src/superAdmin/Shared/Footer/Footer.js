import React from "react";
import { Link } from 'react-router-dom';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => (
  <center>
  <div className="footer fixed-bottom " >
    
    
    <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            
          </div>
          <div className='footer-link-items'>
            <h2>Privacy policy</h2>
            
          </div>
        </div>
        
      </div>
    <section className='social-media'>
        <div className='social-media-wrap'>
        {/* <Link
          to='/'
          target='_blank'
          text='white'
        > */}
        <span style={{fontSize:"40px"}} >ROBIN</span>
        {/* </Link> */}

          <small className='website-rights'></small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              {/* <i className='fab fa-facebook-f' /> */}
              <FacebookIcon/>
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              {/* <i className='fab fa-instagram' /> */}
              <InstagramIcon/>
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              {/* <i className='fab fa-youtube' /> */}
              <YouTubeIcon/>
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              {/* <i className='fab fa-twitter' /> */}
              <TwitterIcon/>
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              {/* <i className='fab fa-linkedin' /> */}
              <LinkedInIcon/>
            </Link>
          </div>
        </div>
      </section>
    
  </div>
  </center>
  
);

export default Footer;