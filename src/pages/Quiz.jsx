import { card } from '@heroui/react';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const Quiz = () => {
  
    const location = useLocation();
    const navigate = useNavigate();
    const cardData = location.state;

    if(!cardData) {
        navigate("/interview");
        return null;
    }

    const [quizSettings, setQuizSettings] = useState({
        difficulty : "beginner",
        questionCount : 5
    });

    return (
    
    <div className='min-h-screen p-4'>
        <div className='flex items-center justify-between py-4 px-4 mb-'>
            <img 
            src="./interai_logo_white_no_bg.png" 
            alt="InterAI Logo"
            className='w-30 md:w-40'
            />
            <div className='flex items-center gap-2'>
                <div className='px-4 py-2 bg-gray-800/50 blackdrop-blur-sm rounded-full border border-gray-700/50 shadow-lg'>
                    <span className='text-[12px] md:text-lg'>
                        Interview | {cardData.language}
                    </span>
                </div>
            </div>
        </div>

        {/*SETUP QUIZ PREP*/}
        <div className='mx-w-2xl mx-auto bg-gray-700/40 backdrop-blur-sm border border-gray-600/50 rounded-xl p-6 shadow-lg flex flex-col items-center gap-4'>
            <div className='flex items-center gap-4'>
                <img 
                src={`./card-svg/${cardData.image}.svg`} 
                alt={`${cardData.language} Card`}
                className='w-8 h-8 md:w-12 md:h-12 ' 
                />
                <h2 className='text-xl md:text-4xl'>Quiz Settings</h2>
            </div>

            {/*SELECT DIFFICULTY HERE*/}
            <div className="mb-2 md:mb-8">
                    <label className="block text-gray-300 mb-3 text-center">
                        Select Difficulty Level
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                        {['beginner', 'intermediate', 'expert'].map((level) => (
                            <button
                                key={level}
                                onClick={() => setQuizSettings(prev => ({
                                    ...prev,
                                    difficulty: level
                                }))}
                                className={`p-3 rounded-xl border transition-all duration-300 text-[11px] md:text-lg
                                    ${quizSettings.difficulty === level 
                                        ? 'bg-blue-800/40 border-blue-800/50 text-white' 
                                        : 'bg-gray-700/40 border-gray-600/50 text-gray-300 hover:bg-gray-600/50'}`}
                            >
                                {level.charAt(0).toUpperCase() + level.slice(1)}
                            </button>
                        ))}
                    </div>
            </div>
        
            {/*SELECT NUMBER OF QUESTIONS HERE*/}
            <div className="mb-2 md:mb-8">
                <label className="block text-gray-300 mb-3 text-center">
                    Number of Questions
                </label>
                <div className="grid grid-cols-3 gap-4">
                    {[5, 10, 15].map((count) => (
                        <button
                            key={count}
                            onClick={() => setQuizSettings(prev => ({
                                ...prev,
                                questionCount: count
                            }))}
                            className={`p-3 rounded-xl border transition-all duration-300 text-[10px] md:text-lg
                                ${quizSettings.questionCount === count 
                                    ? 'bg-blue-800/40 border-blue-800/50 text-white' 
                                    : 'bg-gray-700/40 border-gray-600/50 text-gray-300 hover:bg-gray-600/50'}`}
                            >
                                {count} Questions
                        </button>
                    ))}
                </div>
            </div>

            <button
                className="px-10 py-3 bg-gray-800/50 hover:bg-gray-700/40 flex gap-1 
                    hover:gap-2 transition-all duration-400 rounded-xl border border-gray-700/40 hover:border-gray-600/40"
                onClick={() => {
                    // Itt fogjuk majd elindítani a quiz-t
                    console.log('Starting quiz with settings:', {
                        ...quizSettings,
                        cardData
                    });
                }}
            >
                Start Quiz
                <i className="ri-arrow-right-line transition-transform 
                    duration-300 group-hover:translate-x-1"></i>
            </button>
            

        </div>
    </div>

  )
}

export default Quiz