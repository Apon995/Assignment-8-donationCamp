import React from 'react'
import { Link} from 'react-router-dom';
import PropTypes from 'prop-types'

function DonationCard({Donate}) {
   const {id,picture,category,title ,price,category_color} = Donate[0] || [];
    

   
    return (
        <>
            <div className='bg-[#0052ff26] flex gap-2 rounded-md'>
                <img src={picture} alt="" className='w-[250px] rounded-md' />

                <div className='py-5 space-y-2 px-2'>
                    <p style={{ backgroundColor: "#0052ff33", color: category_color || 'black' }} className=' w-fit px-4  py-2 rounded-md text-base font-medium'>{category || ''}</p>
                    <h1 className='text-xl text-[#0B0B0B] font-semibold'>{title || ''}</h1>
                    <h2 style={{color: category_color || 'black'}} className='text-base font-medium'>${price || ''}</h2>
                    <h3 style={{ backgroundColor: category_color || 'red', color: "white"}} className=' w-fit px-4  py-2 rounded-md text-base font-medium'><Link to={`/Donation/${id}`}>view details</Link></h3>
                </div>
            </div>


        </>
    )
}
DonationCard.propTypes = {
    Donate : PropTypes.array.isRequired
}
export default DonationCard