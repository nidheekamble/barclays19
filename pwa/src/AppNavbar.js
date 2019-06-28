import React from 'react';

import { 
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import logo from './images/stocks_img.png';

class AppNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  userLink(isLoggedIn) {
    if(isLoggedIn)
      return (
        <NavItem>
          <NavLink href="/">Logout</NavLink>
        </NavItem>
      )

      return (
        <NavItem>
          <NavLink href="/">Login</NavLink>
        </NavItem>
      )

  }
  render() {
    return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img src={logo} width="100px" /></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/AmeyaDaddikar">GitHub</NavLink>
            </NavItem>
              {this.userLink(this.props.loggedIn)}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

export default AppNavBar;