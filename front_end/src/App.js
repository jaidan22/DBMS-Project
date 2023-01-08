import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import BookCard from "./components/BookCard/BookCard";
import PNR from "./components/PNR/PNR";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CardPanel from "./components/CardPanel/CardPanel";


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
                            <CardPanel />
                        </>
                        }
                    />
                </Routes>

                <Routes>
                    <Route
                        path="/PNR"
                        element={
                        <>
                            <Navbar /> 
                            <Home />
                            <PNR />
                        </>
                        }
                    />
                </Routes>

                <Routes>
                    <Route
                        path="/Login"
                        element={
                        <>
                            <Navbar /> 
                            <Home />
                            <Login />
                        </>
                        }
                    />
                </Routes>

                <Routes>
                    <Route
                        path="/signup"
                        element={
                        <>
                            <Navbar /> 
                            <Home />
                            <Signup />
                        </>
                        }
                    />
                </Routes>
            </Router>
        </>
    )
    
};

export default App;
