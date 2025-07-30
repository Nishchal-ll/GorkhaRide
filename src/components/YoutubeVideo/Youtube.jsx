import React, { useState, useEffect } from 'react';
import { Play, Youtube, ExternalLink, Users, Car, Utensils, Package, Recycle, Store, UserCheck } from 'lucide-react';

function YoutubeVideos() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const bookingVideos = [
    {
      title: "How to Book a Ride",
      description: "Learn how to book motorbike or car rides quickly and easily with our app.",
      icon: Car,
      gradient: "from-blue-500 to-cyan-500",
      accentColor: "blue"
    },
    {
      title: "How to Order Food",
      description: "Step-by-step guide to ordering food from your favorite restaurants.",
      icon: Utensils,
      gradient: "from-orange-500 to-red-500",
      accentColor: "orange"
    },
    {
      title: "How to Book Parcel Delivery",
      description: "Step-by-step guide to book parcel delivery services.",
      icon: Package,
      gradient: "from-purple-500 to-indigo-500",
      accentColor: "purple"
    },
    {
      title: "How to Sell Waste for Money",
      description: "Learn how to schedule waste pickup and earn money through recycling.",
      icon: Recycle,
      gradient: "from-green-500 to-emerald-500",
      accentColor: "green"
    }
  ];

  const partnerVideos = [
    {
      title: "How to Become a Vendor Partner",
      description: "Start selling your products through our marketplace platform and reach more customers.",
      icon: Store,
      gradient: "from-teal-500 to-cyan-500",
      accentColor: "teal"
    },
    {
      title: "How to Become a Ride Partner",
      description: "Earn money by providing ride and delivery services in your area.",
      icon: Car,
      gradient: "from-indigo-500 to-purple-500",
      accentColor: "indigo"
    },
    {
      title: "How to Become a Service Provider",
      description: "Offer your professional services to our growing customer base.",
      icon: UserCheck,
      gradient: "from-pink-500 to-rose-500",
      accentColor: "pink"
    }
  ];

  const VideoCard = ({ video, index, delay }) => {
    const IconComponent = video.icon;
    
    return (
      <div
        className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-rotate-1 border border-gray-100 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{ transitionDelay: delay }}
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Gradient Background Overlay */}
        <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
        
        {/* Video Thumbnail Area */}
        <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          {/* Icon Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${video.gradient} opacity-20`}></div>
          
          {/* Main Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-24 h-24 bg-gradient-to-br ${video.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
              <IconComponent className="w-12 h-12 text-white" />
            </div>
          </div>
          
          {/* Play Button */}
          <a
            href="https://www.youtube.com/@gorkharide"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center group"
          >
            <div className="relative">
              <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-125 transition-all duration-500 border-2 border-white/50">
                <Play className="w-8 h-8 text-green-600 ml-1" fill="currentColor" />
              </div>
              
              {/* Ripple Effects */}
              <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
              <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
          
          {/* Corner Accent */}
          <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${video.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
        </div>
        
        {/* Content */}
        <div className="p-6 relative z-10">
          <h4 className="font-bold text-xl mb-3 text-gray-900 line-clamp-2">
            {video.title}
          </h4>
          <p className="text-gray-600 leading-relaxed mb-4">
            {video.description}
          </p>
          
          {/* Watch Button */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Tutorial Video</span>
            <div className="flex items-center space-x-2 text-green-600">
              <span className="text-sm font-medium">Watch Now</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </div>
        
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-3xl border-2 border-gray-200 opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
      </div>
    );
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30">
              Video Tutorials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            How-To Videos
          </h2>
          <p className="text-xl text-green-50 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Learn how to use Gorkha Ride services and become a partner with our comprehensive video guides.
          </p>
        </div>

        {/* Booking Services Section */}
        <div className="mb-20">
          <div className={`text-center mb-12 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">How to Book Services</h3>
            <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookingVideos.map((video, index) => (
              <VideoCard 
                key={index} 
                video={video} 
                index={`booking-${index}`} 
                delay={`${500 + index * 150}ms`}
              />
            ))}
          </div>
        </div>

        {/* Partner Section */}
        <div className="mb-16">
          <div className={`text-center mb-12 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">How to Become a Partner</h3>
            <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerVideos.map((video, index) => (
              <VideoCard 
                key={index} 
                video={video} 
                index={`partner-${index}`} 
                delay={`${900 + index * 150}ms`}
              />
            ))}
          </div>
        </div>

        {/* YouTube CTA */}
        <div className={`text-center transform transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Youtube className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h4 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h4>
            <p className="text-green-50 mb-8 max-w-2xl mx-auto">
              Visit our YouTube channel for complete tutorials, tips, and the latest updates about Gorkha Ride services.
            </p>
            
            <a
              href="https://www.youtube.com/@gorkharide"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl group"
            >
              <Youtube className="w-6 h-6 mr-3 text-white" />
              <span>Visit Our YouTube Channel</span>
              <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <div className="mt-6 flex items-center justify-center space-x-2">
              <Users className="w-5 h-5 text-green-100" />
              <span className="text-green-100 font-medium">Join 10K+ subscribers</span>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 0s;
        }
        .animation-delay-200 {
          animation-delay: 2s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

export default YoutubeVideos;