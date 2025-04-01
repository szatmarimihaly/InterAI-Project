import React from 'react'
import "remixicon/fonts/remixicon.css";

const Navbar = ({ onClick, text }) => {
  return (
    <div className='flex items-center justify-between w-full mr-4 ml-4 mt-4'>
      <img src="./interai_logo_white_no_bg.png" alt="InterAI Logo" className="w-30"/>
      
      <button className=" flex items-center btn btn-soft btn-error" onClick={onClick}>{text} <i class="ri-arrow-go-back-line"></i></button>
    </div>
  )
}

export default Navbar