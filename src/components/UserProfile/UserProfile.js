import React from 'react';

import './UserProfile.css'

import Socials from '../Socials/Socials';


const userprofile = props => (
    <div className="user-profile">
        <div className="user-name">
            <h2>Hi, I'm Sep.</h2>
        </div>
        <div className="user-bio">
            <p>I'm passionate about building scalable software solutions to important real world problems.</p>
            <p>During my graduate research I developed deep learning solutions to problems in medical image processing.</p>
        </div>
        <div className="user-socials">
            <Socials />
        </div>
    </div>

);

export default userprofile