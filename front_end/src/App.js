import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Book from "./components/Book/Book";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";


const App = () => {
    return ( 
        <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                        <>
                            <Navbar /> 
                            <Home />
                        </>
                        }
                    />
                </Routes>
                <Routes>
                    <Route
                        path="/book"
                        element={
                        <>
                            <Navbar /> 
                            <Home />
                            <Book />
                        </>
                        }
                    />
                </Routes>
            </Router>
        </>
    )
    
};

export default App;
