import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { saveJobApplication } from '../../Usehooks/localstorge';
import toast, { Toaster } from 'react-hot-toast';

const Singleservice = () => {
  const {id}=useParams()
  const [alldata,setalldata]=useState()
  useEffect(()=>{
    (()=>{
      fetch("../Servies.json")
      .then(res=>res.json())
      .then(data=>setalldata(data))
    })()
  },[])
  // handlejoin
  const hanldejoin=()=>{
    saveJobApplication(parseInt(id))
    toast.success('Join Successfully')

  }
  const matchdata=alldata?.find(alld=>alld.id == id)
  const {image,title,price,description}=matchdata || {}
    return (
        <div className='bg-[#F5F5F7]'>
          <div className='w-11/12 lg:max-w-5xl m-auto'>
            <ul className='text-center py-5'>
                <li className='text-4xl font-bold'>{title}</li>
                <li className='text-[#8e8e8e] mt-px'>Home/Education/.../{title}</li>
            </ul>
          <div className='flex justify-center'>
          <img src={image} alt="" />
          </div>
          <div className='flex justify-between py-5'>
            <h1 className='text-3xl lg:text-4xl font-bold text-[#F96A4E]'>{title}</h1>
            <h1 className='text-3xl lg:text-4xl font-bold text-[#F96A4E]'>${price}</h1>
          </div>
          <p className='text-[#8e8e8e]'>{description}</p>
         <div className='py-5'>
         <button onClick={()=>hanldejoin()} className='bg-[#278fbf] text-white py-2 px-4 rounded-md'>Join Here</button>
         </div>
        </div>
        {/* react hot tost */}
        <Toaster
  position="top-right"
  reverseOrder={false}
/>
        </div>
    );
};

export default Singleservice;