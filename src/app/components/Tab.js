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
      <div className="md:mb-[130px] sm:mb-[400px] mt-[50px] mb-[400px] font-montserrat sm:px-5 xl:px-0 px-0 relative z-10">
        <div className=" md:mb-0 md:py-[1rem] py-[3rem] sm:py-[1rem] mb-10">
          <h5 className="sm:text-[25px] text-[35px] text-center font-bold font-montserrat text-[#252E48]  leading-none sm:text-center md:text-[30px] mt-10 sm:m-6 md:m-3">
            Powerful explainer and promotional <br /> videos, broadcast quality intros and <br /> outros, music  visualizations, and much more.
          </h5>
        </div>

        <div className="tabs bg-transparent sm:w-[100%] w-[90%] min-w-[240px] h-[250px] sm:p-0 p-12 relative left-[48%] -translate-x-2/4">
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
                className="text-black sm:font-[12px] hover:text-[#252E48] transition ease-in-out select-none cursor-pointer block truncate text-medium sm:text-[20px] text-[17px]"
              >
                Videos
              </label>
            </li>
            <li className="box-border flex-1 text-center px-2.5">
              <label
                htmlFor="tab2"
                role="button"
                className="text-black hover:text-yellow-500 transition ease-in-out select-none cursor-pointer block truncate text-medium sm:text-[20px] text-[17px]"
              >
                Logos
              </label>
            </li>
            <li className="box-border flex-1 text-center px-2.5">
              <label
                htmlFor="tab3"
                role="button"
                className="text-black hover:text-pink-700 transition ease-in-out select-none cursor-pointer block truncate text-medium sm:text-[20px] text-[17px]"
              >
                Mockups
              </label>
            </li>
            <li className="box-border flex-1 text-center px-2.5">
              <label
                htmlFor="tab4"
                role="button"
                className="text-black hover:text-purple-700 transition ease-in-out select-none cursor-pointer block truncate text-medium sm:text-[20px] text-[17px]"
              >
                Websites
              </label>
            </li>

            <li className="box-border flex-1 text-center px-2.5">
              <label
                htmlFor="tab5"
                role="button"
                className="text-black hover:text-yellow-600 transition ease-in-out select-none cursor-pointer block truncate text-medium sm:text-[20px] text-[17px]"
              >
                Presentations
              </label>
            </li>

            <li className="box-border flex-1 text-center px-2.5">
              <label
                htmlFor="tab6"
                role="button"
                className="text-black hover:text-pink-500 transition ease-in-out select-none cursor-pointer block truncate text-medium sm:text-[20px] text-[17px]"
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
                <div className='flex justify-start gap-5 sm:overflow-x-auto mb-10'>
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/3d_explainer_video_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                  
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/factory-of-3d-animations.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/trendy_typography_pack.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/whiteboard_animation_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                </div>
                <div className='flex justify-start gap-5 sm:overflow-x-auto'>
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/album_promo_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/trendy_explainer_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/informative_social_pack.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  <Image className=' rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/luminous_neon_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                </div>
              </div>
            </section>

            <section className="sm:gap-[48px] flex-row justify-around sm:justify-evenly">
              <div className='gap-[30px]'>
                <div className='flex justify-start gap-5 sm:overflow-x-auto mb-10'>
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/3d_explainer_video_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />

                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/factory-of-3d-animations.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/trendy_typography_pack.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/whiteboard_animation_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                </div>
                <div className='flex justify-start gap-5 sm:overflow-x-auto'>
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/album_promo_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/trendy_explainer_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/informative_social_pack.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  <Image className=' rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/luminous_neon_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                </div>
              </div>
            </section>

            <section className="sm:gap-[48px] flex-row justify-around sm:justify-evenly">
              <div className='gap-[30px]'>
                <div className='flex justify-start gap-5 sm:overflow-x-auto mb-10'>
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/3d_explainer_video_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/factory-of-3d-animations.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/trendy_typography_pack.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/whiteboard_animation_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                </div>
                <div className='flex justify-start gap-5 sm:overflow-x-auto'>
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/album_promo_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/trendy_explainer_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/informative_social_pack.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  <Image className=' rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/luminous_neon_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                </div>
              </div>
            </section>

            <section className="sm:gap-[48px] flex-row justify-around sm:justify-evenly">
              <div className='gap-[30px]'>
                <div className='flex justify-start gap-5 sm:overflow-x-auto mb-10'>
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/3d_explainer_video_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/factory-of-3d-animations.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/trendy_typography_pack.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/whiteboard_animation_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                </div>
                <div className='flex justify-start gap-5 sm:overflow-x-auto'>
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/album_promo_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/trendy_explainer_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/informative_social_pack.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  <Image className=' rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/luminous_neon_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                </div>
              </div>
            </section>

            <section className="sm:gap-[48px] flex-row justify-around sm:justify-evenly">
              <div className='gap-[30px]'>
                <div className='flex justify-start gap-5 sm:overflow-x-auto mb-10'>
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/3d_explainer_video_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/factory-of-3d-animations.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/trendy_typography_pack.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/whiteboard_animation_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                </div>
                <div className='flex justify-start gap-5 sm:overflow-x-auto'>
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/album_promo_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/trendy_explainer_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/informative_social_pack.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  <Image className=' rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/luminous_neon_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                </div>
              </div>
            </section>

            <section className="sm:gap-[48px] flex-row justify-around sm:justify-evenly">
              <div className='gap-[30px]'>
                <div className='flex justify-start gap-5 sm:overflow-x-auto mb-10'>
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/3d_explainer_video_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/factory-of-3d-animations.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/trendy_typography_pack.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/whiteboard_animation_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
                </div>
                <div className='flex justify-start gap-5 sm:overflow-x-auto'>
                  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/album_promo_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/trendy_explainer_toolkit.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  <Image className='rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/informative_social_pack.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />  <Image className=' rounded-lg sm:max-w-[100%] max-w-[25%] hover:scale-105 cursor-pointer transition-all'
                    src={"/assets/tabs/luminous_neon_visualizer.jpg"}
                    width={400}
                    height={400}
                    alt="pic"
                  />
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