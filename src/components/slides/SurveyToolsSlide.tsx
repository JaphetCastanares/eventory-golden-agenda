
import React from 'react';

const SurveyToolsSlide = () => {
  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">Digital Tools Usage</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto"></div>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-lg border-2 border-yellow-400 p-8">
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-lg p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Do you use digital tools to manage bookings?</h2>
              <div className="text-6xl font-bold mb-2">100%</div>
              <p className="text-xl">YES</p>
              <p className="text-sm mt-2 opacity-90">All vendors use digital booking management</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Are you good at using digital tools?</h2>
              <div className="text-6xl font-bold mb-2">100%</div>
              <p className="text-xl">YES</p>
              <p className="text-sm mt-2 opacity-90">All vendors are digitally proficient</p>
            </div>
          </div>
          
          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Common Digital Tools Used</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-green-400 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📅</span>
                </div>
                <h4 className="font-bold text-black mb-2">Google Calendar</h4>
                <p className="text-gray-600 text-sm">Scheduling and appointment management</p>
              </div>
              
              <div className="bg-white border-2 border-blue-400 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📊</span>
                </div>
                <h4 className="font-bold text-black mb-2">Spreadsheets</h4>
                <p className="text-gray-600 text-sm">Data tracking and client management</p>
              </div>
              
              <div className="bg-white border-2 border-purple-400 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📱</span>
                </div>
                <h4 className="font-bold text-black mb-2">Booking Apps</h4>
                <p className="text-gray-600 text-sm">Specialized booking management tools</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-800 mb-4">Technology Readiness</h3>
              <ul className="text-yellow-700 space-y-2">
                <li>✓ 100% already use digital booking tools</li>
                <li>✓ High confidence in digital proficiency</li>
                <li>✓ Familiar with various platforms</li>
                <li>✓ Ready for platform transition</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-2 border-green-400 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4">Eventory Advantage</h3>
              <ul className="text-green-700 space-y-2">
                <li>✓ No learning curve concerns</li>
                <li>✓ Seamless adoption expected</li>
                <li>✓ Can build on existing habits</li>
                <li>✓ Enhanced functionality welcomed</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-800 mb-2">Key Insight</h3>
            <p className="text-blue-700">
              The universal adoption of digital tools and high digital proficiency among all vendors indicates optimal conditions for Eventory platform introduction. There are no technological barriers to overcome.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyToolsSlide;
