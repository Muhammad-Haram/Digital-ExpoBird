"use client"
import React, { Fragment } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';

const Tab = () => {
  useEffect(() => {
    document.getElementById('tab1').checked = true;
  }, []);
  return (
    <Fragment>
      <div className=" mt-[50px] bg-[#000213] font-montserrat sm:px-5 xl:px-0 px-0 relative z-10">
        <div className=" md:mb-0 md:py-[1rem] py-[3rem] sm:py-[1rem] mb-10">

          <h6 className="sm:text-[30px] md:text-[60px] text-[80px] font-black mt-[30px] sm:text-center sm:mt-[0px] sm:ml-[5px] ml-[60px] lg:text-[60px] sm:font-extrabold text-[#fff]">                Featured works
          </h6>

          <div className="sm:hidden ml-[0px] sm:right-[45px] right-[25px] sm:mt-[20px] md:ml-12 md:mt-4 ico animated">

            <div className="circle circle-top"></div>
            <div className="circle circle-main"></div>
            <div className="circle circle-bottom"></div>
            <svg className="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 612 612" xmlSpace="preserve">
              <defs>
                <clipPath id="cut-off-arrow">
                  <circle cx="306" cy="306" r="287" />
                </clipPath>

                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
              <path className="st-arrow" d="M317.5,487.6c0.3-0.3,0.4-0.7,0.7-1.1l112.6-112.6c6.3-6.3,6.3-16.5,0-22.7c-6.3-6.3-16.5-6.3-22.7,0
        l-86,86V136.1c0-8.9-7.3-16.2-16.2-16.2c-8.9,0-16.2,7.3-16.2,16.2v301.1l-86-86c-6.3-6.3-16.5-6.3-22.7,0
        c-6.3,6.3-6.3,16.5,0,22.7l112.7,112.7c0.3,0.3,0.4,0.7,0.7,1c0.5,0.5,1.2,0.5,1.7,0.9c1.7,1.4,3.6,2.3,5.6,2.9
        c0.8,0.2,1.5,0.4,2.3,0.4C308.8,492.6,313.8,491.3,317.5,487.6z" />
            </svg>
          </div>

        </div>

        <div className=" tabs bg-transparent sm:w-[100%] w-[90%] min-w-[240px] md:h-[700px] first-letter: sm:h-[600px] h-[950px] sm:p-0 p-12 relative left-[50%] -translate-x-2/4">
          <input type="radio" id="tab1" name="tab-control" />
          <input type="radio" id="tab2" name="tab-control" />
          <input type="radio" id="tab3" name="tab-control" />
          <input type="radio" id="tab4" name="tab-control" />
          <input type="radio" id="tab5" name="tab-control" />
          <input type="radio" id="tab6" name="tab-control" />
          <ul className="w-full flex sm:gap-[6px] flex-row mb-[5px] pl-0 justify-between items-end flex-wrap list-none">
            <li className="box-border flex-1 text-center px-2.5">
              <label
                htmlFor="tab1"
                role="button"
                className="text-white sm:font-[12px] hover:text-[#252E48] transition ease-in-out select-none cursor-pointer block truncate text-medium sm:text-[16px] text-[17px]"
              >
                Videos
              </label>
            </li>
            <li className="box-border flex-1 text-center px-2.5">
              <label
                htmlFor="tab2"
                role="button"
                className="text-white hover:text-yellow-500 transition ease-in-out select-none cursor-pointer block truncate text-medium sm:text-[16px] text-[17px]"
              >
                Logo
              </label>
            </li>
            <li className="box-border flex-1 text-center px-2.5">
              <label
                htmlFor="tab3"
                role="button"
                className="text-white hover:text-pink-700 transition ease-in-out select-none cursor-pointer block truncate text-medium sm:text-[16px] text-[17px]"
              >
                Mockups
              </label>
            </li>
            <li className="box-border flex-1 text-center px-2.5">
              <label
                htmlFor="tab4"
                role="button"
                className="text-white hover:text-purple-700 transition ease-in-out select-none cursor-pointer block truncate text-medium sm:text-[16px] text-[17px]"
              >
                Websites
              </label>
            </li>
            <li className="box-border flex-1 text-center px-2.5">
              <label
                htmlFor="tab5"
                role="button"
                className="text-white hover:text-yellow-600 transition ease-in-out select-none cursor-pointer block truncate text-medium sm:text-[16px] text-[17px]"
              >
                Presentations
              </label>
            </li>
            <li className="box-border flex-1 text-center px-2.5">
              <label
                htmlFor="tab6"
                role="button"
                className="text-white hover:text-pink-500 transition ease-in-out select-none cursor-pointer block truncate text-medium sm:text-[16px] text-[17px]"
              >
                Graphics
              </label>
            </li>
          </ul>
          <div className="sm:mt-5 sm:mb-10 slider relative transition w-[16.667%]">
            <div className="sm:hidden indicator relative max-w-[100%] my-0 mx-auto bg-[#00A256] w-[50px] h-[4px] rounded-sm"></div>
          </div>
          <div className="content mt-[30px]">

            <section className="sm:gap-[48px] flex-row justify-around sm:justify-evenly">
              <div className='gap-[30px] box-border'>

                <div className='flex justify-start gap-5 sm:mb-[4rem] sm:mt-[40px] mb-10'>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/3d_explainer_video_toolkit.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px] sm:hidden'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/factory-of-3d-animations.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/trendy_typography_pack.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                <div className='flex justify-start gap-5 mb-10'>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/album_promo_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px] sm:hidden'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/whiteboard_animation_toolkit.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/trendy_explainer_toolkit.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                <div className='flex justify-start gap-5 sm:hidden'>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/album_promo_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>


                  </div>

                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px] sm:hidden'>


                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/luminous_neon_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>


                  </div>

                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>


                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/album_promo_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>


                  </div>



                  {/* <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/album_promo_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/trendy_explainer_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  /> 
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/informative_social_pack.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  /> 
                  <Image className=' rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/luminous_neon_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  /> */}
                </div>
              </div>
            </section>

            <section className="sm:gap-[48px] flex-row justify-around sm:justify-evenly">
              <div className='gap-[30px] box-border'>

                <div className='flex justify-start gap-5 sm:mb-[4rem] sm:mt-[40px] mb-10'>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/3d_explainer_video_toolkit.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px] sm:hidden'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/factory-of-3d-animations.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/trendy_typography_pack.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                <div className='flex justify-start gap-5 mb-10'>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/album_promo_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px] sm:hidden'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/whiteboard_animation_toolkit.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/trendy_explainer_toolkit.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                <div className='flex justify-start gap-5 sm:hidden'>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/album_promo_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>


                  </div>

                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px] sm:hidden'>


                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/luminous_neon_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>


                  </div>

                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>


                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/album_promo_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>


                  </div>



                  {/* <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/album_promo_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/trendy_explainer_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  /> 
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/informative_social_pack.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  /> 
                  <Image className=' rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/luminous_neon_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  /> */}
                </div>
              </div>
            </section>

            <section className="sm:gap-[48px] flex-row justify-around sm:justify-evenly">
              <div className='gap-[30px] box-border'>

                <div className='flex justify-start gap-5 sm:mb-[4rem] sm:mt-[40px] mb-10'>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/3d_explainer_video_toolkit.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px] sm:hidden'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/factory-of-3d-animations.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/trendy_typography_pack.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                <div className='flex justify-start gap-5 mb-10'>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/album_promo_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px] sm:hidden'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/whiteboard_animation_toolkit.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/trendy_explainer_toolkit.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                <div className='flex justify-start gap-5 sm:hidden'>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/album_promo_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>


                  </div>

                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px] sm:hidden'>


                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/luminous_neon_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>


                  </div>

                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>


                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/album_promo_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>


                  </div>



                  {/* <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/album_promo_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/trendy_explainer_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  /> 
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/informative_social_pack.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  /> 
                  <Image className=' rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/luminous_neon_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  /> */}
                </div>
              </div>
            </section>

            <section className="sm:gap-[48px] flex-row justify-around sm:justify-evenly">
              <div className='gap-[30px] box-border'>

                <div className='flex justify-start gap-5 sm:mb-[4rem] sm:mt-[40px] mb-10'>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/3d_explainer_video_toolkit.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px] sm:hidden'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/factory-of-3d-animations.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/trendy_typography_pack.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                <div className='flex justify-start gap-5 mb-10'>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/album_promo_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px] sm:hidden'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/whiteboard_animation_toolkit.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/trendy_explainer_toolkit.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                <div className='flex justify-start gap-5 sm:hidden'>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/album_promo_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>


                  </div>

                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px] sm:hidden'>


                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/luminous_neon_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>


                  </div>

                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>


                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/album_promo_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>


                  </div>



                  {/* <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/album_promo_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/trendy_explainer_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  /> 
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/informative_social_pack.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  /> 
                  <Image className=' rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/luminous_neon_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  /> */}
                </div>
              </div>
            </section>

            <section className="sm:gap-[48px] flex-row justify-around sm:justify-evenly">
              <div className='gap-[30px] box-border'>

                <div className='flex justify-start gap-5 sm:mb-[4rem] sm:mt-[40px] mb-10'>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/3d_explainer_video_toolkit.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px] sm:hidden'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/factory-of-3d-animations.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/trendy_typography_pack.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                <div className='flex justify-start gap-5 mb-10'>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/album_promo_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px] sm:hidden'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/whiteboard_animation_toolkit.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/trendy_explainer_toolkit.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                <div className='flex justify-start gap-5 sm:hidden'>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/album_promo_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>


                  </div>

                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px] sm:hidden'>


                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/luminous_neon_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>


                  </div>

                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>


                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/album_promo_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>


                  </div>



                  {/* <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/album_promo_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/trendy_explainer_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  /> 
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/informative_social_pack.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  /> 
                  <Image className=' rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/luminous_neon_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  /> */}
                </div>
              </div>
            </section>

            <section className="sm:gap-[48px] flex-row justify-around sm:justify-evenly">
              <div className='gap-[30px] box-border'>

                <div className='flex justify-start gap-5 sm:mb-[4rem] sm:mt-[40px] mb-10'>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/3d_explainer_video_toolkit.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px] sm:hidden'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/factory-of-3d-animations.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/trendy_typography_pack.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                <div className='flex justify-start gap-5 mb-10'>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/album_promo_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px] sm:hidden'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/whiteboard_animation_toolkit.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/trendy_explainer_toolkit.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />
                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                <div className='flex justify-start gap-5 sm:hidden'>
                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>
                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/album_promo_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>


                  </div>

                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px] sm:hidden'>


                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/luminous_neon_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>


                  </div>

                  <div className='relative w-full h-full rounded-3xl overflow-hidden hover:scale-105 transition-all cursor-pointer border-[#000213] border-0 hover:border-[6px]'>


                    <Image className='w-full h-[100%] hover:cursor-pointer rounded-lg sm:max-w-[100%] max-w-[100%]'
                      src={"/assets/tabs/album_promo_visualizer.jpg"}
                      width={400}
                      height={400}
                      alt="pic"
                    />

                    <video className='w-[100%] absolute top-0 left-0 bottom-0 right-0 scale-125 opacity-0 hover:opacity-100'
                      loop autoPlay="true" playsinline muted cantrols>
                      <source autoPlay loop src="assets/tabVideo/video1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>


                  </div>



                  {/* <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/album_promo_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/trendy_explainer_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  /> 
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/informative_social_pack.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  /> 
                  <Image className=' rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/luminous_neon_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  /> */}
                </div>
              </div>
            </section>

          </div>
        </div>

      </div>
    </Fragment>
  )
}

export default Tab