import React from 'react';
import {BsFillCalendarDateFill,BsCurrencyDollar} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Servicescard = ({serviceall}) => {
    const navigate=useNavigate()
    const {id,name,title,image,start,price,certification}=serviceall
    return (
        <div data-aos="zoom-in" className='border p-2 rounded-md'>
            <img className='w-full  rounded-md' src={image} alt="" />
            <div>
                 <h1 className='text-xl font-semibold'>{name}</h1>
                 <h2 className='text-sm text-[#9f9e9e] mb-1'>{title}</h2>
                 <p className='mb-px'>{certification.slice(0,60)}</p>
             <h1 className='border-b-2'></h1>
            <div className='flex justify-between mt-3 items-center'>
                <h1 className='flex items-center gap-1 text-[#FC6B4F]'><BsFillCalendarDateFill/>{start}</h1>
                <h1  className='flex items-center text-[#FC6B4F]'><BsCurrencyDollar/>Price:{price}</h1>
            </div>
            <button onClick={()=>navigate(`/singledetails/${id}`)} className='bg-[#2c9acd] transition-all hover:bg-[#377a99f1] w-full py-2 text-white font-bold my-2 rounded-md'>View Details</button>
            </div>
        </div>
    );
};

export default Servicescard;