"use client"
import React, { Fragment } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const MobileNav = () => {
	const [showNav, setShowNav] = useState(false);
    const [showServices, setShowServices] = useState(false);
	return (
		<Fragment>
			{
				<Image className='sm:relative translate-x-0.5 sm:right-6 sm:top-5  lg:hidden md:right-6 md:top-5 md:hidden xl:hidden 2xl:hidden cursor-pointer md:float-right sm:float-right' src={showNav ? "/assets/01fe6447fbd35f56bf5b36ce07e7fabb.jpg" : "/assets/269dd16fa1f5ff51accd09e7e1602267.png"} height={35} width={35} alt='pic1' onClick={() => setShowNav(!showNav)} />
			}
			<Image className='md:hidden lg:hidden xl:hidden 2xl:hidden relative top-5 left-5' src="/assets/download (1).png" height={70} width={70} alt='logo' />
			{
				<aside className={showNav ? "sm:bg-[#000213] md:bg-[#000213] font-montserrat sm:h-[810px] sm:mt-[20px] sm:absolute sm:w-full md:absolute md:w-full cursor-pointer sm:text-white md:text-white accordion-nav lg:hidden xl:hidden 2xl:hidden md:hidden" : "hidden sm:bg-[#000213] md:bg-[#000213] md:absolute md:w-full md:mt-[20px] cursor-pointer sm:absolute font-montserrat sm:text-white sm:w-full sm:h-[740px] md:h-[1000px] sm:mt-[20px] accordion-nav md:hidden  lg:hidden xl:hidden 2xl:hidden"}>
					<h3 className='sm:text-center md:text-center sm:mt-5 font-extrabold text-2xl'>Home</h3>
					<h3 className='sm:text-center md:text-center font-extrabold sm:mt-2 text-2xl'>About Us</h3>
					<h3 className='sm:text-center md:text-center font-extrabold sm:mt-2 text-2xl'>Contact Us</h3>
					<h1 className='text-2xl md:text-center sm:mt-2 font-extrabold sm:text-center'>Services</h1>
					<div>
						<h2 className='sm:text-center mob-nav-item md:text-center sm:relative sm:left-2 text-xl'>Digital Marketing Services</h2>
						<h2 className='sm:text-center md:text-center mob-nav-item sm:relative sm:left-2 text-xl'>Social Media Marketing Services</h2>
						<h2 className='sm:text-center md:text-center mob-nav-item sm:relative sm:left-2 text-xl'>Web Design & Development Services</h2>
						<h2 className='sm:text-center md:text-center mob-nav-item sm:relative sm:left-2 sm:mt-2 text-xl'>E-commerce Development Services</h2>
						<h2 className='sm:text-center md:text-center mob-nav-item sm:relative sm:left-2 text-xl'>Video Production Services</h2>
						<h2 className='sm:text-center md:text-center mob-nav-item sm:relative sm:left-2 text-xl'>Animation Services</h2>
						<h2 className='sm:text-center md:text-center mob-nav-item sm:relative sm:left-2 text-xl'>UI/UX Design Services</h2>
						<h2 className='sm:text-center md:text-center mob-nav-item sm:relative sm:left-2 text-xl'>Application Development Services</h2>
					</div>
				</aside>
			}

		</Fragment>
	)
}

export default MobileNav