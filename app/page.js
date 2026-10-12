import React from 'react';
import Navbarl from './components/Navbarl';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';

const page = () => {
  //  const message = (event) => alert(event);

  return (
    
      <main id="top" className='min-h-screen bg-[#f6f3ed] text-[#2b2925]'>
        <Navbarl/>
        <Hero/>
        <About/>
        <Service/>
        <Contact/>
        <Footer/>


        {/* <h1>Aura Studio</h1> */}
      </main>

      
  );
}

export default page;
