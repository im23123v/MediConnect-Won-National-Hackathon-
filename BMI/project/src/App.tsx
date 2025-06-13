import React, { useState } from 'react';
import { Calculator, Bell, Heart, Info, Ambulance } from 'lucide-react';
import BMICalculator from './components/BMICalculator';
import HealthUpdates from './components/HealthUpdates';
import HealthAwareness from './components/HealthAwareness';
import EmergencyServices from './components/EmergencyServices';

function App() {
  const [activeTab, setActiveTab] = useState('bmi');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-purple-600" />
            <h1 className="text-2xl font-bold text-gray-900">MediConnect</h1>
          </div>
          <button
            onClick={() => setActiveTab('emergency')}
            className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            <Ambulance className="h-5 w-5" />
            <span>Emergency</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('bmi')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'bmi'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            } transition-colors duration-200`}
          >
            <Calculator className="h-5 w-5 mr-2" />
            Health Calculator
          </button>
          <button
            onClick={() => setActiveTab('updates')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'updates'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            } transition-colors duration-200`}
          >
            <Bell className="h-5 w-5 mr-2" />
            Health Updates
          </button>
          <button
            onClick={() => setActiveTab('awareness')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'awareness'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            } transition-colors duration-200`}
          >
            <Info className="h-5 w-5 mr-2" />
            Health Awareness
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {activeTab === 'bmi' && <BMICalculator />}
          {activeTab === 'updates' && <HealthUpdates />}
          {activeTab === 'awareness' && <HealthAwareness />}
          {activeTab === 'emergency' && <EmergencyServices />}
        </div>
      </main>
    </div>
  );
}

export default App;