import React from 'react'
import menu from '../../../assets/menu.png'
import search from '../../../assets/Search.png'
import addLogo from '../../../assets/Plus.png'
import Chat from '../../module/chat/content'
import iconUser from '../../../assets/jamesroot.jpg'

const Side = () => {
  return (
    <div className='w-1/4 h-screen py-16 px-14 bg-white'>
        <div className="flex">
            <p className='text-3xl font-semibold text-[#7E98DF]'>Telegram</p>
            <button className='my-auto ml-auto'>
                <img src={menu} alt="menu" className='h-[1.5rem] w-[2rem]' />
            </button>
        </div>
        <form action="" className='mt-16 mb-10 flex'>
            <button className='py-5 pl-3 bg-[#f5f5f5] rounded-l-xl'><img src={search} alt="search" /></button>
            <input type="text" className='bg-[#f5f5f5] w-3/4 py-5 rounded-r-xl outline-none px-2 text-lg font-semibold' placeholder='Type your message...' />
            <button className='ml-3'><img src={addLogo} className='w-[2.5rem] h-[2rem]' alt="add" /></button>
        </form>
        <div className="flex mb-10">
            <button className='text-xl font-bold mr-auto'>All</button>
            <button className='text-xl font-bold mx-auto'>Importent</button>
            <button className='text-xl font-bold ml-auto'>Unread</button>
        </div>
        <div className="content h-4/6 overflow-y-auto">
            <Chat name='Irfan Julian' photo={iconUser} message='How are you dude?' time='15.35' notif='3' />
            <Chat name='Irfan Julian' photo={iconUser} message='How are you dude?' time='15.35' notif='3' />
            <Chat name='Irfan Julian' photo={iconUser} message='How are you dude?' time='15.35' notif='3' />
            <Chat name='Irfan Julian' photo={iconUser} message='How are you dude?' time='15.35' notif='3' />
            <Chat name='Irfan Julian' photo={iconUser} message='How are you dude?' time='15.35' notif='3' />
            <Chat name='Irfan Julian' photo={iconUser} message='How are you dude?' time='15.35' notif='3' />
            <Chat name='Irfan Julian' photo={iconUser} message='How are you dude?' time='15.35' notif='3' />
            <Chat name='Irfan Julian' photo={iconUser} message='How are you dude?' time='15.35' notif='3' />
            <Chat name='Irfan Julian' photo={iconUser} message='How are you dude?' time='15.35' notif='3' />
        </div>
    </div>
  )
}

export default Side