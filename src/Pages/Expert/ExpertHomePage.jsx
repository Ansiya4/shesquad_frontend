import React from 'react'
import { StickyNavbar } from '../../Components/navbar/Navbar'
import BgImg from '../../assets/Image/womenpht3.jpg'
function ExpertHomePage() {
  return (
    <div className='w-full h-screen'>
      <div className='bg-deep-purple-900'>
        <StickyNavbar/>
      </div>
      <div className='bg-red-400 w-full h-4/5' style={{ backgroundImage: `url(${BgImg})` }}>
</div>

    </div>
  )
}

export default ExpertHomePage