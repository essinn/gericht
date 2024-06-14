import React from 'react';
import { SubHeading } from '../../components';

import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter-container'>
    <SubHeading title='Newsletter' />
      <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
      <p className='p__opensans'>And Never Miss Latest Updates!</p>

      <input type="email" placeholder='Enter your email address' className='app__newsletter-input' />
      <br />
      <button className='custom__button' style={{ marginTop: '2rem'}}>Subscribe</button>
  </div>
);

export default Newsletter;
