import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import FirstSection from './Sections/FirstSection';
import SecondSection from './Sections/SecondSection';
import ThiredSection from './Sections/ThiredSection';
import FourthSection from './Sections/FourthSection';
import Boutiques from './Sections/Boutiques';

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <FirstSection />
    <SecondSection />
    <FourthSection />
    <Boutiques />
    </>
  );
};

export default App;
