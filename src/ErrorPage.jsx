import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'
function ErrorPage() {
  return (
    <>
      <div className='h-[90vh] flex items-center justify-center flex-col space-y-4 text-center px-4 '>
        <h1 className='text-5xl font-semibold text-black'>I Have bad
          news for you &#128543;</h1>

        <p className='tex-sm text-black font-medium'>The page you are looking
          For might be remove or is
          temporary unavaible !</p>
          <Link to="/" > 
          <h3 className="text-base font-semibold text-black cursor-pointer pt-3 inline-flex items-center"><AiOutlineArrowLeft className="text-xl font-bold text-black" /> Back to home</h3>
          </Link>
      </div>


    </>
  )
}

export default ErrorPage;