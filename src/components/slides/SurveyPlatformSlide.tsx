
import React from 'react';

const SurveyPlatformSlide = () => {
  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">Platform Adoption</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto"></div>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-lg border-2 border-yellow-400 p-8">
        <div className="space-y-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Would you use centralized platforms like Eventory?</h2>
              <div className="text-8xl font-bold mb-4">100%</div>
              <p className="text-2xl font-bold">YES</p>
              <p className="text-lg mt-2 opacity-90">Universal acceptance and enthusiasm</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Platform Features Validation</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-blue-700">100% agreed to suggested features</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-blue-700">Initial feature set validated</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-blue-700">No feature rejections recorded</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-blue-700">Strong market alignment confirmed</span>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 border-2 border-purple-400 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Market Readiness Indicators</h3>
              <ul className="text-purple-700 space-y-2">
                <li>• Zero resistance to platform adoption</li>
                <li>• Unanimous feature acceptance</li>
                <li>• High digital tool proficiency</li>
                <li>• Clear pain points identified</li>
                <li>• Multiple client source challenges</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-yellow-800 mb-6 text-center">Survey Conclusion</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl text-white">✓</span>
                </div>
                <h4 className="font-bold text-yellow-800">Market Validation</h4>
                <p className="text-yellow-700 text-sm">100% interest confirms market need</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h4 className="font-bold text-yellow-800">Feature Alignment</h4>
                <p className="text-yellow-700 text-sm">Proposed features match vendor needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl text-white">🚀</span>
                </div>
                <h4 className="font-bold text-yellow-800">Ready to Launch</h4>
                <p className="text-yellow-700 text-sm">Optimal conditions for platform launch</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-black mb-2">Next Steps</h3>
            <p className="text-black">
              With 100% vendor acceptance and feature validation, Eventory is positioned for successful market entry and rapid adoption among local event service providers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyPlatformSlide;
