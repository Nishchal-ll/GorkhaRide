
import React, { useState, useEffect } from 'react';
import { Star, Download, Smartphone, Car, UtensilsCrossed, ShoppingBag, Wrench, MapPin, Users, Clock } from 'lucide-react';

function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentService, setCurrentService] = useState(0);
    
    const services = [
        { icon: Car, name: "Ride Booking", color: "text-blue-400" },
        { icon: UtensilsCrossed, name: "Food Delivery", color: "text-red-400" },
        { icon: ShoppingBag, name: "Local Shopping", color: "text-purple-400" },
        { icon: Wrench, name: "Expert Services", color: "text-orange-400" }
    ];

    const stats = [
        { icon: Users, value: "50K+", label: "Active Users" },
        { icon: MapPin, value: "7", label: "Cities" },
        { icon: Star, value: "4.8", label: "App Rating" },
        { icon: Clock, value: "24/7", label: "Support" }
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentService((prev) => (prev + 1) % services.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const CurrentServiceIcon = services[currentService].icon;

    return (
        <section className="relative min-h-screen  text-dark overflow-hidden bg-white">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-400/20 rounded-full blur-lg animate-bounce"></div>
                <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-40 right-10 w-28 h-28 bg-purple-400/15 rounded-full blur-xl animate-bounce"></div>
                
                {/* Floating Icons */}
                <div className="absolute top-32 left-1/4 animate-float">
                    <Car className="w-8 h-8 text-white/30" />
                </div>
                <div className="absolute top-48 right-1/3 animate-float-delayed">
                    <UtensilsCrossed className="w-6 h-6 text-white/30" />
                </div>
                <div className="absolute bottom-32 left-1/3 animate-float">
                    <ShoppingBag className="w-7 h-7 text-white/30" />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
                <div className="flex flex-col lg:flex-row items-center min-h-screen">
                    {/* Left Content */}
                    <div className={`lg:w-1/2 mb-16 lg:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        {/* Badge */}
                        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">Made for Nepal 🇳🇵</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            All-in-One
                            <span className="block bg-gradient-to-r from-green-400 to-emarald-400 bg-clip-text text-transparent">
                                Super App
                            </span>
                            <span className="block text-4xl md:text-5xl text-emerald-100">in Nepal</span>
                        </h1>

                        <p className="text-xl md:text-2xl mb-8 text-emerald-100 leading-relaxed max-w-lg">
                            Book rides, order food, shop locally, and get expert services - all in one powerful app designed for Nepali lifestyle!
                        </p>

                        {/* Service Indicator */}
                        <div className="flex items-center mb-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                            <div className="mr-4 p-3 bg-white/20 rounded-xl">
                                <CurrentServiceIcon className={`w-6 h-6 ${services[currentService].color} transition-all duration-500`} />
                            </div>
                            <div>
                                <p className="text-sm text-emerald-100">Now Available:</p>
                                <p className="font-semibold text-lg">{services[currentService].name}</p>
                            </div>
                        </div>

                        {/* Download Buttons */}
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                            <button className="group bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                                <div className="mr-3 p-2 bg-white/10 rounded-lg">
                                    <Download className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <div className="text-xs text-gray-300">Download on</div>
                                    <div className="text-lg font-bold">App Store</div>
                                </div>
                            </button>
                            <button className="group bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                                <div className="mr-3 p-2 bg-white/10 rounded-lg">
                                    <Download className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <div className="text-xs text-gray-300">Get it on</div>
                                    <div className="text-lg font-bold">Google Play</div>
                                </div>
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="flex justify-center mb-2">
                                        <stat.icon className="w-6 h-6 text-dark" />
                                    </div>
                                    <div className="text-2xl font-bold text-dark">{stat.value}</div>
                                    <div className="text-sm text-emerald-200">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div className={`lg:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="relative">
                            {/* Main Phone */}
                            <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="bg-white rounded-[2.5rem] p-4 w-80 h-[600px] relative overflow-hidden">
                                    {/* Phone Screen */}
                                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[2rem] w-full h-full relative">
                                        {/* Status Bar */}
                                        <div className="flex justify-between items-center p-4 text-black text-sm">
                                            <span className="font-semibold">9:41</span>
                                            <div className="flex space-x-1">
                                                <div className="w-4 h-2 bg-black rounded-sm"></div>
                                                <div className="w-6 h-2 bg-black rounded-sm"></div>
                                                <div className="w-6 h-2 bg-green-500 rounded-sm"></div>
                                            </div>
                                        </div>
                                        
                                        {/* App Content */}
                                        <div className="px-6 py-4">
                                            <div className="text-center mb-8">
                                                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                                                    <Smartphone className="w-8 h-8 text-white" />
                                                </div>
                                                <h3 className="font-bold text-gray-800 text-lg">NepalApp</h3>
                                                <p className="text-gray-600 text-sm">Your digital companion</p>
                                            </div>
                                            
                                            {/* Service Grid */}
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                {services.map((service, index) => {
                                                    const ServiceIcon = service.icon;
                                                    return (
                                                        <div key={index} className={`p-4 rounded-2xl transition-all duration-300 ${currentService === index ? 'bg-emerald-100 scale-105' : 'bg-white'} shadow-sm`}>
                                                            <ServiceIcon className={`w-8 h-8 mb-2 ${service.color}`} />
                                                            <p className="text-xs font-medium text-gray-700">{service.name}</p>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            
                                            {/* Bottom Navigation */}
                                            <div className="bg-white rounded-2xl p-4 shadow-lg">
                                                <div className="flex justify-around">
                                                    <div className="w-8 h-2 bg-emerald-500 rounded-full"></div>
                                                    <div className="w-8 h-2 bg-gray-200 rounded-full"></div>
                                                    <div className="w-8 h-2 bg-gray-200 rounded-full"></div>
                                                    <div className="w-8 h-2 bg-gray-200 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-4 shadow-lg animate-bounce">
                                <Star className="w-6 h-6 text-white" />
                            </div>
                            
                            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full p-3 shadow-lg animate-pulse">
                                <Download className="w-5 h-5 text-white" />
                            </div>

                            {/* Background Phone */}
                            <div className="absolute -right-12 top-12 bg-gradient-to-b from-gray-800 to-black rounded-[2.5rem] p-2 w-64 h-96 opacity-20 -rotate-12 -z-10"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float-delayed 3s ease-in-out infinite 1.5s;
                }
            `}</style>
        </section>
    );
}

export default Hero;
