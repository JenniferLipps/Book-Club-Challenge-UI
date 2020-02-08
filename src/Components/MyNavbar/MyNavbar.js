import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    // NavbarText
  } from 'reactstrap';
  import { NavLink as RRNavLink } from 'react-router-dom';
  import './MyNavbar.scss';

const MyNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="MyNavbar">
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Book Club Challenge</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={RRNavLink} to='/Library'>Library</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to='/Challenge'>Challenge</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Logout</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
            </Navbar>
        </div>
    );
}

export default MyNavbar;
