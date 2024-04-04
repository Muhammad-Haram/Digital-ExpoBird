import React from 'react'
// import facebook from "../../../public/assets/social/facebook.svg"

const Footer = () => {
  return (

    <>
      <div className='w-full font-montserrat bg-[#E3204A] relative z-[-2] text-white pb-[50px] pt-[70px] p-[100px]' >

        <div className=''>
          <h1 className='ml-[40px] mb-[40px] text-[#ffffff00] text-[80px] font-montserrat font-bold tracking-[2px]'
            style={{ WebkitTextStroke: "2px #9C9C9C" }}>Design.Build.Launch</h1>

          <div className=''>
            <h2 className='text-white font-thin text-[30px] leading-8 mb-[20px]'>let's build <br /> <span className='font-bold'>something awesome</span></h2>
            <p className='mb-[20px]'>Reach out to our team and we'll get back to you within a day.</p>

            <div className='flex gap-[30px]'>
              <div className='line h-[5px] w-[70px] bg-white mt-[10px]'></div>
              <div className='flex flex-col'>
                <p>Office M-13, The Curve Building, Sheikh Zayed Road, Dubai, UAE </p>
                <a href="mailto:discover@digitalgravity.ae?subject=Hello DigitalGravity!" class="w-uline"> discover@digitalgravity.ae</a>
                <a href="tel:+97142421375" class="w-uline">+971 4 242 1375</a>
                <a href="tel:+97142421375" class="w-uline">+971 4 242 1375</a>
                {/* <img src={facebook} /> */}
                <div className='flex items-center gap-[20px]'>

                </div>
              </div>
            </div>

          </div>

          <div className=''>

          </div>

        </div>

        <div className='bg-[#363636] w-3/6 h-full absolute right-0 top-0 z-[-1]'></div>

      </div >
    </>

  )
}

export default Footer