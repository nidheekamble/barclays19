import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppNavBar from './AppNavbar'
import Signup from './Signup';
import Home from './Home'

import Dashboard from './dashboard';

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppNavBar />
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path='/dashboard' component={Dashboard} />
      </Router>
    )
  }
}

export default App;