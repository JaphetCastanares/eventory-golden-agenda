
import React from 'react';

const SurveyIntroSlide = () => {
  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">Survey Results</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto"></div>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-lg border-2 border-yellow-400 p-8">
        <div className="text-center space-y-8">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-black mb-4">Survey Analysis</h2>
            <p className="text-lg text-black">Understanding Vendor Perspectives and Needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 border-2 border-yellow-400 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-black mb-4">Survey Participants</h3>
              <div className="text-4xl font-bold text-yellow-600 mb-2">7</div>
              <p className="text-gray-700">Local vendors across multiple categories</p>
            </div>
            
            <div className="bg-gray-50 border-2 border-yellow-400 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-black mb-4">Response Rate</h3>
              <div className="text-4xl font-bold text-yellow-600 mb-2">100%</div>
              <p className="text-gray-700">Complete responses from all participants</p>
            </div>
          </div>
          
          <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Survey Objectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div>
                <h4 className="font-bold text-blue-700">Business Insights</h4>
                <p className="text-blue-600 text-sm">Understanding vendor experience and challenges</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-700">Technology Adoption</h4>
                <p className="text-blue-600 text-sm">Current digital tool usage patterns</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-700">Platform Validation</h4>
                <p className="text-blue-600 text-sm">Interest in centralized solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyIntroSlide;
