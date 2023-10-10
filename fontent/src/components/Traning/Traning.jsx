import React, { useEffect, useState } from 'react';
import { getStoredJobApplication } from '../Usehooks/localstorge';
import Traningcard from './Traningcard';

const Traning = () => {
    const  [traninng,settraining]=useState([])
    const [jointraining,setjointraing]=useState([])

    useEffect(()=>{
        (()=>{
            fetch('./Servies.json')
            .then(res=>res.json())
            .then(data=>settraining(data))
        })()
    },[])
    useEffect(()=>{
        const getStoredJobid=getStoredJobApplication()
        if(traninng.length > 0){
            const jointraingall=traninng?.filter(ta=>getStoredJobid.includes(ta.id))
            setjointraing(jointraingall)
        }
    },[traninng])

    return (
        <div className='w-11/12 lg:max-w-7xl m-auto py-10'>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
              {jointraining?.map(tra=><Traningcard key={tra?.id} tra={tra}></Traningcard>)} 
           </div>
        </div>
    );
};

export default Traning;