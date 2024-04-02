const styles = {
    boxWidth: "w-full",
  
    heading1: "font-montserrat font-bold sm:text-[30px] sm:leading-[35px] text-[60px] text-white leading-[72px]",
    heading2: "font-montserrat font-semibold xs:text-[60px] text-white xs:leading-[72px]",
    paragraph: "font-montserrat font-normal sm:leading-[20px] sm:text-[17px] md:text-[19px] text-white text-[24px] leading-[29px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px]",
    paragraph2: "font-montserrat font-medium text-white text-[30px] leading-[36px]",
    paragraph3: "font-montserrat font-medium text-white text-[20px] leading-[28px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-start items-start",
    flexEnd: "flex justify-end items-end",
  
    paddingX: "sm:px-16 px-1",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
    sectionReverse2: `flex md:flex-row flex-col-reverse`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 ${styles.flexCenter} md:ml-10 ml-0 mt-0 mb-9 sm:mb-0 relative`,
    sectionImg2: `flex-1 ${styles.flexCenter} ml-0 mt-0 mb-9 sm:mb-0 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;