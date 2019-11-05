import React, {Component} from 'react';
import {BrowserRouter as Router,
        Switch,
        Route
        } from 'react-router-dom';

import './App.css';

import Home from './Home.js'
import About from './About.js'
import Navbar from './Navbar.js'
import Contact from './Contact.js';
import Example from './Example.js';

import TodoApp from './todoApp/src/TodoApp';


export default class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <style> @import url('https://fonts.googleapis.com/css?family=Sue+Ellen+Francisco&display=swap'); </style> 
        <Navbar />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
        
          <Route exact path="/about">
            <About />
          </Route>
        
          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/examples">
            <Example />
          </Route>

          <Route exact path="/todo">
            <TodoApp />
          </Route>
         

        </Switch> 
      </Router>
     );
  }
}
 