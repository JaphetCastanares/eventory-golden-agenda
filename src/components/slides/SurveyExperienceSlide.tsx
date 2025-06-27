
import React from 'react';

const SurveyExperienceSlide = () => {
  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">Business Experience</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto"></div>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-lg border-2 border-yellow-400 p-8">
        <div className="text-center space-y-8">
          <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Years in Business</h2>
            <div className="text-6xl font-bold text-white mb-2">100%</div>
            <p className="text-xl text-white">5 Years and More</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 border-2 border-green-400 rounded-lg p-6">
              <h3 className="text-xl font-bold text-black mb-4">Experience Level</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">5+ Years</span>
                  <div className="flex items-center">
                    <div className="w-32 h-4 bg-gray-200 rounded-full mr-3">
                      <div className="w-full h-full bg-green-500 rounded-full"></div>
                    </div>
                    <span className="font-bold text-green-600">7/7</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">3-5 Years</span>
                  <div className="flex items-center">
                    <div className="w-32 h-4 bg-gray-200 rounded-full mr-3">
                      <div className="w-0 h-full bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="font-bold text-gray-400">0/7</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">1-3 Years</span>
                  <div className="flex items-center">
                    <div className="w-32 h-4 bg-gray-200 rounded-full mr-3">
                      <div className="w-0 h-full bg-yellow-500 rounded-full"></div>
                    </div>
                    <span className="font-bold text-gray-400">0/7</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Less than 1 Year</span>
                  <div className="flex items-center">
                    <div className="w-32 h-4 bg-gray-200 rounded-full mr-3">
                      <div className="w-0 h-full bg-red-500 rounded-full"></div>
                    </div>
                    <span className="font-bold text-gray-400">0/7</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Key Insights</h3>
              <ul className="text-blue-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>All surveyed vendors are established businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Extensive industry experience across all participants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Mature market with seasoned professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Strong foundation for platform adoption</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 border-2 border-green-400 rounded-lg p-6">
            <h3 className="text-lg font-bold text-green-800">Survey Implications</h3>
            <p className="text-green-700 mt-2">
              The unanimous 5+ years experience indicates we are targeting established, professional vendors who understand the market and are likely to appreciate systematic improvements to their business processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyExperienceSlide;
