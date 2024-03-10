import React, { useEffect, useState } from 'react'
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
import { AddToChat, GetCategorylist, GetExpertsCategoryWise } from '../../services/services'
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom'


function UserHomePage() {
  const navigate = useNavigate('')
  const token = localStorage.getItem('token')
  const decoded = jwtDecode(token);
  const [list, setList] = useState([])
  const [search, setSearch] = useState('')
  const [expertlist, setExpertslist] = useState([])
  // Fetch Category details
  const GetCategorylistuserSide = async () => {
    try {
      const res = await GetCategorylist()

      if (res.status === 200) {
        setList(res.data.filter(item => item.is_listed));
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Fetch Expertlist
  const GetExpertList = async (cat_id = '') => {
    const res2 = await GetExpertsCategoryWise(cat_id)
    setExpertslist(res2.data)
  }

  // AddToCaht
  const PostAddToChat = async(expert_id)=>{
     try {
      const res3 = await AddToChat({"user":decoded.user_id,"expert":expert_id})
      if (res3.status===201){
        navigate('/chat')
      }
     } catch (error) {
      console.log(error);
      if (error.response.data.non_field_errors[0]){
        navigate('/chat')
      }
     }
  }

  useEffect(() => {
    GetCategorylistuserSide()
    GetExpertList()
  }, [])
  return (
    <div className='w-full h-auto bg-pink-50'>
      <div className='bg-deep-purple-900'>
        <StickyNavbar />
      </div>
      <div className='bg-red-400 w-full h-[50rem]' style={{ backgroundImage: `url(${BgImg})` }}>
      </div>
      <div className='mt-10 h-auto container mx-auto'>
        <h1 className='font-bold my-3 text-3xl font-serif text-indigo-900'>CATEGORY OVERVIEW</h1>
        {/* Search */}

        <div className="flex mt-10 overflow-auto">
          {list.map((i, index) => (
            <div className="me-7" onClick={() => GetExpertList(i.id)} key={index}><UserHomeCard data={i} /></div>
          ))}
        </div>
      </div>

      <div className='w-full container mx-auto mt-10'>
        <h1 className='font-bold text-3xl font-serif text-indigo-900'>EXPERTS LIST</h1>
      </div>
      <div className='w-full container mx-auto mt-6 overflow-x-scroll'>
        <Card className="max-h-96">
          <List>
            {expertlist.map((i, index) => (
              <ListItem key={index} className='grid grid-cols-[6rem,1fr,1fr,1fr]'>
                <ListItemPrefix>
                  <Avatar variant="circular" alt="candice" src={i.profile_picture? i.profile_picture :  "https://docs.material-tailwind.com/img/face-1.jpg"} />
                </ListItemPrefix>
                <div>
                  <Typography variant="h6" color="blue-gray">
                    {i.first_name} {i.last_name}
                  </Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                    {i.email} 
                  </Typography>
                </div>
                <div>
                {i.category.cat_name} 
                </div>
                <div className='flex justify-end me-7'>
                  <button className='text-white p-2 rounded-lg bg-green-600 font-bold' onClick={()=>PostAddToChat(i.id)}>Message</button>
                </div>
              </ListItem>
            ))}


          </List>
        </Card>
      </div>
      <div className='mt-20'><FooterWithSocialLinks /></div>
    </div>
  )
}

export default UserHomePage