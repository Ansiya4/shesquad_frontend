import { Avatar, Badge, Card } from '@material-tailwind/react'
import { CiSearch } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import Bgimage from '../../assets/Image/ConnectToPeople.avif'
import { jwtDecode } from 'jwt-decode';

import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { api } from '../../AxiosUtils/AxiosUtils';
import { wsApiUrl } from '../../api/api';
import { StickyNavbar } from '../../Components/navbar/Navbar'
import { GetChatuserListUserSide } from '../../services/services';
import { w3cwebsocket } from 'websocket';

function UserChatPage() {
    const token = localStorage.getItem('token')
    const decoded = jwtDecode(token);

    const location = useLocation();
    const user_id = location.state && location.state.user_id;   
    const UserInfo = decoded
    const [clientstate, setClientState] = useState("");
    const [search, setSearch] = useState('')
    const [SearchList, setSearchList] = useState([]);
    const [messages, setMessages] = useState([]);
    const [senderdetails, setsenderdetails] = useState(UserInfo);
    const [recipientdetails, setrecipientdetails] = useState();
    const messageRef = useRef();

    // Fetch ExpertsData
    const Expertslist = async () => {
        try {
            const res = await GetChatuserListUserSide(user_id ? user_id : UserInfo.user_id);
            if (res.status === 200) {
                setSearchList(res.data);
            }
        } catch (error) { }
    };
    useEffect(() => {
        Expertslist()
    }, [])

    // Chatting Function
    const onSubmit = (e) => {
        e.preventDefault();
        if (messageRef.current.value.trim() == "") {
            return;
        }
        clientstate.send(
            JSON.stringify({
                message: messageRef.current.value,
                senderUsername: senderdetails.email,
                receiverUsername: recipientdetails.email,
            })
        );
        messageRef.current.value = "";
    };

    const setUpChat = () => {
        if (!senderdetails.user_id || !recipientdetails?.id) {
            return;
        }
        api
            .get(
                `chat/user-previous-chats/${senderdetails.user_id}/${recipientdetails.id}/`
            )
            .then((response) => {
                if (response.status == 200) {
                    setMessages(response.data);
                }
            });
        const client = new w3cwebsocket(
            `${wsApiUrl}/ws/chat/${senderdetails.user_id}/?${recipientdetails.id}`
        );
        setClientState(client);
        client.onopen = () => {
            console.log("WebSocket Client Connected");
        };
        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            if (dataFromServer) {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                        message: dataFromServer.message,
                        sender_email: dataFromServer.senderUsername,
                    },
                ]);
            }
        };

        client.onclose = () => {
            console.log("Websocket disconnected", event.reason);
        };

        return () => {
            client.close();
        };
    };

    useEffect(() => {
        if (senderdetails.user_id && recipientdetails?.id) {
            setUpChat();
        }
        if (messageRef.current) {
            messageRef.current.scrollTop = messageRef.current.scrollHeight;
        }
    }, [senderdetails, recipientdetails?.id]);

    return (
        <>
            <div className='h-screen'>
                <StickyNavbar />
                <Card className=' p-5  bg-gray-300 grid grid-cols-[20rem,1fr] overflow-hidden'>
                    <div className='grid grid-rows-[3rem,4rem,1fr]'>
                        <div className='flex justify-center items-center w-full'>
                            <div className='relative w-full'>
                                <input
                                    type="text"
                                    className='w-full rounded-lg h-12 bg-gray-50 shadow-xl focus:outline-none pl-3 pr-10' // Adjusted ps-3 to pl-3 and added pr-10
                                    placeholder='Search'
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                {search ? (
                                    <IoClose
                                        className='absolute top-0 right-0 mt-4 mr-3 cursor-pointer'
                                        onClick={() => setSearch('')}
                                    />
                                ) : (
                                    <IoSearch className='absolute top-0 w-6 h-6 right-0 text-gray-600 mt-3 mr-3 cursor-pointer' />
                                )}
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <p className='text-xl font-bold text-black'>Chat</p>
                        </div>
                        <div className='overflow-y-auto rounded-lg bg-white h-[43rem] '>
                            {SearchList.map((userlist) => (
                                <div className={`${recipientdetails?.id === userlist.id ? 'h-16 m-2 px-2 bg-gray-200 grid grid-cols-[3rem,1fr,3rem] cursor-pointer rounded-lg' : 'h-16 m-2 px-2 bg-white grid grid-cols-[3rem,1fr,3rem] cursor-pointer hover:rounded-lg hover:bg-gray-100'}`}
                                    onClick={() => setrecipientdetails({
                                        email: userlist.expert.email,
                                        id: userlist.expert.id,
                                        profile_picture: userlist.expert.profile_picture,
                                        first_name: userlist.expert.first_name,
                                        last_name: userlist.expert.last_name
                                    })}>
                                    <div className='flex justify-center items-center'>
                                        <Badge overlap="circular" color="green" placement="bottom-end">
                                            <Avatar
                                                src={userlist.expert.profile_picture ? userlist.expert.profile_picture : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"}
                                                alt="profile picture"
                                            />
                                        </Badge>
                                    </div>

                                    <div className='m-3'>
                                        <p className='text-black text-sm capitalize'>{userlist.expert.first_name} {userlist.expert.first_name}</p>
                                        <p className='text-gray-800 text-xs'>You: Parada</p>
                                    </div>

                                    <div className='flex justify-center items-center'>
                                        <Badge content="">
                                        </Badge>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    {recipientdetails ? (<div className='grid grid-rows-[4rem,1fr,6rem] overflow-hidden'>
                        <div className='border-b-2  grid grid-cols-[5rem,1fr,7rem]'>
                            <div className='flex justify-center '>
                                <Badge overlap="circular" className='mb-3' color="green" placement="bottom-end">
                                    <Avatar
                                        src={recipientdetails.profile_picture ? recipientdetails.profile_picture : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"}
                                        alt="profile picture"
                                    />
                                </Badge>
                            </div>
                            <div className='text-black ms-2'>
                                <p className='text-lg font-bold capitalize'>{recipientdetails.first_name} {recipientdetails.last_name}</p>
                                <p className='text-xs text-gray-600'>{recipientdetails.email}</p>
                            </div>
                            <div className='flex justify-center mt-2'>
                                <CiSearch className='w-8 h-8 ps-2' />
                                <IoCallOutline className='w-8 h-8 ps-2' />
                                <CiMenuKebab className='w-8 h-8 ps-2' />
                            </div>
                        </div>
                        <div className='overflow-y-auto overflow-x-hidden w-full'>


                            {messages.map((message, index) =>
                                senderdetails.email === message.sender_email ? (
                                    <>
                                        <div className='w-full flex justify-end gap-2' key={index}>
                                            <p className='bg-purple-300 py-1 px-2 max-w-md text-white my-1 rounded-s-md rounded-t-md'>{message.message}</p>
                                            <Avatar
                                                className='w-7 h-7'
                                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                                                alt="profile picture"
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className='w-full flex justify-start gap-2 ms-2' key={index}>
                                            <Avatar
                                                className='w-7 h-7'
                                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                                                alt="profile picture"
                                            />
                                            <p className='flex bg-white py-1 px-2 text-black max-w-md rounded-e-md my-1 rounded-t-md'>{message.message}</p>
                                        </div>

                                    </>
                                )
                            )}
                        </div>
                        <div className='flex justify-center items-start w-full pt-2'>
                            <form className='bg-white grid grid-cols-[3.5rem,1fr,3.5rem] w-full h-14 ms-5 rounded-xl shadow-xl'
                                onSubmit={onSubmit}>
                                <div className='flex justify-center items-center text-gray-800 bg-gray-300 m-2 rounded-lg'>
                                    <FaPlus />
                                </div>
                                <div>
                                    <input
                                        ref={messageRef}
                                        type="text"
                                        placeholder='Type a message here'
                                        className='focus:outline-none h-full w-full ps-2' />
                                </div>
                                <button type='submit' className='flex justify-center items-center bg-purple-300 text-white m-2 rounded-lg'>
                                    <IoIosSend className='w-6 h-6' />
                                </button>
                            </form>
                        </div>
                    </div>) : (
                        <div
                            className='bg-cover ms-5 rounded-lg'
                            style={{
                                backgroundImage: `url(${Bgimage})`,
                            }}>
                        </div>
                    )}
                </Card>
            </div>


        </>
    )
}

export default UserChatPage