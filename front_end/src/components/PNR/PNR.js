import React from 'react';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import './pnr.css';

const PNR = () => {
  return (
    <div className="pnr_container">
      <form>
        <div className="row_container">
          <input
            type="text"
            id="pnr_text"
            maxLength="10"
            minLength="10"
            placeholder="Enter Booking ID"
          />
          <button type="submit" className="pnr-btn">
            Check Booking Status
          </button>
        </div>
      </form>
    </div>
  );
};

export default PNR;
