import React, { Component } from 'react';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import Backdrop from './components/Backdrop/Backdrop';
import UserProfile from './components/UserProfile/UserProfile';

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
          <UserProfile />
        </div>
      </div>
    );
  }  
}

export default App;