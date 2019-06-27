import React from 'react';
import {Jumbotron} from 'reactstrap';
import {Link} from 'react-router-dom';

const makeRequest = new Promise((resolve, reject) => {

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {

    if (this.readyState == 4) {
      resolve(this.responseText);
    }
  }

  xhttp.open('POST', '/api/hello')
  xhttp.send();
})

class GreetingMessageAJAX extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: 'Loading...'
    }
  }

  componentDidMount() {
    makeRequest
    .then((msg) => this.setState({msg: msg}));
  }

  render() {
    return (
      <Jumbotron>
        <h1>{this.state.msg}</h1>
        <Link to={'/signup'}>Signup</Link>
      </Jumbotron>
    )
  }
}

export default GreetingMessageAJAX;