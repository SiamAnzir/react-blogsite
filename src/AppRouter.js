import React from "react";
import {HashRouter as Router , Switch , Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import {blogLists} from "./components/BlogsData";
import AllBlogs from "./components/AllBlogs";
import useLocalStorage from "./hooks/useLocalStorage";
import EditBlog from "./components/EditBlog";
import contactPage from "./components/Contact";
import './App.css';

const AppRouter = () => {

    const [blogs , setBlogs] = useLocalStorage('blogs', blogLists);

    return (
        <>
            <Router basename="/">
                <NavBar/>
                <Switch>
                    <Route render={() => (<Home blogs={blogs} setBlogs={setBlogs}/>)} exact path="/"/>
                    <Route render={() => (<AllBlogs blogs={blogs} setBlogs={setBlogs} />)} exact path="/allBlogs"/>
                    <Route render={(props) => (<CreateBlog {...props} blogs={blogs} setBlogs={setBlogs}/>)} exact path="/createBlogs" />
                    <Route render={(props) => (<EditBlog {...props} blogs={blogs} setBlogs={setBlogs}/>)} exact path="/editBlog/:id"/>
                    <Route exact path="/contact" component={contactPage}/>
                    <Route path="*" component={() => "404 NOT FOUND"} />
                </Switch>
            </Router>
            <hr/>
            <footer>
                <Container className="text-center" bg="dark" variant="dark">
                    <p className="text-muted">Copyright &copy; React Website 2021</p>
                </Container>
            </footer>
        </>
    );
}

export default AppRouter;