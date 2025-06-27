
import React from 'react';
import { Search, User, Star, Package, Calendar, MessageCircle, Smartphone, Bot } from 'lucide-react';

const EventoryFeaturesSlide = () => {
  const features = [
    {
      icon: Search,
      title: "ADVANCED VENDOR SEARCH",
      description: "Find vendors easily – search by service, budget, or location.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: User,
      title: "VENDOR PROFILE",
      description: "See complete portfolios – services, pricing, even their business permits!",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Star,
      title: "RATINGS AND FEEDBACK",
      description: "Book with confidence using real user ratings.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Package,
      title: "PACKAGED SERVICES",
      description: "One-click bundles for perfect vendor combinations!",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Calendar,
      title: "BOOKING PROCESS",
      description: "Our guided booking takes just minutes – no headaches.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Calendar,
      title: "CALENDAR VIEW",
      description: "Real-time calendars show who's actually available.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: MessageCircle,
      title: "CHAT WINDOW",
      description: "Get answers fast with built-in chat.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Smartphone,
      title: "SMS/EMAIL ALERTS",
      description: "Instant updates keep everyone in sync.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Bot,
      title: "AI SUPPORT BOT",
      description: "Stuck? Our AI assistant guides you 24/7.",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">EVENTORY FEATURES</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
        <h2 className="text-3xl font-semibold text-blue-600">Everything You Need in One Platform</h2>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-lg border-2 border-blue-500 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{feature.title}</h3>
                <p className="text-lg text-gray-700 text-center leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventoryFeaturesSlide;
