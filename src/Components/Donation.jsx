import React, { useEffect, useState } from 'react';

import DonationCard from './DonationCard';
import { getDataFromLs } from '../Utilities/saveData';
import { useLoaderData } from 'react-router-dom';

function Donation() {
  const [Donation ,setDonation] = useState([]);
  const [donateSlice , setDonateslice] = useState(4);
  const Data = useLoaderData();

  useEffect(()=>{
    let arr = [];
    let ids = getDataFromLs();

  
      ids.forEach(id =>{
        let donateData = Data.filter((data)=> data.id == id )
        arr.push(donateData)
      })
      
      setDonation(arr)
    
   
    

  },[])

  
  
  return (
    <>
      <div className={`${Donation.length ? "grid" : "flex"} md:grid-cols-2 grid-cols-1 xl:gap-7 md:gap-5 gap-7 py-5`}>
        { 
         Donation.length ?  Donation?.slice(0, donateSlice).map((Donate , index) => <DonationCard key={index} Donate={Donate}/>) : <div className='font-semibold text-center w-full text-4xl h-screen flex items-center justify-center'>No donation found !</div>
        }

      </div>
     {
      Donation.length === donateSlice || !Donation.length || Donation.length < 4  ? "" :  <div className="w-full text-center pb-4">
      <button onClick={()=>setDonateslice(Donation.length)} className='bg-[#009444] text-white text-base font-medium px-4 py-2 rounded-md cursor-pointer'>see All</button>
    </div>
     }
    </>
  )
}

export default Donation