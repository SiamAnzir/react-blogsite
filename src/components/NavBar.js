import React from "react";
import { OverlayTrigger,Tooltip, Container, Nav, Navbar} from "react-bootstrap";
import logo from "../logo.svg";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMoon} from "@fortawesome/free-solid-svg-icons";

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
                (props.themeState === props.theme.dark) ? (
                    <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={'tooltip-bottom'}> Turn Dark Mode Off </Tooltip>}>
                            <span onClick={lightMode} style={{cursor:"pointer"}}>
                                <FontAwesomeIcon icon={faMoon} color="white"/>
                            </span>
                    </OverlayTrigger>
                ):(
                    <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={'tooltip-bottom'}> Turn Dark Mode On </Tooltip>}>
                            <span role="img" aria-label="sun" onClick={darkMode} style={{cursor:"pointer"}}>
                                🌞
                            </span>
                    </OverlayTrigger>
                )
            }
        </Navbar>
    )
}

export default NavBar;