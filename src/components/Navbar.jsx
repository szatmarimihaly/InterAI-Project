import React from 'react'
import "remixicon/fonts/remixicon.css";

const Navbar = ({ onClick, text }) => {
  return (
    <div className='flex items-center justify-between w-full mr-4 ml-4 mt-4'>
      <img src="./interai_logo_white_no_bg.png" alt="InterAI Logo" className="w-30"/>

      <button 
      className="group/btn flex items-center gap-2 px-4 py-2.5 
               bg-gray-700/50 hover:bg-gray-600/50 
                rounded-xl border border-gray-600/50 
                transition-all duration-300 text-gray-200 
                hover:border-gray-500" 
      onClick={onClick}>{text} <i class="ri-arrow-go-back-line"></i></button>
    </div>
  )
}

export default Navbar