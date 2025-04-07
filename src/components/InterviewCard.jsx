import React from 'react'
import { useNavigate } from 'react-router-dom'

const InterviewCard = ({ language, image, description, id, category}) => {

    const navigate = useNavigate();
  
    const handleInterviewClick = () => {
        navigate(`/quiz`, {
            state : {
                id, 
                language,
                image,
                description,
                category
            }
        });
    };

  return (
    <div className='bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 
                border border-gray-700/50 shadow-lg 
                hover:bg-gray-700/50 transition-all duration-300 
                group relative overflow-hidden'>

        <div className='flex justify-center mt-2 mb-8 relative'>
            <img 
                src={`./card-svg/${image}.svg`} 
                alt={`Interview Card ${language}`} 
                className='w-20 md:w-28 transition-transform duration-500 
                        drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]'
            />
        </div>

        <div className='mb-3'>
            <h2 className='text-xl md:text-2xl font-medium text-white 
                        tracking-wide flex items-center gap-2'>
                {language}
                <span className='px-2 py-0.5 text-sm bg-gray-700/50 
                            rounded-lg border border-gray-600/50 
                            text-gray-300'>
                    Interview
                </span>
            </h2>
        </div>

        <div className='mb-8'>
            <p className='text-gray-300 leading-relaxed'>
                {description}
            </p>
        </div>


        <div className='flex justify-end'>
            <button 
                className='group/btn flex items-center gap-2 px-4 py-2.5 
                        bg-gray-700/50 hover:bg-gray-600/50 
                        rounded-xl border border-gray-600/50 
                        transition-all duration-300 text-gray-200 
                        hover:border-gray-500'
                onClick={handleInterviewClick}>
                Try Interview Now 
                <i className="ri-share-forward-line transition-transform 
                            duration-300 group-hover/btn:translate-x-1"></i>
            </button>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-transparent 
                    to-gray-800/20 pointer-events-none">
        </div>
    </div>
  )
}

export default InterviewCard