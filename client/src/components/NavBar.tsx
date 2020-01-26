import React, { useState } from 'react';
import {
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
    DropdownItem,
    NavbarText
} from 'reactstrap';

interface PropsInterface {
    user: {
        loggedIn: boolean,
        user: {}
    };

    handleLogout: () => void;
}
export const NavBar: React.FC<PropsInterface> = ({ user, handleLogout }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Goal Guide</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                                </DropdownToggle>
                            {user.loggedIn ? (

                                <DropdownMenu right>
                                    <DropdownItem onClick={handleLogout}>
                                        Logout
                                    </DropdownItem>
                                    <DropdownItem>
                                        Home
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <NavLink href="/addgoal">Create a Goal</NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            ) : (
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <NavLink href="/login">Login</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            Home
                                    </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                </DropdownItem>
                                    </DropdownMenu>
                                )}
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}