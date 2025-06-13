import React, { useState } from 'react';
import { Video, Users } from 'lucide-react';

function VideoCall() {
  const [callType, setCallType] = useState<'patient' | 'doctor' | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Video Consultation</h1>

      {!callType ? (
        <div className="grid md:grid-cols-2 gap-8">
          <button
            onClick={() => setCallType('patient')}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <Video className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Patient to Doctor</h2>
            <p className="text-gray-600">Connect with a healthcare professional</p>
          </button>

          <button
            onClick={() => setCallType('doctor')}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Doctor to Doctor</h2>
            <p className="text-gray-600">Professional medical consultation</p>
          </button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-xl shadow-md">
          <div className="aspect-video bg-gray-100 rounded-lg mb-4">
            {/* Video component will be integrated here */}
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-500">Video call interface will appear here</p>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              End Call
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">
              Mute
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">
              Turn Off Camera
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoCall;