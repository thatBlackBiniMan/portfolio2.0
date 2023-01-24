import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Me from './components/Me';


const App = () => {
  return( 
    <div>
    <Header/>
    <Hero/>
    <Brands/>
    <Me/>
    <div style={{height: '2000px'}}></div>
    </div>
    );
};

export default App;
