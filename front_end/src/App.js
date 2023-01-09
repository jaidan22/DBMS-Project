import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import BookCard from './components/BookCard/BookCard';
import PNR from './components/PNR/PNR';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import history from './history';
import CardPanel from './components/CardPanel/CardPanel';

const App = () => {
  return (
    <>
      <Navbar />
      <Router history={history}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />

          <Route
            path="/book"
            element={
              <>
                {/* <Home /> */}
                <CardPanel />
              </>
            }
          />

          <Route
            path="/PNR"
            element={
              <>
                {/* <Home /> */}
                <PNR />
              </>
            }
          />

          <Route
            path="/Login"
            element={
              <>
                {/* <Home /> */}
                <Login />
              </>
            }
          />

          <Route
            path="/signup"
            element={
              <>
                {/* <Home /> */}
                <Signup />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
