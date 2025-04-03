import React, { useState, useEffect, useRef } from "react"
import LoadingSpinner from "../components/LoadingSpinner"
import 'remixicon/fonts/remixicon.css'


const TestAi = () => {
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null); // Ref a görgetéshez

  const fetchAiResponse = async (message) => {
    if (typeof message !== "string" || !message.trim()) return;

    setLoading(true);
    const userMessage = { role: "user", content: message };

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      const aiMessage = { role: "ai", content: data.reply };

      setHistory([...history, userMessage, aiMessage]);
      setMessage(""); 
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4">
      {/* Header */}
      <div className="flex items-center justify-between px-20 py-4">
        <img 
          src="./interai_logo_white_no_bg.png" 
          alt="InterAI Logo" 
          className="w-28 hover:opacity-80 transition-opacity duration-300" 
        />
        <div className="text-gray-400 text-sm cursor-default">AI Assistant</div>
      </div>

      {/* Chat container */}
      <div className="flex-1 mx-20 my-6 p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
        <div className="h-full overflow-y-auto custom-scrollbar pr-4">
          {history.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
              <i className="ri-robot-line text-4xl"></i>
              <p>Start a conversation with InterAI</p>
            </div>
          )}
          
          {history.map((msg, index) => (
            <div 
              key={index} 
              className={`mb-6 ${msg.role === "user" ? "ml-auto" : "mr-auto"} max-w-[80%]`}
            >
              <div className={`
                p-4 rounded-2xl 
                ${msg.role === "user" 
                  ? "bg-blue-600/40 backdrop-blur-sm ml-auto" 
                  : "bg-gray-700/40 backdrop-blur-sm"}
              `}>
                <div className="text-gray-400 text-sm mb-1">
                  {msg.role === "user" ? "You" : "InterAI"}
                </div>
                <div className="text-white">{msg.content}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area */}
      <div className="mx-auto w-full max-w-3xl px-4 mb-6">
        <div className="flex items-center bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 transition-all duration-300 focus-within:border-gray-500 focus-within:bg-gray-700/50">
          <textarea
            className="flex-1 m-3 px-4 py-2 bg-transparent text-white placeholder-gray-500 focus:outline-none resize-none max-h-32"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="1"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                fetchAiResponse(message);
              }
            }}
          />
          <button 
            onClick={() => fetchAiResponse(message)}
            disabled={loading || !message.trim()}
            className={`m-3 p-3 rounded-xl transition-all duration-300
              ${loading || !message.trim() 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-gray-700/50 active:scale-95'}`}
          >
            {loading ? (
              <LoadingSpinner />
            ) : (
              <i className="ri-send-plane-fill text-white text-xl"></i>
            )}
          </button>
        </div>
        <div className="text-gray-500 text-xs mt-2 text-center cursor-default">
          Press Enter to send, Shift + Enter for new line
        </div>
      </div>
    </div>
  );
};

export default TestAi;
