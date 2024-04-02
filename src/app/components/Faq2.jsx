import React from 'react';
import Script from 'next/script';

const Faq2 = ({ question, answer, question2, answer2, question3, answer3, question4, answer4, para }) => {
  return (
    <>
      <div className="bg-[#000213] font-montserrat">
        <div className="xl:max-w-[1440px] mx-auto">
          <div className="sm:p-2 sm:leading-none p-24">
            <h6 className="sm:ml-[10px] sm:text-center sm:pt-[40px] sm:text-[40px] md:text-[40px] md:text-center text-[85px] font-bold text-white sm:4 sm:mr-4 pb-10">Faq</h6>
            <div className="accordion">
              <div className="border-b border-[#656565]">
                <button id="accordion-button-1 relative" className="relative block text-left w-full text-[#656565] sm:py-0 text-xl	py-5 " aria-expanded="false"><span className="sm:text-[20px] md:text-[30px] accordion-title leading-none sm:p-[25px] text-[46px] font-semibold md:leading-none fill_text">{question}</span><span className="icon" aria-hidden="true"></span></button>
                <div className="accordion-content sm:pl-[25px]">
                  <p className="text-[24px] sm:text-[15px] md:text-[20px] text-white mb-10">{answer}</p>
                </div>
              </div>
              <div className="border-b border-[#656565]">
                <button id="accordion-button-2" className="relative block text-left w-full text-[#656565] text-xl sm:py-0	py-5 " aria-expanded="false"><span className="sm:text-[20px] md:text-[30px] sm:p-[30px] accordion-title text-[46px] font-semibold leading-none fill_text">{question2}</span><span className="icon" aria-hidden="true"></span></button>
                <div className="accordion-content sm:pl-[25px] ">
                  <p className="text-[24px] sm:text-[15px] md:text-[20px] text-white mb-10">{answer2}</p>
                </div>
              </div>
              <div className="border-b border-[#656565]">
                <button id="accordion-button-3" className="relative block text-left w-full text-[#656565] text-xl sm:py-0	py-5 " aria-expanded="false"><span className="sm:text-[20px] md:text-[30px] sm:p-[25px] accordion-title text-[46px] font-semibold leading-none fill_text">{question3}</span><span className="icon" aria-hidden="true"></span></button>
                <div className="accordion-content sm:pl-[25px]">
                  <p className="text-[24px] sm:text-[15px] md:text-[20px] text-white mb-10">{answer3}</p>
                </div>
              </div>
              <div className="border-b border-[#656565]">
                <button id="accordion-button-4" className="relative block text-left w-full text-[#656565] text-xl sm:py-0	py-5 " aria-expanded="false"><span className="sm:text-[20px] md:text-[30px] sm:p-[25px] accordion-title text-[46px] font-semibold leading-none fill_text">{question4}</span><span className="icon" aria-hidden="true"></span></button>
                <div className="accordion-content sm:pl-[25px]">
                  <p className="text-[24px] sm:text-[15px] md:text-[20px] text-white mb-10">{answer4}</p>
                </div>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-1 md:grid md:grid-cols-1 grid grid-cols-2 gap-32 pt-44 sm:pt-20 px-24">
              <div className="sm:w-[280px] relative parentBox">
                <div className="card-faq" id="card01"></div>
                <div className="card-faq" id="card02"></div>
                <div className="card-faq" id="card03"></div>
              </div>
              <div>
                <h6 className="sm:hidden sm:text-center md:text-[40px] lg:text-[60px] text-[85px] text-white font-black max-w-[600px] leading-none mb-10">Have An Idea? Lets Build And Scale It!</h6>
                <p className="text-2xl sm:text-[20px] sm:text-center  leading-none text-white max-w-[300px]">{para}</p>
                <div className="text-right">
                  <button className="sm:w-[100px] sm:relative sm:right-[88px] sm:bottom-[30px] sm:mt-20 md:mt-20 sm:h-[100px] sm:text-[20px] sm:items-center md:w-[100px] md:h-[100px] md:text-[20px] md:items-center bg-[#00A256] w-[178px] h-[178px] rounded-full text-white text-[36px] leading-none dark_btn" >Lets <br />
                    Talk</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq2