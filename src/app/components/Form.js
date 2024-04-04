import React from 'react'
import { VideoHTMLAttributes } from 'react'

const Form = () => {
    return (

        <>
            <div className='w-full flex p-[100px] box-border'>

                <div className='w-3/5'>
                    <video className='w-4/5 shadow-2xl shadow-[#696969] rounded-[20px]' width="320" height="240"
                        loop autoPlay cantrols>
                        <source autoPlay loop src="assets/form/formVideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className='w-2/5 flex flex-col'>
                    <h1 className='text-black font-semibold text-[30px] mb-[20px]'>Request a Callback</h1>
                    <p className='text-[#6d7c90] font-medium text-[16px] mb-[20px]'>Send us an email if you have any questions about your work and of its marketing to ExpoBird</p>
                    <form>
                        <input className='bg-[#f0f2f4] w-3/4 outline-none text-black drop-shadow-sm pl-3 p-2 mb-[25px] shadow-lg shadow-[#aaacd3]' placeholder='Your Name' />

                        <input type='email' required className='bg-[#f0f2f4] outline-none text-black w-3/4 drop-shadow-sm pl-3 p-2 mb-[25px] shadow-lg shadow-[#aaacd3]' placeholder='Email' />

                        <select className='border-b-[1px] bg-[#f0f2f4] shadow-lg shadow-[#aaacd3] p-2 font-medium mb-[25px] outline-none text-black w-3/4'>
                            <option value="">{"I'm interested in..."}</option>
                            <option value="">{"Digital Marketing"}</option>
                            <option value="">{"Graphics and Design"}</option>
                            <option value="">{"Website Development"}</option>
                            <option value="">{"Video and Animations"}</option>
                            <option value="">{"Others"}</option>
                        </select>

                        <input className='bg-[#f0f2f4] outline-none text-black drop-shadow-sm pl-3 p-2 w-3/4 mb-[25px] shadow-lg shadow-[#aaacd3]' placeholder='Your Name' />

                        <input className='bg-[#f0f2f4]  drop-shadow-sm pl-3 p-2 w-3/4 mb-[25px] shadow-lg shadow-[#aaacd3]' placeholder='Your Name' />

                        <button className='rounded-[50px] bg-[#7b41f9] font-bold text-[16px] text-white
                        mt-[20px] px-[40px] py-[10px] mb-[25px] shadow-lg shadow-[#aaacd3]'>Submit</button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Form