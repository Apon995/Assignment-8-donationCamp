import React from 'react';
import logo from "../../src/assets/web-logo.png"
import { NavLink } from 'react-router-dom';
import "./Styles/Header.css"


function Header() {

  return (
    <>
      <nav className='py-3 flex items-center justify-between'>
        <img src={logo} alt="main-logo" className='w-[180px]' />
        <div className='nav-link'>
          <ul className='flex items-center gap-3 text-base text-[#000] font-bold'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/Donation'>Donation</NavLink></li>
            <li><NavLink to='/Statistics'>Statistics</NavLink></li>
          </ul>
        </div>
      </nav>

    






    </>
  )
}

export default Header