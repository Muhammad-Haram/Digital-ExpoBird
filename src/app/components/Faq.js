import React from 'react';
import Script from 'next/script';

const Faq = ({ question, answer, question2, answer2, question3, answer3, question4, answer4, para }) => {
  return (
    <>
        <Script
        src="/scripts/script-1.js"
        strategy="lazyOnload"
      ></Script>
      <div className="bg-[#000213] font-montserrat">
        <div className="xl:max-w-[1440px] mx-auto">
          <div className="sm:p-2 sm:leading-none p-24">
            <h6 className="sm:ml-[10px] sm:text-center sm:pt-[40px] sm:text-[50px] md:text-[60px] md:text-center text-[85px] font-bold text-white sm:4 sm:mr-4 pb-10">Faq</h6>
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
            <div className="sm:justify-center md:justify-center sm:text-center sm:flex sm:items-center sm:m-auto md:text-center md:flex md:m-auto sm:grid sm:grid-cols-1 md:grid md:grid-cols-1 grid grid-cols-2 gap-32 pt-44 sm:pt-20 px-24">
              <div className="sm:w-[280px] sm:ml-[100px] md :ml-[100px] relative parentBox">
                <div className="card-faq" id="card01"></div>
                <div className="card-faq" id="card02"></div>
                <div className="card-faq" id="card03"></div>
              </div>
              <div>
                <h6 className="sm:text-[30px] sm:text-center sm:flex sm:items-center sm:m-auto md:text-[40px] md:text-center md:flex md:items-center md:m-auto lg:text-[60px] text-[85px] text-white font-black max-w-[600px] leading-none mb-10">Have An Idea? Lets Build And Scale It!</h6>
                <p className="text-2xl sm:text-[20px] md:text-center md:flex md:items-center md:m-auto md:mt-10 leading-none text-white max-w-[300px] sm:text-center sm:flex sm:items-center sm:m-auto sm:mt-10">{para}</p>
                <div className="text-center mr-[160px] mt:10">
                  <button className="sm:justify-center md:justify-center sm:text-center sm:flex sm:items-center sm:m-auto md:text-center md:flex md:m-auto sm:w-[100px] sm:relative sm:bottom-[30px] sm:mt-20 md:mt-20 sm:h-[100px] sm:text-[20px] md:w-[100px] md:h-[100px] md:text-[20px] md:items-center bg-[#7B41F9] w-[100px] h-[100px] text-[20px] rounded-full text-white  leading-none dark_btn lg:h-[100px] lg:w-[100px] lg:text-[20px] lg:mt-10">Lets
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

export default Faq