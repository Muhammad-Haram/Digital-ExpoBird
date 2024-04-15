import Award from '@/app/components/Awards';
import DigitalHero from '@/app/components/DigitalHero';
import Driven from '@/app/components/Driven';
import FeatureWork from '@/app/components/FeatureWork';
import Footer from '@/app/components/Footer';
import Form from '@/app/components/Form';
import HouseTechnology from '@/app/components/HouseTechnology';
import MobileNav from '@/app/components/MobileNav';
import Navbar from '@/app/components/Navbar';
import Clients from '@/app/components/OurClients';
import Service from '@/app/components/Service';
import Tab from '@/app/components/Tab';
import Tech from '@/app/components/Tech';
import Testimonials from '@/app/components/Testimonials';
import React from 'react';


const Home = () => {
  return (
    <>
      <div className='bg-hero-image w-full overflow-hidden'>
        <Navbar />
        <MobileNav />
        <DigitalHero text1={"UI/UX Designing"} />
      </div>
      <Service />
      <FeatureWork />
      <Clients />
      <Testimonials />
      <Driven />
      <Award />
      <Tech />
      <HouseTechnology />
      <Tab />
      <Form />
      <Footer />

    </>
  )
}
export default Home