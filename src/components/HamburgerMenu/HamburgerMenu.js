import React from 'react';
import { Link } from 'react-router-dom';

import './HamburgerMenu.css'

const hamburgerMenu = props => {
    let menuClasses = 'hamburger-menu';
    if (props.show){
        menuClasses = 'hamburger-menu open';
    }
    return (
        <nav className={menuClasses}>
            <ul>
                <Link to="/ConvVisualizer">
                <li><a>Conv2D Visualizer</a></li>
                </Link>
                <Link to="/ReceptiveField">
                <li><a>Receptive Field</a></li>
                </Link>
                <Link to="/Resume">
                <li><a>Resume</a></li>
                </Link>
            </ul>
        </nav>
    );
};
export default hamburgerMenu;   