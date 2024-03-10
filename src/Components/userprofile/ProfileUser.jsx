import { Avatar, Card } from '@material-tailwind/react'
import React from 'react'
import ChangePassword from '../dialogues/ChangePassword'
import TwitterImg from '../../assets/Image/twitter.png'
import InstagramImg from '../../assets/Image/instagram.png'
import FacebookImg from '../../assets/Image/facebook.png'
import UserEditProfile from '../dialogues/UserEditProfile'



function ProfileUser() {
  return (
    <div className='h-screen'>
        <div className='mx-64 mt-20'>
            <Card className='h-96'>
                <div className='flex'>
                    <Card className='w-2/5 bg-deep-purple-100 h-96 justify-center items-center'>
                    <Avatar className='-mt-16 mb-5' src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl" />
                    <p className='capitalize font-bold text-gray-900'>Jothika Ct</p>
                    <p className='text-sm'>jothikact@gmail.com</p>
                    </Card>
                    <Card className='w-3/5'>
                    <div className="mb-4 ml-9 mt-10">
                        <p className="text-base text-blue-gray-800 text-left">
                            First Name : 
                        </p>
                    </div>
                    <div className="mb-4 ml-9 mt-5">
                        <p className="text-base text-blue-gray-800 text-left">
                            Last Name : 
                        </p>
                    </div>
                    <div className="mb-4 ml-9 mt-5">
                        <p className="text-base text-blue-gray-800 text-left">
                            Email : 
                        </p>
                    </div>
                    <div className='flex mt-9'>
              <div className='flex ml-9 w-1/4'>
                <UserEditProfile/>
              </div>
              <div className='w-3/4 ml-7'>
                <ChangePassword/>
              </div>
            </div>
            <div className='flex mt-10'>
                <div className='ml-9 mt-1'><img src={TwitterImg} alt='' className='h-5'/></div>
                <div className='ml-4'><img src={InstagramImg} alt='' className='h-9'/></div>
                <div className='ml-4 mt-1'><img src={FacebookImg} alt='' className='h-5'/></div>
              </div>
                    </Card>
                </div>
            </Card>
        </div>
    </div>
  )
}

export default ProfileUser