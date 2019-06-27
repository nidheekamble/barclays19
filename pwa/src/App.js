import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppNavBar from './AppNavbar'
import GreetingMessageAJAX from './GreetingMessageAJAX';
import Signup from './Signup';


class App extends React.Component {
  render() {
    return (
      <Router>
        <AppNavBar />
        <Route exact path="/" component={GreetingMessageAJAX} />
        <Route path="/signup" component={Signup} />
      </Router>
    )
  }
}

export default App;