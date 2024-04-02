import Script from 'next/script';
import DigitalHero from '@/app/components/DigitalHero';
import Navbar from '@/app/components/Navbar';
import FeatureWork from '@/app/components/FeatureWork';
import Footer from '@/app/components/Footer';
import Faq2 from '@/app/components/Faq2';
import Driven2 from '@/app/components/Driven2';
import TestingNav from '@/app/components/TestingNav';

const App = () => {
  return (
    <>
      <Script
        src="/scripts/script-3.js"
        strategy="lazyOnload"
      ></Script>
      <div className='bg-hero-image w-full overflow-hidden'>
        <Navbar />
        <TestingNav />
        <DigitalHero title={"Code Brew Labs is leading mobile app development company \ Dubai, helping business transform their ideas into reality. We build mobile app \
         development solutions to empower startups, SMBs, enterprises and brands."}
          text1={"We Are #1"} text2={"Digital Marketing"} text3={"Company Dubai"}
        />
      </div>
      <FeatureWork title={"We are a team of design and research experts with over ten years of experience in improving businesses and peoples’ lives through smart design"}
      />
      <Faq2 question={"which technology used for creating mobile applications"}
        answer={"React Native, Flutter, Ionic, JavaScript, Kotlin, Java, Swift"}
        question2={"which technology used for creating Web applications"}
        answer2={"React JS, Node JS, Express JS, Next JS, Angular JS, Vue JS, Tailwind Css"}
        question3={"which technology used for creating Dev Ops"}
        answer3={"Docker, Kubernetes, Linux, azure, Aws"}
        question4={"which technology used for creating Backend applications"}
        answer4={"Django, Node JS, Express JS, Next JS"}
        para={"Can Software integrate with other platforms and services?"} />
      <Driven2 para={"Choose Expobird as your software development agency and propel your business to new heights with our award-winning software development services and proprietary technology platform."} />
      <Footer />
    </>
  )
}

export default App