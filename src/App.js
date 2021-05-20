import React from "react";
import './App.css';
import AppRouter from "./AppRouter";
import {ThemeContext} from "./context/ThemeContext";
import {themes} from "./context/ThemeContext";

const App = () => {

    return (
        <ThemeContext.Provider value={themes}>
            <AppRouter/>
        </ThemeContext.Provider>

    );
}

export default App;
