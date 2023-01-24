import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Me from './components/Me';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';


const App = () => {
  return( 
    <div>
    <Header/>
    <Hero/>
    <Brands/>
    <Me/>
    <Skills/>
    <Portfolio/>
    <div style={{height: '2000px'}}></div>
    </div>
    );
};

export default App;
