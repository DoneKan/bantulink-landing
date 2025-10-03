import React from 'react';

const BantuLinkLanding: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Fade Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute "></div>
      </div>
      

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <nav className="px-6 py-6 md:px-12">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <img 
                src="/img.jpg" 
                alt="BantuLink Logo" 
                className="h-18 md:h-20 w-auto"
              />
            
         
      

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8 text-base">
              <a 
                href="http://bantulink.com/launches" 
                className="text-gray-900 hover:text-orange-500  font-bold  transition-colors"
              >
                Features
              </a>
              <span className="text-gray-300">|</span>
              <a 
                href="https://www.bantulink.com/" 
                className="text-gray-900 hover:text-orange-500 font-bold  transition-colors"
              >
                Pricing
              </a>
              <span className="text-gray-900">|</span>
              <a 
                href="https://www.bantulink.com/" 
                className="text-gray-900 hover:text-orange-500 font-bold  transition-colors"
              >
                Contact
              </a>
              <span className="text-gray-900">|</span>
              <a 
                href="https://www.bantulink.com/auth" 
                className="text-gray-900 hover:text-orange-500  font-bold transition-colors"
              >
                Login
              </a>
              <span className="text-gray-900">|</span>
              <a 
                href="http://bantulink.com/launches" 
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Start your trial
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <a 
                href="https://www.bantulink.com/"
                className="bg--500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg text-sm"
              >
                Start trial
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6 py-12 md:py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-5xl font-bold mb-8 leading-tight">
              <span className="text-gray-900">Manage Your Social Media</span>
              <br />
              <span className="text-gray-900">In One Place</span>
              <br />
              <span className="text-orange-900">with Ease!</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-900 max-w-3xl mx-auto mb-12 leading-relaxed">
              BantuLink is your solution for social media management in Uganda. 
              Schedule, analyze, and track everything on one platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="http://bantulink.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-600 text-white font-bold px-10 py-5 rounded-xl text-lg flex items-center gap-3 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Start your free trial
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
             
            </div>

            {/* Additional Info */}
            <p className="text-gray-900 mt-8 text-lg">
              Free for 14 days. No card required!
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BantuLinkLanding;