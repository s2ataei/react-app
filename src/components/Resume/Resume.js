import React from 'react';

import './Resume.css';
import download from './download.svg';

const resume = props => (
    <div className="resume">
        <h1>Resume</h1>
        <h3>
            <a className="download-link" href="/resume.pdf" download>   
                Click here to download PDF
                <img src={download} className="download-icon" />
            </a>
        </h3>
        <h1>Summary</h1>
        <ul>
            <li>
                sum
            </li>
            <li>
                stuff
            </li>
        </ul>
        <h1>Awards</h1>
        <ul className="awards">
            <li><a href="https://www.ryerson.ca/engineering-architectural-science/current-undergraduate/honours-recognition/">
                Dean's List Distinction</a></li>
            <li><a href="https://www.ryerson.ca/graduate/future-students/financing-your-studies/scholarships-awards/ryerson-graduate-fellowships/">
                Ryerson Graduate Fellowship Award</a></li>
            <li><a href="https://www.mitacs.ca/en/programs/accelerate">
                Mitacs Accelerate Grant</a></li>
        </ul>
        <h1>Experience</h1>
        <h4>Software Engineering Intern</h4>
        <p>Internship position facilitated by the Mitacs Accelerate program in partnership with Dr. Paul Babyn. 
            More information about the project can be found on the  
            <a href="https://www.mitacs.ca/en/projects/low-dose-computed-tomography-denoising-using-deep-learning"> Mitacs website</a>
        </p>
        <h1>Education</h1>
        <h4>Ryerson University Bachelor of Engineering: Class of 2017</h4>
        <h4>Ryerson University Master of Applied Science: Class of 2020 </h4>
    </div>
);

export default resume;