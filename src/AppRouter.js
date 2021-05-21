import React, {useState,useContext} from "react";
import {HashRouter as Router , Switch , Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import {blogLists} from "./components/BlogsData";
import AllBlogs from "./components/AllBlogs";
import useLocalStorage from "./hooks/useLocalStorage";
import EditBlog from "./components/EditBlog";
import ContactPage from "./components/Contact";
import {Footer} from "./components/Footer";
import './App.css';
import {ThemeContext} from "./context/ThemeContext";

const AppRouter = () => {

    const [blogs , setBlogs] = useLocalStorage('blogs', blogLists);
    const theme = useContext(ThemeContext);
    const [themeState, setThemeState] = useState(theme.light);

    return (
        <>
            <Router basename="/">
                <NavBar theme={theme} themeState={themeState} setThemeState={setThemeState}/>
                <Switch>
                    <Route render={() => (<Home themeState={themeState} blogs={blogs} setBlogs={setBlogs}/>)} exact path="/"/>
                    <Route render={() => (<AllBlogs themeState={themeState} blogs={blogs} setBlogs={setBlogs} />)} exact path="/allBlogs"/>
                    <Route render={(props) => (<CreateBlog  {...props} themeState={themeState} blogs={blogs} setBlogs={setBlogs}/>)} exact path="/createBlogs" />
                    <Route render={(props) => (<EditBlog  {...props} themeState={themeState} blogs={blogs} setBlogs={setBlogs}/>)} exact path="/editBlog/:id"/>
                    <Route render={() => (<ContactPage themeState={themeState}/>)} exact path="/contact" />
                    <Route path="*" component={() => "404 NOT FOUND"} />
                </Switch>
            </Router>
            <Footer themeState={themeState}/>
        </>
    );
}

export default AppRouter;