import styles from "../style";
import Button from "./Button";
import Image from "next/image";

const DigitalHero = ({ title, text1, text2, text3 }) => (
  <section className={` ${styles.flexCenter} flex-col flex-wrap sm:mb-10 mb-16 mt-16`}>
    <div className="text-center">
      <h1 className={`${styles.heading1} font-montserrat`}>
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>
        
      </h1>
    </div>
    <div className="text-center my-8">
      <p className={`${styles.paragraph} font-montserrat`}>{title}</p>
    </div>
    <Button  buttonText={"Let's Talk"} />
    <div className=" sm:mt-[40px] mx-auto mt-10">
      <div className="gap-20 sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-3 sm:ml-5 sm:mr-5 sm:flex-wrap  md:grid md:grid-cols-2 sm:gap-10 flex items-center justify-center">
        <Image src={"/assets/award01.svg"} height={25} width={150} alt="pic" />
        <Image src={"/assets/award02.svg"} height={25} width={89} alt="pic" />
        <Image src={"/assets/award03.svg"} height={35} width={119} alt="pic" />
        <Image src={"/assets/award04.svg"} height={30} width={125} alt="pic" />
        <Image src={"/assets/partner01.png"} height={31} width={124} alt="pic" />
        <Image src={"/assets/partner04.png"} height={32} width={126} alt="pic" />
      </div>
    </div>
  </section>

)

export default DigitalHero