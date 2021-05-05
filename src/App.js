import React, {useState} from "react";
import {Switch, BrowserRouter as Router , Route, Link} from "react-router-dom"
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
    const initialBlogState = {id:null,title:"",description:"",author:""};
    const [currentBlog, setCurrentBlog] = useLocalStorage(initialBlogState);
    //const [editing,setEditing] = useLocalStorage(false);
    //const [favourite,setFavourite] = useState(false);

    const addBlog = (newBlog) => {
        newBlog.id = blogs.length + 1;
        setBlogs([...blogs , newBlog]);
    }
    const deleteBlog = (blogId) => {
        setBlogs(blogs.filter((blog) => {
            return blog.id !== blogId;
        }));
    }
    const clickUpdateButton = (blog) => {
        setCurrentBlog({id:blog.id , author: blog.author , title: blog.title, description: blog.description});
    }

    const updateBlog = ( id , updatedBlog) => {
        setCurrentBlog(blogs.map(blog => (blog.id === id ?  updatedBlog  : blog)));
    }
    return (
        <>
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route render={() => (<AllBlogs blogs={blogs} deleteBlog={deleteBlog} clickUpdateButton={clickUpdateButton} />)} exact path="/allBlogs"/>
                    <Route render={(props) => (<CreateBlog {...props} addBlog={addBlog}/>)} exact path="/createBlogs" />
                    <Route render={() => (<EditBlog currentBlog={currentBlog} updateBlog={updateBlog}/>)} exact path="/editBlog/:id"/>
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
