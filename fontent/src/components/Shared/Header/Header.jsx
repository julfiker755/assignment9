import React, { useEffect, useState } from 'react';
import logo from '../../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import avatar from '../../../assets/avatar.png'
import './Header.css'
import { AiOutlineMenu } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import useauth from '../../Usehooks/useauth';

const Header = () => {
  const [toggle, setoogle] = useState(false)
  const {user,logOut}=useauth()
  useEffect(() => {
    const handleclick = document.querySelector("#handle");
    const handleadd = document.querySelector(".click_menu");

    const handleClickEvent = () => {
      handleadd.classList.toggle("click_add");
    };


    handleclick?.addEventListener('click', handleClickEvent);

    return () => {
      handleclick?.removeEventListener('click', handleClickEvent);
    };
  }, [])

  return (
    <header className='bg-[#1BB4B9] text-white !sticky !top-0 !left-0 z-[990]'>
      <div className='w-11/12 lg:max-w-7xl m-auto flex justify-between items-center'>
        <img className='w-[160px]' src={logo} alt="" />
        <ul className='hidden lg:flex space-x-3'>
          <li><NavLink className={({ isActive}) => isActive ? 'text-[#6135b4]':""} to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive}) => isActive ? 'text-[#6135b4]':""} to="/traning" >Training</NavLink></li>
          <li><NavLink className={({ isActive}) => isActive ? 'text-[#6135b4]':""} to="/gallery">Gallery</NavLink></li>
          <li><NavLink className={({ isActive}) => isActive ? 'text-[#6135b4]':""} to="/event" >Events</NavLink></li>
        </ul>
        {/* login  */}
        {user ? <div className='relative hidden z-50 lg:block'>
          <img id="handle" className='w-10 h-10 rounded-full ring-2 ring-[#387ee0] cursor-pointer' src={user?.photoURL ? user?.photoURL:avatar} alt="" />
          <div className='click_menu absolute right-0 bg-[#3ac2c6fd] rounded-md'>
            <div className='py-1 px-2'>
              <h1 className='text-xl truncate'>{user?.displayName ? user?.displayName : 'demo Islam'}</h1>
              <h1 className='text-xs text-[#f1f0f0]'>{user?.email ? user?.email :'demo.bd@gmail.com'}</h1>
            </div>
            <h1 className='border-b-2 my-1'></h1>
            <ul className='my-2'>
              <li className='hover:bg-[#3cadb0f4] transition-all py-1 px-2 cursor-pointer'>Dashboard</li>
              <li className='hover:bg-[#3cadb0f4] transition-all py-1 px-2 cursor-pointer'>Settings</li>
              <li  onClick={()=>logOut()} className='hover:bg-[#3cadb0f4] transition-all py-1 px-2 cursor-pointer'>Log Out</li>
            </ul>
          </div>
        </div> : <div className='hidden lg:block'><NavLink  to="/login">Login</NavLink></div>}
        
        
        {/* colse button */}
        <div onClick={() => setoogle(!toggle)} className="lg:hidden cursor-pointer">
          {toggle ? <FaTimes size={20} /> : <AiOutlineMenu size={20} />}

        </div>
      </div>
      {/* mobile divice */}
      <div className={`${toggle ? 'lg:hidden z-50 bg-[#1BB4B9] fixed left-0 top-0 transition-all w-3/4 h-full' : 'lg:hidden  z-50 bg-[#1BB4B9] fixed left-[-100%] top-0 duration-500 w-3/4 h-full'}`}>
        <div className='p-2'>
          <img className='w-[200px] p-3' src={logo} alt="" />
          <ul className='lg:hidden space-y-3'>
          <li className='border-b-[1px]'><NavLink className={({ isActive}) => isActive ? 'text-[#6135b4]':""} to="/">Home</NavLink></li>
          <li className='border-b-[1px]'><NavLink className={({ isActive}) => isActive ? 'text-[#6135b4]':""} to="/traning" >Training</NavLink></li>
          <li className='border-b-[1px]'><NavLink className={({ isActive}) => isActive ? 'text-[#6135b4]':""} to="/gallery">Gallery</NavLink></li>
          <li className='border-b-[1px]'><NavLink className={({ isActive}) => isActive ? 'text-[#6135b4]':""} to="/event" >Events</NavLink></li>
          </ul>
           {user ?   <div className='relative lg:hidden py-5'>
            <div className='flex items-center'>
              <img className='w-10 h-10 rounded-full ring-2 ring-[#387ee0] cursor-pointer' src={user?.photoURL ? user?.photoURL:avatar} alt="" />
              <div className='py-1 px-2'>
                <h1 className='text-xl'>{user?.displayName ? user?.displayName : 'demo Islam'}</h1>
                <h1 className='text-xs text-[#f1f0f0]'>{user?.email ? user?.email :'demo.bd@gmail.com'}</h1>
              </div>
            </div>
            <div>
              <h1 className='border-b-2 my-1'></h1>
              <ul className='my-2'>
                <li className='hover:bg-[#47cacff7] rounded-md transition-all py-1 px-2 cursor-pointer'>Dashboard</li>
                <li className='hover:bg-[#47cacff7] rounded-md transition-all py-1 px-2 cursor-pointer'>Settings</li>
                <li onClick={()=>logOut()} className='hover:bg-[#47cacff7] rounded-md transition-all py-1 px-2 cursor-pointer'>Log Out</li>
              </ul>
            </div>
          </div> : <div className='border-b-[1px] mt-2'><Link to="/login">Login</Link></div>}
        </div>
      </div>
    </header>
  );
};

export default Header;