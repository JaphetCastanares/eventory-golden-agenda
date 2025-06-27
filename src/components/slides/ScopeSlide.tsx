
import React from 'react';

const ScopeSlide = () => {
  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">Scope</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto"></div>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-lg border-2 border-yellow-400 p-8">
        <div className="space-y-8">
          {/* Vendor Categories */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-600 mb-6">Vendor Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Sound Systems',
                'Catering Services', 
                'Entertainers',
                'Makeup Artists',
                'Suit & Dress Rentals',
                'Photographers/Photo Booths'
              ].map((category, index) => (
                <div key={index} className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 text-center">
                  <h3 className="font-bold text-black">{category}</h3>
                </div>
              ))}
            </div>
          </div>
          
          {/* Platform Features */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-600 mb-6">Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 border-l-4 border-yellow-400 p-6">
                <h3 className="font-bold text-black mb-2">For Organizers</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Search vendors by location and service type</li>
                  <li>• In-app booking and calendar scheduling</li>
                  <li>• Leave ratings and written feedback</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 border-l-4 border-yellow-400 p-6">
                <h3 className="font-bold text-black mb-2">For Vendors</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Register and create service profiles</li>
                  <li>• Upload media and display permits</li>
                  <li>• Manage bookings and availability</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Key Capabilities */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-black mb-4">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-black">
                <strong>✓ Location-based Search</strong>
                <p>Find vendors in specific areas</p>
              </div>
              <div className="text-black">
                <strong>✓ Calendar Integration</strong>
                <p>Real-time scheduling system</p>
              </div>
              <div className="text-black">
                <strong>✓ Media Portfolios</strong>
                <p>Photo and video showcases</p>
              </div>
              <div className="text-black">
                <strong>✓ Review System</strong>
                <p>Post-event feedback mechanism</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScopeSlide;
