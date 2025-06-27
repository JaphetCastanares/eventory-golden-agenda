
import React from 'react';

const LimitationsSlide = () => {
  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">Limitations</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto"></div>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-lg border-2 border-yellow-400 p-8">
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6">
              <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-4 text-center">Platform Scope</h3>
              <p className="text-red-700 text-center">
                Initially web-based and localized to a specific area or city
              </p>
            </div>
            
            <div className="bg-orange-50 border-2 border-orange-400 rounded-lg p-6">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-4 text-center">Availability Tracking</h3>
              <p className="text-orange-700 text-center">
                Real-time availability depends on vendor updates
              </p>
            </div>
            
            <div className="bg-yellow-50 border-2 border-yellow-600 rounded-lg p-6">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-yellow-800 mb-4 text-center">Payment Processing</h3>
              <p className="text-yellow-700 text-center">
                No direct payment processing - vendors manage independently
              </p>
            </div>
          </div>
          
          {/* Detailed Payment Limitation */}
          <div className="bg-gray-50 border-2 border-gray-400 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment System Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-700 mb-3">Current Approach</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Vendors manage their own payment transactions</li>
                  <li>• Options include GCash, bank transfer, or in-person</li>
                  <li>• Platform facilitates coordination only</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-700 mb-3">Implications</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Limited automation capabilities</li>
                  <li>• Trust-based transaction risks</li>
                  <li>• Manual payment verification required</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Future Considerations */}
          <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-3">Future Development Opportunities</h2>
            <div className="text-blue-700">
              <p>These limitations provide clear pathways for future platform enhancements, including mobile app development, expanded geographic coverage, and integrated payment processing systems.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitationsSlide;
