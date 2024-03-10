import { Avatar, Badge, Button, Card } from '@material-tailwind/react'
import React from 'react'
import ExpertEditProfile from '../dialogues/ExpertEditProfile'
import ChangePassword from '../dialogues/ChangePassword'
import TwitterImg from '../../assets/Image/twitter.png'
import InstagramImg from '../../assets/Image/instagram.png'
import FacebookImg from '../../assets/Image/facebook.png'
import DrCrtfct1 from '../../assets/Image/Dr_crtcft1.png'
import DrCrtfct2 from '../../assets/Image/Dr_crtcft2.jpg'
import DrCrtfct3 from '../../assets/Image/Dr_crtcft3.jpg'



function ProfileExpert() {
  
  return (
    <>
    <div className='mt-20 container lg:mx-auto'>     
        <div className='flex h-96 mb-5 mx-40'>
          <Card className='w-3/5 me-5 flex justify-center items-center'>
          <Avatar className='-mt-16 mb-5' src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl" />
            <p className='capitalize font-bold text-gray-900'>Jothika Ct</p>
            <p className='text-sm'>jothikact@gmail.com</p>
          </Card>
          <Card className='w-full'>
          <div className="mb-4 ml-9 mt-10">
              <p className="text-base text-blue-gray-800 text-left">
                Full Name : 
              </p>
          </div>
          <div className="mb-4 ml-9 mt-4">
              <p className="text-base text-blue-gray-800 text-left">
                Email : 
              </p>
            </div>
            <div className="mb-4 ml-9 mt-4">
              <p className="text-base text-blue-gray-800 text-left">
                Description : 
              </p>
            </div>
            <div className='flex mt-9'>
              <div className='flex ml-9 w-1/4'>
                <ExpertEditProfile/>
              </div>
              <div className='w-3/4'>
                <ChangePassword/>
              </div>
            </div>
          </Card>   
        </div>

        <div className='flex h-64 mt-5 mx-40'>
          <Card className='w-3/5 me-5 flex '>
          <div className="mb-4 ml-9 mt-14">
            <img
            src={TwitterImg} alt='' className='h-5'/>
          </div>
          <div className="mb-4 ml-4 mt-3">
          <img
            src={InstagramImg} alt='' className='h-9'/>
          </div>
          <div className="mb-4 ml-9 mt-3">
          <img
            src={FacebookImg} alt='' className='h-5'/>
          </div>          
          </Card>
          <Card className='w-full flex'>
          <div className='flex flex-row mx-14 mt-10 h-44'>
            <Card className=' w-1/3 me-4'>
              <img
              src={DrCrtfct1}
              className='h-full'/>
            </Card>
            <Card className=' w-1/3 me-4'>
              <img
              src={DrCrtfct2}
              className='h-full'/>
            </Card>
            <Card className=' w-1/3 me-4'>
              <img
              src={DrCrtfct3}
              className='h-full'/>
            </Card>
          </div>
          </Card>
        </div>
    </div>
    </>
  )
}

export default ProfileExpert