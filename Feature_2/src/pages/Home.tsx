import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Bot, MessageSquare } from 'lucide-react';

function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to MediConnect
        </h1>
        <p className="text-xl text-gray-600">
          Your comprehensive medical consultation platform
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-center mb-4">
            <Video className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Video Consultations</h2>
          <p className="text-gray-600 mb-4">Connect with doctors or collaborate with other medical professionals through secure video calls.</p>
          <Link to="/video-call" className="text-indigo-600 hover:text-indigo-700 font-medium">
            Start a call →
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-center mb-4">
            <Bot className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">AI Voice Assistant</h2>
          <p className="text-gray-600 mb-4">Get instant answers to your medical queries through our advanced AI voice assistant.</p>
          <Link to="/ai-assistant" className="text-indigo-600 hover:text-indigo-700 font-medium">
            Talk to AI →
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-center mb-4">
            <MessageSquare className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">AI Chat Support</h2>
          <p className="text-gray-600 mb-4">Chat with our AI for medical guidance and information at any time.</p>
          <Link to="/chat" className="text-indigo-600 hover:text-indigo-700 font-medium">
            Start chatting →
          </Link>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose MediConnect?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">24/7 Availability</h3>
            <p className="text-gray-600">Access medical support anytime, anywhere</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Secure Platform</h3>
            <p className="text-gray-600">HIPAA-compliant video calls and chat</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">AI-Powered Support</h3>
            <p className="text-gray-600">Advanced AI for accurate medical guidance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;