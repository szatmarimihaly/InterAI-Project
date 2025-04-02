import React from 'react'
import { useNavigate } from 'react-router-dom'

const InterviewCard = ({ language, image, description, id}) => {

    const navigate = useNavigate();
  
    const handleInterviewClick = () => {
        navigate(`/interview/${language.toLowerCase()}`);
    };

  return (
    <div className='bg-gray-800 rounded-xl p-4'>
        <div className='flex justify-center mt-6'>
            <img 
            src={`./card-svg/${image}.svg`} 
            alt={`Interview Card ${language}`} 
            className='w-20 md:w-30 mb-10'/>
        </div>

        <div className='mb-2 md:text-2xl'>
            <h2 className=''>{language}</h2>
        </div>

        <div>
            <p className='mb-10'>{description}</p>
        </div>

        <div className='flex justify-end mr-4 mb-4'>
        <button 
        className='btn btn-dash btn-secondary'
        onClick={handleInterviewClick}>
            Try Interview Now <i class="ri-share-forward-line"></i>
        </button>
        </div>

    </div>
  )
}

export default InterviewCard