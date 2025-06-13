import React from 'react';
import { Bell, Calendar, User, Heart, Brain, Activity, Apple, Moon, Sun, Thermometer, Droplet, Pill, Utensils, FileWarning as Running, Users, Zap } from 'lucide-react';

const HealthUpdates = () => {
  const updates = [
    {
      title: 'Upcoming Vaccination Drive',
      date: '2024-03-25',
      description: 'Annual flu vaccination campaign starting next week. Get your shot at your nearest clinic.',
      type: 'event',
      icon: Calendar
    },
    {
      title: 'New Exercise Guidelines',
      date: '2024-03-24',
      description: 'Updated physical activity recommendations: 150 minutes of moderate exercise or 75 minutes of vigorous exercise per week.',
      type: 'guidelines',
      icon: Running
    },
    {
      title: 'Mental Health Awareness Week',
      date: '2024-03-23',
      description: 'Join our community sessions on stress management and emotional well-being.',
      type: 'event',
      icon: Brain
    },
    {
      title: 'Seasonal Health Alert',
      date: '2024-03-22',
      description: 'Pollen levels expected to be high. Take precautions if you have allergies.',
      type: 'advisory',
      icon: Bell
    },
    {
      title: 'Nutrition Workshop',
      date: '2024-03-21',
      description: 'Learn about balanced meal planning and healthy cooking techniques.',
      type: 'event',
      icon: Apple
    },
    {
      title: 'Heart Health Screening',
      date: '2024-03-20',
      description: 'Free cardiovascular health screenings available at local health centers.',
      type: 'event',
      icon: Heart
    },
    {
      title: 'Sleep Health Advisory',
      date: '2024-03-19',
      description: 'New research highlights importance of consistent sleep schedule for mental health.',
      type: 'advisory',
      icon: Moon
    },
    {
      title: 'Community Fitness Challenge',
      date: '2024-03-18',
      description: '30-day wellness challenge starting next month. Register now to participate.',
      type: 'event',
      icon: Activity
    },
    {
      title: 'Hydration Reminder',
      date: '2024-03-17',
      description: 'Stay hydrated during warmer weather. Aim for 8-10 glasses of water daily.',
      type: 'advisory',
      icon: Droplet
    },
    {
      title: 'Medication Safety Update',
      date: '2024-03-16',
      description: 'Important guidelines for proper medication storage and disposal.',
      type: 'guidelines',
      icon: Pill
    },
    {
      title: 'Diabetes Prevention Program',
      date: '2024-03-15',
      description: 'New lifestyle intervention program launching for those at risk of diabetes.',
      type: 'event',
      icon: Activity
    },
    {
      title: 'Stress Management Workshop',
      date: '2024-03-14',
      description: 'Learn effective techniques for managing daily stress and anxiety.',
      type: 'event',
      icon: Brain
    },
    {
      title: 'Dietary Guidelines Update',
      date: '2024-03-13',
      description: 'New recommendations for balanced nutrition and portion control.',
      type: 'guidelines',
      icon: Utensils
    },
    {
      title: 'Senior Wellness Program',
      date: '2024-03-12',
      description: 'Special exercise classes designed for seniors starting next week.',
      type: 'event',
      icon: Users
    },
    {
      title: 'Energy Management Tips',
      date: '2024-03-11',
      description: 'Learn how to maintain energy levels throughout the day naturally.',
      type: 'guidelines',
      icon: Zap
    },
    {
      title: 'Temperature Advisory',
      date: '2024-03-10',
      description: 'Heat wave expected. Take precautions to prevent heat-related illness.',
      type: 'advisory',
      icon: Thermometer
    },
    {
      title: 'Vision Health Screening',
      date: '2024-03-09',
      description: 'Free eye examinations available at participating clinics.',
      type: 'event',
      icon: User
    },
    {
      title: 'Mindfulness Sessions',
      date: '2024-03-08',
      description: 'Daily guided meditation sessions now available online.',
      type: 'event',
      icon: Brain
    },
    {
      title: 'Vitamin D Advisory',
      date: '2024-03-07',
      description: 'Importance of sun exposure and supplementation during winter months.',
      type: 'advisory',
      icon: Sun
    },
    {
      title: 'Posture Improvement Workshop',
      date: '2024-03-06',
      description: 'Learn proper ergonomics and exercises for better posture.',
      type: 'event',
      icon: Activity
    }
  ];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'event':
        return 'bg-purple-50 border-purple-200';
      case 'advisory':
        return 'bg-yellow-50 border-yellow-200';
      case 'guidelines':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'event':
        return 'text-purple-600';
      case 'advisory':
        return 'text-yellow-600';
      case 'guidelines':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Health Updates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {updates.map((update, index) => (
          <div 
            key={index} 
            className={`rounded-lg p-4 border ${getTypeStyles(update.type)} transition-all duration-200 hover:shadow-md`}
          >
            <div className="flex items-start space-x-4">
              <div className={`flex-shrink-0 ${getIconColor(update.type)}`}>
                <update.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{update.title}</h3>
                  <span className="text-sm text-gray-500">{update.date}</span>
                </div>
                <p className="mt-2 text-gray-600">{update.description}</p>
                <div className="mt-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                    update.type === 'event' ? 'bg-purple-100 text-purple-800' :
                    update.type === 'advisory' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {update.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthUpdates;