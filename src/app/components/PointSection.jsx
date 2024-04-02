import Image from "next/image";

const PointSection = ({ point1, desc1, point2, desc2, point3, desc3, point4, desc4 }) => {
  return (
    <div className="bg-white py-24 px-24 sm:px-10 sm:px-18 relative z-10 font-montserrat 2xl:max-w-[1440px]">
      <div className="pb-20 sm:pb-14">
        <p className="text-[85px] text-[#252424] font-black leading-none sm:text-center sm:text-[50px] md:text-[60px]">Our <br />Process</p>
      </div>
      <div className="grid grid-cols-3 sm:grid sm:grid-cols-1 md:grid md:grid-cols-1 mt-20 sm:mt-0 md:gap-y-10 sm:gap-y-20">
        <div className="col-span-1">
          <Image src="/assets/01.svg" width={301} height={228} className="sm:mx-auto" alt="" />
        </div>
        <div className="col-span-2 sm:col-span-1 md:col-span-1">
          <div className="grid grid-cols-3 sm:grid sm:grid-cols-1 md:grid md:grid-cols-1">
            <div className="col-span-1">
              <Image
                src="/assets/defining.svg"
                width={153}
                height={150}
                className="ml-auto sm:mx-auto"
                alt=""
              />
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-1">
              <div className="max-w-[70%] ml-auto sm:mx-auto sm:max-w-[100%] sm:text-center">
                <h5 className="text-[50px] text-[#252424] font-black">
                  {point1}
                </h5>
                <p className="text-[25px] sm:text-[20px] text-[#252424] font-normal">
                  {desc1}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 mt-20 sm:gap-y-20">
        <div className="col-span-2 sm:col-span-1 sm:order-12">
          <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1">
            <div className="col-span-1">
              <Image
                src="/assets/defining.svg"
                width={150}
                height={103}
                alt=""
                className="sm:mx-auto"
              />
            </div>
            <div className="col-span-2">
              <div className="max-w-[70%] mr-auto sm:max-w-[100%] sm:text-center">
                <h5 className="text-[50px] text-[#252424] font-black">
                  {point2}
                </h5>
                <p className="text-[25px] sm:text-[20px] text-[#252424] font-normal">
                  {desc2}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:order-1">
          <Image
            src="/assets/02.svg"
            width={301}
            height={228}
            className="ml-auto sm:mx-auto"
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 mt-20 sm:gap-y-20">
        <div className="col-span-1">
          <Image src="/assets/03.svg" width={301} height={228} className="sm:mx-auto" alt="" />
        </div>
        <div className="col-span-2 sm:col-span-1 md:col-span-1">
          <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1">
            <div className="col-span-1">
              <Image
                src="/assets/defining.svg"
                width={153}
                height={150}
                className="ml-auto sm:mx-auto"
                alt=""
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="max-w-[70%] ml-auto sm:max-w-[100%] sm:text-center">
                <h5 className="text-[50px] text-[#252424] font-black">
                  {point3}
                </h5>
                <p className="text-[25px] sm:text-[20px] text-[#252424] font-normal">
                  {desc3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-1 mt-20 sm:gap-y-20">
        <div className="col-span-2 sm:col-span-1 sm:order-12">
          <div className="grid grid-cols-3 sm:grid-cols-1">
            <div className="col-span-1">
              <Image
                src="/assets/defining.svg"
                width={153}
                height={150}
                alt=""
                className="sm:mx-auto"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="max-w-[70%] mr-auto sm:max-w-[100%] sm:text-center">
                <h5 className="text-[50px] text-[#252424] font-black">
                  {point4}
                </h5>
                <p className="text-[25px] sm:text-[20px] text-[#252424] font-normal">
                  {desc4}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:order-1">
          <Image
            src="/assets/04.svg"
            width={301}
            height={228}
            className="ml-auto sm:mx-auto"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PointSection;
