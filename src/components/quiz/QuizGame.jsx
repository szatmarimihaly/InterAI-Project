// src/components/QuizGame.js
import React, { useState, useEffect } from 'react';
import questionsData from '../../data/questionsData'

const QuizGame = ({ settings, onComplete }) => {
    const { cardData, difficulty, questionCount } = settings;
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    
    // Kérdések betöltése
    useEffect(() => {
        // Megfelelő kategória kiválasztása
        const category = cardData.image.toLowerCase();
        
        if (questionsData[category] && questionsData[category][difficulty]) {
            const allQuestions = questionsData[category][difficulty];
            // Véletlenszerű kérdések kiválasztása
            const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
            setQuestions(shuffled.slice(0, questionCount));
        } else {
            // Ha nincs ilyen kategória, alapértelmezett
            console.log('No questions for this category and difficulty level');
            setQuestions([]);
        }
    }, [cardData, difficulty, questionCount]);
    
    // Ha még nincsenek kérdések
    if (questions.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-[300px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }
    
    const handleAnswerSelect = (answerIndex) => {
        setSelectedAnswer(answerIndex);
    };
    
    const handleNextQuestion = () => {
        // Válasz mentése
        const currentQuestion = questions[currentQuestionIndex];
        const newAnswer = {
            questionId: currentQuestion.id,
            question: currentQuestion.question,
            userAnswer: selectedAnswer,
            correctAnswer: currentQuestion.correctAnswer,
            isCorrect: selectedAnswer === currentQuestion.correctAnswer,
            // Eltároljuk a teljes válasz szövegét is
            userAnswerText: currentQuestion.options[selectedAnswer],
            correctAnswerText: currentQuestion.options[currentQuestion.correctAnswer]
        };
        
        const updatedAnswers = [...userAnswers, newAnswer];
        setUserAnswers(updatedAnswers);
        
        // Következő kérdés vagy befejezés
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else {
            // Quiz vége, eredmények küldése
            onComplete(updatedAnswers);
        }
    };
    
    const currentQuestion = questions[currentQuestionIndex];
    
    return (
        <div className="max-w-2xl mx-auto bg-gray-700/40 backdrop-blur-sm border border-gray-600/50 rounded-xl p-4 shadow-lg">
            {/* Haladás jelző */}
            <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                    <span>
                        {Math.round(((currentQuestionIndex) / questions.length) * 100)}% completed
                    </span>
                </div>
                <div className="w-full bg-gray-800/70 rounded-full h-2.5">
                    <div 
                        className="bg-gray-400/50 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
                    ></div>
                </div>
            </div>
            
            {/* Kérdés */}
            <div className="mb-6">
                <h3 className="text-xl text-white mb-6">{currentQuestion.question}</h3>
                
                {/* Válaszlehetőségek */}
                <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerSelect(index)}
                            className={`w-full p-3 rounded-lg text-left transition-all duration-300 flex items-center
                                ${selectedAnswer === index 
                                    ? 'bg-gray-600/70 border border-gray-500 text-white' 
                                    : 'bg-gray-800/50 border border-gray-700/50 text-gray-200 hover:bg-gray-700/50'}`}
                        >
                            <span className={`flex items-center justify-center w-6 h-6 rounded-full mr-3 text-sm
                                ${selectedAnswer === index 
                                    ? 'bg-gray-500 text-white' 
                                    : 'bg-gray-700 text-gray-300'}`}
                            >
                                {String.fromCharCode(65 + index)}
                            </span>
                            {option}
                        </button>
                    ))}
                </div>
            </div>
            
            {/* Magyarázat (opcionális) */}
            {showExplanation && (
                <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <h4 className="text-gray-300 font-medium mb-2">Explanation:</h4>
                    <p className="text-gray-400">{currentQuestion.explanation}</p>
                </div>
            )}
            
            {/* Akció gombok */}
            <div className="flex justify-between items-center mt-8">
                <button
                    onClick={() => setShowExplanation(!showExplanation)}
                    className="px-4 py-2 rounded-lg border border-gray-700/50 bg-gray-800/50 text-gray-400 
                            hover:bg-gray-700/50 hover:text-gray-300 transition-colors duration-300"
                >
                    {showExplanation ? 'Hide' : 'Show'} Explanation
                </button>
                
                <button
                    onClick={handleNextQuestion}
                    disabled={selectedAnswer === null}
                    className={`px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-300
                        ${selectedAnswer === null 
                            ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed' 
                            : 'bg-gray-600/50 text-white hover:bg-gray-700'}`}
                >
                    {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
                    <i className="ri-arrow-right-line"></i>
                </button>
            </div>
        </div>
    );
};

export default QuizGame;