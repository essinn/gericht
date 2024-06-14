import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './FooterOverlay.css';

const FooterOverlay = () => (
  <div className='app__footer-container section__padding'>
    <div className='app__footer-contactUs'>
      <p className='p__cormorant' style={{ fontSize: '2rem', padding: '2rem 0' }}>Contact Us</p>
      <p className='p__opensans' style={{ width: '250px' }}>9 W 53rd St, New York, NY 10019, USA</p>
      <p className='p__opensans'>+1 212-344-1230</p>
      <p className='p__opensans'>+1 212-555-1230</p>
    </div>

    <div className='app__footer-image_quote'>
      <img src={images.gericht} alt="gericht" style={{ width: '200px', paddingTop: '5rem', paddingBottom: '2rem' }} />
      <p className='p__opensans'>"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."</p>
      {/* <img src={images.spoon} alt="spoon" className='spoon__img' style={{ paddingTop: '1rem' }} /> */}

      <FiFacebook />
      <FiInstagram />
      <FiTwitter />
    </div>

    <div className='app__footer-workingHours'>
      <p className='p__cormorant' style={{ fontSize: '2rem', paddingTop: '5rem', paddingBottom: '2rem' }}>Working Hours</p>
      <p className='p__opensans' style={{ paddingTop: '1rem' }}>Monday-Friday:</p>
      <p className='p__opensans'>08:00 Am - 12:00 Am</p>
      <p className='p__opensans' style={{ paddingTop: '1rem' }}>Saturday-Sunday:</p>
      <p className='p__opensans'>07:00 Am - 11:00 Pm</p>
    </div>
    
  </div>
);

export default FooterOverlay;
