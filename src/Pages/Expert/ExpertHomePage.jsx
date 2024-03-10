import React from 'react'
import { StickyNavbar } from '../../Components/navbar/Navbar'
import BgImg from '../../assets/Image/womenpht3.jpg'
import { FooterWithSocialLinks } from '../Footer'

function ExpertHomePage() {
  return (
    <div className='bg-pink-50 h-auto'>
      <div className='w-full h-screen'>
        <div className='bg-deep-purple-900'>
          <StickyNavbar/>
        </div>
        <div className='w-full h-4/5' style={{ backgroundImage: `url(${BgImg})` }}></div>
        <div className='mx-20 justify-center items-center mt-20'>
          <p className='text-xl'>Women are an endless wellspring of inspiration, shaping history, art, science, and society with their resilience, creativity, and leadership. From trailblazing pioneers to unsung heroes, their stories ignite hope, challenge norms, and empower generations. Their strength, wisdom, and grace inspire us to break barriers and strive for a more equitable world.</p>
        </div>
        <div className='mt-28'><FooterWithSocialLinks/></div>
      </div>
    </div>
  )
}

export default ExpertHomePage