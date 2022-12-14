import React from 'react'
import Side from '../../components/base/side'
import ChatLayout from '../../components/module/chatLayout'

const Home = () => {
  return (
    <div className='flex h-screen bg-[#FAFAFA]'>
      <Side />
      {/* <div className='w-full align-middle grid border-black'>
        <p className='text-xl text-gray-500 my-auto text-center'>Please Select a Chat to start messaging</p>
      </div> */}
      <ChatLayout />
    </div>
  )
}

export default Home

