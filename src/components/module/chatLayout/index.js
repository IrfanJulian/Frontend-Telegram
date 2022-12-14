import React from 'react'
import iconUser from '../../../assets/jamesroot.jpg'
import iconMenu from '../../../assets/Profile menu.png'
import iconAdd from '../../../assets/iconplus.png'
import iconEmoticon from '../../../assets/iconemoticon.png'
import iconRecord from '../../../assets/iconrecord.png'
import iconUser2 from '../../../assets/tim.jpg'
import imagesent from '../../../assets/slipknot.jpg'
import { Link } from 'react-router-dom'

const ChatLayout = () => {
  return (
    <div className='w-full border border-l-2'>
        <div className='flex h-1/6 w-full px-20 bg-white'>
            <img src={iconUser} alt="user" className='rounded-3xl my-auto w-[4.5rem] h-[4.5rem]' />
            <div className="name pl-5 my-auto">
                <p className='text-2xl font-semibold'>Irfan Julian Ibrahim</p>
                <p className='text-lg text-[#7E98DF]'>Online</p>
            </div>
            <div className="icon my-auto ml-auto">
                <button><img src={iconMenu} className='w-[1.5rem] h-[1.5rem]' alt="menu" /></button>
            </div>
        </div>
        <div className="grid h-4/6 w-full overflow-y-auto px-20 py-10">

            <div className="myMessage flex ml-auto h-min">
                <div className="wrapperChat border p-5 rounded-tr-[30px] rounded-l-[30px] w-[30rem] bg-white">
                    <p className='text-md text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officiis, aspernatur quod sapiente quae iste hic sint expedita ipsum repellat.</p>
                </div>
                <img src={iconUser2} alt="user" className='w-[3.5rem] h-[3.5rem] rounded-xl ml-5 mt-auto' />
            </div>
            <div className="anyOneElseMessage h-min flex">
                <img src={iconUser} alt="user" className='w-[3.5rem] h-[3.5rem] rounded-xl mr-5 mt-auto' />
                <div className="wrapperChat border p-5 rounded-tl-[30px] rounded-r-[30px] w-[30rem] bg-[#7E98DF]">
                    <p className='text-md text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti expedita vero minima similique omnis sit?</p>
                </div>
            </div>

            <div className="myMessage flex ml-auto h-min">
                <div className="wrapperChat border p-5 rounded-tr-[30px] rounded-l-[30px] w-[30rem] bg-white">
                    <p className='text-md text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officiis, aspernatur quod sapiente quae iste hic sint expedita ipsum repellat.</p>
                </div>
                <img src={iconUser2} alt="user" className='w-[3.5rem] h-[3.5rem] rounded-xl ml-5 mt-auto' />
            </div>
            <div className="anyOneElseMessage h-min flex">
                <img src={iconUser} alt="user" className='w-[3.5rem] h-[3.5rem] rounded-xl mr-5 mt-auto' />
                <div className="wrapperChat border p-1 rounded-tl-[30px] rounded-r-[30px] w-[30rem] bg-[#7E98DF]">
                    <Link to={'////res.cloudinary.com/ddpo9zxts/image/upload/v1671039652/slipknot3018_v35wpo.png'}>
                        <img src={imagesent} alt="img" className='w-[30rem] h-[18rem] rounded-[30px]' />
                    </Link>
                </div>
            </div>

            <div className="myMessage flex ml-auto h-min">
                <div className="wrapperChat border p-5 rounded-tr-[30px] rounded-l-[30px] w-[30rem] bg-white">
                    <p className='text-md text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officiis, aspernatur quod sapiente quae iste hic sint expedita ipsum repellat.</p>
                </div>
                <img src={iconUser2} alt="user" className='w-[3.5rem] h-[3.5rem] rounded-xl ml-5 mt-auto' />
            </div>
            <div className="anyOneElseMessage h-min flex">
                <img src={iconUser} alt="user" className='w-[3.5rem] h-[3.5rem] rounded-xl mr-5 mt-auto' />
                <div className="wrapperChat border p-5 rounded-tl-[30px] rounded-r-[30px] w-[30rem] bg-[#7E98DF]">
                    <p className='text-md text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti expedita vero minima similique omnis sit?</p>
                </div>
            </div>

            <div className="myMessage flex ml-auto h-min">
                <div className="wrapperChat border p-5 rounded-tr-[30px] rounded-l-[30px] w-[30rem] bg-white">
                    <p className='text-md text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officiis, aspernatur quod sapiente quae iste hic sint expedita ipsum repellat.</p>
                </div>
                <img src={iconUser2} alt="user" className='w-[3.5rem] h-[3.5rem] rounded-xl ml-5 mt-auto' />
            </div>
            <div className="anyOneElseMessage h-min flex">
                <img src={iconUser} alt="user" className='w-[3.5rem] h-[3.5rem] rounded-xl mr-5 mt-auto' />
                <div className="wrapperChat border p-5 rounded-tl-[30px] rounded-r-[30px] w-[30rem] bg-[#7E98DF]">
                    <p className='text-md text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti expedita vero minima similique omnis sit?</p>
                </div>
            </div>

            <div className="myMessage flex ml-auto h-min">
                <div className="wrapperChat border p-5 rounded-tr-[30px] rounded-l-[30px] w-[30rem] bg-white">
                    <p className='text-md text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officiis, aspernatur quod sapiente quae iste hic sint expedita ipsum repellat.</p>
                </div>
                <img src={iconUser2} alt="user" className='w-[3.5rem] h-[3.5rem] rounded-xl ml-5 mt-auto' />
            </div>
            <div className="anyOneElseMessage h-min flex">
                <img src={iconUser} alt="user" className='w-[3.5rem] h-[3.5rem] rounded-xl mr-5 mt-auto' />
                <div className="wrapperChat border p-5 rounded-tl-[30px] rounded-r-[30px] w-[30rem] bg-[#7E98DF]">
                    <p className='text-md text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti expedita vero minima similique omnis sit?</p>
                </div>
            </div>

        </div>
        <div className='flex h-1/6 w-full px-20 bg-white'>
            <input type="text" name='message' className='py-3 h-[4rem] rounded-l-xl w-full px-8 bg-[#f5f5f5] my-auto' placeholder='Type your message...' />
            <button className='h-[4rem] my-auto px-8 bg-[#f5f5f5]' ><img src={iconAdd} alt="" /></button>
            <button className='h-[4rem] my-auto bg-[#f5f5f5]' ><img src={iconEmoticon} alt="" /></button>
            <button className='h-[4rem] my-auto rounded-r-xl px-8 bg-[#f5f5f5]' ><img src={iconRecord} alt="" /></button>
        </div>
    </div>
  )
}

export default ChatLayout