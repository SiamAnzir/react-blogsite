import React, {useState} from "react";
import {Switch, BrowserRouter as Router , Route, Link} from "react-router-dom"
import {Container} from "react-bootstrap";
import NavBar from "./components/navBar";
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import {blogLists} from "./components/BlogsData";
import Blogs from "./components/BlogLists";
import useLocalStorage from "./hooks/useLocalStorage";
import './App.css';

const App = () => {

    const [blogs , setBlogs] = useLocalStorage('blogs', blogLists);
    const initialBlogState = {id:null,title:"",description:"",author:""};
    const [currentBlog, setCurrentBlog] = useState(initialBlogState);
    const [editing,setEditing] = useState(false);
    const [favourite,setFavourite] = useState(false);

    const addBlog = (newBlog) => {
        newBlog.id = blogs.length + 1;
        setBlogs([...blogs , newBlog]);
    }
    const deleteBlog = (blogId) => {
        setEditing(false);
        setBlogs(blogs.filter((blog) => {
            return blog.id !== blogId;
        }));
    }
    return (
        <>
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route render={() => (<Blogs blogs={blogs} deleteBlog={deleteBlog}/>)} exact path="/allBlogs"/>
                    <Route render={(props) => (<CreateBlog {...props} addBlog={addBlog}/>)} exact path="/createBlogs" />
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
