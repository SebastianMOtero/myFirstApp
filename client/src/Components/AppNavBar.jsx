import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, UncontrolledButtonDropdown,DropdownMenu ,DropdownItem, DropdownToggle, UncontrolledDropdown, Nav, NavItem, NavLink } from 'reactstrap';
import userIcon from '../assets/images/userIcon.png';
import '../App.css';

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="App-NavBar" color="faded" light>
          <UncontrolledButtonDropdown nav inNavbar>
              <DropdownToggle nav >
                <img className="UserIconNavBar" src={userIcon} alt="User" />
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                    <a href="/createAccount">Create Account</a>
                </DropdownItem>
                <DropdownItem>
                    <a href="/login">Log in</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;