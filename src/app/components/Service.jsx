import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Service = () => {
  return (
    <Fragment>

      <div className="bg-[#ffffff] overflow-x-hidden font-montserrat">
        <div className="sm:px-5 sm:pt-[20px] pt-[4rem] md:pt-2 xl:px-36 px-10 relative z-10">
          <div className="py-[2rem]">
            <h5 className="sm:text-[25px] text-[40px] text-center font-bold font-montserrat text-[#252E48] md:flex md:justify-center">All your design tools <br /> in one place with one simple subscription</h5>
            <p className='sm:text-[14px] sm:mt-[10px] text-[20px] text-center text-[#545F7E]'>Your advanced marketing tool to save time, enhance your presence, and boost awareness.
            </p>
          </div>

          <div className="sm:justify-between grid grid-cols-12 sm:grid sm:grid-cols-1">

            <div className="col-span-6 left-container">
              <div className="md:pt-0 md:h-auto md:mb-[200px] lg:h-auto lg:mb-[200px]">
                <div className='sm:ml-[0px] ml-[20px]'>
                  <video className="py-3 ml-[100px] sm:ml-0" alt="" autoPlay={true}
                    muted={true}
                    loop={true}
                    src="/assets/video-editor.mp4" type="video/webm" >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            <div className="sm:mb-[30px] sm:w-[350px] col-span-6 w-[700px]">
              <div className="sm:p-2 pt-[8rem] p-16 md:h-auto md:mb-[100px] lg:h-auto lg:mb-[200px]">

                <div className='flex justify-center'>
                  <div>
                    <Image src="/assets/service-animation-07.png" height={0} width={100} className="py-3" alt="" />
                  </div>
                  <div>

                    <p className="text-[25px] text-[#252E48] font-bold pl-5 md:text-center" data-inviewport >Web Development</p>
                    <p className="sm:text-[13px] text-[18px] text-[#545F7E] max-w-[70%] pl-5 py-3 md:text-center">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                    <p className="text-[18px] text-[#252E48] font-medium max-w-[70%] pl-5 py-3 md:text-center">Replaces: Your website subscription
                    </p>

                  </div>
                </div>
                <div className="bg-white shadow-xl p-4 rounded-xl">
                </div>
              </div>
            </div>

            <div className="sm:ml-[85px] sm:mb-[30px] sm:w-[350px] col-span-6 w-[700px]">
              <div className="sm:p-2 pt-[8rem] p-16 md:h-auto md:mb-[100px] lg:h-auto lg:mb-[200px]">

                <div className='flex justify-center'>
                  <div>
                    <Image src="/assets/service-animation-01.png" height={0} width={100} className="py-3" alt="" />
                  </div>
                  <div>
                    <p className="text-[25px] text-[#252E48] font-bold pl-5 md:text-center" data-inviewport >Mobile App Development</p>
                    <p className="sm:text-[13px] text-[18px] text-[#545F7E] max-w-[70%] pl-5 py-3 md:text-center">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                    <p className="text-[18px] text-[#252E48] font-medium max-w-[70%] pl-5 py-3 md:text-center">Replaces: Your website subscription
                    </p>
                  </div>
                </div>
                <div className="bg-white shadow-xl p-4 rounded-xl">
                </div>
              </div>
            </div>

            <div className="col-span-6 left-container">
              <div className=" md:pt-0 md:h-auto md:mb-[200px] lg:h-auto lg:mb-[200px]">
                <div>
                  <video height={0} width={600} className="py-3" alt="" autoPlay={true}
                    muted={true}
                    loop={true}
                    src="/assets/graphic-maker.mp4" type="video/webm" >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            <div className="col-span-6 left-container">
              <div className=" md:pt-0 md:h-auto md:mb-[200px] lg:h-auto lg:mb-[200px]">
                <div>
                  <video height={0} width={600} className="py-3 ml-[100px] sm:ml-0" alt="" autoPlay={true}
                    muted={true}
                    loop={true}
                    src="/assets/website-maker.mp4" type="video/webm" >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            <div className="sm:mb-[30px] sm:w-[350px] col-span-6 w-[700px]">
              <div className="sm:p-2 pt-[8rem] p-16 md:h-auto md:mb-[100px] lg:h-auto lg:mb-[200px]">

                <div className='flex justify-center'>
                  <div>
                    <Image src="/assets/service-animation-02.png" height={0} width={100} className="py-3" alt="" />
                  </div>
                  <div>
                    <p className="text-[25px] text-[#252E48] font-bold pl-5 md:text-center" data-inviewport >Digital Marketing</p>
                    <p className="sm:text-[13px] text-[18px] text-[#545F7E] max-w-[70%] pl-5 py-3 md:text-center">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                    <p className="text-[18px] text-[#252E48] font-medium max-w-[70%] pl-5 py-3 md:text-center">Replaces: Your website subscription
                    </p>
                  </div>
                </div>
                <div className="bg-white shadow-xl p-4 rounded-xl">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>







      <Link href="/services/digital">
        <button className="buttonv2 mb-10 flex items-center m-auto justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold md:flex md:items-left md:mx-auto">
          Get Started<span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
        </button>
      </Link>

    </Fragment>
  )
}

export default Service