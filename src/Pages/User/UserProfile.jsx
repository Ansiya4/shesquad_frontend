import React from 'react'
import { StickyNavbar } from '../../Components/navbar/Navbar'
import ProfileUser from '../../Components/userprofile/ProfileUser'
import { FooterWithSocialLinks } from '../Footer'


function UserProfile() {
  return (
    <div className='bg-pink-50'>
        <div className='h-full'>
            <div className='flex bg-deep-purple-900'>
                <StickyNavbar/>
            </div>
                <div className=''><ProfileUser/></div>
        </div>
        <div className=''><FooterWithSocialLinks/></div>
    </div>
  )
}

export default UserProfile