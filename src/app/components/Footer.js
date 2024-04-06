import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (

    <>
      <div className='sm:pb-[20px] font-montserrat sm:pt-[20px] sm:px-[20px] md:pb-[30px] md:pt-[30px] md:px-[30px] lg:pb-[40px] lg:pt-[50px] lg:px-[50px]  w-full bg-[#000213] #000213 relative z-[-2] text-white pb-[50px] pt-[70px] p-[100px] box-border' >

        <div className=''>
          <h1 className='font-montserrat sm:text-[30px] md:text-[60px] text-[70px] font-black sm:mb-[20px] sm:ml-0 md:ml-0 lg:text-[40px] lg:ml-0 ml-[40px] mb-[40px] text-[#ffffff00] tracking-[1px]'
            style={{ WebkitTextStroke: "1px #9C9C9C" }}>Design.Build.Launch</h1>

          <div className='sm:items-start sm:flex-col sm:gap-[40px] md:flex-col md:items-start md:gap-[40px] lg:items-start lg:gap-[40px] flex w-full items-center justify-between'>
            <div className='left'>
              <h2 className='sm:leading-10 text-white font-thin text-[30px] leading-[42px] mb-[20px]'>let's build <br /> <span className='font-bold'>something awesome</span></h2>
              <p className='sm:mb-[10px] mb-[20px]'>Reach out to our team and we'll get back to you within a day.</p>

              <div className='sm:gap-[15px] font-montserrat flex gap-[30px]'>
                <div className='sm:mt-[5px] line h-[2px] w-[70px] bg-white mt-[10px]'></div>
                <div className='flex flex-col'>
                  <p className='sm:mb-[5px] mb-[10px] sm:text-[16px] text-[18px]'>Office M-13, The Curve Building, Sheikh Zayed Road, Dubai, UAE </p>
                  <a className='mb-[10px] sm:text-[16px] text-[18px]' href="mailto:discover@digitalgravity.ae?subject=Hello DigitalGravity!"> discover@digitalgravity.ae</a>
                  <a className='mb-[10px] sm:text-[16px] text-[18px]' href="tel:+97142421375" class="w-uline">+971 4 242 1375</a>
                  <a className='mb-[10px] sm:text-[16px] text-[18px]' href="tel:+97142421375" class="w-uline">+971 4 242 1375</a>

                  <div className='flex items-center gap-[20px]'>
                    <Image src={"/assets/social/facebook.svg"} width={10} height={10} />
                    <Image src={"/assets/social/instagram.svg"} width={20} height={20} />
                    <Image src={"/assets/social/linkedin.svg"} width={20} height={20} />
                    <Image src={"/assets/social/x-white.svg"} width={20} height={20} />
                    <Image src={"/assets/social/youtube.svg"} width={20} height={20} />
                  </div>
                </div>
              </div>

            </div>

            <div className='right sm:gap-[30px] md:justify-between md:w-full box-border flex gap-[50px]'>

              <div>
                <div className='sm:mb-[20px] flex items-center gap-[10px] mb-[30px]'>
                  <div className='sm:hidden h-[20px] w-[2px] bg-white'></div>
                  <p className='font-bold'>Overview</p>
                </div>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>About Us</p>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>Services</p>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>Case studies</p>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>Partners</p>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>Blog</p>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>Terms and Condition</p>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>Privacy Policy</p>
              </div>

              <div>
                <div className='sm:mb-[20px] flex items-center gap-[10px] mb-[30px]'>
                  <div className='sm:hidden h-[20px] w-[2px] bg-white'></div>
                  <p className='font-bold'>Web Solution</p>
                </div>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>About Us</p>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>Services</p>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>Case studies</p>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>Partners</p>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>Blog</p>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>Terms and Condition</p>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>Privacy Policy</p>
              </div>

              <div>
                <div className='sm:mb-[20px] flex items-center gap-[10px] mb-[30px]'>
                  <div className='sm:hidden h-[20px] w-[2px] bg-white'></div>
                  <p className='font-bold'>Digital Marketing Services</p>
                </div>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>About Us</p>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>Services</p>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>Case studies</p>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>Partners</p>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>Blog</p>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>Terms and Condition</p>
                <p className='mb-[10px] text-[18px] sm:text-[16px]'>Privacy Policy</p>
              </div>

            </div>

          </div>

        </div>

        <div className='lg:hidden md:hidden sm:hidden bg-[#000213] #6e2bff w-3/6 h-full absolute right-0 top-0 z-[-1]'></div>

      </div >
    </>

  )
}

export default Footer