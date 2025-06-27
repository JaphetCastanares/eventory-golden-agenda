
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
              <h3 className="text-2xl font-bold">Michael Jordan</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;
