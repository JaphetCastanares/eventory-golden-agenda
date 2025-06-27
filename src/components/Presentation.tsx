
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
    { component: SurveyPlatformSlide, title: "Platform Adoption" }
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

      {/* Floating Navigation Buttons */}
      <Button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        variant="outline"
        size="lg"
        className="fixed left-6 top-1/2 transform -translate-y-1/2 border-blue-500 text-blue-600 hover:bg-blue-50 bg-white shadow-lg z-10"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      
      <Button
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        variant="outline"
        size="lg"
        className="fixed right-6 top-1/2 transform -translate-y-1/2 border-blue-500 text-blue-600 hover:bg-blue-50 bg-white shadow-lg z-10"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Presentation;
