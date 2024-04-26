import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Service = () => {
  return (
    <Fragment>
      <div className="bg-[#ffffff] overflow-x-hidden font-montserrat w-full">
        <div className="sm:p-[40px] md:pt-2 xl:px-10 px-10 relative z-10">
        <div className="p-10 sm:p-0">
          <h6 className="sm:text-[30px] md:text-[60px] text-[70px] font-black sm:text-center sm:ml-[5px] ml-[60px] text-black">Our Services</h6>
        </div>
          <div className="flex items-center justify-center flex-col">
            <div className='sm:flex-col sm:gap-[30px] md:flex-col md:gap-[0px] flex items-center justify-center gap-[70px] w-full'>
              <div className="sm:w-full md:w-full lg:h-auto w-1/2">
                <div className='sm:ml-[0px]'>
                  <Image src="/assets/services/Digital-Marketing-Services.png" height={700} width={700} className="py-3" alt="" />
                </div>
              </div>
              <div className="sm:mb-[30px] sm:w-full md:w-full col-span-6 w-1/2">
                <div className="sm:p-2 p-16">
                  <div className='flex justify-center'>
                    <div>
                      <p className="text-[25px] text-[#252E48] font-bold pl-5 md:text-center" data-inviewport >Digital Marketing</p>
                      <p className="sm:text-[13px] text-[18px] text-[#545F7E]  pl-5 py-3 md:text-center">
                        Ignite your online success with Digi Expo. As the best digital marketing agency in UAE, we will help to increase traffic, boost conversion rates, and maximize your business's revenue.</p>
                      <p className="text-[18px] text-[#252E48] font-medium  pl-5 py-3 md:text-center">Replaces: Your website subscription
                      </p>
                      <Link href="/services/web">
                        <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold">
                          See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-white shadow-xl p-4 rounded-xl">
                  </div>
                </div>
              </div>
            </div>

            <div className='sm:flex-col-reverse sm:gap-[30px] md:flex-col-reverse md:gap-[0px] flex items-center justify-center gap-[70px] w-full'>
              <div className="sm:mb-[30px] sm:w-full md:w-full col-span-6 w-1/2">
                <div className="sm:p-2 p-16">
                  <div className='flex justify-center'>
                    <div>
                      <p className="text-[25px] text-[#252E48] font-bold pl-5 md:text-center" data-inviewport >Website Development</p>
                      <p className="sm:text-[13px] text-[18px] text-[#545F7E]  pl-5 py-3 md:text-center">Bring the digital vision of your brand to life with a user-friendly, and responsive website. Our professional web developers are there to bring your vision to fruition.</p>
                      <p className="text-[18px] text-[#252E48] font-medium  pl-5 py-3 md:text-center">Replaces: Your website subscription
                      </p>
                      <Link href="/services/web">
                        <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold">
                          See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-white shadow-xl p-4 rounded-xl">
                  </div>
                </div>
              </div>
              <div className="sm:w-full md:w-full lg:h-auto w-1/2">
                <div className='sm:ml-[0px]'>
                  <Image src="/assets/services/Web-Design-&-Development-Services.jpg" height={700} width={700} className="py-3" alt="" />
                </div>
              </div>
            </div>



            <div className='sm:flex-col sm:gap-[30px] md:flex-col md:gap-[0px] flex items-center justify-center gap-[70px] w-full'>
              <div className="sm:w-full md:w-full lg:h-auto w-1/2">
                <div className='sm:ml-[0px]'>
                  <Image src="/assets/services/UI-UX-Design-Services.png" height={700} width={700} className="py-3" alt="" />
                </div>
              </div>
              <div className="sm:mb-[30px] sm:w-full md:w-full col-span-6 w-1/2">
                <div className="sm:p-2 p-16">
                  <div className='flex justify-center'>
                    <div>
                      <p className="text-[25px] text-[#252E48] font-bold pl-5 md:text-center" data-inviewport >Social Media Marketing</p>
                      <p className="sm:text-[13px] text-[18px] text-[#545F7E] pl-5 py-3 md:text-center">We will help you to increase your brand's visibility, engagement, and business growth with our expert social media marketers. We will take your brand to new heights in the digital competition.</p>
                      <p className="text-[18px] text-[#252E48] font-medium pl-5 py-3 md:text-center">Replaces: Your website subscription
                      </p>
                      <Link href="/services/web">
                        <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold">
                          See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-white shadow-xl p-4 rounded-xl">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='sm:flex-col-reverse sm:gap-[30px] md:flex-col-reverse md:gap-[0px] flex items-center justify-center gap-[70px] w-full'>
          <div className="sm:mb-[30px] sm:w-full md:w-full col-span-6 w-1/2">
            <div className="sm:p-2 p-16">
              <div className='flex justify-center'>
                <div>
                  <p className="text-[25px] text-[#252E48] font-bold pl-5 md:text-center" data-inviewport >Ui/Ux Designing</p>
                  <p className="sm:text-[13px] text-[18px] text-[#545F7E]  pl-5 py-3 md:text-center">With our professional team of UX/UI designers, we deliver innovative and user-centric solutions that are functional, accessible, and intuitive to grow your business forward. </p>
                  <p className="text-[18px] text-[#252E48] font-medium  pl-5 py-3 md:text-center">Replaces: Your website subscription
                  </p>
                  <Link href="/services/web">
                    <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="bg-white shadow-xl p-4 rounded-xl">
              </div>
            </div>
          </div>
          <div className="sm:w-full md:w-full lg:h-auto w-1/2">
            <div className='sm:ml-[0px]'>
              <Image src="/assets/services/UI-UX--Services.png" height={700} width={700} className="py-3" alt="" />
            </div>
          </div>
        </div>

        <div className='sm:flex-col sm:gap-[30px] md:flex-col md:gap-[0px] flex items-center justify-center gap-[70px] w-full'>
          <div className="sm:w-full md:w-full lg:h-auto w-1/2">
            <div className='sm:ml-[0px]'>
              <Image src="/assets/services/Application-Development Services.png" height={700} width={700} className="py-3" alt="" />
            </div>
          </div>
          <div className="sm:mb-[30px] sm:w-full md:w-full col-span-6 w-1/2">
            <div className="sm:p-2 p-16">
              <div className='flex justify-center'>
                <div>
                  <p className="text-[25px] text-[#252E48] font-bold pl-5 md:text-center" data-inviewport >Mobile Development</p>
                  <p className="sm:text-[13px] text-[18px] text-[#545F7E]  pl-5 py-3 md:text-center">Do you want a mobile application that helps you reach your target audience and increase engagement? Digi Expo offers end-to-end app development solutions that cater to your business needs.</p>
                  <p className="text-[18px] text-[#252E48] font-medium  pl-5 py-3 md:text-center">Replaces: Your website subscription
                  </p>
                  <Link href="/services/web">
                    <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="bg-white shadow-xl p-4 rounded-xl">
              </div>
            </div>
          </div>
        </div>

        <div className='sm:flex-col-reverse sm:gap-[30px] md:flex-col-reverse md:gap-[0px] flex items-center justify-center gap-[70px] w-full'>
          <div className="sm:mb-[30px] sm:w-full md:w-full col-span-6 w-1/2">
            <div className="sm:p-2 p-16">
              <div className='flex justify-center'>
                <div>
                  <p className="text-[25px] text-[#252E48] font-bold pl-5 md:text-center" data-inviewport >Amazon Service</p>
                  <p className="sm:text-[13px] text-[18px] text-[#545F7E]  pl-5 py-3 md:text-center">We are a reputable company that offers Amazon services and will help you maneuver the time-consuming and challenging steps of Amazon's platform and drive results for your business. </p>
                  <p className="text-[18px] text-[#252E48] font-medium  pl-5 py-3 md:text-center">Replaces: Your website subscription
                  </p>
                  <Link href="/services/web">
                    <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="bg-white shadow-xl p-4 rounded-xl">
              </div>
            </div>
          </div>
          <div className="sm:w-full md:w-full lg:h-auto w-1/2">
            <div className='sm:ml-[0px]'>
              <Image src="/assets/services/Digital-Branding-and-Communication.png" height={700} width={700} className="py-3" alt="" />
            </div>
          </div>
        </div>


        <div className='sm:flex-col sm:gap-[30px] md:flex-col md:gap-[0px] flex items-center justify-center gap-[70px] w-full'>
          <div className="sm:w-full md:w-full lg:h-auto w-1/2">
            <div className='sm:ml-[0px]'>
              <div className='sm:ml-[0px]'>
                <Image src="/assets/services/Video-Production-Services.png" height={700} width={700} className="py-3" alt="" />
              </div>
            </div>
          </div>
          <div className="sm:mb-[30px] sm:w-full md:w-full col-span-6 w-1/2">
            <div className="sm:p-2 p-16">
              <div className='flex justify-center'>
                <div>
                  <p className="text-[25px] text-[#252E48] font-bold pl-5 md:text-center" data-inviewport >Graphic Designing</p>
                  <p className="sm:text-[13px] text-[18px] text-[#545F7E]  pl-5 py-3 md:text-center">Digi Expo would be your perfect partner to bring your brand into focus. Our creative design team specializes in creating engaging and visually staggering content that captivates and entertains.</p>
                  <p className="text-[18px] text-[#252E48] font-medium  pl-5 py-3 md:text-center">Replaces: Your website subscription
                  </p>
                  <Link href="/services/web">
                    <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="bg-white shadow-xl p-4 rounded-xl">
              </div>
            </div>
          </div>
        </div>

        <div className='sm:flex-col-reverse sm:gap-[30px] md:flex-col-reverse md:gap-[0px] flex items-center justify-center gap-[70px] w-full'>
          <div className="sm:mb-[30px] sm:w-full md:w-full col-span-6 w-1/2">
            <div className="sm:p-2 p-16">
              <div className='flex justify-center'>
                <div>
                </div>
                <div>
                  <p className="text-[25px] text-[#252E48] font-bold pl-5 md:text-center" data-inviewport >
                    Search Engine Optimization
                  </p>
                  <p className="sm:text-[13px] text-[18px] text-[#545F7E]  pl-5 py-3 md:text-center">Are you interested in enhancing your online presence and driving more traffic to your website and business? Look no further because the experts at Digi Expo know how to get better results for business through our technical SEO and content creation.</p>
                  <p className="text-[18px] text-[#252E48] font-medium pl-5 py-3 md:text-center">Replaces: Your website subscription
                  </p>
                  <Link href="/services/web">
                    <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="bg-white shadow-xl p-4 rounded-xl">
              </div>
            </div>
          </div>
          <div className="sm:w-full md:w-full lg:h-auto w-1/2">
            <div className='sm:ml-[0px]'>
              <Image src="/assets/services/Animation-Services.png" height={700} width={700} className="py-3" alt="" />
            </div>
          </div>
        </div>
      </div>

      <Link href="/services/digital">
        <button className="buttonv2 mb-10 flex items-center m-auto justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold md:flex md:items-left md:mx-auto">
          Get Started<span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
        </button>
      </Link>

    </Fragment>
  )
}

export default Service