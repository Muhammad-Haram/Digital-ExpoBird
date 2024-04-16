import React from 'react'
import Image from 'next/image'

const Form = () => {
    return (
        <>
            <div className='sm:p-[40px] sm:flex-col sm:items-center sm:justify-center md:px-[40px]
            md:py-[30px] md:flex-col md:items-center md:justify-center w-full font-montserrat flex p-[100px] box-border'>
                <div className='sm:w-full sm:mb-[30px] md:mb-[50px] md:w-full w-3/5'>
                    <video className='w-4/5 shadow-2xl shadow-[#696969] rounded-[20px]' width="320" height="240"
                        loop autoPlay cantrols>
                        <source autoPlay loop src="assets/form/formVideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='sm:w-full md:w-full w-2/5 flex flex-col'>
                    <h1 className='font-montserrat text-black font-bold text-[40px] mb-[20px]'>Request a Callback</h1>
                    <p className='text-[#6d7c90] font-medium text-[16px] mb-[20px]'>Send us an email if you have any questions about your work and of its marketing to ExpoBird</p>
                    <form>
                        <input className='md:w-11/12 bg-[#f0f2f4] w-10/12 outline-none text-black drop-shadow-sm pl-3 p-2 mb-[25px] shadow-lg shadow-[#aaacd3]' placeholder='Your Name' />
                        <input type='email' required className='md:w-11/12 bg-[#f0f2f4] outline-none text-black w-10/12 drop-shadow-sm pl-3 p-2 mb-[25px] shadow-lg shadow-[#aaacd3]' placeholder='Email' />
                        <select className='border-b-[1px] md:w-11/12 bg-[#f0f2f4] shadow-lg shadow-[#aaacd3] p-2 font-medium mb-[25px] outline-none text-black w-10/12'>
                            <option value="">{"I'm interested in..."}</option>
                            <option value="">{"Digital Marketing"}</option>
                            <option value="">{"Graphics and Design"}</option>
                            <option value="">{"Website Development"}</option>
                            <option value="">{"Video and Animations"}</option>
                            <option value="">{"Others"}</option>
                        </select>
                        <textarea className='md:w-11/12 bg-[#f0f2f4] outline-none text-black drop-shadow-sm pl-3 p-2 w-10/12 mb-[25px] shadow-lg shadow-[#aaacd3]' />
                        <br />
                        <button className='rounded-[50px] bg-[#7B41F9] font-bold text-[16px] text-white
                        mt-[20px] px-[40px] py-[10px] mb-[25px] shadow-lg shadow-[#aaacd3]'> Submit
                            <span>
                                <Image
                                    src={"/assets/Send.svg"}
                                    width={21}
                                    height={20}
                                    className="inline invert brightness-0"
                                    alt="pic"
                                />
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form