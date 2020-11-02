import React from 'react';

import github from './githubwhite.svg';
import linkedin from './linkedin.svg';
import './Socials.css';

const socials = props => (
    <div className="social-links">
        <a href="https://github.com/s2ataei" className="github link">
        <img src={github} className="social-icon"/>
        </a>
        <a href="https://www.linkedin.com/in/sepehrataei/" className="linkedin link">
        <img src={linkedin} className="social-icon"/>
        </a>
    </div>
);

export default socials