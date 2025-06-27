
import React from 'react';

const AbstractSlide = () => {
  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">ABSTRACT</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-lg border-2 border-blue-500 p-8">
        <div className="space-y-8">
          {/* Problem Statement */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-red-800 mb-4">The Problem</h2>
            <p className="text-lg text-red-700 leading-relaxed">
              Event organizers struggle with fragmented vendor discovery through Facebook, 
              lacking proper search filters and real-time availability verification.
            </p>
          </div>
          
          {/* Solution */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">The Solution: Eventory</h2>
            <p className="text-lg text-blue-700 leading-relaxed">
              A centralized web platform that streamlines vendor discovery and booking through innovation.
            </p>
          </div>
          
          {/* Key Features */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-lg text-green-700">
                <strong>• Smart Filtering:</strong> Location, category, pricing, ratings
              </div>
              <div className="text-lg text-green-700">
                <strong>• Pre-packaged Deals:</strong> Book multiple services at once
              </div>
              <div className="text-lg text-green-700">
                <strong>• Location Mapping:</strong> Visualize vendor proximity
              </div>
              <div className="text-lg text-green-700">
                <strong>• Multimedia Profiles:</strong> Photos, videos, pricing tiers
              </div>
            </div>
          </div>
          
          {/* Impact */}
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Expected Impact</h2>
            <p className="text-lg text-purple-700 leading-relaxed">
              Enhanced efficiency for event organizers, increased business visibility for vendors, 
              and improved overall event planning quality through systematic coordination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbstractSlide;
