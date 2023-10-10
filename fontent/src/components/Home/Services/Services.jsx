import React, { useEffect, useState } from 'react';
import Servicescard from './Servicescard';


const Services = () => {
    const [service,setservice]=useState([])
    useEffect(()=>{
        (()=>{
            fetch("./Servies.json")
            .then(res=>res.json())
            .then(data=>setservice(data))
        })()
    },[])
    
    return (
        <div className='w-11/12 lg:max-w-7xl m-auto my-10'>
            <div className='text-center mb-5'>
            <h1 className='text-2xl lg:text-4xl font-semibold'>Training Services</h1>
            <h1 className='text-[#666]'>Follow our best services</h1>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4'>
            {service?.map(ser=><Servicescard key={ser.id} serviceall={ser}></Servicescard>)}
           </div>
        </div>
    );
};

export default Services;