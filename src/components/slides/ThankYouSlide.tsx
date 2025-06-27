
import React from 'react';
import { Heart, Star } from 'lucide-react';

const ThankYouSlide = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center">
      <div className="text-center space-y-8">
        <div className="mb-12">
          <div className="flex justify-center items-center gap-4 mb-8">
            <Star className="w-16 h-16 text-yellow-500 animate-pulse" />
            <Heart className="w-20 h-20 text-red-500 animate-pulse" />
            <Star className="w-16 h-16 text-yellow-500 animate-pulse" />
          </div>
          <h1 className="text-8xl font-bold text-gray-800 mb-6">THANK YOU</h1>
          <div className="w-48 h-2 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg border-2 border-blue-500 p-12 max-w-4xl">
          <div className="space-y-8">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-6 rounded-lg">
              <h3 className="text-3xl font-bold">For Your Attention</h3>
            </div>
            
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">
                EVENTORY
              </h2>
              <p className="text-2xl text-gray-700 leading-relaxed">
                Transforming Event Planning Through Technology
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mt-8">
                <p className="text-xl text-gray-700 italic">
                  "Making every event memorable, one connection at a time."
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">Efficient</div>
                  <div className="text-lg text-gray-600">Planning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">Smart</div>
                  <div className="text-lg text-gray-600">Connections</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">Better</div>
                  <div className="text-lg text-gray-600">Events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouSlide;
