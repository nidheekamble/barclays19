import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardImg,
  CardBody
} from 'reactstrap';

import user_img from './user.png';

class Signup extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      valid: false
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

  onConfirmPasswordChange(inp) {
    this.setState(Object.assign({}, this.state, {valid: this.state.password === inp}))
  }
  
  handleSubmit() {

    if (
      (!this.state.valid) ||
      (this.state.username == '') ||
      (this.state.password == '')
    )
    {
      alert('Invalid Details');
      return;
    }
    
    let formData = new FormData();
    formData.append('username', this.state.username);
    formData.append('password', this.state.password);
    
    fetch('/api/signup', {
      method: 'POST',
      credentials: 'include',
      body: formData
    })
    .then (() =>     this.props.history.push('/') )
    .catch(() => alert('Error creating account') )
  }

  render() {
    return (
      <Card style={{maxWidth:'500px'}} className='mt-5 mx-auto'>
        <CardBody>
          <CardImg className='d-block mx-auto mb-2' style={{maxWidth: '200px', width:'90vw', height:'auto'}} src={user_img} alt="Card image cap" />
          <h2 className='text-center mb-2' style={{color: '#777'}}>Signup</h2>
          <Form>
          <FormGroup>
            <Label for="userName">Username</Label>
            <Input type="text" name="username" id="userName" placeholder="Choose a cool username" onChange={(e) => this.onInputChange(e.target.value, 'username')} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" valid={this.state.valid && this.state.password.length >0} invalid={ this.state.password.length >0 && !this.state.valid} name="password" id="password" placeholder="Choose a strong password to keep your account secure" onInput={(e) => this.onInputChange(e.target.value, 'password')} />
          </FormGroup>
          <FormGroup>
            <Label for="confirm-password">Confirm Password</Label>
            <Input type="password" invalid={this.state.password.length >0 &&  !this.state.valid} name="confirm-password" id="confirm-password" placeholder="Re-enter the password" onInput={(e) => this.onConfirmPasswordChange(e.target.value)} />
          </FormGroup>
          <Button color='primary' className='d-block mx-auto' onClick={() => this.handleSubmit()}>Submit</Button>
          <p className="text-center mt-3 mb-3">Already have an account? <Link to='/'>Login</Link></p>
        </Form>
        </CardBody>
      </Card>

    )
  }
}

export default withRouter(Signup);