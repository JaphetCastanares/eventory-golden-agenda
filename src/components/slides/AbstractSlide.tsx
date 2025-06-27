
import React from 'react';

const AbstractSlide = () => {
  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-black mb-4">ABSTRACT</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto"></div>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-lg border-2 border-yellow-400 p-8">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-800 leading-relaxed text-justify">
            Event planning faces significant challenges in sourcing and coordinating reliable local vendors such as caterers, photographers, and sound system providers. Current research (Lee, S., & Kim, W. G. (2018)) confirms that many organizers rely on Facebook's fragmented marketplace, which lacks dedicated search filters, real-time availability verification, and standardized vendor/supplier/services portfolio profiles. This reliance on manual word-for-word searches often leads to inconsistent results, creating inefficiencies and poor event planning experiences - a finding consistent with recent studies on event management pain points (Xiang, Z., et al. (2015)).
          </p>
          
          <p className="text-gray-800 leading-relaxed text-justify mt-6">
            To address these gaps, this capstone project introduces <span className="font-bold text-yellow-600">Eventory</span>, a centralized web-based platform designed to streamline vendor discovery and booking. Eventory overcomes the limitations of ad-hoc social media searches by offering smart filtering capabilities based on location, category, pricing, and verified ratings. The platform provides real-time availability tracking, web app inquiries and confirmations, coupled with automated SMS notifications to vendors for new reservations, ensuring prompt responses - addressing the communication gaps identified in event coordination literature.
          </p>
          
          <p className="text-gray-800 leading-relaxed text-justify mt-6">
            A key innovation is the pre-packaged vendor deal system, allowing users to book multiple complementary services with a single action, like successful models in other service industries. Additionally, integrated location mapping visualizes vendor proximity to simplify logistics planning. For vendors, Eventory offers robust multimedia profiles to showcase services through photos, videos, and tiered pricing. Instead of handling payments directly, the platform facilitates manual payment coordination by allowing vendors to display their preferred payment instructions, and organizers can optionally upload proof of payment for vendor confirmation.
          </p>
          
          <p className="text-gray-800 leading-relaxed text-justify mt-6">
            Eventory enhances operational efficiency for both professional organizers and aspiring event planners, increases business visibility for local vendors, and elevates the overall quality of event planning through systematic coordination and automation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbstractSlide;
