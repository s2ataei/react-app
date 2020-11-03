import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import Backdrop from './components/Backdrop/Backdrop';
import UserProfile from './components/UserProfile/UserProfile';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';


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
      <Router>
        <div className="App">
          <Navbar hamburgerMenuClickHandler={this.hamburgerMenuToggleClickHandler}/>
          <HamburgerMenu show={this.state.hamburgerMenuOpen} />
          {backdrop}     
          <div className="App-body">
            <Switch>
              <Route path="/" exact component={UserProfile}/>
              <Route path="/Resume" component={Resume}/>
              <Route path="/Projects" component={Projects}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }  
}

export default App;
