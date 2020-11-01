import React from 'react';
import './Navbar.css';
import logo from '../../logo.svg';
import HamburgerToggleButton from '../HamburgerMenu/HamburgerToggleButton';

const navbar = props => (
    <header className="navbar">
        <nav className="navbar__navigation">
            <div>
                <HamburgerToggleButton click={props.hamburgerMenuClickHandler}/>
            </div>
            <div className="navbar-logo">
                <img src={logo} className="App-logo nav" alt="logo" />
                <a href="/">Sepehr Ataei</a>
            </div>
            <div className="spacer"/>
            <div className="navbar_navigation-items">
                <ul>
                    <li><a href="#test">Python</a></li>
                    <li><a href="test3">Deep Learning</a></li>
                </ul>
            </div>
        </nav>
    </header>

);

export default navbar