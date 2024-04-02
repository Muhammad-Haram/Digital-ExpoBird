"use client"
import React from 'react';
import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const NewNav = () => {
    const [showNav, setShowNav] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);
    const [isSubDropdown, setIsSubDropdown] = useState(true);
    const [isServiceOpen, setIsServiceOpen] = useState(true);
    return (
        <Fragment>
            {
             <Image src={"/assets/hamburger.png"} height={10} width={20} alt='pic' onClick={() => setShowNav(true)} />
            }    
            {
                showNav && <div className='sm:absolute md:hidden sm:z-10 font-montserrat text-white bg-[#000213] sm:h-screen sm:w-screen relative top-16 flex-col list-none left-0 cursor-pointer'>
                    <Image src={"/assets/close.png"} height={20} width={10} alt='pic' onClick={() => setShowNav(false)} />
                    <Image className='float-right relative right-6' src="/assets/download (1).png" height={80} width={90} alt='pic' />
                    <li className='relative mt-10 left-3 text-3xl font-semibold mb-2 text-center'><Link href="#">home</Link></li>
                    <li className='relative mt-10 left-3 text-3xl font-semibold mb-2 text-center'><Link href="#">about us</Link></li>
                    <li className='relative mt-10 left-3 text-3xl font-semibold mb-2 text-center'><Link href="#">contact us</Link></li>
                    <li className='relative mt-10 left-3 text-3xl font-semibold mb-2 text-center'><Link href="#">portfolio</Link></li>
                    <li className='relative mt-10 left-3 text-3xl font-semibold mb-2 text-center'><Link href="#">projects</Link></li>
                    <li>
                        <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <div>
                                {isDropdownOpen ? (
                                    <h1 className="relative mt-10 left-3 text-3xl font-semibold mb-2 text-center">services
                                       
                                    </h1>
                                ) : (
                                    <h1 className="relative mt-10 left-3 text-3xl font-semibold mb-2 text-center">services               
                                    </h1>
                                )}
                            </div>
                        </div>
                        {isDropdownOpen && (
                            <ul>
                                <div onClick={() => setIsSubDropdown(!isSubDropdown)}>
                            <div>
                                {isSubDropdown ? (
                                    <h1 className="relative mt-3 left-3 text-xl font-semibold mb-2 text-center">digital marketing services
                                       
                                    </h1>
                                ) : (
                                    <h1 className="relative mt-3 left-3 text-xl font-semibold mb-2 text-center">Digital Marketing Services 
                                        
                                    </h1>
                                )}
                            </div>
                        </div>         
                                <div onClick={() => setIsServiceOpen(!isServiceOpen)}>
                            <div>
                                {isServiceOpen ? (
                                    <h1 className="relative mt-3 left-3 text-xl font-semibold mb-2 text-center">Social Media Marketing Services
                                        
                                    </h1>
                                ) : (
                                    <h1 className="relative mt-3 left-3 text-xl font-semibold mb-2 text-center">Social Media Marketing Services
                                       
                                    </h1>
                                )}
                            </div>
                        </div>
                                <li className='relative left-3 text-xl font-semibold mb-2 text-center'><Link href="#">Web Design & Development Services</Link></li>
                                <li className='relative left-3 text-xl font-semibold mb-2 text-center'><Link href="#">E-commerce Development Services</Link></li>
                                <li className='relative left-3 text-xl font-semibold mb-2 text-center'><Link href="#">Video Production Services</Link></li>
                                <li className='relative left-3 text-xl font-semibold mb-2 text-center'><Link href="#">Animation Services</Link></li>
                                <li className='relative left-3 text-xl font-semibold mb-2 text-center'><Link href="#">UI/UX Design Services</Link></li>
                                <li className='relative left-3 text-xl font-semibold mb-2 text-center'><Link href="#">Application Development Services</Link></li>
                            </ul>
                        )}
                    </li>
                </div>
            }
        </Fragment>
    );
};
export default NewNav