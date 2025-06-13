import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { Donor } from '../types';

interface DonorCardProps {
  donor: Donor;
}

export default function DonorCard({ donor }: DonorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{donor.name}</h3>
          <div className="flex items-center mt-1 text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{donor.location.address}</span>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
          donor.availability === 'available' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {donor.availability}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 rounded-lg p-3">
          <span className="text-sm text-gray-600">Blood Type</span>
          <p className="text-lg font-semibold text-gray-900">{donor.bloodType}</p>
        </div>
        {donor.organType && (
          <div className="bg-gray-50 rounded-lg p-3">
            <span className="text-sm text-gray-600">Organ Type</span>
            <p className="text-lg font-semibold text-gray-900">
              {donor.organType.join(', ')}
            </p>
          </div>
        )}
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>Last updated: {new Date(donor.lastUpdated).toLocaleDateString()}</span>
          </div>
          <div className="flex space-x-4">
            {donor.contactInfo.phone && (
              <a href={`tel:${donor.contactInfo.phone}`} className="flex items-center hover:text-red-600">
                <Phone className="h-4 w-4 mr-1" />
                <span>Call</span>
              </a>
            )}
            <a href={`mailto:${donor.contactInfo.email}`} className="flex items-center hover:text-red-600">
              <Mail className="h-4 w-4 mr-1" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}