import React from "react";
import { Button, Container, Nav, Navbar} from "react-bootstrap";
import logo from "../logo.svg";
import {Link} from "react-router-dom";

const NavBar = (props) => {
    const darkMode = () => {
        props.setThemeState(props.theme.dark);
    };
    const lightMode = () => {
        props.setThemeState(props.theme.light);
    };
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Nav className="navbar-brand">
                    <Link to="/" className="text-white text-decoration-none">
                        <img
                            alt="logo"
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        /> React BlogSite
                    </Link>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav className="nav-link"><Link to="/" className="text-white text-decoration-none"> Home </Link> </Nav>
                        <Nav className="nav-link"><Link to="/allBlogs" className="text-white text-decoration-none">All Blogs</Link> </Nav>
                        <Nav className="nav-link"><Link to="/createBlogs" className="text-white text-decoration-none"> Create Blogs </Link> </Nav>
                        <Nav className="nav-link"><Link to="/contact" className="text-white text-decoration-none"> Contact</Link> </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            {
                (props.themeState === props.theme.light) ? (
                    <Button variant="light"  className="border-dark" onClick={darkMode}>
                        <span role="img" aria-label="sun">🌞</span>
                    </Button>
                ):(
                    <Button variant="dark" className="border-light" onClick={lightMode}>
                        <span role="img" aria-label="moon">🌚</span>
                    </Button>
                )
            }
        </Navbar>
    )
}

export default NavBar;