
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-6 py-4 shadow-lg">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white">Eventory Presentation</h1>
          <div className="flex items-center gap-4">
            <span className="text-white font-medium text-lg">
              {currentSlide + 1} / {slides.length}
            </span>
            <div className="flex gap-2">
              <Button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                variant="outline"
                size="sm"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                variant="outline"
                size="sm"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
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
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-500' : 'bg-gray-500'
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
