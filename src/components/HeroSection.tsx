
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="pt-24 sm:pt-28 md:pt-32 lg:pt-36">
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Grow Your Business</span>
                  <span className="block text-purple-700 mt-1">with Digital Marketing</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Expert SEO, PPC, and content writing services that deliver measurable results. 
                  We help businesses increase online visibility, drive quality traffic, and boost conversions.
                </p>
                <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                  <div className="rounded-md shadow">
                    <Link to="/contact">
                      <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-md text-lg">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0">
                    <Link to="/services">
                      <Button variant="outline" className="w-full bg-white hover:bg-gray-50 border-2 border-purple-700 text-purple-700 font-bold py-3 px-6 rounded-md text-lg">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-purple-100 flex items-center justify-center">
          <div className="relative w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-purple-300 animate-float" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-purple-400 animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-purple-200 animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute left-1/2 bottom-1/3 w-12 h-12 rounded-full bg-purple-500 animate-float" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-32 h-32 rounded-full bg-purple-600 opacity-30 animate-glow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
