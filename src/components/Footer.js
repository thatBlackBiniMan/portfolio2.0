import React from 'react'


import { social } from '../data'



const Footer = () => {
  return (
  <footer className='bg-tertiary py-12'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row -y-6 lg:space-y-0 items-center justify-between'>
        
        <div className='flex space-x-6 items-center justify-center'>
         {social.map((item, index)=> {
          const {href, icon} = item;
          return <a className='text-accent text-base' href={href} key={index}>
            {icon}
          </a>
         })}
        </div>
        <p className='py-5'>&copy; 2023 Dr. Solomon Omoruyi. All rights reserved,</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer