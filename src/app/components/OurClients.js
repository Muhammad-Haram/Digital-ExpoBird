import React from 'react'
import Image from 'next/image'

const Clients = () => {
  return (
    <>
      <div className="font-montserrat xl:max-w-[1440px] bg-white mx-auto">
        <div className="p-10 sm:p-0">
          <h6 className="sm:text-[40px] sm:text-center sm:ml-[5px] ml-[60px] md:text-[50px] sm:font-extrabold text-black text-[85px] font-bold">See Our Clients</h6>
        </div>
        <article className="wrapper sm:py-1 sm:pb-0 pb-5">
          <div className="marquee">
            <div className="marquee__group">
              <Image src={"/assets/client01.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client02.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client03.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client04.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client05.png"} height={150} width={200} alt="pic" />
            </div>

            <div aria-hidden="true" className="marquee__group">
              <Image src={"/assets/client01.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client02.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client03.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client04.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client05.png"} height={150} width={200} alt="pic" />
            </div>
          </div>

          <div className="marquee marquee--reverse">
            <div className="marquee__group">
              <Image src={"/assets/client01.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client02.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client03.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client04.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client05.png"} height={150} width={200} alt="pic" />
            </div>

            <div aria-hidden="true" className="marquee__group">
              <Image src={"/assets/client01.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client02.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client03.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client04.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client05.png"} height={150} width={200} alt="pic" />
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default Clients