"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Award.css';
import Image from 'next/image';

export default function Award() {
  return (
    <>
    <div className="font-montserrat xl:max-w-[1440px] bg-[#000213] mx-auto">
        <div className="p-10 sm:p-0">
          <h6 className="sm:text-[40px] sm:text-center sm:mt-10 sm:ml-[5px] ml-[60px] md:text-[50px] sm:font-extrabold text-white lg:text-[60px] text-[85px] font-bold">Our Awards</h6>
        </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="font-montserrat swiper-card swiper-js translate-y-20  shadow-[#7B41F9] shadow-md bg-[#000213]" style={{ background:'#000213', color: 'white', height: '450px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/awards/mobile-app-usa-2023.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Top Android App Development</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="font-montserrat swiper-card bg-[#000213] shadow-[#7B41F9] shadow-md " style={{ background:'#000213', color: 'white', height: '500px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/awards/top-11-mobile-app-development-companies-in-florida 2022.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Top Android App Development</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="font-montserrat swiper-card translate-y-20  shadow-[#7B41F9] shadow-md bg-[#000213]" style={{ background: '#000213', color: 'white', height: '500px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/awards/top-50-blockchain-development-companies-hire-best-developers-in-usa.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '0px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Top Android App Development</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="font-montserrat swiper-card bg-[#000213] shadow-[#7B41F9] shadow-md " style={{ background: '#000213', color: 'white', height: '500px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/awards/top-android-app-development-companies.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Top Android App Development</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-card bg-[#000213] text-white translate-y-20 shadow-[#7B41F9] shadow-md" style={{ background: '#000213', height: '500px', color: 'white', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/awards/top-mobile-app-development-company-2023.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Top Android App Development</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="font-montserrat swiper-card bg-[#000213] shadow-[#7B41F9] shadow-md " style={{ background: '#000213', color: 'white', borderRadius: '10px', height: '500px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/awards/mobile-app-usa-2023.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Top Android App Development</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="font-montserrat swiper-card bg-[#000213] translate-y-20 shadow-[#7B41F9] shadow-md" style={{ background: '#000213', color: 'white', borderRadius: '10px', height: '500px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/awards/mobile-app-usa-2023.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Top Android App Development</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="font-montserrat swiper-card bg-[#000213] shadow-[#7B41F9] shadow-md" style={{ background: '#000213', color: 'white', borderRadius: '10px', height: '500px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/awards/mobile-app-usa-2023.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Top Android App Development</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

      </Swiper>
      </div>
    </>
  );
}
