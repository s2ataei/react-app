import React from 'react';
import {Link} from 'react-router-dom';

import './Resume.css';
import download from './download.svg';

const resume = props => (
    <div className="resume">
        <h3>
            <Link to="/files/resume.pdf" target="_blank" download>Click here to download PDF</Link>
                <img src={download} className="download-icon" />
        </h3>
        <h1>Summary</h1>
        <ul>
            <li>
                3+ years of Python application development experience using libraries such as scikit-learn, matplotlib and scipy
            </li>
            <li>
                2+ years of web development experience  
            </li>
            <li>
                Proficient user of open source projects such as React, Tensorflow, Django, Chalice
            </li>
            <li>
                Solid foundations in tools such as Git, Bash and RDBMS.
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
        <h3 className="margin"> Software Engineering Intern: 12/2019 - 08/2020</h3>
        <p className="subtitle">Paid internship position funded by the Mitacs Accelerate program in partnership with Dr. Paul Babyn.</p> 
            <p>In this role I developed a deep learning solution used to reduce patient's exposure to radiation during CT 
            examinations. The proposal abstract can be found on the  
            <a href="https://www.mitacs.ca/en/projects/low-dose-computed-tomography-denoising-using-deep-learning"> Mitacs website. </a>
            This work was published in the IJCNN 2020 proceedings and the pre-print version is <a href="https://arxiv.org/abs/2006.14738">available online via arXiv. &nbps;
            </a>
            The source code for the project is available on <a href="https://github.com/s2ataei/research">GitHub</a> 
            </p>
        <h3 className="margin">Graduate Assistant: 09/2018 - 07/2020</h3>
        <p className="subtitle">Paid teaching assistant position at Ryerson University</p>
        <p>In this role I lead labs and tutorials for undergraduate engineering courses in Java, signal processing and image processing. 
            I was responsible for invigilating and grading examinations and preparing lessons for tutorials. </p>
        <h3 className="margin">Software Engineer: 05/2018 - 09/2018 </h3>
        <p>Full-time role at <a href="https://wolf.ca">WOLF Advanced Technology. </a> </p>
        <p>
            In this role I built business tools using Visual Basic and developed MRP (materials requirement planning) reports using SQL queries.
            I improved the efficiency of the MRP process by developing software tools to automate inventory analysis and procurement. My contributions were tools used for parsing Bill of Materials
            (BOM) data and calculating a list of parts to procure by reconciling available inventory. 
        </p>
        <h3 className="margin">Business Development Engineer: 06/2017 - 05/2018 </h3>
        <p>Full-time role at <a href="https://wolf.ca">WOLF Advanced Technology. </a> </p>
        <p>
            In this role I was responsible for handling sales opportunities and managing orders from the lead stage to the delivery stage. 
            I contributed to 70% year over year growth in sales by writing proposals and quotations and working to improve on-time delivery.
            After receiving purchase orders from clients I worked alongside the materials requirement planning team to allocate inventory and 
            procure the necessary components based on the Bill of Materials (BOM).
        </p>
        <h1>Education</h1>
        <p>Ryerson University Bachelor of Engineering: Class of 2017</p>
        <p>Ryerson University Master of Applied Science: Class of 2020 </p>
    </div>
);

export default resume;