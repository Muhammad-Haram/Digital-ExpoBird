import React from 'react';
import Head from 'next/head';
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


const Home = ({ description }) => {
  return (
    <>
      <Head>
        <title> Digital || Expo </title>
        <meta
          name='description'
          content={description}
          key="desc"
        />
      </Head>
      <Navbar />
      <Hero />
      <HeroBackground />
      <Service />
      <FeatureWork />
      <Clients />
      <Testimonials />
      <Driven />
      <Awards />
      <Tech />
      <HouseTechnology />
      <Tab />
      <Form/>
      <Footer />

    </>
  )
}
export default Home