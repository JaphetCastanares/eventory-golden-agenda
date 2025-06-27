
import React from 'react';

const IntroductionSlide = () => {
  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-2">Chapter 1</h1>
        <h2 className="text-5xl font-bold text-blue-600 mb-4">INTRODUCTION</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-lg border-2 border-blue-500 p-8">
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold">Welcome to Eventory</h3>
            <p className="text-xl mt-2">Transforming Event Planning Through Technology</p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border-2 border-blue-500 rounded-lg p-8">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">Problem</h4>
              <p className="text-lg text-gray-700">Fragmented vendor discovery and booking processes</p>
            </div>
            
            <div className="bg-gray-50 border-2 border-purple-500 rounded-lg p-8">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">Solution</h4>
              <p className="text-lg text-gray-700">Centralized platform for streamlined event planning</p>
            </div>
            
            <div className="bg-gray-50 border-2 border-green-500 rounded-lg p-8">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">Impact</h4>
              <p className="text-lg text-gray-700">Enhanced efficiency for organizers and vendors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSlide;
