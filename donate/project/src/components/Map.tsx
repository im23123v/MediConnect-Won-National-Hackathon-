import React from 'react';
import { Donor } from '../types';

interface MapProps {
  donors: Donor[];
  selectedDonor?: Donor;
}

export default function Map({ donors, selectedDonor }: MapProps) {
  return (
    <div className="h-[400px] bg-gray-100 rounded-lg shadow-md">
      {/* Google Maps integration will go here */}
      <div className="h-full flex items-center justify-center text-gray-500">
        Map integration coming soon...
      </div>
    </div>
  );
}