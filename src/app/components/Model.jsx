import React from 'react'

const Model = ({ closeModel }) => {


    return (
        <div className='w-full flex justify-center fixed inset-0 backdrop-blur-sm z-50'>

            <div className='w-1/3 sm:w-96 p-3 sm:h-[500px] flex items-center justify-center flex-col bg-white z-100 rounded-xl
            my-[40px]'>
                <h1 className='font-montserrat text-black font-bold text-[40px] mb-[20px]'>Request a Callback</h1>
                <p className='text-[#6d7c90] text-center font-medium text-[16px] mb-[20px]'>Send us an email if you have any questions about your work and of its marketing to ExpoBird</p>
                <form className='w-[100%] flex items-center flex-col'>
                    <input className='bg-[#f0f2f4] w-10/12 outline-none text-black drop-shadow-sm pl-3 p-2
                    mb-[25px] shadow-lg shadow-[#aaacd3]' placeholder='Your Name' />
                    <input type='email' required className='md:w-11/12 bg-[#f0f2f4] outline-none text-black w-10/12 drop-shadow-sm pl-3 p-2 mb-[25px] shadow-lg shadow-[#aaacd3]' placeholder='Email' />
                    <select className='border-b-[1px] md:w-11/12 bg-[#f0f2f4] shadow-lg shadow-[#aaacd3] p-2 font-medium mb-[25px] outline-none text-black w-10/12'>
                        <option value="">{"I'm interested in..."}</option>
                        <option value="">{"Digital Marketing"}</option>
                        <option value="">{"Graphics and Design"}</option>
                        <option value="">{"Website Development"}</option>
                        <option value="">{"Video and Animations"}</option>
                        <option value="">{"Others"}</option>
                    </select>
                    <br />
                    <div className='flex items-center justify-center gap-3'>
                        <button className='rounded-[50px] bg-[#7B41F9] font-bold text-[16px] text-white mt-[20px] px-[40px] py-[10px] mb-[25px] shadow-lg shadow-[#aaacd3]'> Submit
                        </button>

                        <button onClick={closeModel} className='rounded-[50px] bg-[#7B41F9] font-bold text-[16px] text-white mt-[20px] px-[40px] py-[10px] mb-[25px] shadow-lg shadow-[#aaacd3]'>Close
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Model