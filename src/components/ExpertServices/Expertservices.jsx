import React, { useState, useEffect } from 'react';
import { 
  Zap, Wrench, PaintBucket, Hammer, Smartphone, 
  Droplets, Car, Leaf, Shirt, Tv, Truck, 
  CreditCard, UserCheck, HardHat, 
  Compass, Briefcase, Sprout, Armchair, 
  Monitor, Printer, TestTube, Utensils, 
  ClipboardCheck, Navigation, CheckCircle
} from 'lucide-react';

function ExpertServices() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    setIsVisible(true);
    
    // Stagger the card animations
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll('.expert-category');
      cards.forEach((card, index) => {
        setTimeout(() => {
          setVisibleCards(prev => new Set([...prev, index]));
        }, index * 50);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    { icon: Zap, name: "Electrician", bgColor: "bg-green-100", textColor: "text-dark" },
    { icon: Wrench, name: "Plumber", bgColor: "bg-green-200", textColor: "text-dark" },
    { icon: PaintBucket, name: "Painter", bgColor: "bg-green-300", textColor: "text-dark" },
    { icon: Hammer, name: "Carpenter", bgColor: "bg-green-300", textColor: "text-emerald-600" },
    { icon: Wrench, name: "Cleaner", bgColor: "bg-green-200", textColor: "text-emerald-700" },
    { icon: Smartphone, name: "Technician", bgColor: "bg-green-100", textColor: "text-teal-600" },
    { icon: Droplets, name: "Water Tanker", bgColor: "bg-cyan-100", textColor: "text-cyan-600" },
    { icon: Car, name: "Mechanic", bgColor: "bg-green-100", textColor: "text-green-600" },
    { icon: Leaf, name: "Gardener", bgColor: "bg-lime-100", textColor: "text-lime-600" },
    { icon: Shirt, name: "Laundry", bgColor: "bg-green-200", textColor: "text-green-700" },
    { icon: Tv, name: "TV Repair", bgColor: "bg-emerald-100", textColor: "text-emerald-600" },
    { icon: Car, name: "Vehicle Rental", bgColor: "bg-green-100", textColor: "text-green-600" },
    { icon: Truck, name: "Home & Goods Shifting", bgColor: "bg-green-200", textColor: "text-green-700" },
    { icon: Wrench, name: "Car Maintenance", bgColor: "bg-emerald-100", textColor: "text-emerald-600" },
    { icon: CreditCard, name: "Bluebook Renewal", bgColor: "bg-teal-100", textColor: "text-teal-600" },
    { icon: UserCheck, name: "Home Medical", bgColor: "bg-green-300", textColor: "text-dark" },
    { icon: UserCheck, name: "Instructors", bgColor: "bg-emerald-200", textColor: "text-emerald-700" },
    { icon: HardHat, name: "Construction", bgColor: "bg-lime-100", textColor: "text-lime-600" },
    { icon: Compass, name: "Interior Design", bgColor: "bg-green-100", textColor: "text-green-600" },
    { icon: Truck, name: "Towing", bgColor: "bg-emerald-100", textColor: "text-emerald-600" },
    { icon: Briefcase, name: "Company Registration", bgColor: "bg-teal-100", textColor: "text-teal-600" },
    { icon: Sprout, name: "Garden Maintenance", bgColor: "bg-lime-200", textColor: "text-lime-700" },
    { icon: Armchair, name: "Chair Repair", bgColor: "bg-green-200", textColor: "text-green-700" },
    { icon: Monitor, name: "Computer Maintenance", bgColor: "bg-emerald-100", textColor: "text-emerald-600" },
    { icon: Printer, name: "Printer Maintenance", bgColor: "bg-green-100", textColor: "text-green-600" },
    { icon: TestTube, name: "Soil/Water/Air Test", bgColor: "bg-emerald-200", textColor: "text-emerald-700" },
    { icon: Utensils, name: "Catering", bgColor: "bg-lime-100", textColor: "text-lime-600" },
    { icon: UserCheck, name: "Drivers on Call", bgColor: "bg-teal-100", textColor: "text-teal-600" },
    { icon: ClipboardCheck, name: "Vehicle Registration", bgColor: "bg-green-200", textColor: "text-green-700" },
    { icon: Navigation, name: "Vastu Consultation", bgColor: "bg-emerald-100", textColor: "text-emerald-600" }
  ];

  const steps = [
    {
      number: 1,
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      description: "Browse and select the service you need from our verified professionals"
    },
    {
      number: 2,
      bgColor: "bg-green-200",
      textColor: "text-green-700",
      description: "Choose your preferred time slot and location for the service"
    },
    {
      number: 3,
      bgColor: "bg-green-300",
      textColor: "text-dark",
      description: "Get instant confirmation and track your expert's arrival in real-time"
    },
    {
      number: 4,
      bgColor: "bg-emerald-200",
      textColor: "text-emerald-700",
      description: "Rate and review your experience to help other users"
    }
  ];

  const benefits = [
    "Verified and background-checked professionals",
    "Transparent pricing with no hidden costs",
    "Real-time tracking and updates",
    "Secure payment options",
    "24/7 customer support"
  ];

  return (
    <section id="expert-services" className="py-20 bg-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles with different speeds and paths */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-100 rounded-full opacity-30 animate-float-continuous"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-emerald-200 rounded-full opacity-40 animate-drift-right"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-teal-100 rounded-full opacity-20 animate-orbit"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-green-200 rounded-full opacity-50 animate-vertical-drift"></div>
        <div className="absolute top-1/2 left-1/4 w-8 w-8 bg-lime-200 rounded-full opacity-30 animate-diagonal-drift"></div>
        <div className="absolute top-3/4 right-1/3 w-14 h-14 bg-emerald-100 rounded-full opacity-25 animate-slow-spin"></div>
        
        {/* Moving gradient lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-200 to-transparent animate-slide-right opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-emerald-200 to-transparent animate-slide-left opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with breathing animation */}
        <div className={`text-center mb-16 transform transition-all duration-1000 animate-breathe ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl font-black text-gray-900 mb-4 animate-text-glow">Expert Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-subtle-sway">Connect with verified professionals for all your home and personal needs.</p>
        </div>
        
        {/* Services Grid with continuous animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isCardVisible = visibleCards.has(index);
            
            return (
              <div 
                key={index}
                className={`expert-category bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 border border-green-100 transform animate-card-float ${
                  isCardVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  transitionDuration: '500ms',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className={`${service.bgColor} ${service.textColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transform transition-all duration-300 hover:scale-110 hover:rotate-6 animate-icon-dance`}>
                  <IconComponent className="w-6 h-6 animate-icon-pulse" />
                </div>
                <h3 className="font-semibold text-gray-900 animate-title-wave" style={{ animationDelay: `${index * 0.2}s` }}>{service.name}</h3>
              </div>
            );
          })}
        </div>
        
        {/* How It Works Section with animated background */}
        <div className={`bg-white rounded-2xl shadow-lg p-8 border border-green-100 transform transition-all duration-1000 delay-1000 animate-section-glow ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-green-900 mb-4 animate-heading-pulse">How Expert Services Work</h3>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex items-start transform transition-all duration-500 animate-step-slide ${
                      isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: `${1200 + index * 200}ms`,
                      animationDelay: `${index * 0.5}s`
                    }}
                  >
                    <div className={`${step.bgColor} ${step.textColor} rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1 transform transition-all duration-300 hover:scale-110 hover:rotate-12 animate-number-bounce`}>
                      <span className="font-bold text-sm animate-number-flash">{step.number}</span>
                    </div>
                    <p className="text-gray-600 animate-text-typing">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-10">
              <div className={`rounded-xl p-6 border border-green-100 transform transition-all duration-1000 delay-1500 animate-benefits-container ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}>
                <h4 className="font-semibold text-lg mb-4 text-gray-900 animate-subtitle-glow">Why Choose Our Experts?</h4>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li 
                      key={index}
                      className={`flex items-center transform transition-all duration-500 hover:translate-x-2 animate-benefit-item ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                      }`}
                      style={{ 
                        transitionDelay: `${1800 + index * 150}ms`,
                        animationDelay: `${index * 0.3}s`
                      }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 transform transition-all duration-300 hover:scale-110 animate-check-pulse" />
                      <span className="text-gray-900 animate-text-reveal">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg transform animate-button-glow ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
                style={{ transitionDelay: '2500ms' }}
                >
                  <span className="relative z-10 animate-button-text">Book an Expert Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        /* Continuous floating animations */
        @keyframes float-continuous {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-15px) translateX(10px) rotate(90deg); }
          50% { transform: translateY(-30px) translateX(0px) rotate(180deg); }
          75% { transform: translateY(-15px) translateX(-10px) rotate(270deg); }
          100% { transform: translateY(0px) translateX(0px) rotate(360deg); }
        }
        
        @keyframes drift-right {
          0% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(20px) translateY(-10px); }
          100% { transform: translateX(40px) translateY(0px); }
        }
        
        @keyframes orbit {
          0% { transform: translateX(0px) translateY(0px) rotate(0deg); }
          25% { transform: translateX(15px) translateY(-15px) rotate(90deg); }
          50% { transform: translateX(0px) translateY(-30px) rotate(180deg); }
          75% { transform: translateX(-15px) translateY(-15px) rotate(270deg); }
          100% { transform: translateX(0px) translateY(0px) rotate(360deg); }
        }
        
        @keyframes vertical-drift {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        
        @keyframes diagonal-drift {
          0% { transform: translate(0px, 0px); }
          50% { transform: translate(30px, -20px); }
          100% { transform: translate(60px, 0px); }
        }
        
        @keyframes slow-spin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes slide-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
        
        @keyframes slide-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100vw); }
        }
        
        /* Text and content animations */
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(34, 197, 94, 0.3); }
          50% { text-shadow: 0 0 20px rgba(34, 197, 94, 0.6); }
        }
        
        @keyframes subtle-sway {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(2px); }
        }
        
        @keyframes card-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        
        @keyframes icon-dance {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(5deg) scale(1.05); }
          75% { transform: rotate(-5deg) scale(0.95); }
        }
        
        @keyframes icon-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes title-wave {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-1px); }
        }
        
        @keyframes section-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.1); }
          50% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.2); }
        }
        
        @keyframes heading-pulse {
          0%, 100% { color: rgb(20, 83, 45); }
          50% { color: rgb(34, 197, 94); }
        }
        
        @keyframes step-slide {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(2px); }
        }
        
        @keyframes number-bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes number-flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes text-typing {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        
        @keyframes benefits-container {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.01); }
        }
        
        @keyframes subtitle-glow {
          0%, 100% { color: rgb(17, 24, 39); }
          50% { color: rgb(75, 85, 99); }
        }
        
        @keyframes benefit-item {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(1px); }
        }
        
        @keyframes check-pulse {
          0%, 100% { transform: scale(1); color: rgb(34, 197, 94); }
          50% { transform: scale(1.1); color: rgb(16, 185, 129); }
        }
        
        @keyframes text-reveal {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.9; }
        }
        
        @keyframes button-glow {
          0%, 100% { 
            background: linear-gradient(90deg, #16a34a 0%, #10b981 50%, #16a34a 100%);
            box-shadow: 0 0 15px rgba(34, 197, 94, 0.3);
          }
          50% { 
            background: linear-gradient(90deg, #10b981 0%, #16a34a 50%, #10b981 100%);
            box-shadow: 0 0 25px rgba(34, 197, 94, 0.5);
          }
        }
        
        @keyframes button-text {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        /* Apply animations */
        .animate-float-continuous {
          animation: float-continuous 8s ease-in-out infinite;
        }
        
        .animate-drift-right {
          animation: drift-right 12s linear infinite;
        }
        
        .animate-orbit {
          animation: orbit 15s ease-in-out infinite;
        }
        
        .animate-vertical-drift {
          animation: vertical-drift 6s ease-in-out infinite;
        }
        
        .animate-diagonal-drift {
          animation: diagonal-drift 10s linear infinite;
        }
        
        .animate-slow-spin {
          animation: slow-spin 20s linear infinite;
        }
        
        .animate-slide-right {
          animation: slide-right 15s linear infinite;
        }
        
        .animate-slide-left {
          animation: slide-left 18s linear infinite;
        }
        
        .animate-breathe {
          animation: breathe 4s ease-in-out infinite;
        }
        
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
        
        .animate-subtle-sway {
          animation: subtle-sway 5s ease-in-out infinite;
        }
        
        .animate-card-float {
          animation: card-float 4s ease-in-out infinite;
        }
        
        .animate-icon-dance {
          animation: icon-dance 3s ease-in-out infinite;
        }
        
        .animate-icon-pulse {
          animation: icon-pulse 2s ease-in-out infinite;
        }
        
        .animate-title-wave {
          animation: title-wave 3s ease-in-out infinite;
        }
        
        .animate-section-glow {
          animation: section-glow 6s ease-in-out infinite;
        }
        
        .animate-heading-pulse {
          animation: heading-pulse 4s ease-in-out infinite;
        }
        
        .animate-step-slide {
          animation: step-slide 4s ease-in-out infinite;
        }
        
        .animate-number-bounce {
          animation: number-bounce 2s ease-in-out infinite;
        }
        
        .animate-number-flash {
          animation: number-flash 3s ease-in-out infinite;
        }
        
        .animate-text-typing {
          animation: text-typing 4s ease-in-out infinite;
        }
        
        .animate-benefits-container {
          animation: benefits-container 8s ease-in-out infinite;
        }
        
        .animate-subtitle-glow {
          animation: subtitle-glow 5s ease-in-out infinite;
        }
        
        .animate-benefit-item {
          animation: benefit-item 3s ease-in-out infinite;
        }
        
        .animate-check-pulse {
          animation: check-pulse 2s ease-in-out infinite;
        }
        
        .animate-text-reveal {
          animation: text-reveal 4s ease-in-out infinite;
        }
        
        .animate-button-glow {
          animation: button-glow 3s ease-in-out infinite;
          background-size: 200% 100%;
        }
        
        .animate-button-text {
          animation: button-text 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default ExpertServices;