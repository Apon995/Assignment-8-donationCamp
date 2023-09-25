import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';


function Home() {
  const Data = useLoaderData();
  const [Catagory, setCategory] = useState([]);
  const [SearchbyCategory, SetSearchbyCategory] = useState();

  const handleOnchange = (e) => { 
    SetSearchbyCategory(e.target.value);
    
    

  };



  useEffect(() => {
    setCategory(Data)
  }, [])


  const handleSearch = () => {
    
    if(SearchbyCategory == "All" || SearchbyCategory == "ALL" || SearchbyCategory == "all"){
      setCategory(Data)

    }
    else if (SearchbyCategory == "education" || SearchbyCategory == "Education" || SearchbyCategory == "EDUCATION") {
      let education = Catagory.filter((data)=> data.category == "Education");
     setCategory(education)
    }
    else if (SearchbyCategory == "health" || SearchbyCategory == "Health" || SearchbyCategory == "HEALTH") {
      let health = Catagory.filter((data)=> data.category == "Health");
      setCategory(health)
    }
    else if (SearchbyCategory == "food" || SearchbyCategory == "Food" || SearchbyCategory == "FOOD") {
      let food = Catagory.filter((data)=> data.category == "Food");
      setCategory(food)
    }
    else if(SearchbyCategory == "cloth" || SearchbyCategory == "clothing" || SearchbyCategory == "Cloth" || SearchbyCategory == "Clothing"){
      let cloth = Catagory.filter((data)=> data.category == "Clothing");
      setCategory(cloth)
    }
    else{
      console.log('no match category')
    }
   

    
  }






  return (
    <>
      <div className="h-[70vh] w-full flex items-center justify-center flex-col gap-7  bg-[url(https://i.ibb.co/wzrY0kn/banner-img.jpg)] bg-no-repeat bg-cover bg-[#fffffff2]  bg-blend-overlay rounded-md">

        <h3 className='text-[#0B0B0B] font-bold text-4xl'>I Grow By Helping People In Need !</h3>

        <div className='flex  w-[35%] h-12 rounded-md '>
          <input onChange={handleOnchange} type="text" placeholder='search by category name ...' className='px-1 w-[80%] focus:border-[#0866FF] rounded-l-md outline-none border-[1px] border-[#adadad] font-semibold text-base text-[#0B0B0B]' />
          <button onClick={handleSearch} className='bg-[#FF444A] text-white font-medium cursor-pointer text-base rounded-r-md w-[20%]'>Search</button>

        </div>

      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 py-10'>
        {
          Catagory?.map((items, index) => <Card key={index} items={items} />)
        }

      </div>



    </>
  )
}

export default Home