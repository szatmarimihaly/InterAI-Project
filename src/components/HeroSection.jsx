import React from 'react'
import "remixicon/fonts/remixicon.css";
import { useNavigate } from 'react-router-dom';

const HeroSection = ({ username }) => {

  const navigate = useNavigate();

  const handleInterviewClick = () => {
    navigate('/interview');
  };

  return (
    <div className="mt-20 flex flex-col items-center gap-10">
      <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-300 to-gray-500/50 
                    text-transparent bg-clip-text">
          Welcome, {username}
      </h1>
      <button
      className='group flex items-center gap-2 px-6 py-2.5 bg-gray-800/40 backdrop-blur-sm rounded-xl border-gray-700/50 shadow-lg hover:bg-gray-700/50 transition-all duration-300 text-gray-200 font-medium'
      onClick={handleInterviewClick}
      >
        Start Interview Now
      </button>
    </div>
  )
}

export default HeroSection
