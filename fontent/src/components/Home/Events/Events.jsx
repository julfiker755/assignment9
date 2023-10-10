import React from 'react';
import online from '../../../assets/online.svg'
import { BsBuildingFillCheck,BsBrowserEdge ,BsServer,BsSafe2 ,BsCoin,BsXDiamondFill,BsXbox} from 'react-icons/bs';
import { MdPlayLesson } from 'react-icons/md';

const Events = () => {
    return (
        <div className='w-11/12 lg:max-w-7xl m-auto my-10'>
        <div className='text-center mb-5'>
        <h1 className='text-2xl lg:text-4xl font-semibold'>Our Events Course</h1>
        <h1 className='text-[#666]'>The Best Choice</h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                <div data-aos="zoom-in" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 space-y-5'>
                    {/* coumn 1 */}
                    <div  className='flex items-center gap-2'>
                   <div className='border-2 border-[#1bb4b9] rounded-full p-4'>
                      <BsBrowserEdge  style={{color:'#1bb4b9'}} size={30}/>
                   </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>Training Courses</h1>
                        <p className='text-[#666] text-base'>Write a short description, that will describe the title or something informational and useful</p>
                    </div>
                </div>
                    {/* colum 2 */}
                <div className='flex items-center gap-2'>
                   <div className='border-2 border-[#1bb4b9] rounded-full p-4'>
                      <BsBuildingFillCheck style={{color:'#1bb4b9'}} size={30}/>
                   </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>Meals Provided</h1>
                        <p className='text-[#666] text-base'>Write a short description, that will describe the title or something informational and useful</p>
                    </div>
                </div>
                    {/* colum 3 */}
                <div className='flex items-center gap-2'>
                   <div className='border-2 border-[#1bb4b9] rounded-full p-4'>
                      <MdPlayLesson style={{color:'#1bb4b9'}} size={30}/>
                   </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>Language Lessons</h1>
                        <p className='text-[#666] text-base'>Write a short description, that will describe the title or something informational and useful</p>
                    </div>
                </div>
                {/* colum 4 */}
                <div className='flex items-center gap-2'>
                   <div className='border-2 border-[#1bb4b9] rounded-full p-4'>
                      <BsXbox style={{color:'#1bb4b9'}} size={30}/>
                   </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>Transportation</h1>
                        <p className='text-[#666] text-base'>Write a short description, that will describe the title or something informational and useful</p>
                    </div>
                </div>

                </div>
                <div className='hidden lg:block mt-[42px]'>
                    <img data-aos="flip-down" src={online} alt="" />
                </div>
                <div data-aos="zoom-in" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 space-y-5'>
                    {/* coumn 1 */}
                    <div className='flex items-center gap-2'>
                   <div className='border-2 border-[#1bb4b9] rounded-full p-4'>
                      <BsServer  style={{color:'#1bb4b9'}} size={30}/>
                   </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>Online Courses</h1>
                        <p className='text-[#666] text-base'>Write a short description, that will describe the title or something informational and useful</p>
                    </div>
                </div>
                    {/* colum 2 */}
                <div className='flex items-center gap-2'>
                   <div className='border-2 border-[#1bb4b9] rounded-full p-4'>
                      <BsSafe2 style={{color:'#1bb4b9'}} size={30}/>
                   </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>Special Education</h1>
                        <p className='text-[#666] text-base'>Write a short description, that will describe the title or something informational and useful</p>
                    </div>
                </div>
                    {/* colum 3 */}
                <div className='flex items-center gap-2'>
                   <div className='border-2 border-[#1bb4b9] rounded-full p-4'>
                      <BsCoin style={{color:'#1bb4b9'}} size={30}/>
                   </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>Language Lessons</h1>
                        <p className='text-[#666] text-base'>Write a short description, that will describe the title or something informational and useful</p>
                    </div>
                </div>
                   {/* colum 4 */}
                   <div className='flex items-center gap-2'>
                   <div className='border-2 border-[#1bb4b9] rounded-full p-4'>
                      <BsXDiamondFill style={{color:'#1bb4b9'}} size={30}/>
                   </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>bookmark</h1>
                        <p className='text-[#666] text-base'>Write a short description, that will describe the title or something informational and useful</p>
                    </div>
                </div>

                </div>
            </div>
         
    </div>
    );
};

export default Events;