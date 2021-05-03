import React, {useState} from "react";
import {Switch, BrowserRouter as Router , Route, Link} from "react-router-dom"
import {Navbar, Nav,Container, NavLink } from "react-bootstrap";
import logo from "./logo.svg"
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import {blogLists} from "./components/BlogsData";
import Blogs from "./components/BlogLists";
import useLocalStorage from "./hooks/useLocalStorage";
import './App.css';

function App() {

    const [blogs , setBlogs] = useLocalStorage('blogs', blogLists);

    const addBlog = (newBlog) => {
        newBlog.id = blogs.length + 1;
        setBlogs([...blogs , newBlog]);
    }

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
                            <NavLink href="/" >Home</NavLink>
                            <NavLink href="/allBlogs">All Blogs</NavLink>
                            <NavLink href="/createBlogs">Create Blogs</NavLink>
                            <NavLink href="/contact">Contact</NavLink>
                        </Nav>
                    </Container>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route render={() => (<Blogs blogs={blogs}/>)} exact path="/allBlogs"/>
                    <Route render={() => (<CreateBlog addBlog={addBlog}/>)} exact path="/createBlogs" />
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
