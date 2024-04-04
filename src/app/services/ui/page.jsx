import Script from 'next/script';
import DigitalHero from '@/app/components/DigitalHero';
import Navbar from '@/app/components/Navbar';
import FeatureWork from '@/app/components/FeatureWork';
import Footer from '@/app/components/Footer';
import Driven from '@/app/components/Driven';

const App = () => {
  return (
    <>
      <div className='bg-hero-image w-full overflow-hidden'>
        <Navbar />
        <DigitalHero title={"ExpoBird is leading mobile app development company \ Dubai, helping business transform their ideas into reality. We build mobile app \
         development solutions to empower startups, SMBs, enterprises and brands."}
          text1={"We Are"} text2={"UI/UX Designer"} text3={"Company"}
        />
      </div>
      <FeatureWork title={"We are a team of UI/UX Designer and research experts with over ten years of experience in improving businesses and peoples’ lives through smart design"}
      />
     <Driven />
      <Footer />
    </>
  )
}

export default App