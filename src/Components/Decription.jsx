import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import "../Components/Styles/Description.css";

function Decription() {
    const [Description, setDescription] = useState({});
    const { id } = useParams();
    const Data = useLoaderData();

    useEffect(() => {
        let desc = Data.find((data) => data.id == id);
        setDescription(desc);
    }, [id]);


    const {title, description, price, picture,category_color } = Description || {};


    const HandleDonate =(id)=>{
        console.log(id)
       
    }

    return (
        <>
        <Link to="/"> Back to home</Link>
            <div className="description-box py-5 w-full  space-y-5 ">
                <div className="block ">
                    <img
                        src={picture}
                        alt="..."
                        className=" w-full min-h-[50vh] rounded-md"
                    />
                    <div className="overly px-5 pt-2">
                        <button onClick={()=>HandleDonate(id)} style={{backgroundColor : category_color || "#FF444A"}} className="px-4 py-2 text-white text-base font-medium rounded-md cursor-pointer hover:opacity-80">
                            Donate ${price}
                        </button>
                    </div>
                </div>

                <div className="space-y-2 pb-4">
                    <h1 className="text-4xl font-bold text-[#0B0B0B]">{title}</h1>
                    <p className="text-[#0b0b0bb3] text-base font-normal">
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Decription;
