import React, { useState } from 'react';
import './navbar.scss';
import { FaFortAwesome } from "react-icons/fa";
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [active, setActive] = useState('navBar');
  const [dropdown, setDropdown] = useState(false);

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const removeNavbar = () => {
    setActive('navBar');
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <Link to="/" className='logo flex'>
            <h1><FaFortAwesome className="icon" />Royal-India</h1>
          </Link>
        </div>

        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <Link to="/" className='navLink'>Home</Link>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>Packages</a>
            </li>
            <li className='navItem dropdown' onClick={toggleDropdown}>
  <a href='#' className='navLink'>State</a>
  {dropdown && (
    <ul className='dropdownMenu'>
      <li><Link to="/maharashtra" className='navLink'>Maharashtra</Link></li>
     <li><Link to="/rajsthan" className='navLink'>Rajasthan</Link></li>
     <li><Link to="/madhya" className='navLink'>Madhyapradesh</Link></li>
     <li><Link to="/karnataka" className='navLink'>Karnataka</Link></li>
     <li><Link to="/andhra" className='navLink'>Andhrapradesh</Link></li>
     
     
    </ul>
  )}
</li>
            <li className='navItem'>
              {/* <a href='#' className='navLink'>About</a> */}
              <Link to="/main" className='navLink'>About</Link>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>Pages</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>News</a>
            </li>
            <li className='navItem'>
              <Link to="/contact" className='navLink'>Contact</Link>
            </li>

            <button className='btn'>
              <a href='#'>Book Now</a>
            </button>
          </ul>

          <div onClick={removeNavbar} className='closeNavbar'>
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div onClick={showNav} className='toggleNavbar'>
          <TbGridDots className='icon' />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
