// src/components/QuizResults.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizResults = ({ results, onRestart }) => {
    const navigate = useNavigate();
    
    // Eredmények számítása
    const totalQuestions = results.length;
    const correctAnswers = results.filter(answer => answer.isCorrect).length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Értékelés az eredmény alapján
    let assessment = "";
    if (percentage >= 90) {
        assessment = "Excellent! You have mastered this topic.";
    } else if (percentage >= 70) {
        assessment = "Good job! You have a solid understanding.";
    } else if (percentage >= 50) {
        assessment = "Not bad! Keep practicing to improve.";
    } else {
        assessment = "Keep learning! More practice will help you master this topic.";
    }
    
    return (
        <div className="max-w-2xl mx-auto bg-gray-700/40 backdrop-blur-sm border border-gray-600/50 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl text-white text-center mb-6">Quiz Results</h2>
            
            {/* Score display */}
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center p-4 bg-gray-800/60 rounded-full mb-4">
                    <div className="text-4xl font-bold text-white">
                        {percentage}%
                    </div>
                </div>
                <div className="text-xl text-gray-300 mb-2">
                    {correctAnswers} correct out of {totalQuestions} questions
                </div>
                <div className="text-gray-400">
                    {assessment}
                </div>
            </div>
            
            {/* Answer review */}
            <div className="mb-8">
                <h3 className="text-xl text-white mb-4">Your Answers</h3>
                
                <div className="space-y-4">
                    {results.map((result, index) => (
                        <div 
                            key={index} 
                            className={`p-4 rounded-lg border 
                                ${result.isCorrect 
                                    ? 'bg-green-900/20 border-green-800/40' 
                                    : 'bg-red-900/20 border-red-800/40'}`}
                        >
                            <div className="flex items-start">
                                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3
                                    ${result.isCorrect 
                                        ? 'bg-green-600 text-white' 
                                        : 'bg-red-600 text-white'}`}
                                >
                                    {result.isCorrect ? <i className="ri-check-line"></i> : <i className="ri-close-line"></i>}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white mb-2">{result.question}</h4>
                                    
                                    {/* Itt módosítottuk, hogy a teljes válasz szövegét mutassa */}
                                    <div className="text-gray-400 mb-1">
                                        <span className="font-medium">Your answer:</span> 
                                        <span className={result.isCorrect ? "text-green-400" : "text-red-400"}>
                                            {" " + result.userAnswerText}
                                        </span>
                                    </div>
                                    
                                    {!result.isCorrect && (
                                        <div className="text-gray-400">
                                            <span className="font-medium">Correct answer:</span> 
                                            <span className="text-green-400">
                                                {" " + result.correctAnswerText}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col md:flex-row gap-4">
                <button
                    onClick={onRestart}
                    className="flex-1 px-6 py-3 rounded-lg bg-gray-800/60 text-white hover:bg-gray-700/60
                            transition-colors duration-300 flex items-center justify-center gap-2"
                >
                    <i className="ri-restart-line"></i>
                    Try Again
                </button>
                
                <button
                    onClick={() => navigate('/interview')}
                    className="flex-1 px-6 py-3 rounded-lg bg-gray-800/60 text-white hover:bg-gray-700/60
                            transition-colors duration-300 flex items-center justify-center gap-2"
                >
                    <i className="ri-arrow-left-line"></i>
                    Back to Topics
                </button>
            </div>
        </div>
    );
};

export default QuizResults;