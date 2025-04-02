import React from 'react'
import { useNavigate } from 'react-router-dom'
import HomeCard from '../components/HomeCard';

const Home = () => {

  const navigate = useNavigate();

  const goToSign = () => {
    navigate("/sign-up")
  };

  return (
    <div classname = "flex flex-col items-center">
      <header className='flex justify-between items-center py-6 px-3'>
        <img src="./interai_logo_white_no_bg.png" alt="InterAI Logo" className='w-30 md:w-40'/>
        <button 
              className='group/btn flex items-center gap-2 px-4 py-2.5 
                      bg-gray-700/50 hover:bg-gray-600/50 
                      rounded-xl border border-gray-600/50 
                      transition-all duration-300 text-gray-200 
                      hover:border-gray-500'
              onClick={goToSign}
        >
          Sign Up 
        </button>
      </header>

      <div className="relative text-center py-16 md:py-24">

        <div className="absolute inset-0 bg-gradient-to-r 
                        from-transparent via-gray-800/10 to-transparent" />
    
        <h1 className="relative inline-block">
          <span className="block text-4xl md:text-6xl font-bold 
                          text-white tracking-tight leading-tight mb-4">
              Master Your Interview
          </span>
          <span className="block text-2xl md:text-4xl text-gray-400 
                          font-light mt-2">
              With{" "}
              <span className="inline-block font-medium 
                             bg-gradient-to-r from-gray-200 to-gray-400 
                             bg-clip-text text-transparent">
                  AI Powered
              </span>
              {" "}Practice
            </span>
        
            <div className="h-[2px] w-full mt-4 
                           bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
          </h1>
        </div>
      
        <HomeCard/>

      </div>
      
  )
}

export default Home