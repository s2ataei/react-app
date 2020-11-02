import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import Backdrop from './components/Backdrop/Backdrop';
import UserProfile from './components/UserProfile/UserProfile';
import Python from './components/Python/Python';
import DeepLearning from './components/DeepLearning/DeepLearning';


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
              <Route path="/Python" component={Python}/>
              <Route path="/DeepLearning" component={DeepLearning}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }  
}

export default App;
