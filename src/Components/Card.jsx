import React from 'react'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function Card({ items }) {

    const { id,title, category, category_color, card_bg, button_bg, picture } = items || {};


    return (
        <>
            <Link to={`/Donation/${id}`}>
                <div style={{ backgroundColor: card_bg }} className='rounded-md hover:cursor-pointer'>
                    <img src={picture} alt=".." className='h-[200px] rounded-md' />
                    <div className='px-2 py-4 space-y-2'>
                        <h1 style={{ backgroundColor: button_bg || "#0052ff33", color: category_color || "#0052ff33" }} className=' w-fit px-4  py-2 rounded-md text-base font-medium'>{category || ''}</h1>

                        <p style={{ color: category_color || "#0052FF" }} className='text-xl font-bold'>{title || ''}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}
Card.propTypes = {
    items: PropTypes.object.isRequired,

}
export default Card