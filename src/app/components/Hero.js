import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <div className="sm:pt-[30px] sm:px-[4rem] md:pt-[10px] sm:relative sm:z-10 px-24 flex items-center font-montserrat justify-center relative">
        <div className="w-full">
          <section className="py-24 sm:py-0 md:py-30 w-full sm flex items-center justify-center">
            <div className="text-center">
              <h6 className="sm:text-[30px] md:text-[60px] text-[70px] font-black sm:leading-tight lg:text-[60px] inline text-white"><span className="text-[#7B41F9]">I</span>nnovate, <span className="text-[#7B41F9]">E</span>ngage, <span className="text-[#7B41F9]">S</span>ucceed
              </h6>
              <div className="sm:pb-[15px] mt-[24px] sm:mt-[20px] md:text-[30px] rotating-words text-center relative">
                <span className="sm:text-[30px] md:text-[30px] lg:text-[45px] block text-[42px] text-white font-black bg-[#7B41F9] rounded-[60px] left-1/2 -translate-x-2/4 px-8 md:px-10 md:mb-[20px]">Search Engine <br />Optimization</span>
                <span className="sm:text-[30px] md:text-[30px] lg:text-[45px] block text-[42px] text-white font-black bg-[#7B41F9] rounded-[60px] left-1/2 -translate-x-2/4 px-8 md:px-10 md:mb-10">Mobile App Development</span>
                <span className="sm:text-[30px] md:text-[30px] lg:text-[45px] block text-[42px] text-white font-black bg-[#7B41F9] rounded-[60px] left-1/2 -translate-x-2/4 px-8 md:px-10 md:mb-10">Website Development</span>
                <span className="sm:text-[30px] md:text-[30px] 458*530 block text-[42px] text-white font-black lg:text-[45px] bg-[#7B41F9] rounded-[60px] left-1/2 -translate-x-2/4 px-8 md:px-10 md:mb-10">ECommerce Shoot</span>
                <span className="sm:text-[30px] md:text-[30px] block text-[42px] text-white font-black bg-[#7B41F9] rounded-[60px] lg:text-[45px] left-1/2 -translate-x-2/4 px-8 md:px-10 md:mb-10">Marketing Automation</span>
              </div>
              <p className="sm:text-[16px] mb-5 sm:leading-[25px] md:text-[20px] max-w-[720px] mx-auto text-[25px] leading-none text-white mt-10 sm:mt-5">Your Goal, Our Expertise. DigiExpo helps you grow your brand with a proven record of successful case studies</p>
              <button className="buttonv2  justify-end px-6 py-4 rounded-[40px] text-white text-[17px] font-semibold">
                Let’s Talk <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
              </button>
              <div className="sm:ml-[20px] sm:mb-[40px] sm:mt-[40px] md:mt-10 mx-auto mt-10 ">
                <div className="gap-20 sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-3 sm:flex-wrap  md:grid md:grid-cols-3 sm:gap-10 flex items-center justify-center">
                  <Image src={"/assets/partner05.png"} height={25} width={150} alt="pic" />
                  <Image src={"/assets/partner02.png"} height={25} width={89} alt="pic" />
                  <Image src={"/assets/partner06.png"} height={35} width={119} alt="pic" />
                  <Image src={"/assets/partner01.png"} height={31} width={124} alt="pic" />
                  <Image src={"/assets/partner01.png"} height={32} width={125} alt="pic" />
                  <Image src={"/assets/partner03.png"} height={33} width={126} alt="pic" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Hero