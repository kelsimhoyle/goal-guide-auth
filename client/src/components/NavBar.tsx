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
                    <Nav className="ml-auto" navbar>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Your Account
                                </DropdownToggle>
                            {user.loggedIn ? (

                                <DropdownMenu right>

                                    <DropdownItem>
                                        Home
                                    </DropdownItem>
                                    <DropdownItem />
                                    <DropdownItem>
                                        <NavLink href="/addgoal">Create a Goal</NavLink>
                                    </DropdownItem>
                                    <DropdownItem onClick={handleLogout}>
                                        Logout
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
                                        <DropdownItem />
                                        <DropdownItem>
                                            <NavLink href="/register">Create an Account</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                )}
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}