
import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const WhyEventorySlide = () => {
  const traditionalWay = [
    "Manual searches on Facebook Marketplace",
    "No proper filtering or categorization",
    "Scattered vendor information",
    "No real-time availability updates",
    "Multiple platforms to manage",
    "Time-consuming coordination",
    "No unified review system",
    "Manual payment processing"
  ];

  const eventoryWay = [
    "Smart search with advanced filters",
    "Categorized vendor listings",
    "Complete vendor profiles in one place",
    "Real-time availability tracking",
    "Single platform for everything",
    "Automated coordination tools",
    "Integrated rating and review system",
    "Streamlined booking process"
  ];

  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">WHY EVENTORY?</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
        <h2 className="text-3xl font-semibold text-blue-600">Traditional Way vs. Eventory Way</h2>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-lg border-2 border-blue-500 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Traditional Way */}
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-400">
            <div className="text-center mb-6">
              <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-red-800">Traditional Way</h3>
              <p className="text-xl text-red-600">Fragmented & Time-Consuming</p>
            </div>
            <div className="space-y-4">
              {traditionalWay.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-red-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Eventory Way */}
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-400">
            <div className="text-center mb-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-green-800">Eventory Way</h3>
              <p className="text-xl text-green-600">Streamlined & Efficient</p>
            </div>
            <div className="space-y-4">
              {eventoryWay.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-green-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
            <h3 className="text-3xl font-bold mb-3">The Choice is Clear</h3>
            <p className="text-xl">Eventory transforms event planning from chaos to simplicity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyEventorySlide;
