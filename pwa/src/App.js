import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppNavBar from './AppNavbar'
import Signup from './Signup';
import Home from './Home'

import Dashboard from './dashboard';
import Search from './search';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    }
  }

  onLoginSuccess() {
    this.setState({loggedIn: true});
    console.log('LOGGED IN')
  }
  render() {
    return (
      <Router>
        <AppNavBar loggedIn={this.state.loggedIn} />
        <Route exact path="/" render={props => <Home {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} /> } />
        <Route path="/signup" component={Signup} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/search' component={Search} />
      </Router>
    )
  }
}

export default App;