import React from 'react'
import "remixicon/fonts/remixicon.css";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

  const navigate = useNavigate();

  const handleInterviewClick = () => {
    navigate('/interview');
  }

  return (
    <div className='mt-20'>
      <h1 className='text-5xl lg:text-5xl text-center mr-1 ml-1 lg:mr-30 lg:ml-30' >Welcome, to the <span className='text-6xl lg:text-6xl hero-gradient'>World of AI</span> Powered Interviews</h1>
      <h3 className='text-center mt-6'>Start generating insightful interview questions today and take your preparation or hiring process to the next level with AI!</h3>
      <div className='flex items-center justify-center mt-10 gap-2 lg:gap-10 chat'>
        <button className="btn btn-dash btn-secondary" onClick={handleInterviewClick}>Interviews <i class="ri-arrow-right-s-line"></i></button>
      </div>
    </div>
  )
}

export default HeroSection
