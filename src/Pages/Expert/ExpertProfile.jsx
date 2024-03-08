import React from 'react'
import { StickyNavbar } from '../../Components/navbar/Navbar'
import ProfileExpert from '../../Components/expertprofile/ProfileExpert'

function ExpertProfile() {
  return (
    <div className='h-screen bg-pink-50'>
        <div className='mt-6 bg-deep-purple-900'>
            <StickyNavbar/>
        </div>
        <div className='mt-6'>
          <ProfileExpert/>
        </div>
    </div>
  )
}

export default ExpertProfile