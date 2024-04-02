const NewCta = ({heading,paragraph}) => {
  return (
    <div className="bg-[#00A256] font-montserrat">
      <div className="px-24 sm:px-8 flex items-center justify-center">
        <div className="xl:max-w-[1440px] w-full">
          <section className="py-24 w-full">
            <div className="text-center">
              <h6 className="text-white text-[85px] sm:text-[40px] font-bold leading-tight">
                {heading}
              </h6>
            </div>
            <div className="flex items-center justify-center mt-10">
              <div className="text-center">
                <p className="text-[25px] sm:text-[20px] text-white max-w-[920px] mx-auto">
                  {paragraph}
                </p>
                <button className="my-10 bg-white text-[#00A256] px-6 py-4 rounded-[70px] font-bold text-[17px]">
                  Get Free Audit Report
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NewCta;
