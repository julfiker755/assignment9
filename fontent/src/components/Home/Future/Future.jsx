import React from 'react';
import best from '../../../assets/best.jpg'
import { SiBookstack } from 'react-icons/si';

const Future = () => {
    return (
        <div className='my-10 bg-[#F5F5F7]'>
            <div className='grid grid-cols-1 gap-3  xl:grid-cols-2'>
              <img data-aos="zoom-in"  className='w-full' src={best} alt="" />
              <div data-aos="zoom-in" className='self-center p-5'>
               <div className='my-5'>
                <h1 className='text-[#8e8e8e]'>The Best Choice</h1>
                <h1 className='text-4xl'>We Build Future with Education</h1>
               </div>
                 <p className='my-5 text-[#8e8e8e]'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explore.</p>
                 <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='flex gap-4'>
                       <h1 className='border border-[#FC6B4F] rounded-full p-3 h-fit'><SiBookstack style={{color:"#FC6B4F"}} size={40}/></h1>
                        <div>
                        <h1 className='text-2xl mb-3 hover:text-[#FC6B4F] cursor-pointer'>Professional Degree</h1>
                        <p className='text-[#8e8e8e]'>Professional degrees are degrees recognized by the US Department of Education as necessary for subsequent licensing.</p>
                        <button className='border mt-3 border-[#FC6B4F] rounded-md p-2 hover:bg-[#FC6B4F] hover:text-white transition-all'>MORE INFORMATION</button>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                       <h1 className='border border-[#FC6B4F] rounded-full p-3 h-fit'><SiBookstack style={{color:"#FC6B4F"}} size={40}/></h1>
                        <div>
                        <h1 className='text-2xl mb-3 hover:text-[#FC6B4F] cursor-pointer'>The Best Online....</h1>
                        <p className='text-[#8e8e8e]'>Professional degrees are degrees recognized by the US Department of Education as necessary for subsequent licensing.</p>
                        <button className='border mt-3 border-[#FC6B4F] rounded-md p-2 hover:bg-[#FC6B4F] hover:text-white transition-all'>MORE INFORMATION</button>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
        </div>
    );
};

export default Future;