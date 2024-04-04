"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Award.css';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <>
      <p className='text-white bg-[#000213] animate-rotate-x
 font-montserrat placeholder:text-white sm:text-[40px] text-[70px] font-bold sm:font-extrabold text-center sm:text-center'>Testimonials</p>
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
            <Image src={"/assets/test/5e2f6b6094e2db7f3c838090_Testimonial-Cristian-Brownlee.png"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Harris</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="font-montserrat swiper-card bg-[#000213] shadow-[#7B41F9] shadow-md " style={{ background:'#000213', color: 'white', height: '500px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/test/5e30b5eb36770a7552775335_Testimonial-Andy-Haines.png"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Ahmed</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="font-montserrat swiper-card translate-y-20  shadow-[#7B41F9] shadow-md  bg-[#000213]" style={{ background: '#000213', color: 'white', height: '500px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/test/5f17f7229a5f0f43e5882636_Testimonial-Tessa-Shreeve-02.png"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Jasmine</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="font-montserrat swiper-card bg-[#000213] shadow-[#7B41F9] shadow-md" style={{ background: '#000213', color: 'white', height: '500px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/test/5e2f6b6094e2db7f3c838090_Testimonial-Cristian-Brownlee.png"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Azlan</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-card bg-[#000213] text-white translate-y-20 shadow-[#7B41F9] shadow-md" style={{ background: '#000213', height: '500px', color: 'white', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/test/5e2f6b6094e2db7f3c838090_Testimonial-Cristian-Brownlee.png"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Sarim</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="font-montserrat swiper-card bg-[#000213] shadow-[#7B41F9] shadow-md " style={{ background: '#000213', color: 'white', borderRadius: '10px', height: '500px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/test/5e2f6b6094e2db7f3c838090_Testimonial-Cristian-Brownlee.png"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Ramis</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="font-montserrat swiper-card bg-[#000213] translate-y-20 shadow-[#7B41F9] shadow-md" style={{ background: '#000213', color: 'white', borderRadius: '10px', height: '500px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/test/5f17f7229a5f0f43e5882636_Testimonial-Tessa-Shreeve-02.png"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Emma</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="font-montserrat swiper-card bg-[#000213] shadow-[#7B41F9] shadow-md" style={{ background: '#000213', color: 'white', borderRadius: '10px', height: '500px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/test/5e2f6b6094e2db7f3c838090_Testimonial-Cristian-Brownlee.png"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Hassan</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
