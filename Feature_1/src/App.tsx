import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, Star, Video } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  location: string;
  image: string;
  experience: string;
  price: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.8,
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "15+ years",
    price: "$150"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    rating: 4.9,
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "12+ years",
    price: "$180"
  },
  {
    id: 3,
    name: "Dr. Emily Williams",
    specialty: "Pediatrician",
    rating: 4.7,
    location: "Boston, MA",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "10+ years",
    price: "$130"
  },
  {
    id: 4,
    name: "Dr. James Rodriguez",
    specialty: "Orthopedic Surgeon",
    rating: 4.9,
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "20+ years",
    price: "$200"
  },
  {
    id: 5,
    name: "Dr. Lisa Patel",
    specialty: "Dermatologist",
    rating: 4.8,
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "8+ years",
    price: "$160"
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    specialty: "Psychiatrist",
    rating: 4.9,
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "14+ years",
    price: "$190"
  },
  {
    id: 7,
    name: "Dr. Maria Garcia",
    specialty: "Endocrinologist",
    rating: 4.7,
    location: "Houston, TX",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "11+ years",
    price: "$170"
  },
  {
    id: 8,
    name: "Dr. David Thompson",
    specialty: "Ophthalmologist",
    rating: 4.8,
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "16+ years",
    price: "$175"
  },
  {
    id: 9,
    name: "Dr. Jennifer Lee",
    specialty: "Gynecologist",
    rating: 4.9,
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "13+ years",
    price: "$165"
  },
  {
    id: 10,
    name: "Dr. Thomas Anderson",
    specialty: "Pulmonologist",
    rating: 4.7,
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "9+ years",
    price: "$155"
  },
  {
    id: 11,
    name: "Dr. Amanda White",
    specialty: "Rheumatologist",
    rating: 4.8,
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "12+ years",
    price: "$185"
  },
  {
    id: 12,
    name: "Dr. Kevin Martinez",
    specialty: "Urologist",
    rating: 4.6,
    location: "Phoenix, AZ",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "10+ years",
    price: "$170"
  },
  {
    id: 13,
    name: "Dr. Rachel Cohen",
    specialty: "Allergist",
    rating: 4.9,
    location: "Philadelphia, PA",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "15+ years",
    price: "$145"
  },
  {
    id: 14,
    name: "Dr. William Turner",
    specialty: "Gastroenterologist",
    rating: 4.8,
    location: "San Diego, CA",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "18+ years",
    price: "$195"
  },
  {
    id: 15,
    name: "Dr. Sofia Hernandez",
    specialty: "Oncologist",
    rating: 4.9,
    location: "Atlanta, GA",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "17+ years",
    price: "$210"
  },
  {
    id: 16,
    name: "Dr. Christopher Park",
    specialty: "Pain Management",
    rating: 4.7,
    location: "Las Vegas, NV",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "11+ years",
    price: "$165"
  },
  {
    id: 17,
    name: "Dr. Elizabeth Brown",
    specialty: "Family Medicine",
    rating: 4.8,
    location: "Nashville, TN",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "14+ years",
    price: "$140"
  },
  {
    id: 18,
    name: "Dr. Daniel Wilson",
    specialty: "Sports Medicine",
    rating: 4.9,
    location: "Minneapolis, MN",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "13+ years",
    price: "$175"
  }
];

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "02:00 PM", "03:00 PM", "04:00 PM"
];

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showBooking, setShowBooking] = useState(false);

  const handleBooking = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setShowBooking(true);
    setSelectedDate(undefined);
    setSelectedTime(null);
  };

  const handleConfirmBooking = () => {
    if (selectedDate && selectedTime && selectedDoctor) {
      alert(`Appointment confirmed with ${selectedDoctor.name} on ${format(selectedDate, 'PP')} at ${selectedTime}`);
      setShowBooking(false);
      setSelectedDoctor(null);
      setSelectedDate(undefined);
      setSelectedTime(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Video className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">MediConnect</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {!showBooking ? (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Doctors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doctor) => (
                <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                    <p className="text-gray-600">{doctor.specialty}</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Star className="h-5 w-5 text-yellow-400 mr-2" />
                        <span>{doctor.rating}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span>{doctor.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-5 w-5 mr-2" />
                        <span>{doctor.experience}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-5 w-5 mr-2" />
                        <span>{doctor.price} per session</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleBooking(doctor)}
                      className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Book Appointment</h2>
              <button
                onClick={() => setShowBooking(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
            </div>
            
            {selectedDoctor && (
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{selectedDoctor.name}</h3>
                  <p className="text-gray-600">{selectedDoctor.specialty}</p>
                </div>
              </div>
            )}

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4">Select Date</h4>
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={{ before: new Date() }}
                className="border rounded-md p-4"
              />
            </div>

            {selectedDate && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4">Available Time Slots</h4>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 text-center rounded-md ${
                        selectedTime === time
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={handleConfirmBooking}
              disabled={!selectedDate || !selectedTime}
              className={`w-full py-2 px-4 rounded-md ${
                selectedDate && selectedTime
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Confirm Booking
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;