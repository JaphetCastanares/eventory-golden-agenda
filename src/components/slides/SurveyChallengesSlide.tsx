
import React from 'react';

const SurveyChallengesSlide = () => {
  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">Business Challenges</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto"></div>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-lg border-2 border-yellow-400 p-8">
        <div className="text-center space-y-8">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Biggest Challenges in Getting Clients</h2>
            <div className="text-6xl font-bold mb-2">100%</div>
            <p className="text-xl">Universal Agreement on Key Pain Points</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-400 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">⚠️</span>
                </div>
                <h3 className="text-2xl font-bold text-red-800">Challenge #1</h3>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-red-700 mb-3">Handling Last Minute Cancellations</h4>
                <div className="bg-red-100 p-4 rounded-lg">
                  <p className="text-red-600 font-semibold">100% of vendors</p>
                  <p className="text-red-700 text-sm mt-1">Experience this challenge regularly</p>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 border-2 border-orange-400 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-orange-800">Challenge #2</h3>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-orange-700 mb-3">Finding Consistent Clients</h4>
                <div className="bg-orange-100 p-4 rounded-lg">
                  <p className="text-orange-600 font-semibold">100% of vendors</p>
                  <p className="text-orange-700 text-sm mt-1">Struggle with client consistency</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Impact Analysis</h3>
              <ul className="text-blue-700 space-y-2 text-left">
                <li>• Revenue uncertainty due to cancellations</li>
                <li>• Difficulty in business planning</li>
                <li>• Time wasted on unreliable bookings</li>
                <li>• Need for backup client strategies</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-2 border-green-400 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4">Eventory Solutions</h3>
              <ul className="text-green-700 space-y-2 text-left">
                <li>• Booking confirmation system</li>
                <li>• Client rating and verification</li>
                <li>• Automated reminder notifications</li>
                <li>• Consistent platform-driven leads</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-purple-50 border-2 border-purple-400 rounded-lg p-6">
            <h3 className="text-lg font-bold text-purple-800 mb-2">Survey Validation</h3>
            <p className="text-purple-700">
              The 100% agreement on these two challenges validates Eventory's core value proposition: providing a reliable, systematic approach to vendor-client relationships that addresses cancellation issues and ensures consistent business flow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyChallengesSlide;
