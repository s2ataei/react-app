import React from 'react';

import './Resume.css';

const resume = props => (
    <div className="resume">
        <h2>
            <a className="download-link" href="/resume.pdf" download>
                Click here to download PDF
            </a>
        </h2>
    </div>
);

export default resume;