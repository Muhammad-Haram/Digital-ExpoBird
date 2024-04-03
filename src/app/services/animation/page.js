import Script from 'next/script';
import DigitalHero from '@/app/components/DigitalHero';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Driven2 from '@/app/components/Driven2';

const App = () => {
  return (
    <>
      <Script
        src="/scripts/script-3.js"
        strategy="lazyOnload"
      ></Script>
      <div className='bg-hero-image w-full overflow-hidden'>
        <Navbar />
        <DigitalHero title={"ExpoBird is leading mobile app development company \ Dubai, helping business transform their ideas into reality. We build mobile app \
         development solutions to empower startups, SMBs, enterprises and brands."}
         text1={"We Are"} text2={"Animation service"} text3={"Company"}
         />
      </div>
      <Driven2 para={"Choose Expobird as your software development agency and propel your business to new heights with our award-winning software development services and proprietary technology platform."} />
      <Footer />
    </>
  )
}

export default App