import React from 'react';
import {NavLink} from 'react-router-dom';

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
                <NavLink activeClassName="active" to="/"><a>Sepehr Ataei</a></NavLink>
            </div>
            <div className="spacer"/>
                <div className="navbar_navigation-items">
                    <ul>
                        <NavLink activeClassName="active" to="/ReceptiveField">
                            <li><a>Receptive Field</a></li>
                        </NavLink>
                        <NavLink activeClassName="active" to="/ConvVisualizer">
                            <li><a>Conv2D Visualizer</a></li>
                        </NavLink>
                        <NavLink activeClassName="active" to="/Resume">
                            <li><a>Resume</a></li>
                        </NavLink>
                    </ul>
                </div>
        </nav>
    </header>
);

export default navbar