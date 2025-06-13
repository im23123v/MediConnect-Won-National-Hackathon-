import React, { useState } from 'react';
import { Scale, Ruler, Activity, Info } from 'lucide-react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [bmi, setBMI] = useState<number | null>(null);
  const [idealWeight, setIdealWeight] = useState<number | null>(null);
  const [dailyCalories, setDailyCalories] = useState<number | null>(null);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBMI(parseFloat(bmiValue.toFixed(1)));

      // Calculate ideal weight using Hamwi formula
      const baseHeight = 152.4; // 5 feet in cm
      const heightDiff = parseFloat(height) - baseHeight;
      let idealWeightValue = gender === 'male' ? 48 : 45.5;
      idealWeightValue += (heightDiff / 2.54) * (gender === 'male' ? 2.7 : 2.2);
      setIdealWeight(parseFloat(idealWeightValue.toFixed(1)));

      // Calculate daily calorie needs
      const bmr = gender === 'male'
        ? 88.362 + (13.397 * weightInKg) + (4.799 * parseFloat(height)) - (5.677 * parseFloat(age))
        : 447.593 + (9.247 * weightInKg) + (3.098 * parseFloat(height)) - (4.330 * parseFloat(age));

      const activityMultipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        veryActive: 1.9
      };

      const calories = bmr * activityMultipliers[activityLevel as keyof typeof activityMultipliers];
      setDailyCalories(Math.round(calories));
    }
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 16) return { category: 'Severe Underweight', color: 'text-red-600', risk: 'High risk of health problems' };
    if (bmi < 18.5) return { category: 'Underweight', color: 'text-blue-600', risk: 'Risk of nutritional deficiency' };
    if (bmi < 25) return { category: 'Normal weight', color: 'text-green-600', risk: 'Low risk' };
    if (bmi < 30) return { category: 'Overweight', color: 'text-yellow-600', risk: 'Moderate risk of health problems' };
    if (bmi < 35) return { category: 'Obese Class I', color: 'text-orange-600', risk: 'High risk of health problems' };
    if (bmi < 40) return { category: 'Obese Class II', color: 'text-red-600', risk: 'Very high risk of health problems' };
    return { category: 'Obese Class III', color: 'text-red-800', risk: 'Extremely high risk of health problems' };
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Advanced Health Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center">
                <Ruler className="h-5 w-5 text-purple-600 mr-2" />
                Height (cm)
              </div>
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              placeholder="Enter height in centimeters"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center">
                <Scale className="h-5 w-5 text-purple-600 mr-2" />
                Weight (kg)
              </div>
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              placeholder="Enter weight in kilograms"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              placeholder="Enter your age"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center">
                <Activity className="h-5 w-5 text-purple-600 mr-2" />
                Activity Level
              </div>
            </label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            >
              <option value="sedentary">Sedentary (little or no exercise)</option>
              <option value="light">Light (exercise 1-3 times/week)</option>
              <option value="moderate">Moderate (exercise 4-5 times/week)</option>
              <option value="active">Active (daily exercise)</option>
              <option value="veryActive">Very Active (intense exercise 6-7 times/week)</option>
            </select>
          </div>

          <button
            onClick={calculateBMI}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200"
          >
            Calculate
          </button>
        </div>

        {bmi !== null && (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Your Results</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600">BMI</p>
                  <p className="text-2xl font-bold">{bmi}</p>
                  <p className={`${getBMICategory(bmi).color} font-medium`}>
                    {getBMICategory(bmi).category}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{getBMICategory(bmi).risk}</p>
                </div>

                {idealWeight && (
                  <div>
                    <p className="text-gray-600">Ideal Weight Range</p>
                    <p className="text-xl font-semibold">
                      {(idealWeight - 2.5).toFixed(1)} - {(idealWeight + 2.5).toFixed(1)} kg
                    </p>
                  </div>
                )}

                {dailyCalories && (
                  <div>
                    <p className="text-gray-600">Daily Calorie Needs</p>
                    <p className="text-xl font-semibold">{dailyCalories} calories</p>
                    <p className="text-sm text-gray-600 mt-1">
                      To maintain current weight
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Info className="h-5 w-5 text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold">Health Tips</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Maintain a balanced diet rich in fruits, vegetables, and whole grains</li>
                <li>• Stay hydrated by drinking at least 8 glasses of water daily</li>
                <li>• Get regular exercise according to your activity level</li>
                <li>• Get 7-9 hours of quality sleep each night</li>
                <li>• Regular health check-ups are important for monitoring your health</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;