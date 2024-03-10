import React from 'react'
import { StickyNavbar } from '../../Components/navbar/Navbar'
import BgImg from '../../assets/Image/womenpht3.jpg'
import { FooterWithSocialLinks } from '../Footer'

function ExpertHomePage() {
  return (
    <div className='w-full h-auto bg-pink-50'>
        <div className='bg-deep-purple-900'>
          <StickyNavbar/>
        </div>
        <div className='bg-red-400 w-full h-[40rem]' style={{ backgroundImage: `url(${BgImg})` }}>       
      </div>
        <div className='bg-pink-50'>
        <div className='mx-44 justify-center items-center mt-32'>
          <p className='text-3xl font-serif'>Women are an endless wellspring of inspiration, shaping history, art, science, and</p>
          <p className='text-3xl font-serif'>society with their resilience, creativity, and leadership. From trailblazing pioneers</p><p className='text-3xl font-serif'>to unsung heroes, their stories ignite hope, challenge norms, and empower generations. Their strength, wisdom, and grace inspire us to break barriers and strive for a more equitable world.</p>
        </div>
        
        <div className='mt-40'><FooterWithSocialLinks/></div>
        </div>
    </div>
  )
}

export default ExpertHomePage