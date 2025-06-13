import React, { useState } from 'react';
import { Activity, Heart, Thermometer, Clock } from 'lucide-react';

const VitalTracker = () => {
  const [vitals, setVitals] = useState({
    bloodPressure: '',
    heartRate: '',
    temperature: '',
    lastChecked: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save this data to a backend
    console.log('Vitals recorded:', vitals);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Vital Signs Tracker</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center">
              <Activity className="h-5 w-5 text-purple-600 mr-2" />
              Blood Pressure (mmHg)
            </div>
          </label>
          <input
            type="text"
            placeholder="e.g., 120/80"
            value={vitals.bloodPressure}
            onChange={(e) => setVitals({ ...vitals, bloodPressure: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-purple-600 mr-2" />
              Heart Rate (bpm)
            </div>
          </label>
          <input
            type="number"
            placeholder="e.g., 75"
            value={vitals.heartRate}
            onChange={(e) => setVitals({ ...vitals, heartRate: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center">
              <Thermometer className="h-5 w-5 text-purple-600 mr-2" />
              Temperature (°C)
            </div>
          </label>
          <input
            type="number"
            step="0.1"
            placeholder="e.g., 37.0"
            value={vitals.temperature}
            onChange={(e) => setVitals({ ...vitals, temperature: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-purple-600 mr-2" />
              Date & Time
            </div>
          </label>
          <input
            type="datetime-local"
            value={vitals.lastChecked}
            onChange={(e) => setVitals({ ...vitals, lastChecked: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200"
        >
          Record Vitals
        </button>
      </form>
    </div>
  );
};

export default VitalTracker;