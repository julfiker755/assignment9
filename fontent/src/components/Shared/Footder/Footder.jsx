import React from 'react';
import './Footder.css'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
// animatio logo
import { BsFacebook } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { BsMessenger } from 'react-icons/bs';
import { AiFillInstagram} from 'react-icons/ai';

const Footder = () => {
    return (
        <div className='bg-[#158488] text-white py-5 lg:py-10'>
            <div className='w-11/12 lg:max-w-7xl m-auto'>
                <div className='grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
                    <div>
                        <h1 className='text-2xl font-semibold mb-2'>Our Education</h1>
                        <ul>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li>Become a Teacher</li>
                            <li>Packs Success</li>
                        </ul>
                    </div>
                    <div>
                    <h1 className='text-2xl font-semibold mb-2'>Our Support</h1>
                        <ul>
                            <li>Documentation</li>
                            <li>Forums</li>
                            <li>Language Packs</li>
                            <li>Release Status</li>
                            <li>Forums Info</li>
                        </ul>
                    </div>
                    <div>
                    <h1 className='text-2xl font-semibold mb-2'>Links</h1>
                        <ul>
                            <li>Blog</li>
                            <li>Classes</li>
                            <li>Event</li>
                            <li>Portfolio</li>
                            <li>Stadus Event</li>
                        </ul>
                    </div>
                    <div>
                    <h1 className='text-2xl font-semibold mb-2'>Contact</h1>
                        <ul className='space-y-1'>
                            <li className='flex items-center gap-1'><BsFillTelephoneFill size={18} /><span>01741703755</span></li>
                            <li className='flex items-center gap-1'><AiFillMail size={18} /><span>demo@gmail.com</span></li>
                            <li className='flex items-center gap-1'><MdLocationOn size={18} /><span>Haji Ismail Rd,Bangladesh</span></li>
                        </ul>
                        {/* animationn log for my website */}
                        <div className='flex mt-3'>
                            {/* facebook */}
                            <div className="email-btn-mbr">
                                <div className="icon_logo">
                                    <BsFacebook size={25} style={{ color:'#1877F2' }} />
                                </div>
                                <div className="circle_waves" style={{ animationDelay: '0s' }}></div>
                                <div className="circle_waves" style={{ animationDelay: '1s' }}></div>
                                <div className="circle_waves" style={{ animationDelay: '2s' }}></div>
                                <div className="circle_waves" style={{ animationDelay: '3s' }}></div>
                            </div>
                            {/* whatsapp */}
                            <div className="email-btn-mbr">
                                <div className="icon_logo">
                                    <IoLogoWhatsapp size={25} style={{ color:'#58F26F' }} />
                                </div>
                                <div className="circle_waves" style={{ animationDelay: '0s' }}></div>
                                <div className="circle_waves" style={{ animationDelay: '1s' }}></div>
                                <div className="circle_waves" style={{ animationDelay: '2s' }}></div>
                                <div className="circle_waves" style={{ animationDelay: '3s' }}></div>
                            </div>
                            {/* messanger*/}
                            <div className="email-btn-mbr">
                                <div className="icon_logo">
                                    <BsMessenger size={25} style={{ color:'#A933F3' }} />
                                </div>
                                <div className="circle_waves" style={{ animationDelay: '0s' }}></div>
                                <div className="circle_waves" style={{ animationDelay: '1s' }}></div>
                                <div className="circle_waves" style={{ animationDelay: '2s' }}></div>
                                <div className="circle_waves" style={{ animationDelay: '3s' }}></div>
                            </div>
                                 {/* messanger*/}
                                 <div className="email-btn-mbr">
                                <div className="icon_logo">
                                    <AiFillInstagram size={25} style={{ color:'#FF2D5E' }} />
                                </div>
                                <div className="circle_waves" style={{ animationDelay: '0s' }}></div>
                                <div className="circle_waves" style={{ animationDelay: '1s' }}></div>
                                <div className="circle_waves" style={{ animationDelay: '2s' }}></div>
                                <div className="circle_waves" style={{ animationDelay: '3s' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footder;