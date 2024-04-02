import React, { Fragment } from 'react'
import Image from 'next/image'

const Driven = ({ para }) => {
  return (
   <Fragment>
     <div className="font-montserrat sm:-ml-[50px] sm:rounded-b-[10px] md:rounded-b-[10px] bg-[#000213] lg:px-10 md:px-20 px-48 mb-24 lg:mb-10 md:text-center">
        <div className="flex items-center pt-20 sm:pt-5 lg:ml-[70px]">
          <div>
            <p className="text-[80px] lg:text-[80px] lg:font-black leading-none sm:text-center md:flex md:items-center md:m-auto sm:text-[60px] mt-2 text-white sm:mt-6 font-black max-w-[750px] md:mb-10 md:mt-10">
              Data-Driven Revenue Marketing
            </p>
            <p className="sm:text-[20px] sm:pr-[24px] sm:text-center sm:flex-wrap md:flex md:items-center md:m-auto lg:text-[20px] text-white text-2xl leading-none max-w-[820px] my-12 md:mb-10 md:mt-10">
              {para}
            </p>
            <form>
              <label className="block ">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="sm:mb-5 md:ml-12 sm:min-w-[300px] md:min-w-[450px] rounded-[40px] bg-transparent outline-[#5D6BD9] outline outline-1 border-none py-4 px-9 min-w-[420px] placeholder:text-white placeholder:text-center text-base text-white mr-8 md:items-center md:m-auto"
                />
                <button className="text-white sm:mt-[20px] sm:ml-[100px] sm:mb-[52px] mb-10 mt-[40px] text-[17px] lg:ml-[140px] buttonv2 rounded-[70px] py-4 px-6 font-semibold md:flex md:items-center md:m-auto md:mb-10 md:mt-10">
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
            <Image  className='sm:hidden md:hidden' 
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