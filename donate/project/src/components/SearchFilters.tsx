import React from 'react';
import { Search, Filter } from 'lucide-react';
import { BloodType, OrganType } from '../types';

interface SearchFiltersProps {
  bloodType: BloodType | '';
  setBloodType: (type: BloodType | '') => void;
  organType: OrganType | '';
  setOrganType: (type: OrganType | '') => void;
  location: string;
  setLocation: (location: string) => void;
}

const bloodTypes: BloodType[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
const organTypes: OrganType[] = ['Kidney', 'Liver', 'Heart', 'Lungs', 'Pancreas', 'Corneas'];

export default function SearchFilters({
  bloodType,
  setBloodType,
  organType,
  setOrganType,
  location,
  setLocation,
}: SearchFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location..."
              className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
            />
          </div>
        </div>

        <div className="w-full md:w-48">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Blood Type
          </label>
          <select
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value as BloodType)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
          >
            <option value="">All Types</option>
            {bloodTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="w-full md:w-48">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Organ Type
          </label>
          <select
            value={organType}
            onChange={(e) => setOrganType(e.target.value as OrganType)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
          >
            <option value="">All Organs</option>
            {organTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}