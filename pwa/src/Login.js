import React from 'react';
import {withRouter} from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardImg,
  CardBody,
} from 'reactstrap';

import user_img from './user.png';

class Login extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }
  }

  onInputChange(inp, field) {
    switch (field) {
      case 'username':
        this.setState(Object.assign({}, this.state, {username: inp}))
        break;
      case 'password':
        this.setState(Object.assign({}, this.state, {password: inp}));
        break;
   }
  }

  
  handleSubmit() {
    console.log('Login:', this.state);
    if (
      ( this.state.username == undefined || this.state.username.length == 0 ) ||
      ( this.state.password == undefined || this.state.password.length == 0 )

    ) {
      alert('Invalid Input');
      return
    }

    let formData = new FormData();
    formData.append('username', this.state.username);
    formData.append('password', this.state.password);

    fetch('/api/login', {
      method: 'POST',
      credentials: 'include',
      body: formData
    })
    .then (() =>  this.props.history.push('/dashboard') )
    .catch(() => alert('Invalid Credentials') )

  }

  render() {
    return (
      <Card style={{maxWidth:'500px'}} className='mt-5 mx-auto'>
        <CardBody>
          <CardImg className='d-block mx-auto mb-2' style={{maxWidth: '200px', width:'90vw', height:'auto'}} src={user_img} alt="Card image cap" />
          <h2 className='text-center mb-2' style={{color: '#777'}}>Login</h2>
          <Form>
          <FormGroup>
            <Label for="userName">Username</Label>
            <Input type="text" name="username" id="userName" onChange={(e) => this.onInputChange(e.target.value, 'username')} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" onInput={(e) => this.onInputChange(e.target.value, 'password')} />
          </FormGroup>
          <Button color='primary' className='d-block mx-auto' onClick={() => this.handleSubmit()}>Submit</Button>
        </Form>
        </CardBody>
      </Card>

    )
  }
}


export default withRouter(Login);