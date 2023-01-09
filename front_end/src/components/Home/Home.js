import React, { useContext } from 'react';
import { UserContext } from '../../context';
import './home.css';

const Home = () => {
  const { userid } = useContext(UserContext);
  console.log(userid);
  return (
    <div className="home">
      {userid}
      {/* <img src="https://www.metrorailnews.in/wp-content/uploads/2020/07/indian-railways-history-e1663841029626.jpg" /> */}
    </div>
  );
};

export default Home;
