import Image from 'next/image';

const WhyShopify = ({desc,title,heading1,paragraph1,heading2,paragraph2,heading3,paragraph3,heading4,paragraph4}) => {
  return (
    <>
      <div className="bg-[#151515] pt-24 font-montserrat">
                <div className="2xl:max-w-[1440px] mx-auto px-24 sm:px-8">
                    <div className="grid grid-cols-2 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 items-center justify-between">
                        <div>
                            <h6 className="text-[85px] md:text-[65px] font-bold text-white sm:text-center sm:text-[40px] sm:leading-none sm:mb-10">{title}</h6>
                        </div>
                        <div>
                            <p className="max-w-[525px] text-[25px] sm:text-[20px] font-normal text-white ml-auto sm:mb-10 sm:items-center">{desc}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid md:grid-cols-2  place-items-center lg:grid lg:grid-cols-3 lg:space-x-10 justify-between py-20 gap-y-20 md:space-x-10">
                        <div className='sm:grid sm:place-items-center sm:place-self-auto place-self-start'>
                            <Image src="/assets/why-image01.png" width={112} height={113} alt="" />
                            <h6 className="text-[36px] sm:text-[30px] text-white font-bold my-8 sm:text-center sm:leading-none max-w-[295px]">10 client <br/>stores</h6>
                            <p className="text-[25px] sm:text-[20px] text-white max-w-[295px] sm:text-center">The Shopify Plus version of the platform is for brands that want more from their eCommerce</p>
                        </div>
                        <div className='sm:grid sm:place-items-center sm:place-self-auto place-self-center'>
                            <Image src="/assets/why-image02.png" width={114} height={105} alt="" />
                            <h6 className="text-[36px] sm:text-[30px] text-white font-bold my-8 leading-tight sm:text-center sm:leading-none max-w-[295px]">24/7 priority support</h6>
                            <p className="text-[25px] sm:text-[20px] text-white max-w-[295px] sm:text-center">The Shopify Plus version of the platform is for brands that want more from their eCommerce</p>
                        </div>
                        <div className='sm:grid sm:place-items-center sm:place-self-auto place-self-end'>
                            <Image src="/assets/why-image03.png" width={140} height={61} alt="" />
                            <h6 className="text-[36px] sm:text-[30px] text-white font-bold my-8 sm:text-center sm:leading-none max-w-[295px]">Shopify <br/>Flow</h6>
                            <p className="text-[25px] sm:text-[20px] text-white max-w-[295px] sm:text-center">The Shopify Plus version of the platform is for brands that want more from their eCommerce</p>
                        </div>
                        <div className='sm:grid sm:place-items-center sm:place-self-auto place-self-start'>
                            <Image src="/assets/why-image05.png" width={145} height={64} alt="" />
                            <h6 className="text-[36px] sm:text-[30px] text-white font-bold my-8 sm:text-center sm:leading-none max-w-[295px]">Multi <br/>Currency</h6>
                            <p className="text-[25px] sm:text-[20px] text-white max-w-[295px] sm:text-center">The Shopify Plus version of the platform is for brands that want more from their eCommerce</p>
                        </div>
                        <div className='sm:grid sm:place-items-center sm:place-self-auto place-self-center'>
                            <Image src="/assets/why-image04.png" width={110} height={91} alt="" />
                            <h6 className="text-[36px] sm:text-[30px] text-white font-bold my-8 sm:text-center sm:leading-none max-w-[295px]">Advanced Reporting</h6>
                            <p className="text-[25px] sm:text-[20px] text-white max-w-[295px] sm:text-center">The Shopify Plus version of the platform is for brands that want more from their eCommerce</p>
                        </div>
                        <div className='sm:grid sm:place-items-center sm:place-self-auto place-self-end'>
                            <Image src="/assets/why-image06.png" width={158} height={81} alt="" />
                            <h6 className="text-[36px] sm:text-[30px] text-white font-bold my-8 sm:text-center sm:leading-none max-w-[295px]">Bespoke Checkout</h6>
                            <p className="text-[25px] sm:text-[20px] text-white max-w-[295px] sm:text-center">The Shopify Plus version of the platform is for brands that want more from their eCommerce</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default WhyShopify