import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Service = () => {
  return (
    <Fragment>

      <div className="bg-[#ffffff] overflow-x-hidden font-montserrat w-full">
        <div className="sm:p-[40px] md:pt-2 xl:px-10 px-10 relative z-10">
          <div className="py-[2rem]">
            <h5 className="sm:text-[25px] text-[40px] text-center font-bold font-montserrat text-[#252E48] md:flex md:justify-center">All your design tools <br /> in one place with one simple subscription</h5>
            <p className='sm:text-[14px] sm:mt-[10px] text-[20px] text-center text-[#545F7E]'>Your advanced marketing tool to save time, enhance your presence, and boost awareness.
            </p>
          </div>

          <div className="flex items-center justify-center flex-col">

            <div className='sm:flex-col sm:gap-[30px] md:flex-col md:gap-[0px] flex items-center justify-center gap-[70px] w-full'>
              <div className="sm:w-full md:w-full lg:h-auto w-1/2">
                <div className='sm:ml-[0px]'>
                  <video className="py-3 sm:ml-0 md:w-full" alt="" autoPlay={true}
                    muted={true}
                    loop={true}
                    src="/assets/video-editor.mp4" type="video/webm" >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <div className="sm:mb-[30px] sm:w-full md:w-full col-span-6 w-1/2">
                <div className="sm:p-2 p-16">

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
            </div>

            <div className='sm:flex-col-reverse sm:gap-[30px] md:flex-col-reverse md:gap-[0px] flex items-center justify-center gap-[70px] w-full'>

              <div className="sm:mb-[30px] sm:w-full md:w-full col-span-6 w-1/2">
                <div className="sm:p-2 p-16">

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

              <div className="sm:w-full md:w-full lg:h-auto w-1/2">
                <div className='sm:ml-[0px]'>
                  <video height={0} width={600} className="py-3 md:w-full" alt="" autoPlay={true}
                    muted={true}
                    loop={true}
                    src="/assets/graphic-maker.mp4" type="video/webm" >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

            </div>

            <div className='sm:flex-col sm:gap-[30px] md:flex-col md:gap-[0px] flex items-center justify-center gap-[70px] w-full'>
              <div className="sm:w-full md:w-full lg:h-auto w-1/2">
                <div className='sm:ml-[0px]'>
                  <video height={0} width={600} className="py-3 sm:ml-0 md:w-full" alt="" autoPlay={true}
                    muted={true}
                    loop={true}
                    src="/assets/website-maker.mp4" type="video/webm" >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <div className="sm:mb-[30px] sm:w-full md:w-full col-span-6 w-1/2">
                <div className="sm:p-2 p-16">

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