
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4 shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-black">Eventory Presentation</h1>
          <div className="flex items-center gap-4">
            <span className="text-black font-medium">
              {currentSlide + 1} / {slides.length}
            </span>
            <div className="flex gap-2">
              <Button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                variant="outline"
                size="sm"
                className="border-black text-black hover:bg-black hover:text-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                variant="outline"
                size="sm"
                className="border-black text-black hover:bg-black hover:text-white"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className="max-w-7xl mx-auto p-8">
        <CurrentSlideComponent />   
      </div>

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
