import React from "react";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import "./pnr.css";

const PNR = () => {
  return (
    <div className="container">
      <form>
        <div className="row_container">
          <input
            type="text"
            id="pnr_text"
            maxLength="10"
            minLength="10"
            placeholder="Enter 10 digit PNR Number"
          />
          <button type="submit" className="pnr-btn">
            Check PNR Status
          </button>
        </div>
      </form>
    </div>
  );
};

export default PNR;
