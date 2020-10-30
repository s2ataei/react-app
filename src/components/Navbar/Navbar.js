import React from 'react';
import './Navbar.css';
import logo from '../../logo.svg';
import HamburgerToggleButton from '../HamburgerMenu/HamburgerToggleButton';

const navbar = props => (
    <header className="navbar">
        <nav className="navbar__navigation">
            <div>
                <HamburgerToggleButton />
            </div>
            <div className="spacer"/>
            <div className="navbar_navigation-items">
                <ul>
                    <li><a href="#test">test2</a></li>
                    <li><a href="test3">test3</a></li>
                </ul>
            </div>
        </nav>
    </header>

);

export default navbar