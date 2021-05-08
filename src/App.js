import React, {useState} from "react";
import {Switch, BrowserRouter as Router , Route} from "react-router-dom"
import {Container} from "react-bootstrap";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import {blogLists} from "./components/BlogsData";
import AllBlogs from "./components/AllBlogs";
import useLocalStorage from "./hooks/useLocalStorage";
import EditBlog from "./components/EditBlog";
import './App.css';

const App = () => {

    const [blogs , setBlogs] = useLocalStorage('blogs', blogLists);
    //const [favBlogs,setFavBlogs] = useState(false);

    return (
        <>
            <Router>
                <NavBar/>
                <Switch>
                    <Route render={() => (<Home blogs={blogs}/>)} exact path="/"/>
                    <Route render={() => (<AllBlogs blogs={blogs} setBlogs={setBlogs} />)} exact path="/allBlogs"/>
                    <Route render={(props) => (<CreateBlog {...props} blogs={blogs} setBlogs={setBlogs}/>)} exact path="/createBlogs" />
                    <Route render={(props) => (<EditBlog {...props} blogs={blogs} setBlogs={setBlogs}/>)} exact path="/editBlog/:id"/>
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
