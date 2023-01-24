import React from 'react'

import Image from '../assets/img/surgeon.jpg';

const Me = () => {
  return (
    <section className='section bg-secondary'>
    <div className='container mx-auto'>
     <div className='flex flex-col xl:flex-row gap-24'>
      <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt="" />
     
     <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
      <div className='flex flex-col'>
        <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
          DrOmoruyi
        </h2>
        <p className='mb-4 text-accent'>Medical Doctor, Freelance Software developer, Researcher & Article writer</p>
        <hr className='mb-8 opacity-5' />
        <p className='mb-8'>
        A highly skilled and experienced medical doctor from Benin city Nigeria with over 3 years of experience in clinical diagnosis and
        basic surgical procedures, such as caesarean sections and appendectomies with a strong background in
        both traditional and cutting-edge medical treatments,
        fluent and conversational in English and Bini, with basic abilities in Spanish, French, and Hausa.

        I am also an expert academic researcher and article writer in various fields, including Medicine,
        Psychology, Nutrition, Psychiatry, Fitness, and Blockchain Technologies.
        
        <br />
        <br />
        In addition to my work as a medical doctor and a researcher, I am also a software developer with a keen
        interest in blockchain technology
        My expertise in blockchain technology encompasses crypto currencies, NFTs, defi and Gamefi and i am
        proficient in using various technologies such as React Js, Solidity, Golang, Node js, Tailwind css, Next Js,
        GraphQL, Canva and Figma.
         
        <br />
        <br />

        I am committed to producing high-quality work that satisfies my clients, and i places a priority on client
        communication and follow-up to ensure an excellent client-centered product.
         
         
        <br />
        <br />
        If you desire high-quality work, please feel free to reach out to discuss your project in further detail.

        </p>
      </div>
        <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>
          Contact Me
        </button>
     </div>
     
     </div>
    </div>
    </section>
  )
}

export default Me