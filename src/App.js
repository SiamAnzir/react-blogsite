import React from "react";
import {Switch, BrowserRouter as Router , Route, Link} from "react-router-dom"
import {Navbar, Nav,Container, Row } from "react-bootstrap";
import logo from "./logo.svg"
import Home from "./Components/Home";
import allBlogs from "./Components/Blogs";
import './App.css';

function App() {
  return (
    <>
        <Router>
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
                        <Nav.Link  href="/">Home</Nav.Link>
                        <Nav.Link href="/allBlogs">All Blogs</Nav.Link>
                        <Nav.Link href="/createBlogs">Create Blogs</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/allBlogs" component={allBlogs}/>
                <Route exact path="/createBlogs" component={Home}/>
                <Route exact path="/contact" component={Home}/>
                <Route path="*" component={() => "404 NOT FOUND"} />
            </Switch>
        </Router>
        <hr/>
        <footer>
            <Container className="text-center">
                <p className="text-muted">Copyright &copy; React Website 2021</p>
            </Container>
        </footer>
    </>
  );
}

export default App;
