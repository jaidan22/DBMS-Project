import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../context';
import BookCard from '../BookCard/BookCard';
import PassengerCard from '../PassengerCard/PassengerCard';
import './home.css';

const Home = () => {
  const { userid } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [src, setSrc] = useState();
  const [dest, setdest] = useState();
  const [searchdata, setsearchData] = useState();
  const [stations, setstations] = useState([]);
  console.log(userid);
  const loadRef = useRef();

  const search = async () => {
    loading();
    const body = {
      s: src,
      d: dest,
    };
    console.log(body);
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/searchByStation`,
      body
    );

    // console.log(res.data);
    setsearchData(res.data[0]);
    stoploading();
  };

  const loading = () => {
    loadRef.current.style.opacity = 1;
    loadRef.current.style.visibility = 'visible';
  };

  const stoploading = () => {
    loadRef.current.style.opacity = 0;
    loadRef.current.style.visibility = 'hidden';
  };

  useEffect(() => {
    const getData = async () => {
      loading();
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/passenger/${userid}`
      );
      setData(res.data);

      const st = await axios.get(`${process.env.REACT_APP_API_URL}/stations`);
      setstations(st.data);
      // console.log(st.data);
      stoploading();
    };

    const getStations = async () => {
      loading();

      const st = await axios.get(`${process.env.REACT_APP_API_URL}/stations`);
      setstations(st.data);
      // console.log(st.data);
      stoploading();
    };

    userid && getData();
    getStations();
  }, []);

  return (
    <div className="home">
      {/* <img src="https://www.metrorailnews.in/wp-content/uploads/2020/07/indian-railways-history-e1663841029626.jpg" /> */}
      <div className="loader-container" ref={loadRef}>
        <div className="loader"></div>
      </div>
      <div className="search cardpanel">
        <h2>Search Trains</h2>

        <div className="inputs flex-row">
          <div className="from">
            <span>From</span>
            <select
              name="stations"
              id="stations"
              onChange={(e) => {
                setSrc(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Source
              </option>

              {stations.map((s) => {
                return <option value={s.station_name}>{s.station_name}</option>;
              })}
            </select>
          </div>

          <div className="to">
            <span>To</span>
            <select
              name="stations"
              id="stations"
              onChange={(e) => {
                setdest(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Destination
              </option>
              {stations.map((s) => {
                return <option value={s.station_name}>{s.station_name}</option>;
              })}
            </select>
          </div>
        </div>
        <button onClick={search}>Search</button>

        {searchdata && <BookCard props={searchdata} />}
      </div>
      {userid && (
        <div className="cardpanel">
          <h2 style={{ textAlign: 'left !important' }}>Booked Trains</h2>
          {data.map((p) => {
            return <PassengerCard props={p} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
