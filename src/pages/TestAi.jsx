import React, { useState } from "react";

const TestAi = () => {
  

  return (
    <div className="p-4">
      <button onClick={fetchAiResponse} className="bg-blue-500 text-white p-2 rounded">
        Kérdezd meg az AI-t
      </button>
      {response && <p className="text-red-500 mt-4">{response}</p>}
    </div>
  );
};

export default TestAi;
