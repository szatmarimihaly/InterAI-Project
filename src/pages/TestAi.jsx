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
      setMessage(""); // Üres mező új kérdéshez
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="flex flex-col h-screen p-2">
      {/* Logo */}
      <img src="./interai_logo_white_no_bg.png" alt="InterAI Logo" className="w-24" />

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto rounded mb-4 mx-20 mt-10 custom-scrollbar">
        {history.map((msg, index) => (
          <p key={index} className={msg.role === "user" ? "text-whitesmoke mb-6" : "text-white mb-6"}>
            <strong>{msg.role === "user" ? "You:" : "InterAI:"}</strong> {msg.content}
          </p>
        ))}
      </div>

      {/* Input area */}
      <div className="flex items-center justify-between bg-gray-800 rounded-2xl mx-20 h-16 mt-auto mr-60 ml-60">
        <textarea
          className="flex-1 border-none focus:outline-none bg-transparent text-white p-4 rounded-xl custom-scrollbar resize-none h-full"
          placeholder="Your prompt here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button 
          onClick={() => fetchAiResponse(message)}
          className="bg-transparent text-white p-2 rounded flex items-center justify-center"
          disabled={loading}
        >
          {loading ? <LoadingSpinner /> : <img src="./send-icon.png" alt="Send" className="w-6" />} 
        </button>
      </div>
    </div>
  );
};

export default TestAi;
