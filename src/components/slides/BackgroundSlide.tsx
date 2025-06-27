
import React from 'react';

const BackgroundSlide = () => {
  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">Background of Study</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto"></div>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-lg border-2 border-yellow-400 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          <div>
            <h3 className="text-2xl font-bold text-yellow-600 mb-4">Current Challenges</h3>
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h4 className="font-bold text-red-800">Manual Searches</h4>
                <p className="text-red-700">Word-for-word searches on Social Media</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h4 className="font-bold text-red-800">Lack of Filters</h4>
                <p className="text-red-700">No dedicated search filters for vendor discovery</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h4 className="font-bold text-red-800">No Real-time Updates</h4>
                <p className="text-red-700">Difficulty verifying vendor availability</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h4 className="font-bold text-red-800">Inconsistent Results</h4>
                <p className="text-red-700">Fragmented process leads to poor experiences</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-yellow-600 mb-4">Eventory Solutions</h3>
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h4 className="font-bold text-green-800">Smart Filtering</h4>
                <p className="text-green-700">Location, category, pricing, and rating filters</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h4 className="font-bold text-green-800">Real-time Tracking</h4>
                <p className="text-green-700">Live availability verification system</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h4 className="font-bold text-green-800">Automated Notifications</h4>
                <p className="text-green-700">SMS alerts for booking confirmations</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h4 className="font-bold text-green-800">Bundled Services</h4>
                <p className="text-green-700">Pre-packaged vendor deal system</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlide;
