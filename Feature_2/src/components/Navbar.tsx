import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Video, MessageSquare, Bot } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">MediConnect</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link to="/video-call" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <Video className="h-5 w-5" />
              <span>Video Call</span>
            </Link>
            <Link to="/ai-assistant" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <Bot className="h-5 w-5" />
              <span>AI Assistant</span>
            </Link>
            <Link to="/chat" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <MessageSquare className="h-5 w-5" />
              <span>Chat</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;