import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className="bg-[#000213] sm:text-center relative font-montserrat">
        <div className="xl:max-w-[1440px] mx-auto">
          <div className="px-24 sm:px-8">
            <div className="sm:grid sm:grid-cols-1 grid grid-cols-3">
              <div className="sm:border-none border-r-2 sm:py-10 border-[#FFFFFF] py-24 ">
                <p className="text-white sm:text-[20px] sm:leading-none sm:text-center sm:py-4 text-[24px] py-20">New York Division One World Trade Center New York, NY 10007</p>
                <div className="flex items-center">
                  <Link href="/">
                    <Image src={"/assets/media-link01.svg"} height={0} width={0} className="pr-10" alt="" />
                  </Link>
                  <Link href="/">
                    <Image src={"/assets/media-link02.svg"} height={0} width={0} className="pr-10" alt="" />
                  </Link>
                  <Link href="/">
                    <Image src={"/assets/media-link03.svg"} height={0} width={0} className="pr-10" alt="" />
                  </Link>
                  <Link href="/">
                    <Image src={"/assets/media-link04.svg"} height={0} width={0} className="" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 sm:py-0 py-24">
                <div className="sm:border-none border-b-2 border-[#FFFFFF] ">
                  <p className="text-[46px] sm:pl-0 sm:relative sm:text-center sm:text-[40px] text-white font-semibold leading-none pl-16">About us</p>
                  <p className="text-[24px] sm:pl-0 sm:relative sm:text-center sm:text-[20px] text-white max-w-[500px] sm:my-5 sm:leading-none my-10 pl-16">We are a team of design and research experts with over ten years of experience in improving businesses and peoples’ lives through smart design solutions</p>
                  <p className="sm:hidden footer-svg pl-44 relative text-[36px] text-white leading-none my-10 font-semibold">Send <br /> Proposal</p>
                </div>
                <div>
                  <h6 className="text-[46px] sm:pl-0 sm:relative sm:text-center sm:text-[40px] sm:hidden sm:font-black sm:py-10 text-white font-semibold leading-none pl-16 py-20">Services</h6>
                  <div className="sm:leading-none sm:gap-5 sm:pl-6 sm:text-center sm:grid sm:grid-cols-2 grid grid-cols-3 pl-16 md:grid md:grid-cols-2 md:text-center">
                  <Link href="/" className="sm:no-underline underline underline-offset-1 text-white py-2 text-[20px]">Web Development</Link>
                    <Link href="/" className="sm:no-underline underline underline-offset-1 text-white py-2 text-[20px]">amazon Service</Link>
                    <Link href="/" className="sm:no-underline underline underline-offset-1 text-white py-2 text-[20px]">Graphic Designing</Link>
                    <Link href="/" className="sm:no-underline underline underline-offset-1 text-white py-2 text-[20px]">Mobile App Development</Link>
                    <Link href="/" className="sm:no-underline underline underline-offset-1 text-white py-2 text-[20px]">UI/UX Design</Link>
                    <Link href="/" className="sm:no-underline underline underline-offset-1 text-white py-2 text-[20px]">Digital Marketing</Link>
                    <Link href="/" className="sm:no-underline underline underline-offset-1 text-white py-2 text-[20px]">Social Media Marketing</Link>
                    <Link href="/" className="sm:no-underline underline underline-offset-1 text-white py-2 text-[20px]">Search Engine Optimization</Link>
                  </div>            
                  <div className="sm:mb-10 sm:mt-5 sm:grid sm:relative sm:ml-6 sm:pl-0 sm:grid-cols-1 grid grid-cols-2 pl-16">
                    <div>
                      <h6 className="sm:text-[30px] sm:py-4 sm:font-bold sm:underline text-[46px] text-white font-semibold leading-none py-12">Call:</h6>
                      <label className="sm:no-underline underline underline-offset-1 text-white py-2 cursor-pointer text-[20px]">+92396797997</label>
                    </div>
                    <div>
                      <h6 className="sm:text-[30px] sm:py-4 sm:font-bold sm:underline  text-[46px] text-white font-semibold leading-none py-12">Email:</h6>
                      <label className="sm:no-underline underline underline-offset-1 text-white py-2 cursor-pointer text-[20px]">info@expobird.com</label>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer