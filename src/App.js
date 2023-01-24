import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Me from './components/Me';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Contat from './components/Contat';
import Footer from './components/Footer';
import BacToTopBtn from './components/BacToTopBtn';
import SocialLinks from './components/SocialLinks';


const App = () => {
  return( 
    <div>
    <Header/>
    <SocialLinks/>
    <Hero/>
    <Brands/>
    <Me/>
    <Skills/>
    <Portfolio/>
    <Services/>
    <Testimonial/>
    <Contat/>
    <Footer/>
    <BacToTopBtn/>
    </div>
    );
};

export default App;
