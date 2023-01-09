import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import { UserContext } from '../../context';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import PassengerCard from '../PassengerCard/PassengerCard';
import './pnr.css';

const PNR = () => {
  const { userid } = useContext(UserContext);
  const [pnr, setpnr] = useState();
  const [data, setData] = useState([]);
  const loadRef = useRef();

  const loading = () => {
    loadRef.current.style.opacity = 1;
    loadRef.current.style.visibility = 'visible';
  };

  const stoploading = () => {
    loadRef.current.style.opacity = 0;
    loadRef.current.style.visibility = 'hidden';
  };

  const getData = async (pnr) => {
    loading();
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/passengerpnr/${pnr}`
    );
    setData(res.data[0]);
    stoploading();
  };

  const status = (pnr, e) => {
    e.preventDefault();
    userid && getData(pnr);
  };

  return (
    <>
      <div className="loader-container" ref={loadRef}>
        <div className="loader"></div>
      </div>
      <div className="pnr_container">
        <form>
          <div className="row_container">
            <input
              type="number"
              id="pnr_text"
              placeholder="Enter Booking ID"
              onChange={(e) => {
                setpnr(e.target.value);
              }}
            />
            <button className="pnr-btn" onClick={(e) => status(pnr, e)}>
              Check Booking Status
            </button>
          </div>
        </form>
        {data.length !== 0 && <div className='cardpanel'><PassengerCard props={data} /></div>}
      </div>
    </>
  );
};

export default PNR;
