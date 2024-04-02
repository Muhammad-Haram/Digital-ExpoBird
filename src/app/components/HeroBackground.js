import React, { Fragment } from 'react';
import Image from 'next/image';

const HeroBackground = () => {
  return (
    <Fragment>
      <div className="font-montserrat h-full hero-background-animation xl:max-w-full mx-auto pb-10">
        <article className="wrapper01">
          <div className="marquee01 marquee--vertical01 marquee--reverse01">
            <div className="marquee__group01">
              <Image src={"/assets/marq01.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq02.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq01.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq02.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq01.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq02.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq01.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq02.png"} width={719} height={484} alt="pic" />
            </div>
            <div aria-hidden="true" className="marquee__group01">
              <Image src={"/assets/marq01.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq02.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq01.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq02.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq01.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq02.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq01.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq02.png"} width={719} height={484} alt="pic" />
            </div>
          </div>

          <div className="marquee01 marquee--vertical01">
            <div className="marquee__group01">
              <Image src={"/assets/marq03.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq04.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq03.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq04.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq03.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq04.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq03.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq04.png"} width={719} height={484} alt="pic" />
            </div>
            <div aria-hidden="true" className="marquee__group01">
              <Image src={"/assets/marq03.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq04.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq03.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq04.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq03.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq04.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq03.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq04.png"} width={719} height={484} alt="pic" />
            </div>
          </div>

          <div className="marquee01 marquee--vertical01 marquee--reverse01">
            <div className="marquee__group01">
              <Image src={"/assets/marq05.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq06.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq05.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq06.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq05.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq06.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq05.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq06.png"} width={719} height={484} alt="pic" />
            </div>
            <div aria-hidden="true" className="marquee__group01">
              <Image src={"/assets/marq05.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq06.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq05.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq06.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq05.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq06.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq05.png"} width={719} height={484} alt="pic" />
              <Image src={"/assets/marq06.png"} width={719} height={484} alt="pic" />
            </div>
          </div>
        </article>
      </div>

    </Fragment>
  )
}

export default HeroBackground