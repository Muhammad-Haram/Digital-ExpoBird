import React from 'react';
import Script from 'next/script';
import Head from 'next/head';
import Hero from './components/Hero';
import FeatureWork from './components/FeatureWork';
import HeroBackground from './components/HeroBackground';
import Clients from './components/OurClients';
import Faq from './components/Faq';
import Driven from './components/Driven';
import HouseTechnology from './components/HouseTechnology';
import Navbar from './components/Navbar';
import Awards from './components/Awards';
import TestingNav from './components/TestingNav';
import Service from './components/Service';
import Tech from './components/Tech';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import NewNav from './components/NewNav';

const Home = ({ description }) => {

  const Menu = [
    {
      id: 1,
      image: "/assets/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e.webp",
      name: "Mobile Development",
      category: "App Development",
      description:
        "A mobile app (or mobile application) is a software application developed specifically for use on small, wireless computing devices, such as smartphones and tablets, rather than desktop or laptop computers. ",
    },

    {
      id: 2,
      image: "/assets/F7148507-7860-465B-950B-2F55B420CEDB-1229-0000010877FFE7CA_tmp-1.jpg",
      name: "Mern",
      category: "Web Development",
      description:
        "A mobile app (or mobile application) is a software application developed specifically for use on small, wireless computing devices, such as smartphones and tablets, rather than desktop or laptop computers. ",
    },
    {
      id: 3,
      image: "/assets/cta-image02.png",
      name: "Node js",
      category: "Backend",
      description:
        "A mobile app (or mobile application) is a software application developed specifically for use on small, wireless computing devices, such as smartphones and tablets, rather than desktop or laptop computers. ",
    },
    {
      id: 4,
      image: "/assets/cta-image02.png",
      name: "Next js",
      category: "Frontend",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },

  ];
  return (
    <>
      <Head>
        <title>Home - DigiExpo</title>
        <meta
          name='description'
          content={description}
          key="desc"
        />
      </Head>
      <Script
        src="/scripts/script-3.js"
        strategy="lazyOnload"
      ></Script>
      <Navbar />
      <Hero />
      <HeroBackground />
     <Service />
      <FeatureWork title={"We are a team of design and research experts with over ten years of experience in improving businesses and peoples lives through smart design solutions"} />
      <Clients />
      <Driven para={"Choose Expobird as your software development agency and propel your business to new heights with our award-winning software development services and proprietary technology platform."} />
      <Awards />
      <Tech />
      {/*<Testimonials />*/}

      <HouseTechnology />
      <Footer />
      {/* <NewFooter /> */}
    </>
  )
}
export default Home