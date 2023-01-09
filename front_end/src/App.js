import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import BookCard from './components/BookCard/BookCard';
import PNR from './components/PNR/PNR';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import CardPanel from './components/CardPanel/CardPanel';
import Passenger from './components/BookPassenger/BookPassenger';

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
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

          <Route path="/book/train/:id" element={<Passenger />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
