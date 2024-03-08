import { Avatar, Badge, Button, Card } from '@material-tailwind/react'
import React from 'react'

function ProfileExpert() {
  return (
    <>
    <div className='mt-20 container lg:mx-auto'>
      
        <div className='flex h-96 mb-5'>
          <Card className='w-2/5 me-5 flex justify-center items-center'>
          <Avatar className='-mt-16 mb-5' src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl" />
            <p className='capitalize font-bold text-gray-900'>Jothika Ct</p>
            <p className='text-sm'>jothikact@gmail.com</p>
          </Card>
          <Card className='w-full'>
          sd
          </Card>
          
        </div>

        <div className='flex h-3/4 mt-5'>
          <Card className='w-2/5 me-5 flex justify-center items-center'>
           
          </Card>
          <Card className='w-full'>
          sd
          </Card>
          
        </div>
    </div>
    </>
  )
}

export default ProfileExpert