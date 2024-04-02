import React, { Fragment } from 'react'
import Image from 'next/image'

const Driven2 = ({ para }) => {
  return (
   <Fragment>
     <div className="font-montserrat sm:-ml-[120px] sm:rounded-b-[10px] md:rounded-b-[10px] md:-ml-[120px] bg-[#000213] px-48 mb-24">
        <div className="flex items-center pt-20 sm:pt-5">
          <div>
            <p className="text-[85px] leading-none sm:text-center sm:text-[40px] mt-2 text-white sm:mt-6 font-black max-w-[750px]">
              Data-Driven Revenue Marketing
            </p>
            <p className="sm:text-[20px] sm:pr-[24px] sm:text-center  sm:flex-wrap text-white text-2xl leading-none max-w-[820px] my-12">
              {para}
            </p>
            <form>
              <label className="block ">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="sm:mb-5 sm:min-w-[300px] md:min-w-[390px] rounded-[40px] bg-transparent outline-[#5D6BD9] outline outline-1 border-none py-4 px-9 min-w-[420px] placeholder:text-white placeholder:text-center text-base text-white mr-8"
                />
                <button className="text-white sm:mt-[20px] sm:ml-[100px] sm:mb-[52px] mb-10 mt-[40px] text-[17px] bg-[#7B41F9] rounded-[70px] py-4 px-6 font-semibold">
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
            <Image 
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

export default Driven2