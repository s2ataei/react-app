import React from 'react';
import {Link} from 'react-router-dom';

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
                        <Link to="/Projects">
                            <li><a>Projects</a></li>
                        </Link>
                        <Link to="/Resume">
                            <li><a>Resume</a></li>
                        </Link>
                    </ul>
                </div>
        </nav>
    </header>
);

export default navbar