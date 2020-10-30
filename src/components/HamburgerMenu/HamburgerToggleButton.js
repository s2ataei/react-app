import React from 'react';

import './HamburgerToggleButton.css';

const hamburgerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
    </button>
);

export default hamburgerToggleButton;