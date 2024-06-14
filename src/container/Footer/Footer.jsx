import React from 'react';
import { SubHeading } from '../../components';
import { FooterOverlay, Newsletter } from '../../components'

import './Footer.css';

const Footer = () => (
  <div>
    <div className='app__bg app__footer section__padding'>
      <Newsletter />
      <FooterOverlay />

      <p className='p__opensans' style={{ paddingTop: '5rem', textAlign: 'center' }}>2024 Gericht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
