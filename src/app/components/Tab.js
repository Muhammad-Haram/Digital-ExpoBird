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
      <div className="md:mb-[130px] mt-[100px] mb-[200px] font-montserrat sm:px-10 sm:mb-10  xl:px-36 px-0 relative z-10">
        <div className="py-[3rem] sm:py-[1rem] mb-10">
          <h5 className="sm:hidden md:hidden font-bold leading-none sm:text-[40px] sm:text-center md:text-[35px] mt-10 sm:m-6 md:m-3 text-[40px] text-[#252E48] sm:font-extrabold text-center">
          Powerful explainer and promotional videos, <br /> broadcast quality intros and outros, music <br /> visualizations, and much more.
          </h5>

          <h5 className="xl:hidden 2xl:hidden md:text-[70px] md:ml-[60px] lg:hidden sm:text-[40px] sm:leading-none sm:text-center mt-10 sm:mt-0 ml-[60px] sm:m-6 md:m-3 text-[40px] text-black font-bold">
          Powerful explainer and promotional videos, broadcast quality intros and outros, music visualizations, and much more.
          </h5>
        </div>

        <div className="tabs bg-transparent sm:w-[100%] w-[90%] min-w-[240px] h-[250px] sm:p-0 p-12 relative left-1/2 -translate-x-2/4">
          <input type="radio" id="tab1" name="tab-control" />
          <input type="radio" id="tab2" name="tab-control" />
          <input type="radio" id="tab3" name="tab-control" />
          <input type="radio" id="tab4" name="tab-control" />
          <input type="radio" id="tab5" name="tab-control" />
          <input type="radio" id="tab6" name="tab-control" />
          <ul className="flex sm:gap-[6px] flex-row mb-2.5 pl-0 justify-between items-end flex-wrap list-none">
            <li className="box-border flex-1 w-1/4 text-center px-2.5">
              <label
                htmlFor="tab1"
                role="button"
                className="text-black sm:font-[12px] hover:text-[#00A256] transition ease-in-out select-none cursor-pointer block truncate text-medium sm:text-[20px] text-[17px]"
              >
               Videos
              </label>
            </li>
            <li className="box-border flex-1 w-1/4 text-center px-2.5">
              <label
                htmlFor="tab2"
                role="button"
                className="text-black hover:text-[#00A256] transition ease-in-out select-none cursor-pointer block truncate text-medium sm:text-[20px] text-[17px]"
              >
               Logos
              </label>
            </li>
            <li className="box-border flex-1 w-1/4 text-center px-2.5">
              <label
                htmlFor="tab3"
                role="button"
                className="text-black hover:text-[#00A256] transition ease-in-out select-none cursor-pointer block truncate text-medium sm:text-[20px] text-[17px]"
              >
               Mockups
              </label>
            </li>
            <li className="box-border flex-1 w-1/4 text-center px-2.5">
              <label
                htmlFor="tab4"
                role="button"
                className="text-black hover:text-[#00A256] transition ease-in-out select-none cursor-pointer block truncate text-medium sm:text-[20px] text-[17px]"
              >
                Websites
              </label>
            </li>

            <li className="box-border flex-1 w-1/4 text-center px-2.5">
              <label
                htmlFor="tab5"
                role="button"
                className="text-black hover:text-[#00A256] transition ease-in-out select-none cursor-pointer block truncate text-medium sm:text-[20px] text-[17px]"
              >
                Presentations
              </label>
            </li>

            <li className="box-border flex-1 w-1/4 text-center px-2.5">
              <label
                htmlFor="tab6"
                role="button"
                className="text-black hover:text-[#00A256] transition ease-in-out select-none cursor-pointer block truncate text-medium sm:text-[20px] text-[17px]"
              >
               Graphics
              </label>
            </li>
          </ul>

          <div className="sm:mt-5 sm:mb-10 slider relative transition w-[16.667%]">
            <div className="sm:hidden indicator relative max-w-[100%] my-0 mx-auto bg-[#00A256] w-[50px] h-[4px] rounded-sm"></div>
          </div>
          <div className="content mt-8 ">
            <section className="sm:gap-[48px] flex-row justify-around sm:justify-evenly">
              <Image className='sm:h-[55px] sm:w-[54px] rounded-lg'
                src={"/assets/tabs/3d_explainer_video_toolkit.jpg"}
                width={300}
                height={300}
                alt="pic"
              />
               <Image className='sm:h-[55px] sm:w-[54px] rounded-lg'
                src={"/assets/tabs/factory-of-3d-animations.jpg"}
                width={300}
                height={300}
                alt="pic"
              />
              <Image className='sm:h-[55px] sm:w-[54px] rounded-lg'
                src={"/assets/tabs/trendy_typography_pack.jpg"}
                width={300}
                height={300}
                alt="pic"
              />
             <Image className='sm:h-[55px] sm:w-[54px] rounded-lg'
                src={"/assets/tabs/whiteboard_animation_toolkit.jpg"}
                width={300}
                height={300}
                alt="pic"
              />
            </section>
            {/* <section className="sm:gap-10 flex-row justify-around sm:justify-evenly flex-wrap">
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/reactjs_logo_icon_206693.png"}
                width={100}
                height={100}
                alt="pic"
              />
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/html.png"}
                width={100}
                height={100}
                alt="pic"
              />
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/free-typescript-2336947-1982828.webp"}
                width={100}
                height={100}
                alt="pic"
              />
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/image_processing20210620-8688-1dquhxp.png"}
                width={100}
                height={100}
                alt="pic"
              />

              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/next-js.svg"}
                width={100}
                height={100}
                alt="pic"
              />
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/java.png"}
                width={100}
                height={100}
                alt="pic"
              />
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/tech/vue_js_icon_188136.png"}
                width={100}
                height={100}
                alt="pic"
              />
            </section> */}
            {/* <section className="sm:gap-10 flex-row justify-around sm:justify-evenly flex-wrap">
            <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/brand_redis_icon_157818.png"}
                width={100}
                height={100}
                alt="pic"
              />
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/brand_mongodb_icon_157872.png"}
                width={100}
                height={100}
                alt="pic"
              />
                  <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/prisma-3.svg"}
                width={100}
                height={100}
                alt="pic"
              />
             
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/mysql.png"}
                width={100}
                height={100}
                alt="pic"
              />
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/tech/png-clipart-database-computer-icons-microsoft-sql-server-database-miscellaneous-black.png"}
                width={100}
                height={100}
                alt="pic"
              />
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/brand_redis_icon_157818.png"}
                width={100}
                height={100}
                alt="pic1"
              />
            </section> */}
            {/* <section className="sm:gap-10 flex-row justify-around sm:justify-evenly flex-wrap">
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/php.png"}
                width={100}
                height={100}
                alt="pic"
              />
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/java.png"}
                width={100}
                height={100}
                alt="pic"
              />
                 <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/next-js.svg"}
                width={100}
                height={100}
                alt="pic"
              />
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/brand_nodejs_icon_157858.png"}
                width={100}
                height={100}
                alt="pic"
              />
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/express_js-161052138fa79136c0474521906b55e2.png"}
                width={100}
                height={100}
                alt="pic"
              />
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/brand_redis_icon_157818.png"}
                width={100}
                height={100}
                alt="pic"
              />
            </section> */}
{/* 
            <section className="sm:gap-10 flex-row justify-around sm:justify-evenly flex-wrap">
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/tech/shopify_black_logo_icon_147085.png"}
                width={100}
                height={100}
                alt="pic"
              />
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/tech/59137.png"}
                width={100}
                height={100}
                alt="pic"
              />
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/free-magento-2-432454.webp"}
                width={100}
                height={100}
                alt="pic"
              />
                 <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/contentful_logo_icon_247280.png"}
                width={100}
                height={100}
                alt="pic"
              />

              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/tech/59137.png"}
                width={100}
                height={100}
                alt="pic"
              />
            </section> */}

            {/* <section className="sm:gap-10 flex-row justify-around sm:justify-evenly flex-wrap">
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/azure.png"}
                width={100}
                height={100}
                alt="pic"
              />
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/docker.png"}
                width={100}
                height={100}
                alt="pic"
              />
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/tech/kubernetes_logo_icon_214720.png"}
                width={100}
                height={100}
                alt="pic"
              />
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/458320.webp"}
                width={100}
                height={100}
                alt="pic"
              />
              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/linode-icon-1708x2048-d43gcf2g.png"}
                width={100}
                height={100}
                alt="pic"
              />

              <Image className='sm:h-[55px] sm:w-[54px]'
                src={"/assets/gradle_icon_132342.png"}
                width={100}
                height={100}
                alt="pic"
              />
            </section> */}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Tab