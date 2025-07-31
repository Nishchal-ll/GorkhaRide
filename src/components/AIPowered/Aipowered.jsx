import React, { useState, useEffect, useRef } from 'react';
import { Bot, Lightbulb, BarChart3, CheckCircle, Clock } from 'lucide-react';

const Aipowered = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleFeatures, setVisibleFeatures] = useState([]);
  const sectionRef = useRef(null);
  const featureRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sectionRef.current && entry.isIntersecting) {
            setIsVisible(true);
          }
          
          // Check for individual feature cards
          const featureIndex = featureRefs.current.indexOf(entry.target);
          if (featureIndex !== -1 && entry.isIntersecting) {
            setVisibleFeatures(prev => {
              if (!prev.includes(featureIndex)) {
                return [...prev, featureIndex];
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: '-50px 0px -50px 0px' // Adjust trigger point
      }
    );

    // Observe the main section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe feature cards
    featureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      featureRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const features = [
    {
      icon: Bot,
      title: "AI Chat Support",
      description: "24/7 automated help for customers, drivers, and vendors with our friendly bilingual assistant.",
      status: "Available Soon",
      available: false,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Lightbulb,
      title: "Smart Recommendations",
      description: "Personalized suggestions for food, rides, and services based on your preferences and location.",
      status: "Available Now",
      available: true,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Insights and reports to help vendors optimize their business and customers plan better.",
      status: "Available Now",
      available: true,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="features"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className={`absolute top-10 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl transition-all duration-2000 ${
          isVisible ? 'animate-pulse scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}></div>
        <div className={`absolute top-40 right-10 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl transition-all duration-2000 delay-500 ${
          isVisible ? 'animate-pulse scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}></div>
        <div className={`absolute -bottom-8 left-20 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl transition-all duration-2000 delay-1000 ${
          isVisible ? 'animate-pulse scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className={`inline-block mb-4 transform transition-all duration-800 delay-200 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}>
            <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-dark text-sm font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Powered by AI
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            AI-Powered Features
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Smart technology to enhance your experience with personalized recommendations and intelligent support.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isFeatureVisible = visibleFeatures.includes(index);
            
            return (
              <div
                key={index}
                ref={el => featureRefs.current[index] = el}
                className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border border-green-100 hover:border-green-200 ${
                  isFeatureVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-16 opacity-0 scale-95'
                }`}
                style={{ 
                  transitionDelay: isFeatureVisible ? `${index * 200}ms` : '0ms',
                  transform: isFeatureVisible 
                    ? 'translateY(0) scale(1)' 
                    : `translateY(64px) scale(0.95)`
                }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${
                    isFeatureVisible ? 'animate-bounce' : ''
                  }`} style={{ animationDelay: `${index * 100}ms`, animationDuration: '1s', animationIterationCount: '1' }}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-all duration-500 transform ${
                    isFeatureVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`} style={{ transitionDelay: `${200 + index * 100}ms` }}>
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className={`text-gray-600 mb-6 leading-relaxed transition-all duration-700 transform ${
                    isFeatureVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`} style={{ transitionDelay: `${400 + index * 100}ms` }}>
                    {feature.description}
                  </p>
                  
                  {/* Status */}
                  <div className={`flex items-center space-x-2 transition-all duration-700 transform ${
                    isFeatureVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`} style={{ transitionDelay: `${600 + index * 100}ms` }}>
                    {feature.available ? (
                      <CheckCircle className="w-5 h-5 text-green-500 animate-pulse" />
                    ) : (
                      <Clock className="w-5 h-5 text-amber-500" />
                    )}
                    <span className={`text-sm font-medium ${
                      feature.available ? 'text-green-600' : 'text-amber-600'
                    }`}>
                      {feature.status}
                    </span>
                  </div>
                  
                  {/* Progress Bar for Available Features */}
                  {feature.available && (
                    <div className={`mt-4 w-full bg-green-100 rounded-full h-2 overflow-hidden transition-all duration-1000 ${
                      isFeatureVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`} style={{ transitionDelay: `${800 + index * 100}ms` }}>
                      <div className={`h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-2000 ${
                        isFeatureVisible ? 'w-full animate-pulse' : 'w-0'
                      }`} style={{ transitionDelay: `${1000 + index * 100}ms` }}></div>
                    </div>
                  )}
                </div>
                
                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400 to-transparent opacity-10 rounded-2xl transition-all duration-700 ${
                  isFeatureVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                }`} style={{ transitionDelay: `${300 + index * 100}ms` }}></div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
        }`} style={{ transitionDelay: '1500ms' }}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-dark px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-500 cursor-pointer group">
            <span className="font-medium">Experience AI-Powered Innovation</span>
            <div className="w-2 h-2 bg-white rounded-full animate-ping group-hover:animate-bounce"></div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideInFromBottom {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInScale {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Aipowered;