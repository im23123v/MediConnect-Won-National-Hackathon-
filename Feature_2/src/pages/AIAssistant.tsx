import React, { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';

function AIAssistant() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const toggleListening = () => {
    setIsListening(!isListening);
    // Voice recognition logic will be implemented here
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Voice Assistant</h1>

      <div className="bg-white p-8 rounded-xl shadow-md">
        <div className="text-center mb-8">
          <button
            onClick={toggleListening}
            className={`p-8 rounded-full ${
              isListening ? 'bg-red-100' : 'bg-indigo-100'
            } transition-colors`}
          >
            {isListening ? (
              <MicOff className="h-12 w-12 text-red-600" />
            ) : (
              <Mic className="h-12 w-12 text-indigo-600" />
            )}
          </button>
          <p className="mt-4 text-gray-600">
            {isListening ? 'Listening...' : 'Click to start speaking'}
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg min-h-[200px]">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Conversation</h2>
          <div className="space-y-4">
            {transcript ? (
              <p className="text-gray-700">{transcript}</p>
            ) : (
              <p className="text-gray-500 italic">
                Your conversation with the AI assistant will appear here...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIAssistant;