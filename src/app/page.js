import React from 'react';
import Hero from './components/Hero';
import FeatureWork from './components/FeatureWork';
import HeroBackground from './components/HeroBackground';
import Clients from './components/OurClients';
import Driven from './components/Driven';
import HouseTechnology from './components/HouseTechnology';
import Navbar from './components/Navbar';
import Awards from './components/Awards';
import Service from './components/Service';
import Tech from './components/Tech';
import Footer from './components/Footer';
import Tab from './components/Tab';
import Testimonials from './components/Testimonials';
import Form from './components/Form';
import MobileNav from './components/MobileNav';


const Home = () => {
  return (
    <>
      <Navbar />
      <MobileNav />
      <Hero />
      <HeroBackground />
      <Service />
      {/* <FeatureWork /> */}
      <Tab />
      <Clients />
      <Testimonials />
      <Driven />
      <Awards />
      <Tech />
      <HouseTechnology />
      <Form />
      <Footer />

    </>
  )
}
export default Home