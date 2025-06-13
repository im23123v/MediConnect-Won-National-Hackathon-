import React from 'react';
import { Heart, Brain, Settings as Lungs, Activity, Apple, Moon, Sun, Users } from 'lucide-react';

const HealthAwareness = () => {
  const articles = [
    {
      title: 'Understanding Heart Health',
      icon: Heart,
      content: 'Regular exercise and a balanced diet are key to maintaining good heart health. Learn about risk factors and prevention strategies for cardiovascular diseases.',
      imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
      category: 'Cardiovascular Health'
    },
    {
      title: 'Mental Health Matters',
      icon: Brain,
      content: 'Take care of your mental health through meditation, regular exercise, and maintaining social connections. Learn about stress management and mindfulness techniques.',
      imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
      category: 'Mental Wellness'
    },
    {
      title: 'Respiratory Health',
      icon: Lungs,
      content: 'Learn about maintaining good respiratory health through proper breathing exercises and avoiding pollutants. Understand common respiratory conditions and their prevention.',
      imageUrl: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800',
      category: 'Respiratory Care'
    },
    {
      title: 'Nutrition Essentials',
      icon: Apple,
      content: 'Discover the importance of balanced nutrition and how different food groups contribute to your overall health. Learn about meal planning and healthy eating habits.',
      imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800',
      category: 'Nutrition'
    },
    {
      title: 'Sleep and Recovery',
      icon: Moon,
      content: 'Understanding the importance of quality sleep and its impact on physical and mental health. Learn about sleep hygiene and establishing healthy sleep patterns.',
      imageUrl: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?auto=format&fit=crop&q=80&w=800',
      category: 'Sleep Health'
    },
    {
      title: 'Preventive Healthcare',
      icon: Activity,
      content: 'Regular health screenings and preventive measures can help detect and prevent serious health conditions. Learn about recommended check-ups and vaccinations.',
      imageUrl: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=800',
      category: 'Prevention'
    },
    {
      title: 'Stress Management',
      icon: Brain,
      content: 'Effective stress management techniques and strategies for maintaining work-life balance. Learn about the impact of stress on health and ways to cope.',
      imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
      category: 'Mental Health'
    },
    {
      title: 'Social Health',
      icon: Users,
      content: 'The importance of social connections and community engagement for overall well-being. Learn about building and maintaining healthy relationships.',
      imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800',
      category: 'Social Wellness'
    },
    {
      title: 'Daily Wellness Habits',
      icon: Sun,
      content: 'Simple daily habits that can significantly impact your health and well-being. Learn about morning routines and healthy lifestyle practices.',
      imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
      category: 'Lifestyle'
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Health Awareness</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <article.icon className="h-5 w-5 text-purple-600 mr-2" />
                <h3 className="text-lg font-medium text-gray-900">{article.title}</h3>
              </div>
              <p className="text-sm text-purple-600 mb-2">{article.category}</p>
              <p className="text-gray-600 text-sm">{article.content}</p>
              <button className="mt-4 text-purple-600 hover:text-purple-700 font-medium text-sm">
                Read more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthAwareness;