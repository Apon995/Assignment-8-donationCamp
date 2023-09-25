import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';


function Home() {

  const Data = useLoaderData();

  console.log(Data)
  return (
    <>
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
      {
        Data?.map((items,index) => <Card key={index} items={items}/>)
      }

    </div>
    
    
    
    </>
  )
}

export default Home