"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="sm:hidden px-24 font-montserrat flex items-center justify-center bg-[#000213] relative">
        <div className="w-full">
          <nav className="py-6 w-full flex items-center justify-between md:space-x-10">
            <Image src={"/assets/logov2.jpg"} width={150} height={0} alt="pic" />
            <div className="flex items-center">
              <ul className="flex items-center xl:space-x-4 lg:space-x-6 list-none space-x-10 cursor-pointer">
              <Link href="/"><li className="text-white mr-4 text-[16px] font-semibold">
                  Home
                </li></Link>
                <li className="text-white mr-4 text-[16px] font-semibold" onClick={toggleMobileMenu}>
                  Services
                </li>

                <Link href="/about"><li className="text-white mr-4 text-[16px] font-semibold">
                  About Us
                </li></Link>
                <Link href="/contact"><li className="text-white mr-4 text-[16px] font-semibold">
                  Contact Us
                </li></Link>

              </ul>
              <Link href="/contact"><button className="sm:hidden ml-20 justify-end px-5 py-3 rounded-[40px] text-white text-[17px] md:text-[14px] font-semibold buttonv2 ">
                Let’s Talk <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
              </button></Link>
            </div>
          </nav>
        </div>
      </div>
      <div
        className={`z-50 sm:hidden fixed cursor-pointer top-0 left-0 h-screen w-full bg-[#000213] text-white transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0 sm:hidden md:hidden' : 'translate-y-full sm:hidden md:hidden'
          }`}
      >
        <button onClick={toggleMobileMenu} className="text-white absolute right-28 text-6xl cursor-pointer -mr-[98px]">
          &times;
        </button>
        <div className='justify-center grid grid-cols-2 mt-[120px] ml-10 gap-[90px] font-montserrat text-center'>
          <ul className="py-6 shadow-sm shadow-[#0045e5]">
            <Link href="/services/digital"><li className=" text-[26px] font-semibold leading-none  underline mb-2 px-4" onClick={closeMobileMenu}>
              Digital Marketing Services<iframe src="https://lottie.host/embed/eeae0c22-62c1-4193-bb05-6eecb908a0eb/sP7mK937g0.lottie"></iframe>
            </li></Link>
          </ul>
          <ul className="py-6 shadow-sm shadow-[#0045e5] ">
            <Link href="/services/social"><li className="text-[26px] leading-none font-semibold underline  mb-2 px-4" onClick={closeMobileMenu}>
              Social Media Marketing Services
            </li></Link>
          </ul>
          <ul className="py-6 shadow-sm shadow-[#0045e5] ">
            <Link href="/services/web"><li className="text-[26px] leading-none font-semibold  underline mb-2 px-4" onClick={closeMobileMenu}>
              Web Design & Development Services
            </li></Link>
          </ul>
          <ul className="py-6 shadow-sm shadow-[#0045e5] ">
            <Link href="/services/commerce"><li className="text-[26px] leading-none font-semibold underline  mb-2 px-4" onClick={closeMobileMenu}>
              E-commerce Development Services
            </li></Link>
          </ul>
          <ul className="py-6 shadow-sm shadow-[#0045e5]">
            <Link href="/services/video"><li className="text-[26px] leading-none font-semibold underline  mb-2 px-4" onClick={closeMobileMenu}>
              Video Production Services
            </li></Link>
          </ul>
          <ul className="py-6 shadow-sm shadow-[#0045e5]">
            <Link href="/services/animation"><li className="text-[26px] leading-none font-semibold underline  mb-2 px-4" onClick={closeMobileMenu}>
              Animation Services
            </li></Link>
          </ul>
          <ul className="py-6 shadow-sm shadow-[#0045e5]">
            <Link href="/services/ui"><li className="text-[26px] leading-none font-semibold underline  mb-2 px-4" onClick={closeMobileMenu}>
              UI/UX Design Services
            </li></Link>
          </ul>
          <ul className="py-6 shadow-sm shadow-[#0045e5]">
            <Link href="/services/appdev"><li className="text-[26px] leading-none font-semibold underline  mb-4 px-4" onClick={closeMobileMenu}>
              Application Development Services
            </li></Link>
          </ul>
        </div>
      </div>

    </>
  );
};

export default Navbar;