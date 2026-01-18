import React, { useEffect, useState } from 'react';
import { Star, ThumbsUp, Heart } from 'lucide-react';
import { TESTIMONIALS, MOCKUP_IMAGES } from '../constants';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Preload Sales Page Images while waiting
  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    // Sales Header Image
    preloadImage('https://i.imgur.com/3U7Zc6a.jpeg');

    // Mockups
    MOCKUP_IMAGES.forEach(img => preloadImage(img.src));

    // Testimonials
    TESTIMONIALS.forEach(t => preloadImage(t.img));

  }, []);

  useEffect(() => {
    const duration = 5000; // 5 seconds total loading
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Rotate testimonials
  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 2000); // Change every 2s

    return () => clearInterval(testimonialTimer);
  }, []);

  const testimonial = TESTIMONIALS[currentTestimonial];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-6 pt-20 pb-8 bg-brand-50 max-w-lg mx-auto w-full">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 animate-pulse">
        Seu guia sexual personalizado do Senses está pronto! 🔥💦
      </h2>

      {/* Progress Bar */}
      <div className="w-full bg-brand-200 rounded-full h-6 mb-4 relative overflow-hidden shadow-inner">
        <div 
          className="bg-brand-600 h-6 rounded-full transition-all duration-100 ease-linear flex items-center justify-center"
          style={{ width: `${progress}%` }}
        >
          {progress > 15 && <span className="text-white text-xs font-bold animate-pulse">{Math.round(progress)}%</span>}
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-12">Gerando seu plano exclusivo...</p>

      {/* Testimonials Carousel */}
      <div className="w-full bg-white rounded-2xl p-6 shadow-xl border border-brand-100 relative overflow-hidden h-64 flex flex-col justify-center">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-300 to-brand-600"></div>
        
        <div className="flex items-center mb-4 transition-opacity duration-500 ease-in-out">
          <img src={testimonial.img} alt={testimonial.name} className="w-14 h-14 rounded-full border-2 border-brand-200 object-cover mr-4" />
          <div>
            <p className="font-bold text-gray-800">{testimonial.name}</p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 italic mb-4 text-sm leading-relaxed">"{testimonial.text}"</p>
        
        <div className="flex items-center space-x-4 text-gray-400 text-xs mt-auto">
          <span className="flex items-center"><ThumbsUp size={12} className="mr-1" /> Útil</span>
          <span className="flex items-center"><Heart size={12} className="mr-1" /> Amei</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;