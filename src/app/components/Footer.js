import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (

    <>
      <div className='w-full bg-[#E3204A] relative z-[-2] text-white pb-[50px] pt-[70px] p-[100px] box-border' >

        <div className=''>
          <h1 className='ml-[40px] mb-[40px] text-[#ffffff00] text-[80px] font-montserrat font-bold tracking-[2px]'
            style={{ WebkitTextStroke: "2px #9C9C9C" }}>Design.Build.Launch</h1>

          <div className='flex w-full items-center justify-between'>
            <div className='left'>
              <h2 className='text-white font-thin text-[30px] leading-8 mb-[20px]'>let's build <br /> <span className='font-bold'>something awesome</span></h2>
              <p className='mb-[20px]'>Reach out to our team and we'll get back to you within a day.</p>

              <div className='flex gap-[30px]'>
                <div className='line h-[5px] w-[70px] bg-white mt-[10px]'></div>
                <div className='flex flex-col'>
                  <p className='mb-[10px]'>Office M-13, The Curve Building, Sheikh Zayed Road, Dubai, UAE </p>
                  <a className='mb-[10px]' href="mailto:discover@digitalgravity.ae?subject=Hello DigitalGravity!"> discover@digitalgravity.ae</a>
                  <a className='mb-[10px]' href="tel:+97142421375" class="w-uline">+971 4 242 1375</a>
                  <a className='mb-[10px]' href="tel:+97142421375" class="w-uline">+971 4 242 1375</a>

                  <div className='flex items-center gap-[20px]'>
                    <Image src={"/assets/social/facebook.svg"} width={10} height={10} />
                    <Image src={"/assets/social/instagram.svg"} width={10} height={10} />
                    <Image src={"/assets/social/linkedin.svg"} width={10} height={10} />
                    <Image src={"/assets/social/x-white.svg"} width={10} height={10} />
                    <Image src={"/assets/social/youtube.svg"} width={10} height={10} />
                  </div>
                </div>
              </div>

            </div>

            <div className='right box-border flex gap-[50px]'>
              <div>
                <div className='flex items-center gap-[5px] mb-[30px]'>
                  <div className='h-[20px] w-[2px] bg-white'></div>
                  <p>Overveiw</p>
                </div>
                <p className='mb-[20px]'>About Us</p>
                <p className='mb-[20px]'>Services</p>
                <p className='mb-[20px]'>Case studies</p>
                <p className='mb-[20px]'>Partners</p>
                <p className='mb-[20px]'>Blog</p>
                <p className='mb-[20px]'>Terms and Condition</p>
                <p className='mb-[20px]'>Privacy Policy</p>
              </div>

              <div>
                <div className='flex items-center gap-[5px] mb-[30px]'>
                  <div className='h-[20px] w-[2px] bg-white'></div>
                  <p>Web Solutions</p>
                </div>
                <p className='mb-[20px]'>About Us</p>
                <p className='mb-[20px]'>Services</p>
                <p className='mb-[20px]'>Case studies</p>
                <p className='mb-[20px]'>Partners</p>
                <p className='mb-[20px]'>Blog</p>
                <p className='mb-[20px]'>Terms and Condition</p>
                <p className='mb-[20px]'>Privacy Policy</p>
              </div>

              <div>
                <div className='flex items-center gap-[5px] mb-[30px]'>
                  <div className='h-[20px] w-[2px] bg-white'></div>
                  <p>Digital Marketing Services</p>
                </div>
                <p className='mb-[20px]'>About Us</p>
                <p className='mb-[20px]'>Services</p>
                <p className='mb-[20px]'>Case studies</p>
                <p className='mb-[20px]'>Partners</p>
                <p className='mb-[20px]'>Blog</p>
                <p className='mb-[20px]'>Terms and Condition</p>
                <p className='mb-[20px]'>Privacy Policy</p>
              </div>
            </div>
          </div>

        </div>

        <div className='bg-[#363636] w-3/6 h-full absolute right-0 top-0 z-[-1]'></div>

      </div >
    </>

  )
}

export default Footer