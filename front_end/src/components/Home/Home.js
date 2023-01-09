import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../context';
import PassengerCard from '../PassengerCard/PassengerCard';
import './home.css';

const Home = () => {
  const { userid } = useContext(UserContext);
  const [data, setData] = useState([]);
  console.log(userid);
  const loadRef = useRef();

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
      console.log(res.data);
      setData(res.data);
      stoploading();
    };
    userid && getData();
  }, []);

  return (
    <div className="home">
      {/* <img src="https://www.metrorailnews.in/wp-content/uploads/2020/07/indian-railways-history-e1663841029626.jpg" /> */}
      <div className="loader-container" ref={loadRef}>
        <div className="loader"></div>
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
