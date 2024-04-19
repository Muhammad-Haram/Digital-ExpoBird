import React from 'react';
import Image from 'next/image';

const FeatureWork = () => {
  return (
    <>
      <div className="bg-[#000213] sm:w-full font-montserrat">
        <div className="xl:max-w-[1440px] mx-auto">
          <div className="p-[9rem] md:p-[3rem] lg:p-[7rem] sm:p-10">

            <div className="sm:grid-cols-1 md:grid md:grid-cols-1 grid grid-cols-2 items-center">
              <h6 className="sm:text-[30px] md:text-[60px] text-[70px] font-black lg:ml-[-20px] sm:text-center sm:mt-10 sm:mb-6 sm:space-x-10 sm:flex sm:items-center sm:m-auto text-[#FFFFFF] max-w-[400px]  leading-none sm:pb-20 md:pb-0 pb-24">
                Featured works
                <span>
                  <div className="sm:hidden ml-[0px] sm:right-[45px] right-[25px] sm:mt-[20px] md:ml-12 md:mt-4 ico animated">

                    <div className="circle circle-top"></div>
                    <div className="circle circle-main"></div>
                    <div className="circle circle-bottom"></div>
                    <svg className="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 612 612" xmlSpace="preserve">
                      <defs>
                        <clipPath id="cut-off-arrow">
                          <circle cx="306" cy="306" r="287" />
                        </clipPath>

                        <filter id="goo">
                          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                          <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                      </defs>
                      <path className="st-arrow" d="M317.5,487.6c0.3-0.3,0.4-0.7,0.7-1.1l112.6-112.6c6.3-6.3,6.3-16.5,0-22.7c-6.3-6.3-16.5-6.3-22.7,0
        l-86,86V136.1c0-8.9-7.3-16.2-16.2-16.2c-8.9,0-16.2,7.3-16.2,16.2v301.1l-86-86c-6.3-6.3-16.5-6.3-22.7,0
        c-6.3,6.3-6.3,16.5,0,22.7l112.7,112.7c0.3,0.3,0.4,0.7,0.7,1c0.5,0.5,1.2,0.5,1.7,0.9c1.7,1.4,3.6,2.3,5.6,2.9
        c0.8,0.2,1.5,0.4,2.3,0.4C308.8,492.6,313.8,491.3,317.5,487.6z" />
                    </svg>
                  </div>
                </span>
              </h6>
              <p className="sm:-mt-20 sm:text-center sm:text-[16px] text-[25px] text-white max-w-[450px] pb-24 sm:flex sm:items-center sm:m-auto">We are a team of design and research experts with over ten years of experience in improving businesses and peoples lives through smart design solutions</p>
            </div>

            <div className="sm:grid sm:grid-cols-2 grid grid-cols-2 gap-8">
              <div className="max-w-[605px]">
                <Image src={"/assets/work01.png"} width={350} height={0} className="rounded-[50px] sm:rounded-[20px]" alt="pic" />
                <p className="sm:text-center sm:ml-[0px] md:text-center md:ml-0 ml-[100px] sm:leading-none text-white sm:text-[20px] mt-8 font-montserrat text-[25px] font-semibold">Zorro University</p>
              </div>
              <div className="max-w-[605px] ml-auto">
                <Image src={"/assets/work02.png"} width={350} height={0} className="rounded-[50px] sm:rounded-[20px]" alt="pic" />
                <p className="sm:text-center sm:leading-none sm:text-[20px] text-white mt-8 font-montserrat text-[25px] font-semibold sm:ml-[0px] md:ml-[0px] md:text-center ml-[100px]">Gemmie Skin Care</p>
              </div>
              <div className="max-w-[605px]">
                <Image src={"/assets/work03.png"} width={350} height={0} className="rounded-[50px] sm:rounded-[20px]" alt="pic" />
                <p className="sm:text-center sm:text-[20px] text-white mt-8 font-montserrat text-[25px] font-semibold sm:ml-[0px] md:ml-0 md:text-center ml-[100px]">Doodle food</p>
              </div>
              <div className="max-w-[605px] ml-auto">
                <Image src={"/assets/work04.png"} width={350} height={0} className="rounded-[50px] sm:rounded-[20px]" alt="pic" />
                <p className="sm:text-center sm:text-[20px] text-white mt-8 font-montserrat text-[25px] font-semibold sm:ml-[0px] md:ml-0 md:text-center ml-[100px]">Doodle food</p>
              </div>
            </div>

            <div className='text-center'>
              <button className="text-white mb-10 mt-12 text-[17px] buttonv2 rounded-[70px] py-4 px-6 font-semibold">
                Hire Us{" "}
                <span>
                  <Image
                    src={"/assets/Send.svg"}
                    width={21}
                    height={20}
                    className="inline"
                    alt="pic"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureWork