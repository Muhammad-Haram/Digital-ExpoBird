import React, { Fragment } from 'react'
import Image from 'next/image';
import Script from 'next/script';

const HouseTechnology = () => {

  return (
    <Fragment>
      <Script
        src="/scripts/script-2.js"
        strategy="lazyOnload"
      ></Script>
      <div className='font-montserrat md:hidden'>
        <div className="bg-[#000213] sm:grid sm:px-2 sm:grid-cols-1 grid grid-cols-2 items-center lg:px-10 gap-x-24 px-48">
          <div>
            <p className="sm:text-[40px] lg:text-[85px] sm:text-center sm:mt-[40px] mt-[60px] sm:ml-[15px] md:text-[50px] text-[85px] text-white font-bold leading-none">
              In House Technology
            </p>
            <p className="sm:text-[16px] lg:text-[17px] sm:text-center text-2xl sm:ml-[15px] text-white mt-11">
              Choose Expobird as your digital marketing agency and propel your
              business to new heights with our award-winning digital marketing
              services and proprietary technology platform.
            </p>
          </div>
          <div>
            <Image
              src={"/assets/benefits.webp.png"}
              width={749}
              height={598}
              alt="pic"
              className=" sideChangeImage sm:hidden mt-20 sm:h-300 sm:w-300"
            />
          </div>
        </div>
        <div className="sm:pt-20  technology-gradient pt-96">
          <div className="sm:grid sm:grid-cols-1 sm:gap-x-6 sm:px-10 grid grid-cols-2 items-center gap-x-24 px-48">
            <div>
              <Image
                src={"/assets/benefits.webp.png"}
                width={749}
                height={598}
                alt="pic"
                className='md:hidden lg:hidden 2xl:hidden xl:hidden'
              />
            </div>
            <div>
              <p className=" sm:text-[30px] mt-[40px] lg:text-[60px] sm:text-center text-[80px] text-white font-bold leading-none">
                In House Technology
              </p>
              <p className="sm:text-[16px] lg:text-[20px] sm:text-center text-2xl text-white mt-11">
                Choose Expobird as your digital marketing agency and propel your
                business to new heights with our award-winning digital marketing
                services and proprietary technology platform.
              </p>
            </div>
          </div>
          <div className="max-w-[1200px] mx-auto mt-[30px]">
            <p className="sm:text-[30px] lg:text-[50px] text-[80px] font-black text-white text-center">
              Get Free Seo{" "}
              <span className="underlined-svg relative">Audit</span>
            </p>
            <p className="sm:text-[16px] lg:text-[20px] text-2xl p-1 text-white text-center">
              Choose Expobird as your digital marketing agency and propel your
              business to new heights with our award-winning digital marketing
              services and proprietary technology platform.
            </p>
            <form className="pt-[40px] sm:pb-[50px] pb-[70px] text-center">
              <label className="block">
                <input
                  type="email"
                  placeholder="Enter your site here"
                  className="sm:min-w-[200px] sm:mr-0 lg:min-w-[300px] sm:mb-5 sm:ml-0 rounded-[40px] bg-transparent outline-[#5D6BD9] outline outline-1 border-none py-4 px-9 min-w-[840px] placeholder:text-white placeholder:text-center text-base text-white mr-8"
                />
                <button className="text-white text-[20px] lg:mt-10 sm:mt-[15px] bg-[#7B41F9] rounded-[70px] py-4 px-6 font-semibold">
                  Get A proposal{" "}
                  <span>
                    <Image
                      src={"/assets/Send.svg"}
                      width={21}
                      height={20}
                      className="inline invert brightness-0"
                      alt="pic"
                    />
                  </span>
                </button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default HouseTechnology