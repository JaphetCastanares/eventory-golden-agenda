
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TitleSlide from './slides/TitleSlide';
import AbstractSlide from './slides/AbstractSlide';
import IntroductionSlide from './slides/IntroductionSlide';
import BackgroundSlide from './slides/BackgroundSlide';
import ObjectivesSlide from './slides/ObjectivesSlide';
import ScopeSlide from './slides/ScopeSlide';
import LimitationsSlide from './slides/LimitationsSlide';
import SurveyIntroSlide from './slides/SurveyIntroSlide';
import SurveyVendorTypeSlide from './slides/SurveyVendorTypeSlide';
import SurveyExperienceSlide from './slides/SurveyExperienceSlide';
import SurveyClientSourceSlide from './slides/SurveyClientSourceSlide';
import SurveyChallengesSlide from './slides/SurveyChallengesSlide';
import SurveyToolsSlide from './slides/SurveyToolsSlide';
import SurveyPlatformSlide from './slides/SurveyPlatformSlide';
import EventoryFeaturesSlide from './slides/EventoryFeaturesSlide';
import WhyEventorySlide from './slides/WhyEventorySlide';
import ThankYouSlide from './slides/ThankYouSlide';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { component: TitleSlide, title: "Title" },
    { component: AbstractSlide, title: "Abstract" },
    { component: IntroductionSlide, title: "Chapter 1: Introduction" },
    { component: BackgroundSlide, title: "Background of Study" },
    { component: ObjectivesSlide, title: "Objectives" },
    { component: ScopeSlide, title: "Scope" },
    { component: LimitationsSlide, title: "Limitations" },
    { component: SurveyIntroSlide, title: "Survey Results" },
    { component: SurveyVendorTypeSlide, title: "Vendor Types" },
    { component: SurveyExperienceSlide, title: "Business Experience" },
    { component: SurveyClientSourceSlide, title: "Client Sources" },
    { component: SurveyChallengesSlide, title: "Business Challenges" },
    { component: SurveyToolsSlide, title: "Digital Tools Usage" },
    { component: SurveyPlatformSlide, title: "Platform Adoption" },
    { component: EventoryFeaturesSlide, title: "Eventory Features" },
    { component: WhyEventorySlide, title: "Why Eventory?" },
    { component: ThankYouSlide, title: "Thank You" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 relative">
      {/* Slide Content */}
      <div className="min-h-screen p-8">
        <CurrentSlideComponent />   
      </div>

      {/* Bottom Navigation Buttons */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        <Button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          variant="outline"
          size="lg"
          className="bg-white/70 backdrop-blur-sm border-blue-500 text-blue-600 hover:bg-blue-50/80 shadow-lg transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        <Button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          variant="outline"
          size="lg"
          className="bg-white/70 backdrop-blur-sm border-blue-500 text-blue-600 hover:bg-blue-50/80 shadow-lg transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default Presentation;
