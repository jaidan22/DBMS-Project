import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import BookCard from '../BookCard/BookCard';
import './CardPanel.css';

const CardPanel = () => {
  const [trains, setTrains] = useState([]);

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
    loading();
    axios
      .get(`${process.env.REACT_APP_API_URL}/trains`)
      .then((res) => {
        const traindata = res.data;
        setTrains(traindata);
        stoploading();
      })
      .catch((err) => {
        console.log(err);
        stoploading();
      });
  }, []);

  return (
    <>
      <div className="loader-container" ref={loadRef}>
        <div className="loader"></div>
      </div>
      <div className="cardpanel">
        {trains.map((train) => (
          <BookCard props={train} />
        ))}
      </div>
    </>
  );
};

export default CardPanel;
