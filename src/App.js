import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Me from './components/Me';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Services from './components/Services';


const App = () => {
  return( 
    <div>
    <Header/>
    <Hero/>
    <Brands/>
    <Me/>
    <Skills/>
    <Portfolio/>
    <Services/>
    <div style={{height: '2000px'}}></div>
    </div>
    );
};

export default App;
