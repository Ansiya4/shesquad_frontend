import React from 'react'
import { StickyNavbar } from '../../Components/navbar/Navbar'
import ProfileExpert from '../../Components/expertprofile/ProfileExpert'

function ExpertProfile() {
  return (
    <div className='h-screen bg-pink-50'>
        <div className=' bg-deep-purple-900'>
            <StickyNavbar/>
        </div>
        <div className='mt-6 mx-5'>
          <ProfileExpert/>
        </div>
    </div>
  )
}

export default ExpertProfile