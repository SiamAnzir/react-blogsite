import React, {useState,useContext} from "react";
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
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
import {ThemeContext} from "./context/ThemeContext";

const AppRouter = () => {

    const [blogs , setBlogs] = useLocalStorage('blogs', blogLists);
    //basename="/"
    const theme = useContext(ThemeContext);
    const [themeState, setThemeState] = useState(theme.light);
    const darkMode = () => {
        setThemeState(theme.dark);
    };
    const lightMode = () => {
        setThemeState(theme.light);
    };

    return (
        <>
            <Router>
                <NavBar darkMode={darkMode} lightMode={lightMode} themeState={themeState} theme={theme}/>
                <Switch>
                    <Route render={() => (<Home themeState={themeState} blogs={blogs} setBlogs={setBlogs}/>)} exact path="/"/>
                    <Route render={() => (<AllBlogs themeState={themeState} blogs={blogs} setBlogs={setBlogs} />)} exact path="/allBlogs"/>
                    <Route render={(props) => (<CreateBlog  {...props} themeState={themeState} blogs={blogs} setBlogs={setBlogs}/>)} exact path="/createBlogs" />
                    <Route render={(props) => (<EditBlog  {...props} themeState={themeState} blogs={blogs} setBlogs={setBlogs}/>)} exact path="/editBlog/:id"/>
                    <Route exact path="/contact" component={contactPage}/>
                    <Route path="*" component={() => "404 NOT FOUND"} />
                </Switch>
            </Router>
            <footer className="border-bottom" style={{
                backgroundColor: themeState.background,
                color: themeState.foreground
            }}>
                <Container className="text-center">
                    <br/>
                    <p className="text-muted">Copyright &copy; React Website 2021</p>
                </Container>
            </footer>
        </>
    );
}

export default AppRouter;