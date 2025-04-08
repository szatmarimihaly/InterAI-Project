// pages/Quiz.js (frissített verzió)
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import QuizGame from '../components/quiz/QuizGame'
import QuizResults from '../components/quiz/QuizResults';

const Quiz = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const cardData = location.state;

    if(!cardData) {
        navigate("/interview");
        return null;
    }

    const [quizSettings, setQuizSettings] = useState({
        difficulty: "beginner",
        questionCount: 5
    });
    
    const [quizState, setQuizState] = useState('setup'); // 'setup', 'playing', 'results'
    const [quizResults, setQuizResults] = useState([]);

    const startQuiz = () => {
        setQuizState('playing');
    };

    const completeQuiz = (results) => {
        setQuizResults(results);
        setQuizState('results');
    };

    const restartQuiz = () => {
        setQuizState('setup');
        setQuizResults([]);
    };

    return (
        <div className='min-h-screen p-4'>
            <div className='flex items-center justify-between py-4 px-4 mb-8'>
                <img 
                src="./interai_logo_white_no_bg.png" 
                alt="InterAI Logo"
                className='w-30 md:w-40'
                />
                <div className='flex items-center gap-2'>
                    <div className='px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 shadow-lg'>
                        <span className='text-[12px] md:text-lg text-white'>
                            Interview | {cardData.language}
                        </span>
                    </div>
                </div>
            </div>

            {/* Quiz Content based on state */}
            {quizState === 'setup' && (
                <div className='max-w-2xl mx-auto bg-gray-700/40 backdrop-blur-sm border border-gray-600/50 rounded-xl p-6 shadow-lg flex flex-col items-center gap-4'>
                    <div className='flex items-center gap-4'>
                        <img 
                        src={`./card-svg/${cardData.image}.svg`} 
                        alt={`${cardData.language} Card`}
                        className='w-8 h-8 md:w-12 md:h-12 ' 
                        />
                        <h2 className='text-xl md:text-4xl text-white'>Quiz Settings</h2>
                    </div>

                    {/* SELECT DIFFICULTY HERE */}
                    <div className="mb-2 md:mb-8 w-full">
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
                
                    {/* SELECT NUMBER OF QUESTIONS HERE */}
                    <div className="mb-2 md:mb-8 w-full">
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
                        className="px-10 py-3 bg-gray-800/50 hover:bg-gray-700/40 flex gap-2 
                                hover:gap-4 transition-all duration-400 rounded-xl border 
                                border-gray-700/40 hover:border-gray-600/40 text-white"
                        onClick={startQuiz}
                    >
                        Start Quiz
                        <i className="ri-send-plane-fill"></i>
                    </button>
                </div>
            )}

            {quizState === 'playing' && (
                <QuizGame 
                    settings={{
                        cardData,
                        ...quizSettings
                    }} 
                    onComplete={completeQuiz} 
                />
            )}

            {quizState === 'results' && (
                <QuizResults 
                    results={quizResults} 
                    onRestart={restartQuiz} 
                />
            )}
        </div>
    );
};

export default Quiz;