import React from "react";
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import logo from "../logo.svg";

const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="logo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    /> React BlogSite</Navbar.Brand>
                <Nav className="ml-auto">
                    <NavLink href="/" >Home</NavLink>
                    <NavLink href="/allBlogs">All Blogs</NavLink>
                    <NavLink href="/createBlogs">Create Blogs</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;