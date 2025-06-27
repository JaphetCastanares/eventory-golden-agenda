
import React from 'react';

const ObjectivesSlide = () => {
  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">Objectives</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto"></div>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-lg border-2 border-yellow-400 p-8">
        <div className="space-y-8">
          {/* General Objective */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-black mb-4">General Objective</h2>
            <p className="text-lg text-black">
              To develop a web application that provides a centralized platform for event organizers to find, evaluate, and book local vendors efficiently.
            </p>
          </div>
          
          {/* Specific Objectives */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Specific Objectives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 border-2 border-yellow-400 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-black">1</span>
                  </div>
                  <h3 className="font-bold text-black">Search & Filter</h3>
                </div>
                <p className="text-gray-700">Enable organizers to search and filter vendors based on location, category, availability, and rating.</p>
              </div>
              
              <div className="bg-gray-50 border-2 border-yellow-400 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-black">2</span>
                  </div>
                  <h3 className="font-bold text-black">Vendor Profiles</h3>
                </div>
                <p className="text-gray-700">Allow vendors to create profiles showcasing services with photo and video portfolios.</p>
              </div>
              
              <div className="bg-gray-50 border-2 border-yellow-400 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-black">3</span>
                  </div>
                  <h3 className="font-bold text-black">Booking System</h3>
                </div>
                <p className="text-gray-700">Provide an in-app booking and reservation system for seamless transactions.</p>
              </div>
              
              <div className="bg-gray-50 border-2 border-yellow-400 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-black">4</span>
                  </div>
                  <h3 className="font-bold text-black">Reviews & Ratings</h3>
                </div>
                <p className="text-gray-700">Implement review and rating features after service completion.</p>
              </div>
              
              <div className="bg-gray-50 border-2 border-yellow-400 rounded-lg p-6 md:col-span-2">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-black">5</span>
                  </div>
                  <h3 className="font-bold text-black">User-Friendly Interface</h3>
                </div>
                <p className="text-gray-700">Create a secure and user-friendly interface for both vendors and organizers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectivesSlide;
