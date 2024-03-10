import React from 'react'
import { StickyNavbar } from '../../Components/navbar/Navbar'
import BgImg from '../../assets/Image/womenpht3.jpg'
import { Card } from '@material-tailwind/react'
import { UserHomeCard } from '../../Components/userhomeCard/UserHomeCard'

import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { FooterWithSocialLinks } from '../Footer'


function UserHomePage() {
  return (
    <div className='w-full h-auto bg-pink-50'>
      <div className='bg-deep-purple-900'>
        <StickyNavbar/>
      </div>
      <div className='bg-red-400 w-full h-[50rem]' style={{ backgroundImage: `url(${BgImg})` }}>       
      </div>     
      <div className='mt-10 h-auto container mx-auto'>
       <div className='flex ml-20'>
       <h1 className='font-bold my-3 text-3xl font-serif text-indigo-900'>CATEGORY OVERVIEW</h1>
        {/* Search */}
       </div>
        
        <div className='flex items-center justify-center mt-10'>
        <div className='me-7'><UserHomeCard/></div>
        <div className='me-7'><UserHomeCard/></div>
        <div className=''><UserHomeCard/></div>
        {/* <Card className='bg-deep-orange-200 w-1/3 me-4'>1</Card>
        <Card className='bg-deep-orange-200 w-1/3 me-4'>2</Card>
        <Card className='bg-deep-orange-200 w-1/3 me-4'>3</Card>
        <Card className='bg-deep-orange-200 w-1/3'>4</Card> */}
        </div>
      </div>
      <div className='w-96 container mx-auto mt-6 overflow-x-scroll'>
      <Card className="h-96">
      <List>
        <ListItem>
          <ListItemPrefix>
            <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Tania Andrew
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Software Engineer @ Material Tailwind
            </Typography>
          </div>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Avatar variant="circular" alt="alexander" src="https://docs.material-tailwind.com/img/face-2.jpg" />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Alexander
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Backend Developer @ Material Tailwind
            </Typography>
          </div>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Avatar variant="circular" alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg" />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Emma Willever
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              UI/UX Designer @ Material Tailwind
            </Typography>
          </div>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Avatar variant="circular" alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg" />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Emma Willever
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              UI/UX Designer @ Material Tailwind
            </Typography>
          </div>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Avatar variant="circular" alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg" />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Emma Willever
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              UI/UX Designer @ Material Tailwind
            </Typography>
          </div>
        </ListItem>
      </List>
    </Card>
      </div>
      <div className='mt-20'><FooterWithSocialLinks/></div>
    </div>
  )
}

export default UserHomePage