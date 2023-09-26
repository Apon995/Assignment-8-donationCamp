import React, { useState } from 'react';
import logo from "../../src/assets/web-logo.png"
import { NavLink } from 'react-router-dom';
import {AiOutlineMenu ,AiOutlineClose } from 'react-icons/ai';
import "./Styles/Header.css"


function Header() {
  const [openNav , setOpenNav] = useState(false);
  const HandleToggleNav=()=>{
    setOpenNav(!openNav);
    if(!openNav){
      document.getElementById('navbar').classList.remove('top-[-35%]')
      document.getElementById('navbar').classList.add('top-[13%]')

    }
    else{
      document.getElementById('navbar').classList.remove('top-[13%]')
      document.getElementById('navbar').classList.add('top-[-35%]')

    }

  }

  return (
    <>
      <nav className='py-3 flex items-center justify-between'>
        <img src={logo} alt="main-logo" className='w-[180px]' />
        <div className='md:hidden block'>
          <button onClick={HandleToggleNav} className='text-3xl font-bold cursor-pointer'>
            { openNav ? <AiOutlineClose/> : <AiOutlineMenu/> } 
          </button>
          
        </div>
        <div className='nav-link md:static absolute  md:shadow-none md:bg-inherit bg-white shadow-xl md:w-fit w-full top-[-35%]  left-0 py-9 md:py-0 rounded-md duration-300 z-10 ' id='navbar'>

          <ul className='flex md:flex-row flex-col items-center gap-3 text-base text-[#000] font-bold'>
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