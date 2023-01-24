import React from 'react'


import Projects from '../components/Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/4 before:hidden before:lg:block'>
           Checkout My Lastest Work
          </h2>
          <p className='subtitle'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae alias id eveniet, reprehenderit ullam nam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, omnis.
          </p>
        </div>
        <Projects/>
      </div>
    </section>
  )
}

export default Portfolio