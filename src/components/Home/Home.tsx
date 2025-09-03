import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Services from '../Services/Services';
import Methodology from '../Methodology/Methodology';
import Contact from '../Contact/Contact';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Methodology />
      <Contact />
    </>
  );
};

export default Home;
