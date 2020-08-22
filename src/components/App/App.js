import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
// import Router from 'react-router-dom'

// I would not be able to tell you what this line of code does!
// Well, I'll try now: we pull in 'Router, Route, and Link' 
// for one because those are keywords that we use below that
// react needs to know...
import { HashRouter as Router, Route, Link } from 'react-router-dom'

// Importing all of our components.
import Welcome from '../Welcome/Welcome'
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Review from '../Review/Review'
import Thanks from '../Thanks/Thanks'
import Admin from '../Admin/Admin'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>


            <Route exact path='/' component={Welcome} />
            <Route exact path='/first' component={Feeling} />
            <Route exact path='/second' component={Understanding} />
            <Route exact path='/third' component={Support} />
            <Route exact path='/fourth' component={Comments} />
            <Route exact path='/fifth' component={Review} />
            <Route exact path='/last' component={Thanks} />
            <Route exact path='/admin' component={Admin} />


          </header>
          <br />
        </div>
      </Router>
    );
  }
}

export default App;
