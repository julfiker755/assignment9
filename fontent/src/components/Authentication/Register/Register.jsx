import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsEyeSlashFill } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
import useauth from '../../Usehooks/useauth';
import { updateProfile } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const [passwordshow, setpasswordshow] = useState(false)
    const [conpasswordshow, setconpasswordshow] = useState(false)
    const { createUser } = useauth()
    const navigate = useNavigate()
    const handleregister = (event) => {
        event.preventDefault()
        const displayname = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        const conpassword = event.target.conpassword.value

        if (password.length < 6) {
           return toast.error("Password must be 6 characters");
        } else if (password !== conpassword) {
            return toast.error('password does not match')
        } else if (!/[A-Z]/.test(password)) {
            return toast.error("Password must be one uppercase");
        } else if (!/[@#$%^&+=!]/.test(password)) {
            return toast.error("Password must be special symbol");
        }

        createUser(email, password)
            .then(async(result) => {
                const user = result.user
                updateProfile(user, {
                    displayName: displayname,
                }).then(() => { console.log('profile update') }).catch((error) => { });
                // const success=await user && toast.success('Successfully toasted!')
                    navigate('/')
            }).catch(error => {
               toast.error(error.message)
            })



    }

    return (
        <div className="bg-gray-100 h-screen">
            <div className="w-11/12 lg:max-w-7xl m-auto py-8">
                <h1 className="text-2xl lg:text-3xl font-bold mb-6 text-center">Please Registration</h1>
                <div className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
                    <form onSubmit={handleregister}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                type="text" id="name" name="name" required />
                        </div>
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
                        <div className="mb-4 relative">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Confirm Password</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                type={`${conpasswordshow ? 'text' : 'password'}`} name="conpassword" required />
                            <h1 onClick={() => setconpasswordshow(!conpasswordshow)} className='absolute right-3 bottom-[13px] cursor-pointer'>{conpasswordshow ? <AiFillEye size={22} /> : <BsEyeSlashFill size={22} />}</h1>
                        </div>
                        <button
                            className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                            type="submit">Register</button>
                    </form>
                    <h1 className='text-center mt-2'>Already have an account?<Link to="/login"><span className='text-[#1D4ED8] font-semibold ml-2'>Login</span></Link></h1>
                </div>
            </div>
            {/* hot tost */}
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
        </div>
    );
};

export default Register;