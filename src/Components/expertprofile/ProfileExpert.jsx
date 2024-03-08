import { Badge, Button } from '@material-tailwind/react'
import React from 'react'

function ProfileExpert() {
  return (
    <>
    <div className='grid'>
        {/* <div className='justify-center font-serif text-center text-4xl mt-5 text-deep-purple-900'>
            Profile
        </div> */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }} className='h-96 md:grid-cols-2 mt-20'>
            <div className=''>
                <div className='ml-60'>
                    <Badge
                        className="w-28 h-28 bg-white hover:bg-pink-200 border border-white mt-10"
                        overlap="circular"
                    //   content={<ChangeDp next = { getUserData} />}
                    >
                    </Badge>
                </div>
            </div>
            <div className=''>
                <div className="md:flex-row mt-5">
                    <div className="mb-6">
                        <p className="text-base text-blue-gray-800 text-left">
                            Full Name : 
                        </p>
                    </div>
                    <div className="mb-6">
                        <p className="text-base text-blue-gray-800 text-left">
                            Email : 
                        </p>
                    </div>
                    <div className="mb-6">
                        <p className="text-base text-blue-gray-800 text-left">
                            Phone : 
                        </p>
                    </div>
                    <div className="mb-6">
                        <p className="text-base text-blue-gray-800 text-left">
                            Address : 
                        </p>
                    </div>
                    <div>
                        <Button>Edit</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProfileExpert