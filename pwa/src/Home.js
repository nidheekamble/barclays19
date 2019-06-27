import React from 'react';
import {Link} from 'react-router-dom';
import {
  Jumbotron
} from 'reactstrap';

import Login from './Login';


export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div>
      <Jumbotron>
        <h1 className='text-center'>Welcome to StackWatch!</h1>
      </Jumbotron>
      <Login />
      <p className="text-center mt-2 mb-4">Don't have an account yet? <Link to='/signup'>Signup</Link></p>
    </div>
    )
  }
}