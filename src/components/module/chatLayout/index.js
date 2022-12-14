import React from 'react'
import iconUser from '../../../assets/jamesroot.jpg'
import iconMenu from '../../../assets/Profile menu.png'
import iconAdd from '../../../assets/iconplus.png'
import iconEmoticon from '../../../assets/iconemoticon.png'
import iconRecord from '../../../assets/iconrecord.png'

const ChatLayout = () => {
  return (
    <div className='w-full'>
        <div className='flex h-[8rem] w-full px-20 bg-white'>
            <img src={iconUser} alt="user" className='rounded-3xl my-auto w-[4.5rem] h-[4.5rem]' />
            <div className="name pl-5 my-auto">
                <p className='text-2xl font-semibold'>Irfan Julian Ibrahim</p>
                <p className='text-lg text-[#7E98DF]'>Online</p>
            </div>
            <div className="icon my-auto ml-auto">
                <button><img src={iconMenu} className='w-[1.5rem] h-[1.5rem]' alt="menu" /></button>
            </div>
        </div>
        <div className="chatting h-5/6 grid mt-8">
            <div className="message border border-red-700 h-full">
                <div className="myMessage flex">

                </div>
            </div>
            <div className='flex h-[8rem] w-full px-20 bg-white'>
                <input type="text" className='h-[4rem] w-full bg-[#f5f5f5] px-8 outline-none my-auto rounded-l-xl' placeholder='Type your message...' />
                <button className='h-[4rem] bg-[#f5f5f5] my-auto px-4'><img src={iconAdd} alt="" /></button>
                <button className='h-[4rem] bg-[#f5f5f5] my-auto px-4'><img src={iconEmoticon} alt="" /></button>
                <button className='h-[4rem] bg-[#f5f5f5] my-auto pl-4 pr-8 rounded-r-xl'><img src={iconRecord} alt="" /></button>
            </div>
        </div>
    </div>
  )
}

export default ChatLayout