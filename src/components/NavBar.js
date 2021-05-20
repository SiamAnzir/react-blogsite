import React,{useState ,useContext} from "react";
import { Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import logo from "../logo.svg";
import {Link} from "react-router-dom";

const NavBar = (props) => {

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
                    <Nav className="nav-link"><Link to="/" className="text-white"> Home </Link> </Nav>
                    <Nav className="nav-link"><Link to="/allBlogs" className="text-white">All Blogs</Link> </Nav>
                    <Nav className="nav-link"><Link to="/createBlogs" className="text-white"> Create Blogs </Link> </Nav>
                    <Nav className="nav-link"><Link to="/contact" className="text-white"> Contact</Link> </Nav>
                </Nav>
            </Container>
            {
                (props.themeState === props.theme.light) ? (
                    <Button variant="light" onClick={props.darkMode}>
                        <span role="img" aria-label="sun"> 🌞 </span>
                    </Button>
                ):(
                    <Button variant="dark" onClick={props.lightMode}>
                        <span role="img" aria-label="moon">  🌚 </span>
                    </Button>
                )
            }
        </Navbar>
    )
}

export default NavBar;