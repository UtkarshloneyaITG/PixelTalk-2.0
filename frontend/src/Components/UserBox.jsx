import React from 'react'

const UserBox = ({username,status,img}) => {
  return (
    <div className='bg-[#3f3f46ce] mx-3 px-3 py-2 flex items-center gap-3 rounded-3xl user-box backdrop-blur-md cursor-pointer'>
      <div className='user-dp bg-zinc-400 text-center'>
        <img/>
      </div>
      <div className='user-info text-xl py-1'>
        Username
        <p className='status text-[13.5px] -mt-0.5 text-zinc-400'>online</p>
      </div>
    </div>
  )
}

export default UserBox;
