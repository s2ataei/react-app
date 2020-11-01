import React from 'react';

import './HamburgerMenu.css'

const hamburgerMenu = props => {
    let menuClasses = 'hamburger-menu';
    if (props.show){
        menuClasses = 'hamburger-menu open';
    }
    return (
        <nav className={menuClasses}>
            <ul>
                <li><a href="#">Python</a></li>
                <li><a href="#">Deep Learning</a></li>
            </ul>
        </nav>
    );
};
export default hamburgerMenu;   