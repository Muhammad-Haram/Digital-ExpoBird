import Script from 'next/script';
import DigitalHero from '@/app/components/DigitalHero';
import Navbar from '@/app/components/Navbar';
import FeatureWork from '@/app/components/FeatureWork';
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
          text1={"We Are"} text2={"video production"} text3={"Company"}
        />
      </div>
      <FeatureWork title={"We are a team of video production and research experts with over ten years of experience in improving businesses and peoples’ lives through smart design"}
      />
      <Driven2 para={"Choose Expobird as your software development agency and propel your business to new heights with our award-winning software development services and proprietary technology platform."} />
      <Footer />
    </>
  )
}

export default App