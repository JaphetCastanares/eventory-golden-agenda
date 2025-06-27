
import React from 'react';

const TitleSlide = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center">
      <div className="text-center space-y-8">
        <div className="mb-12">
          <h1 className="text-7xl font-bold text-gray-800 mb-6">EVENTORY</h1>
          <div className="w-48 h-2 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <h2 className="text-4xl font-semibold text-blue-600 mb-4">
            Transforming Event Planning Through Technology
          </h2>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg border-2 border-blue-500 p-12 max-w-4xl">
          <div className="space-y-6">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg">
              <h3 className="text-2xl font-bold">Capstone Project Presentation</h3>
            </div>
            
            <div className="text-left space-y-4">
              <p className="text-xl text-gray-700 leading-relaxed">
                <strong>Project Overview:</strong> A centralized web-based platform designed to streamline vendor discovery and booking for event organizers.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                <strong>Problem Addressed:</strong> Fragmented vendor sourcing through social media platforms lacking proper search filters and standardized profiles.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                <strong>Solution:</strong> Smart filtering, real-time availability tracking, automated notifications, and integrated location mapping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;
