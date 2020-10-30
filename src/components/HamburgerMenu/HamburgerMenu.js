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
                <li>item</li>
                <li>item</li>
            </ul>
        </nav>
    );
};
export default hamburgerMenu;   