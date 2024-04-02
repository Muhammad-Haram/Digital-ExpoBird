import Image from 'next/image';

const ReasonBusiness = ({ greenTitle, whiteTitle, heading1, paragraph1, heading2, paragraph2, heading3, paragraph3, heading4, paragraph4, heading5, paragraph5 }) => {
  return (
    <>
      <div className="bg-[#151515] grid grid-cols-3 sm:grid sm:grid-cols-1 md:grid md:grid-cols-1 border-t border-[#FFF] font-montserrat">
        <div className="pl-24 sm:pl-0 border-r sm:border-0 border-[#BDBDBD] py-24 sm:pb-14">
          <h6 className="text-[85px] text-white font-bold leading-none sm:text-[45px] sm:text-center lg:text-[60px] md:text-[45px] lg:ml-[-50px] sm:items-center md:text-center">{greenTitle}</h6>
        </div>
        <div className="border-r sm:border-0 border-[#BDBDBD]">
          <div className="border-b border-[#BDBDBD] px-10 py-20 sm:pt-0">
            <Image src="/assets/reason03.svg" height={80} width={77} className='sm:mx-auto' alt="" />
            <p className="text-white text-[35px] font-bold py-5 sm:leading-none sm:text-center">{heading1}</p>
            <p className="text-white text-[25px] sm:text-[20px] sm:text-center">{paragraph1}</p>
          </div>
          <div className="border-b border-[#BDBDBD] px-10 py-20">
            <Image src="/assets/reason04.svg" height={80} width={77} className='sm:mx-auto' alt="" />
            <p className="text-white text-[35px] font-bold py-5 sm:leading-none sm:text-center">{heading2}</p>
            <p className="text-white text-[25px] sm:text-[20px] sm:text-center">{paragraph2}</p>
          </div>
          <div className="px-10 py-20 sm:border-b sm:border-[#BDBDBD]">
            <Image src="/assets/reason05.svg" height={80} width={77} className='sm:mx-auto' alt="" />
            <p className="text-white text-[35px] font-bold py-5 sm:leading-none sm:text-center">{heading3}</p>
            <p className="text-white text-[25px] sm:text-[20px] sm:text-center">{paragraph3}</p>
          </div>
        </div>
        <div className="">
          <div className="border-b border-[#BDBDBD] px-10 py-20 mt-20 sm:mt-0">
            <Image src="/assets/reason02.svg" height={95} width={94} className='sm:mx-auto' alt="" />
            <p className="text-white text-[35px] font-bold py-5 sm:leading-none sm:text-center">{heading4}</p>
            <p className="text-white text-[25px] sm:text-[20px] sm:text-center">{paragraph4}</p>
          </div>
          <div className="border-b border-[#BDBDBD] px-10 py-20 sm:border-0">
            <Image src="/assets/reason01.svg" height={95} width={94} className='sm:mx-auto' alt="" />
            <p className="text-white text-[35px] font-bold py-5 sm:leading-none sm:text-center">{heading5}</p>
            <p className="text-white text-[25px] sm:text-[20px] sm:text-center">{paragraph5}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReasonBusiness