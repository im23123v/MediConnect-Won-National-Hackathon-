import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import SearchFilters from './components/SearchFilters';
import DonorCard from './components/DonorCard';
import Map from './components/Map';
import { BloodType, OrganType, Donor } from './types';

// Mock data for demonstration
const mockDonors: Donor[] = [
  {
    id: '1',
    name: 'John Doe',
    bloodType: 'O+',
    organType: ['Kidney'],
    location: {
      lat: 40.7128,
      lng: -74.0060,
      address: 'New York, NY'
    },
    availability: 'available',
    lastUpdated: '2024-03-15',
    contactInfo: {
      phone: '+1234567890',
      email: 'john@example.com'
    }
  },
  {
    id: '2',
    name: 'Jane Smith',
    bloodType: 'A-',
    organType: ['Liver'],
    location: {
      lat: 34.0522,
      lng: -118.2437,
      address: 'Los Angeles, CA'
    },
    availability: 'available',
    lastUpdated: '2024-03-14',
    contactInfo: {
      email: 'jane@example.com'
    }
  },
  {
    id: '3',
    name: 'Michael Johnson',
    bloodType: 'B+',
    organType: ['Heart'],
    location: {
      lat: 41.8781,
      lng: -87.6298,
      address: 'Chicago, IL'
    },
    availability: 'available',
    lastUpdated: '2024-03-13',
    contactInfo: {
      phone: '+1987654321',
      email: 'michael@example.com'
    }
  },
  {
    id: '4',
    name: 'Emily Davis',
    bloodType: 'AB+',
    organType: ['Lungs'],
    location: {
      lat: 29.7604,
      lng: -95.3698,
      address: 'Houston, TX'
    },
    availability: 'unavailable',
    lastUpdated: '2024-03-12',
    contactInfo: {
      email: 'emily@example.com'
    }
  },
  {
    id: '5',
    name: 'David Wilson',
    bloodType: 'O-',
    organType: ['Pancreas'],
    location: {
      lat: 33.7490,
      lng: -84.3880,
      address: 'Atlanta, GA'
    },
    availability: 'available',
    lastUpdated: '2024-03-11',
    contactInfo: {
      phone: '+1122334455',
      email: 'david@example.com'
    }
  },
  {
    id: '6',
    name: 'Sarah Brown',
    bloodType: 'A+',
    organType: ['Corneas'],
    location: {
      lat: 39.9526,
      lng: -75.1652,
      address: 'Philadelphia, PA'
    },
    availability: 'available',
    lastUpdated: '2024-03-10',
    contactInfo: {
      email: 'sarah@example.com'
    }
  },
  {
    id: '7',
    name: 'Robert Martinez',
    bloodType: 'AB-',
    organType: ['Kidney', 'Liver'],
    location: {
      lat: 32.7157,
      lng: -117.1611,
      address: 'San Diego, CA'
    },
    availability: 'unavailable',
    lastUpdated: '2024-03-09',
    contactInfo: {
      phone: '+1654987320',
      email: 'robert@example.com'
    }
  },
  {
    id: '8',
    name: 'Lisa Anderson',
    bloodType: 'B-',
    organType: ['Heart', 'Lungs'],
    location: {
      lat: 47.6062,
      lng: -122.3321,
      address: 'Seattle, WA'
    },
    availability: 'available',
    lastUpdated: '2024-03-08',
    contactInfo: {
      email: 'lisa@example.com'
    }
  },
  {
    id: '9',
    name: 'James Taylor',
    bloodType: 'O+',
    organType: ['Pancreas', 'Kidney'],
    location: {
      lat: 42.3601,
      lng: -71.0589,
      address: 'Boston, MA'
    },
    availability: 'available',
    lastUpdated: '2024-03-07',
    contactInfo: {
      phone: '+1789456123',
      email: 'james@example.com'
    }
  },
  {
    id: '10',
    name: 'Maria Garcia',
    bloodType: 'A+',
    organType: ['Liver', 'Corneas'],
    location: {
      lat: 25.7617,
      lng: -80.1918,
      address: 'Miami, FL'
    },
    availability: 'unavailable',
    lastUpdated: '2024-03-06',
    contactInfo: {
      email: 'maria@example.com'
    }
  },
  {
    id: '11',
    name: 'William Lee',
    bloodType: 'B+',
    organType: ['Heart'],
    location: {
      lat: 36.1627,
      lng: -86.7816,
      address: 'Nashville, TN'
    },
    availability: 'available',
    lastUpdated: '2024-03-05',
    contactInfo: {
      phone: '+1321654987',
      email: 'william@example.com'
    }
  },
  {
    id: '12',
    name: 'Jennifer White',
    bloodType: 'AB+',
    organType: ['Lungs', 'Heart'],
    location: {
      lat: 39.7392,
      lng: -104.9903,
      address: 'Denver, CO'
    },
    availability: 'available',
    lastUpdated: '2024-03-04',
    contactInfo: {
      email: 'jennifer@example.com'
    }
  },
  {
    id: '13',
    name: 'Christopher Rodriguez',
    bloodType: 'O-',
    organType: ['Kidney', 'Pancreas'],
    location: {
      lat: 44.9778,
      lng: -93.2650,
      address: 'Minneapolis, MN'
    },
    availability: 'unavailable',
    lastUpdated: '2024-03-03',
    contactInfo: {
      phone: '+1147258369',
      email: 'chris@example.com'
    }
  },
  {
    id: '14',
    name: 'Amanda Thompson',
    bloodType: 'A-',
    organType: ['Corneas'],
    location: {
      lat: 38.9072,
      lng: -77.0369,
      address: 'Washington, DC'
    },
    availability: 'available',
    lastUpdated: '2024-03-02',
    contactInfo: {
      email: 'amanda@example.com'
    }
  },
  {
    id: '15',
    name: 'Daniel Kim',
    bloodType: 'B-',
    organType: ['Liver'],
    location: {
      lat: 35.7796,
      lng: -78.6382,
      address: 'Raleigh, NC'
    },
    availability: 'available',
    lastUpdated: '2024-03-01',
    contactInfo: {
      phone: '+1963852741',
      email: 'daniel@example.com'
    }
  },
  {
    id: '16',
    name: 'Rachel Green',
    bloodType: 'AB-',
    organType: ['Heart', 'Lungs'],
    location: {
      lat: 43.0389,
      lng: -87.9065,
      address: 'Milwaukee, WI'
    },
    availability: 'unavailable',
    lastUpdated: '2024-02-29',
    contactInfo: {
      email: 'rachel@example.com'
    }
  },
  {
    id: '17',
    name: 'Thomas Moore',
    bloodType: 'O+',
    organType: ['Pancreas'],
    location: {
      lat: 36.1699,
      lng: -115.1398,
      address: 'Las Vegas, NV'
    },
    availability: 'available',
    lastUpdated: '2024-02-28',
    contactInfo: {
      phone: '+1741852963',
      email: 'thomas@example.com'
    }
  },
  {
    id: '18',
    name: 'Jessica Chen',
    bloodType: 'A+',
    organType: ['Kidney', 'Liver'],
    location: {
      lat: 45.5155,
      lng: -122.6789,
      address: 'Portland, OR'
    },
    availability: 'available',
    lastUpdated: '2024-02-27',
    contactInfo: {
      email: 'jessica@example.com'
    }
  },
  {
    id: '19',
    name: 'Kevin Patel',
    bloodType: 'B+',
    organType: ['Corneas'],
    location: {
      lat: 30.2672,
      lng: -97.7431,
      address: 'Austin, TX'
    },
    availability: 'unavailable',
    lastUpdated: '2024-02-26',
    contactInfo: {
      phone: '+1852963741',
      email: 'kevin@example.com'
    }
  },
  {
    id: '20',
    name: 'Michelle Scott',
    bloodType: 'AB+',
    organType: ['Heart', 'Pancreas'],
    location: {
      lat: 35.1495,
      lng: -90.0490,
      address: 'Memphis, TN'
    },
    availability: 'available',
    lastUpdated: '2024-02-25',
    contactInfo: {
      email: 'michelle@example.com'
    }
  }
];

function App() {
  const [bloodType, setBloodType] = useState<BloodType | ''>('');
  const [organType, setOrganType] = useState<OrganType | ''>('');
  const [location, setLocation] = useState('');
  const [selectedDonor, setSelectedDonor] = useState<Donor>();

  // Filter donors based on search criteria
  const filteredDonors = mockDonors.filter(donor => {
    if (bloodType && donor.bloodType !== bloodType) return false;
    if (organType && (!donor.organType || !donor.organType.includes(organType))) return false;
    if (location && !donor.location.address.toLowerCase().includes(location.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-red-500" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">LifeLink</h1>
            </div>
            <nav className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">How it Works</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find Blood & Organ Donors Near You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with willing donors in your area. Every donation helps save lives.
          </p>
        </div>

        <SearchFilters
          bloodType={bloodType}
          setBloodType={setBloodType}
          organType={organType}
          setOrganType={setOrganType}
          location={location}
          setLocation={setLocation}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Available Donors ({filteredDonors.length})
            </h3>
            <div className="space-y-4">
              {filteredDonors.map(donor => (
                <DonorCard
                  key={donor.id}
                  donor={donor}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Location</h3>
            <Map
              donors={filteredDonors}
              selectedDonor={selectedDonor}
            />
          </div>
        </div>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">About LifeLink</h4>
              <p className="text-gray-600">
                Connecting donors with those in need, making the gift of life accessible to all.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-red-600">How to Donate</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600">Find Donors</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600">Register as Donor</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-600">Email: support@lifelink.org</li>
                <li className="text-gray-600">Phone: (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 LifeLink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;