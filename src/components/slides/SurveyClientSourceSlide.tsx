
import React from 'react';

const SurveyClientSourceSlide = () => {
  const sourceData = [
    { source: 'Word of Mouth', percentage: 85.7, color: 'bg-blue-500' },
    { source: 'Social Media (Facebook)', percentage: 85.7, color: 'bg-purple-500' },
    { source: 'Through an Agency', percentage: 85.5, color: 'bg-green-500' },
    { source: 'Online Marketplaces', percentage: 42.8, color: 'bg-yellow-500' }
  ];

  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">Client Sources</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto"></div>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-lg border-2 border-yellow-400 p-8">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black mb-2">Where Vendors Get Clients Most Often</h2>
            <p className="text-gray-600">Multiple responses allowed</p>
          </div>
          
          <div className="space-y-6">
            {sourceData.map((item, index) => (
              <div key={index} className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-black">{item.source}</h3>
                  <span className="text-2xl font-bold text-black">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
                    className={`${item.color} h-4 rounded-full transition-all duration-1000`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Top Client Sources</h3>
              <ul className="text-blue-700 space-y-2">
                <li>• <strong>Word of Mouth:</strong> 85.7% - Traditional referrals</li>
                <li>• <strong>Social Media:</strong> 85.7% - Facebook predominant</li>
                <li>• <strong>Agencies:</strong> 85.5% - Professional networks</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border-2 border-yellow-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-800 mb-4">Key Insights</h3>
              <ul className="text-yellow-700 space-y-2">
                <li>• Multiple acquisition channels used simultaneously</li>
                <li>• Online marketplaces underutilized (42.8%)</li>
                <li>• High dependency on social media platforms</li>
                <li>• Opportunity for centralized platform adoption</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6">
            <h3 className="text-lg font-bold text-red-800 mb-2">Platform Opportunity</h3>
            <p className="text-red-700">
              The heavy reliance on Facebook (85.7%) and relatively low use of dedicated online marketplaces (42.8%) indicates a significant opportunity for Eventory to provide a more specialized, efficient alternative.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyClientSourceSlide;
