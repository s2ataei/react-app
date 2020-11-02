import React from 'react';

import './UserProfile.css'

import Socials from '../Socials/Socials';


const userprofile = props => (
    <div className="user-profile">
        <div className="user-name">
            <h2>Hi, I'm Sep.</h2>
        </div>
        <div className="user-bio">
            <p>I'm passionate about building scalable software solutions to real world problems.</p>
            <p>During my graduate research I developed deep learning solutions to medical imaging problems.</p>
        </div>
        <div className="user-socials">
            <Socials />
        </div>
    </div>

);

export default userprofile