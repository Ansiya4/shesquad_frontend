import React from 'react'
import DashboardNavbar from '../../Components/navbar/DashboardNavbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
} from "@material-tailwind/react";
function Dashboard() {
  return (
    <div className='mt-4 ms-7 me-4 border h-[calc(100vh-8.5rem)] rounded-md px-5'>

      <div className='flex gap-8 container mx-auto' >
        <Card className="mt-6 w-96 py-5" style={{ backgroundColor: "#c8b6ff" }}>
          <div className='flex justify-center items-center text-black'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
              <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
            </svg>
          </div>

          <div className='flex justify-around'>
            <p className='font-bold text-black text-xl'>Total Users</p>
            <p className='font-bold text-black'>155</p>
          </div>

        </Card>
        <Card className="mt-6 w-96 py-5" style={{ backgroundColor: "#a7c957" }}>
          <div className='flex justify-center items-center text-black'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
              <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
            </svg>
          </div>

          <div className='flex justify-around'>
            <p className='font-bold text-black text-xl'>Expert Users</p>
            <p className='font-bold text-black'>155</p>
          </div>

        </Card>
        <Card className="mt-6 w-96 py-5 bg-red-300">
          <div className='flex justify-center items-center text-black'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
              <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
            </svg>

          </div>

          <div className='flex justify-around'>
            <p className='font-bold text-black text-xl'>Total Users</p>
            <p className='font-bold text-black'>155</p>
          </div>

        </Card>
      </div>
      <div className='w-full mt-10'>
        <p className='text-sm text-gray-600'>Last Logining</p>
        <Card className="">
          <List>
            <ListItem selected>
              <ListItemPrefix>
                <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" />
              </ListItemPrefix>
              <div className='w-full flex justify-between'>
                <div>
                  <Typography variant="h6" color="blue-gray">
                    Tania Andrew
                  </Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                    Software Engineer @ Material Tailwind
                  </Typography>
                </div>
                <div>
                  <Typography variant="small" color="gray" className="font-normal">
                    last Login
                  </Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                    10/10/10
                  </Typography>
                </div>
              </div>

            </ListItem>
            <ListItem selected>
              <ListItemPrefix>
                <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" />
              </ListItemPrefix>
              <div className='w-full flex justify-between'>
                <div>
                  <Typography variant="h6" color="blue-gray">
                    Tania Andrew
                  </Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                    Software Engineer @ Material Tailwind
                  </Typography>
                </div>
                <div>
                  <Typography variant="small" color="gray" className="font-normal">
                    last Login
                  </Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                    10/10/10
                  </Typography>
                </div>
              </div>

            </ListItem>
            <ListItem selected>
              <ListItemPrefix>
                <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" />
              </ListItemPrefix>
              <div className='w-full flex justify-between'>
                <div>
                  <Typography variant="h6" color="blue-gray">
                    Tania Andrew
                  </Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                    Software Engineer @ Material Tailwind
                  </Typography>
                </div>
                <div>
                  <Typography variant="small" color="gray" className="font-normal">
                    last Login
                  </Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                    10/10/10
                  </Typography>
                </div>
              </div>

            </ListItem>
            <ListItem selected>
              <ListItemPrefix>
                <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" />
              </ListItemPrefix>
              <div className='w-full flex justify-between'>
                <div>
                  <Typography variant="h6" color="blue-gray">
                    Tania Andrew
                  </Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                    Software Engineer @ Material Tailwind
                  </Typography>
                </div>
                <div>
                  <Typography variant="small" color="gray" className="font-normal">
                    last Login
                  </Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                    10/10/10
                  </Typography>
                </div>
              </div>

            </ListItem>
          </List>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard