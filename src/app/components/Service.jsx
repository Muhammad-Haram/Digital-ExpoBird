import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Service = () => {
  return (
    // shiraz
    <Fragment>
      <div className="bg-[#ffffff] overflow-x-hidden font-montserrat">
        <div className="pt-[4rem] pb-[2rem] sm:px-7 md:pt-2 xl:px-36 px-10 relative z-10">
          <div className="py-[2rem]">
            <h5 className="sm:text-[50px] text-[80px] font-black text-black md:flex md:justify-center">Services</h5>
          </div>
          <div className=" grid grid-cols-12 sm:grid sm:grid-cols-1">
            <div className="col-span-6 left-container flex items-center justify-center">

              <div className=" md:pt-0 md:h-auto md:mb-[200px] lg:h-auto lg:mb-[200px]">
                <div>
                  {/* <p className="text-[40px] text-black font-bold pl-5 sm:flex sm:items-center sm:m-0 sm:text-center md:text-center" data-inviewport >Web Development</p>
                  <p className="text-[20px] sm:text-center text-black font-medium max-w-[80%] pl-5 py-3 sm:flex sm:items-center sm:m-0 md:text-center">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p> */}
                  <video height={0} width={600} className="py-3 " alt="" autoPlay={true}
                    muted={true}
                    loop={true}
                    src="/assets/ecommerce.webm" type="video/webm" >
                    Your browser does not support the video tag.
                  </video>
                  <Link href="/services/web">
                    {/* <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold ml-[30px] sm:flex sm:items-center sm:m-auto md:flex md:items-center md:mx-auto">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button> */}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="pt-[2rem]  md:h-auto md:mb-[100px] lg:h-auto lg:mb-[200px]">
                <div className="sm:items-center bg-white shadow-md p-4 rounded-lg flex items-start justify-center flex-col">
                  <p className="sm:text-[30px] sm:text-center sm:pl-0 text-[40px] text-black font-bold pl-5 md:text-center" data-inviewport >Digital Marketing</p>
                  <p className="sm:text-[16px] sm:text-center sm:pl-0 text-[20px] text-black font-medium max-w-[70%] pl-5 py-3 md:text-center">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  {/* <Image src="/assets/digital-branding.webp" height={0} width={400} className="py-3" alt="" /> */}
                  <Link href="/services/digital">
                    <button className="buttonv2 sm:ml-[0px] justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] ml-[30px] font-semibold md:flex md:items-left md:mx-auto">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>

          <div className=" grid grid-cols-12 sm:grid sm:grid-cols-1">
            <div className="col-span-6">
              <div className="pt-[2rem]  md:h-auto md:mb-[100px] lg:h-auto lg:mb-[200px]">
                <div className="sm:items-center bg-white shadow-md p-4 rounded-lg flex items-start justify-center flex-col">
                  <p className="sm:text-[30px] sm:text-center text-[40px] text-black font-bold pl-5 md:text-center" data-inviewport >Digital Marketing</p>
                  <p className="sm:text-[16px] sm:text-center text-[20px] text-black font-medium max-w-[70%] pl-5 py-3 md:text-center">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  {/* <Image src="/assets/digital-branding.webp" height={0} width={400} className="py-3" alt="" /> */}
                  <Link href="/services/digital">
                    <button className="buttonv2 sm:ml-[0px] justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold ml-[30px] md:flex md:items-left md:mx-auto">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-6 left-container flex items-center justify-center">

              <div className="md:pt-0 md:h-auto md:mb-[200px] lg:h-auto lg:mb-[200px]">
                <div>
                  {/* <p className="text-[40px] text-black font-bold pl-5 sm:flex sm:items-center sm:m-0 sm:text-center md:text-center" data-inviewport >Web Development</p>
                  <p className="text-[20px] sm:text-center text-black font-medium max-w-[80%] pl-5 py-3 sm:flex sm:items-center sm:m-0 md:text-center">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p> */}
                  <video height={0} width={600} className="py-3 " alt="" autoPlay={true}
                    muted={true}
                    loop={true}
                    src="/assets/ecommerce.webm" type="video/webm" >
                    Your browser does not support the video tag.
                  </video>
                  <Link href="/services/web">
                    {/* <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold ml-[30px] sm:flex sm:items-center sm:m-auto md:flex md:items-center md:mx-auto">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button> */}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-12 sm:grid sm:grid-cols-1">
            <div className="col-span-6 left-container flex items-center justify-center">

              <div className=" md:pt-0  md:h-auto md:mb-[200px] lg:h-auto lg:mb-[200px]">
                <div>
                  {/* <p className="text-[40px] text-black font-bold pl-5 sm:flex sm:items-center sm:m-0 sm:text-center md:text-center" data-inviewport >Web Development</p>
                  <p className="text-[20px] sm:text-center text-black font-medium max-w-[80%] pl-5 py-3 sm:flex sm:items-center sm:m-0 md:text-center">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p> */}
                  <video height={0} width={600} className="py-3 " alt="" autoPlay={true}
                    muted={true}
                    loop={true}
                    src="/assets/ecommerce.webm" type="video/webm" >
                    Your browser does not support the video tag.
                  </video>
                  <Link href="/services/web">
                    {/* <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold ml-[30px] sm:flex sm:items-center sm:m-auto md:flex md:items-center md:mx-auto">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button> */}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="pt-[2rem]  md:h-auto md:mb-[100px] lg:h-auto lg:mb-[200px]">
                <div className="sm:items-center bg-white shadow-md p-4 rounded-lg flex items-start justify-center flex-col">
                  <p className="sm:text-[30px] sm:text-center sm:pl-0 text-[40px] text-black font-bold pl-5 md:text-center" data-inviewport >Digital Marketing</p>
                  <p className="sm:text-[16px] sm:text-center sm:pl-0 text-[20px] text-black font-medium max-w-[70%] pl-5 py-3 md:text-center">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  {/* <Image src="/assets/digital-branding.webp" height={0} width={400} className="py-3" alt="" /> */}
                  <Link href="/services/digital">
                    <button className="buttonv2 sm:ml-[0px] justify-end px-6 py-4 rounded-[40px] text-[#fff] ml-[30px] text-[17px] font-semibold md:flex md:items-left md:mx-auto">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>

          <div className=" grid grid-cols-12 sm:grid sm:grid-cols-1">
            <div className="col-span-6 left-container flex items-center justify-center">

              <div className=" md:pt-0  md:h-auto md:mb-[200px] lg:h-auto lg:mb-[200px]">
                <div>
                  {/* <p className="text-[40px] text-black font-bold pl-5 sm:flex sm:items-center sm:m-0 sm:text-center md:text-center" data-inviewport >Web Development</p>
                  <p className="text-[20px] sm:text-center text-black font-medium max-w-[80%] pl-5 py-3 sm:flex sm:items-center sm:m-0 md:text-center">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p> */}
                  <video height={0} width={600} className="py-3 " alt="" autoPlay={true}
                    muted={true}
                    loop={true}
                    src="/assets/ecommerce.webm" type="video/webm" >
                    Your browser does not support the video tag.
                  </video>
                  <Link href="/services/web">
                    {/* <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold ml-[30px] sm:flex sm:items-center sm:m-auto md:flex md:items-center md:mx-auto">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button> */}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="pt-[2rem]  md:h-auto md:mb-[100px] lg:h-auto lg:mb-[200px]">
                <div className="sm:items-center bg-white shadow-md p-4 rounded-lg flex items-start justify-center flex-col">
                  <p className="sm:text-[30px] sm:text-center text-[40px] text-black font-bold pl-5 md:text-center" data-inviewport >Digital Marketing</p>
                  <p className="sm:text-[16px] sm:text-center text-[20px] text-black font-medium max-w-[70%] pl-5 py-3 md:text-center">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  {/* <Image src="/assets/digital-branding.webp" height={0} width={400} className="py-3" alt="" /> */}
                  <Link href="/services/digital">
                    <button className="buttonv2 sm:ml-[0px] justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold ml-[30px] md:flex md:items-left md:mx-auto">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>

          <div className=" grid grid-cols-12 sm:grid sm:grid-cols-1">
            <div className="col-span-6 left-container flex items-center justify-center">

              <div className="md:pt-0  md:h-auto md:mb-[200px] lg:h-auto lg:mb-[200px]">
                <div>
                  {/* <p className="text-[40px] text-black font-bold pl-5 sm:flex sm:items-center sm:m-0 sm:text-center md:text-center" data-inviewport >Web Development</p>
                  <p className="text-[20px] sm:text-center text-black font-medium max-w-[80%] pl-5 py-3 sm:flex sm:items-center sm:m-0 md:text-center">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p> */}
                  <video height={0} width={600} className="py-3 " alt="" autoPlay={true}
                    muted={true}
                    loop={true}
                    src="/assets/ecommerce.webm" type="video/webm" >
                    Your browser does not support the video tag.
                  </video>
                  <Link href="/services/web">
                    {/* <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold ml-[30px] sm:flex sm:items-center sm:m-auto md:flex md:items-center md:mx-auto">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button> */}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="pt-[2rem]  md:h-auto md:mb-[100px] lg:h-auto lg:mb-[200px]">
                <div className="sm:items-center bg-white shadow-md p-4 rounded-lg flex items-start justify-center flex-col">
                  <p className="sm:text-[30px] sm:text-center sm:pl-0 text-[40px] text-black font-bold pl-5 md:text-center" data-inviewport >Digital Marketing</p>
                  <p className="sm:text-[16px] sm:text-center sm:pl-0 text-[20px] text-black font-medium max-w-[70%] pl-5 py-3 md:text-center">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  {/* <Image src="/assets/digital-branding.webp" height={0} width={400} className="py-3" alt="" /> */}
                  <Link href="/services/digital">
                    <button className="buttonv2 sm:ml-[0px] justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold ml-[30px] md:flex md:items-left md:mx-auto">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Service