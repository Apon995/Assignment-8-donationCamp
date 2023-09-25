import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import discriptionImg from "../../src/assets/book1.jpg"
import "../Components/Styles/Description.css"

function Decription() {
    const { id } = useParams();
    const Data = useLoaderData();
    console.log(id);
    console.log(Data)
    return (
        <>
            <div className='description-box py-5 w-full  space-y-5 '>
                <div className='block '>
                    <img src={discriptionImg} alt=".." className=' w-full min-h-[40vh] rounded-md' />
                    <div className='overly px-5 pt-4'>
                        <button className='px-4 py-2 bg-[#FF444A] text-white text-base font-medium rounded-md cursor-pointer hover:opacity-80'>Donate $0</button>
                    </div>
                </div>


                <div className='space-y-2 pb-4'>
                    <h1 className='text-4xl font-bold text-[#0B0B0B]'>Good Education</h1>
                    <p className='text-[#0b0b0bb3] text-base font-normal'>There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their children's education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.</p>
                </div>
            </div>




        </>
    )
}

export default Decription