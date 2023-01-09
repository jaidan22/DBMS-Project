import React, { useContext } from 'react';
import { UserContext } from '../../context';
import './navbar.css';
const Navbar = () => {
  const { userid, setuserId } = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem('id');
  };

  return (
    <div className='navbar'>
      <header>
        <img src="https://www.clipartmax.com/png/middle/225-2259507_train-logo-train-logo-black-white.png" />
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/PNR">PNR Status</a>
            </li>
            <li>
              <a href="/book">Book Tickets</a>
            </li>
            {!userid ? (
              <li>
                <a href="/Login" className="butt">
                  Login
                </a>
              </li>
            ) : (
              <li onClick={logout}>
                <a href="/login" className="butt">
                  Log Out
                </a>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
