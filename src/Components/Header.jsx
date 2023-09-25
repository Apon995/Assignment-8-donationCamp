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

      <div className="h-[70vh] w-full flex items-center justify-center flex-col gap-7 ">

        <h3 className='text-[#0B0B0B] font-bold text-4xl'>I Grow By Helping People In Need !</h3>

        <div className='flex  w-[35%] h-12 rounded-md '>
          <input type="text" placeholder='search by category name ...' className='px-1 w-[80%] focus:border-[#0866FF] rounded-l-md outline-none border-[1px] border-[#adadad] font-semibold text-base text-[#0B0B0B]' />
          <button className='bg-[#FF444A] text-white font-medium cursor-pointer text-base rounded-r-md w-[20%]'>Search</button>

        </div>

      </div>






    </>
  )
}

export default Header