import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './Card';


function Home() {
  const Data = useLoaderData();
  const [Catagory, setCategory] = useState([]);
  const [SearchbyCategory, SetSearchbyCategory] = useState();

  const handleOnchange = (e) => {
    SetSearchbyCategory(e.target.value)
  };



  useEffect(() => {
    setCategory(Data)
  }, [])


  const handleSearch = () => {
    if (SearchbyCategory == undefined || null) {
      return;
    }

    if (SearchbyCategory == "All" || SearchbyCategory == "ALL" || SearchbyCategory == "all") {
      setCategory(Data);
    }
    else if (SearchbyCategory == "education" || SearchbyCategory == "Education" || SearchbyCategory == "EDUCATION") {
      let education = Catagory.filter((data) => data.category == "Education");
      setCategory(education)
    }
    else if (SearchbyCategory == "health" || SearchbyCategory == "Health" || SearchbyCategory == "HEALTH") {
      let health = Catagory.filter((data) => data.category == "Health");
      setCategory(health)
    }
    else if (SearchbyCategory == "food" || SearchbyCategory == "Food" || SearchbyCategory == "FOOD") {
      let food = Catagory.filter((data) => data.category == "Food");
      setCategory(food)
    }
    else if (SearchbyCategory == "cloth" || SearchbyCategory == "clothing" || SearchbyCategory == "Cloth" || SearchbyCategory == "Clothing") {
      let cloth = Catagory.filter((data) => data.category == "Clothing");
      setCategory(cloth)
    }
    else {
      toast.warn(`not found this category : ${SearchbyCategory}`, {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2000
      })
    }




    document.getElementById('search-bar').value = ""

  }






  return (
    <>
      <div className="md:min-h-[70vh] min-h-[45vh] w-full flex items-center justify-center flex-col gap-7  bg-[url(https://i.ibb.co/wzrY0kn/banner-img.jpg)] bg-no-repeat bg-cover bg-center bg-[#fffffff2]  bg-blend-overlay rounded-md">

        <h3 className='text-[#0B0B0B] font-bold text-[1.4rem] md:text-4xl text-center'>I Grow By Helping People In Need !</h3>

        <div className='flex  lg:w-[35%] md:w-[55%] w-[90%] h-12 rounded-md '>
          <input onChange={handleOnchange} id='search-bar' type="text" placeholder='search by category name ...' className='px-1 md:w-[80%] w-[75%] focus:border-[#0866FF] rounded-l-md outline-none border-[1px] border-[#adadad] font-semibold text-sm md:text-base text-[#0B0B0B]' />
          <button onClick={handleSearch} className='bg-[#FF444A] text-white font-medium cursor-pointer text-sm md:text-base rounded-r-md md:w-[20%] w-[25%]'>Search</button>

        </div>

      </div>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-10'>
        {
          Catagory?.map((items, index) => <Card key={index} items={items} />)
        }

      </div>


      <ToastContainer />
    </>
  )
}

export default Home