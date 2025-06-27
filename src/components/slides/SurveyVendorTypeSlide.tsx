
import React from 'react';

const SurveyVendorTypeSlide = () => {
  const vendorData = [
    { type: 'Coordinator', count: 1, color: 'bg-red-400' },
    { type: 'Catering', count: 2, color: 'bg-blue-400' },
    { type: 'Sound System', count: 2, color: 'bg-green-400' },
    { type: 'Gown Rental', count: 1, color: 'bg-purple-400' },
    { type: 'Photographer', count: 1, color: 'bg-yellow-400' }
  ];

  const total = vendorData.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">Vendor Types</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto"></div>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-lg border-2 border-yellow-400 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Chart */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-black mb-6">Distribution of Vendor Types</h2>
            <div className="relative w-64 h-64">
              {/* Simple Pie Chart using CSS */}
              <div className="w-full h-full rounded-full relative overflow-hidden border-4 border-gray-300">
                <div className="absolute inset-0 bg-red-400" style={{clipPath: 'polygon(50% 50%, 50% 0%, 64.3% 0%)'}}></div>
                <div className="absolute inset-0 bg-blue-400" style={{clipPath: 'polygon(50% 50%, 64.3% 0%, 92.9% 25%)'}}></div>
                <div className="absolute inset-0 bg-green-400" style={{clipPath: 'polygon(50% 50%, 92.9% 25%, 92.9% 75%)'}}></div>
                <div className="absolute inset-0 bg-purple-400" style={{clipPath: 'polygon(50% 50%, 92.9% 75%, 64.3% 100%)'}}></div>
                <div className="absolute inset-0 bg-yellow-400" style={{clipPath: 'polygon(50% 50%, 64.3% 100%, 50% 0%)'}}></div>
              </div>
            </div>
          </div>
          
          {/* Legend and Data */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold text-black mb-6">Survey Participants (N=7)</h3>
            <div className="space-y-4">
              {vendorData.map((vendor, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                  <div className="flex items-center">
                    <div className={`w-6 h-6 ${vendor.color} rounded mr-3`}></div>
                    <span className="font-semibold text-black">{vendor.type}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-black">{vendor.count}</div>
                    <div className="text-sm text-gray-600">{((vendor.count / total) * 100).toFixed(1)}%</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-yellow-100 border-2 border-yellow-400 rounded-lg">
              <h4 className="font-bold text-yellow-800 mb-2">Key Insights</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Catering and Sound System services are most represented</li>
                <li>• Diverse vendor categories provide comprehensive market view</li>
                <li>• All major event service types included in survey</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyVendorTypeSlide;
