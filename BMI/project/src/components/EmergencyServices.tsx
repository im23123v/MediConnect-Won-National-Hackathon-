import React from 'react';
import { Ambulance, Phone, MapPin } from 'lucide-react';

const EmergencyServices = () => {
  const handleEmergencyCall = () => {
    window.location.href = 'tel:102';
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Emergency Services</h2>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Ambulance className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Emergency Ambulance</h3>
                <p className="text-gray-600">24/7 Emergency Medical Services</p>
              </div>
            </div>
            <button
              onClick={handleEmergencyCall}
              className="flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </button>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 text-gray-600">
              <MapPin className="h-5 w-5 text-red-600" />
              <span>GPS Location Tracking Available</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Phone className="h-5 w-5 text-red-600" />
              <span>Emergency Number: 102</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyServices;