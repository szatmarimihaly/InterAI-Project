import React from "react"

const HomeCard = () => {
    return (
        <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 
                                backdrop-blur-sm rounded-xl p-8
                                border border-gray-700/50 shadow-lg">
                        <div className="flex justify-center mb-6">
                        <div className="p-3 bg-gray-700/50 rounded-xl">
                            <i className="ri-code-line text-3xl text-gray-300"></i>
                        </div>
                            </div>
                            <h3 className="text-xl font-medium text-white text-center mb-4">
                            Technical Practice
                            </h3>
                            <p className="text-gray-400 text-center leading-relaxed">
                            Master coding challenges with our comprehensive practice system
                            </p>
                            <div className="mt-6 w-full h-[1px] bg-gradient-to-r 
                                    from-transparent via-gray-600 to-transparent" />
                        </div>
        
                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 
                                        backdrop-blur-sm rounded-xl p-8
                                        border border-gray-700/50 shadow-lg">
                            <div className="flex justify-center mb-6">
                            <div className="p-3 bg-gray-700/50 rounded-xl">
                                <i className="ri-robot-line text-3xl text-gray-300"></i>
                            </div>
                            </div>
                            <h3 className="text-xl font-medium text-white text-center mb-4">
                            AI-Powered Feedback
                            </h3>
                            <p className="text-gray-400 text-center leading-relaxed">
                            Real-time feedback to enhance your interview performance
                            </p>
                            <div className="mt-6 w-full h-[1px] bg-gradient-to-r 
                                        from-transparent via-gray-600 to-transparent" />
                        </div>
        
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 
                                backdrop-blur-sm rounded-xl p-8
                                border border-gray-700/50 shadow-lg">
                    <div className="flex justify-center mb-6">
                    <div className="p-3 bg-gray-700/50 rounded-xl">
                        <i className="ri-building-line text-3xl text-gray-300"></i>
                    </div>
                    </div>
                    <h3 className="text-xl font-medium text-white text-center mb-4">
                    Company Focus
                    </h3>
                    <p className="text-gray-400 text-center leading-relaxed">
                    Targeted preparation for specific company interviews
                    </p>
                    <div className="mt-6 w-full h-[1px] bg-gradient-to-r 
                                from-transparent via-gray-600 to-transparent" />
                </div>
            </div>
        </div>
  );
};
export default HomeCard
