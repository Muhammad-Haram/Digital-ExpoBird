import React, { Fragment } from 'react'
import Image from 'next/image'

const Driven = ({ para }) => {
  return (
    <Fragment>
      <div className="sm:px-5 font-montserrat bg-[#000213] lg:px-10 md:px-8 px-48 mb-24 lg:mb-10 md:text-center">
        <div className="md:justify-center flex items-center pt-20 sm:pt-5 lg:ml-[70px]">
          <div className='sm:w-[100%] flex items-center justify-center flex-col'>
            <p className="sm:text-[50px] text-[80px] lg:text-[80px] lg:font-black leading-none sm:text-center md:flex md:items-center md:m-auto mt-2 text-white sm:mt-6 font-black max-w-[750px] md:mb-10 md:mt-10">
              Data-Driven Revenue Marketing
            </p>
            <p className="sm:text-[16px] sm:px-2 sm:pr-[0px] sm:text-center sm:flex-wrap md:flex md:items-center md:m-auto lg:text-[20px] text-white text-2xl leading-none max-w-[820px] my-12 md:mb-10 md:mt-10">
              {para}
            </p>
            <form>
              <label className="sm:flex items-center justify-center flex-col block ">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="sm:mb-5 sm:min-w-[200px] md:min-w-[450px] rounded-[40px] bg-transparent outline-[#5D6BD9] outline outline-1 border-none py-4 px-9 min-w-[420px] placeholder:text-white placeholder:text-center text-base text-white md:items-center md:m-auto"
                />
                <button className="text-white sm:mt-[0px] sm:ml-[0px] sm:mb-[30px] mb-10 mt-[40px] text-[17px] lg:ml-[140px] buttonv2 rounded-[70px] py-4 px-6 font-semibold md:flex md:items-center md:m-auto md:mb-10 md:mt-10">
                  Contact Us{" "}
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
              </label>
            </form>
          </div>


















          <div>
            <Image className='sm:hidden md:hidden'
              src={"/assets/hero-image-expo.png"}
              width={800}
              height={750}
              alt=""
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Driven