import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { SaveData } from "../Utilities/saveData";
import { AiOutlineArrowLeft } from "react-icons/ai"
import Swal from "sweetalert2";
import "../Components/Styles/Description.css";


function Decription() {
    const [Description, setDescription] = useState({});
    const { id } = useParams();
    const Data = useLoaderData();

    useEffect(() => {
        let desc = Data.find((data) => data.id == id);
        setDescription(desc);
    }, [id]);


    const { title, description, price, picture, category_color } = Description || {};


    const HandleDonate = (id) => {
        Swal.fire({
            icon: 'success',
            title: 'Donation Successfully !',
            showConfirmButton: true,
            timer: 3000
        })
        SaveData(id)
    }

    return (
        <>

            <Link to="/" className="text-base font-semibold text-black cursor-pointer pt-3 inline-flex items-center"> <AiOutlineArrowLeft className="text-xl font-bold text-black" /> Back to home</Link>
            <div className="description-box py-2 w-full  space-y-5 ">
                <div className="block">
                    <img
                        src={picture}
                        alt="..."
                        className=" w-full min-h-[50vh] rounded-md bg-center"
                    />
                    <div className="overly px-5 pt-2 md:h-[15%] h-[20%]">
                        <button onClick={() => HandleDonate(id)} style={{ backgroundColor: category_color || "#FF444A" }} className="px-4 py-2 text-white text-sm md:text-base font-medium rounded-md cursor-pointer hover:opacity-80">
                            Donate ${price}
                        </button>
                    </div>
                </div>

                <div className="space-y-2 pb-4 ">
                    <h1 className="md:text-4xl text-3xl font-bold text-[#0B0B0B]">{title}</h1>
                    <p className="text-[#0b0b0bb3] text-base font-normal">
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Decription;
