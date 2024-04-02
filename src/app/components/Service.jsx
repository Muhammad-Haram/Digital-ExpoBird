import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Service = () => {
  return (
    <Fragment>
      <div className="bg-[#ffffff] overflow-x-hidden font-montserrat">
        <div className="pt-[4rem] md:pt-2 xl:px-36 px-10 relative z-10">
          <div className="py-[2rem]">
            <h5 className="text-[40px] text-center font-montserrat font-semibold text-[#252E48] md:flex md:justify-center">All your design tools in one place with <br /> one simple subscription</h5>
            <p className='text-[20px] text-center text-[#545F7E]'>Your advanced marketing tool to save time, enhance your presence, and boost awareness.
            </p>
          </div>

          <div className=" grid grid-cols-12 sm:grid sm:grid-cols-1">
            <div className="col-span-6 left-container">
              <div className="md:pt-0 md:h-auto md:mb-[200px] lg:h-auto lg:mb-[200px]">
                <div>
                  <video className="py-3 " alt="" autoPlay={true}
                    muted={true}
                    loop={true}
                    src="/assets/video-editor.mp4" type="video/webm" >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="pt-[2rem]  md:h-auto md:mb-[100px] lg:h-auto lg:mb-[200px]">
                <Image src="/assets/digital-branding.webp" height={0} width={100} className="py-3" alt="" />
                <div className="bg-white shadow-md p-4 rounded-lg">
                  <p className="text-[25px] text-[#252E48] font-bold pl-5 md:text-center" data-inviewport >Web Development</p>
                  <p className="text-[18px] text-[#545F7E] max-w-[70%] pl-5 py-3 md:text-center">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <p className="text-[18px] text-[#252E48] font-medium max-w-[70%] pl-5 py-3 md:text-center">Replaces: Your website subscription
                  </p>
                </div>
              </div>
            </div>


            <div className="col-span-6">
              <div className="pt-[2rem]  md:h-auto md:mb-[100px] lg:h-auto lg:mb-[200px]">
                <Image src="/assets/digital-branding.webp" height={0} width={100} className="py-3" alt="" />
                <div className="bg-white shadow-md p-4 rounded-lg">
                  <p className="text-[30px] text-[#252E48] font-bold pl-5 md:text-center" data-inviewport >Digital Marketing</p>
                  <p className="text-[20px] text-[#545F7E] font-medium max-w-[70%] pl-5 py-3 md:text-center">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Link href="/services/digital">
                    <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold ml-[140px] md:flex md:items-left md:mx-auto">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-6 left-container">
              <div className=" md:pt-0  md:h-auto md:mb-[200px] lg:h-auto lg:mb-[200px]">
                <div>
                  <video height={0} width={600} className="py-3 " alt="" autoPlay={true}
                    muted={true}
                    loop={true}
                    src="/assets/graphic-maker.mp4" type="video/webm" >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            <div className="col-span-6 left-container">
              <div className=" md:pt-0  md:h-auto md:mb-[200px] lg:h-auto lg:mb-[200px]">
                <div>
                  <video height={0} width={600} className="py-3 " alt="" autoPlay={true}
                    muted={true}
                    loop={true}
                    src="/assets/website-maker.mp4" type="video/webm" >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            <div className="col-span-6">
              <div className="pt-[2rem]  md:h-auto md:mb-[100px] lg:h-auto lg:mb-[200px]">
                <Image src="/assets/digital-branding.webp" height={0} width={100} className="py-3" alt="" />
                <div className="bg-white shadow-md p-4 rounded-lg">
                  <p className="text-[30px] text-[#252E48] font-bold pl-5 md:text-center" data-inviewport >Digital Marketing</p>
                  <p className="text-[20px] text-[#545F7E] font-medium max-w-[70%] pl-5 py-3 md:text-center">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Link href="/services/digital">
                    <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold ml-[140px] md:flex md:items-left md:mx-auto">
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