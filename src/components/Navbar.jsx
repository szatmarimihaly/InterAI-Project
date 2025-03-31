import React from 'react'
import "remixicon/fonts/remixicon.css";

const Navbar = ({ username }) => {
  return (
    <div className='flex items-center justify-between w-full mr-4 ml-4 mt-4'>
      <img src="./interai_logo_white_no_bg.png" alt="InterAI Logo" className="w-30"/>
      
      <div className='flex items-center gap-2'>
        <i class="ri-id-card-line text-2xl"></i>
        <p classname="text-xl"> {username}</p>
      </div>
    </div>
  )
}

export default Navbar