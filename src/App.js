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
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
          </link>
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
