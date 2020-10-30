import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import Backdrop from './components/Backdrop/Backdrop';
import { render } from '@testing-library/react';

class App extends Component {
  state = {
    hamburgerMenuOpen: false
  };

  hamburgerMenuToggleClickHandler = () => {
    this.setState((prevState) => {
      return {hamburgerMenuOpen: !prevState.hamburgerMenuOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({hamburgerMenuOpen: false});
  };

  render() {
   
    let backdrop;

    if (this.state.hamburgerMenuOpen) {
      backdrop  = <Backdrop click={this.backdropClickHandler} />
    }   
    return (
      <div className="App">
        <Navbar hamburgerMenuClickHandler={this.hamburgerMenuToggleClickHandler}/>
        <HamburgerMenu show={this.state.hamburgerMenuOpen} />
        {backdrop}
        <div className="App-body">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Built with <code>React.js</code> by Sepehr Ataei.
          </p>
        </div>
      </div>
    );
  }  
}

export default App;
