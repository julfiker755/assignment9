import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsEyeSlashFill } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
import useauth from '../../Usehooks/useauth';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const [passwordshow, setpasswordshow] = useState(false)
    const { googlelogin,signinUser } = useauth()
    const location=useLocation()
    const navigate=useNavigate()
    let from = location.state?.from?.pathname || "/";
    const handleregister = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
          signinUser(email,password)
          .then(result=>{
           const user=result.user
           user && navigate(from, { replace: true })
          }).catch(error => {
            toast.error(error.message)
         })
         
    }
    // google login 
    const googlee = () => {
             googlelogin()
            .then(result => {
                const user = result.user
                user && navigate(from, { replace: true })
            })
    }
    return (
        <div className="bg-gray-100 h-screen">
            <div className="w-11/12 lg:max-w-7xl m-auto py-10 lg:py-16">
                <h1 className="text-2xl lg:text-3xl font-bold mb-6 text-center">Please Login</h1>
                <div className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
                    <form onSubmit={handleregister}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                type="email" id="email" name="email" required />
                        </div>
                        <div className="mb-4 relative">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                type={`${passwordshow ? 'text' : 'password'}`} id="password" name="password" required />
                            <h1 onClick={() => setpasswordshow(!passwordshow)} className='absolute right-3 bottom-[13px] cursor-pointer'>{passwordshow ? <AiFillEye size={22} /> : <BsEyeSlashFill size={22} />}</h1>
                        </div>
                        <button
                            className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                            type="submit">Login</button>
                    </form>
                    <div className="divider">OR</div>
                    <div onClick={() => googlee()} className="flex items-center justify-center">
                        <button className='flex items-center gap-1 bg-[#4F46E5] hover:bg-[#3b3696c7] text-white py-2 px-3 rounded-md'> <FcGoogle size={20} />Continue with Google</button>
                    </div>
                    <h1 className='text-center mt-2'>Don't have an account yet?<Link to="/register"><span className='text-[#1D4ED8] font-semibold ml-2'>Register<sup></sup></span></Link></h1>
                </div>
            </div>
            {/* tost container*/}
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
        </div>
    );
};

export default Login;