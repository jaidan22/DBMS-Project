import React from 'react';
import './navbar.css';
const Navbar = () => {
  return (
    <div>
        <header>
           <img src="https://www.clipartmax.com/png/middle/225-2259507_train-logo-train-logo-black-white.png" />
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/PNR">PNR Status</a></li>
                    <li><a href="/book">Book Tickets</a></li>
                    <li><a href="#" className='butt'>Login</a></li>
                    
                </ul>
            </nav>
           
        </header>
    </div>
  )
}

export default Navbar;