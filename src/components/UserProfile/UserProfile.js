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
            <p>During my graduate research I developed deep learning solutions to medical imaging problems and published my work in the IJCNN 2020 proceedings.</p>
            <p>
            Check out the <a href="https://arxiv.org/abs/2006.14738" target="_blank">pre-print on arXiv</a> and the <a href="https://github.com/s2ataei/research" target="_blank">code</a>.
            </p>
            <p>Want to get in touch? Please email me:
                <a href="mailto:sepehr.ataei222@gmail.com"> sepehr.ataei222@gmail.com
                </a>
            </p>
        </div>
        <div className="user-socials">
            <Socials />
        </div>
    </div>

);

export default userprofile