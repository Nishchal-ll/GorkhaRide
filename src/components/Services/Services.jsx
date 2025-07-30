// // 

// import React, { useState, useEffect, useRef } from 'react';
// import { 
//     Bike, 
//     Users, 
//     Car, 
//     UtensilsCrossed, 
//     ShoppingBasket, 
//     Package, 
//     Wrench, 
//     Recycle,
//     ArrowRight,
//     Sparkles
// } from 'lucide-react';

// function Services() {
//     const [visibleCards, setVisibleCards] = useState(new Set());
//     const [hoveredCard, setHoveredCard] = useState(null);
//     const sectionRef = useRef(null);

//     const services = [
//         {
//             icon: Bike,
//             title: "Ride-Hailing",
//             description: "Book motorbike or car rides for short or long distances with just a few taps.",
//             bgColor: "bg-blue-50",
//             iconBg: "bg-blue-100",
//             iconColor: "text-blue-600",
//             gradient: "from-blue-400 to-blue-600",
//             delay: 0
//         },
//         {
//             icon: Users,
//             title: "Carpooling",
//             description: "Share rides with other passengers to save cost and reduce emissions.",
//             bgColor: "bg-green-50",
//             iconBg: "bg-green-100",
//             iconColor: "text-green-600",
//             gradient: "from-green-400 to-green-600",
//             delay: 100
//         },
//         {
//             icon: Car,
//             title: "Vehicle Rental",
//             description: "Rent bikes, scooters, or cars for city travel or outstation trips.",
//             bgColor: "bg-purple-50",
//             iconBg: "bg-purple-100",
//             iconColor: "text-purple-600",
//             gradient: "from-purple-400 to-purple-600",
//             delay: 200
//         },
//         {
//             icon: UtensilsCrossed,
//             title: "Food Delivery",
//             description: "Order from nearby restaurants and have meals delivered quickly.",
//             bgColor: "bg-red-50",
//             iconBg: "bg-red-100",
//             iconColor: "text-red-600",
//             gradient: "from-red-400 to-red-600",
//             delay: 300
//         },
//         {
//             icon: ShoppingBasket,
//             title: "Grocery Delivery",
//             description: "Get groceries and household essentials delivered to your doorstep.",
//             bgColor: "bg-yellow-50",
//             iconBg: "bg-yellow-100",
//             iconColor: "text-yellow-600",
//             gradient: "from-yellow-400 to-yellow-600",
//             delay: 400
//         },
//         {
//             icon: Package,
//             title: "Parcel Delivery",
//             description: "Send documents, packages, and parcels across town securely.",
//             bgColor: "bg-indigo-50",
//             iconBg: "bg-indigo-100",
//             iconColor: "text-indigo-600",
//             gradient: "from-indigo-400 to-indigo-600",
//             delay: 500
//         },
//         {
//             icon: Wrench,
//             title: "Expert Services",
//             description: "Book electricians, plumbers, cleaners, repair technicians, etc.",
//             bgColor: "bg-teal-50",
//             iconBg: "bg-teal-100",
//             iconColor: "text-teal-600",
//             gradient: "from-teal-400 to-teal-600",
//             delay: 600
//         },
//         {
//             icon: Recycle,
//             title: "Waste to Money",
//             description: "Sell your recyclable waste like plastics, papers, and electronics.",
//             bgColor: "bg-pink-50",
//             iconBg: "bg-pink-100",
//             iconColor: "text-pink-600",
//             gradient: "from-pink-400 to-pink-600",
//             delay: 700
//         }
//     ];

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         const index = parseInt(entry.target.dataset.index);
//                         setTimeout(() => {
//                             setVisibleCards(prev => new Set([...prev, index]));
//                         }, services[index].delay);
//                     }
//                 });
//             },
//             { threshold: 0.1 }
//         );

//         const cards = document.querySelectorAll('.service-card');
//         cards.forEach(card => observer.observe(card));

//         return () => observer.disconnect();
//     }, []);

//     return (
//         <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden" ref={sectionRef}>
//             {/* Background Elements */}
//             <div className="absolute inset-0">
//                 <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
//                 <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
//             </div>

//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//                 {/* Header */}
//                 <div className="text-center mb-20">
//                     <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-6 py-2 mb-6 border border-emerald-200">
//                         <Sparkles className="w-5 h-5 text-emerald-600 mr-2" />
//                         <span className="text-emerald-700 font-semibold">Our Services</span>
//                     </div>
                    
//                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                         Everything You Need
//                         <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
//                             In One App
//                         </span>
//                     </h2>
                    
//                     <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                         From transportation to shopping, we've got you covered with our comprehensive 
//                         suite of services designed for modern Nepal lifestyle.
//                     </p>
//                 </div>
                
//                 {/* Services Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {services.map((service, index) => {
//                         const IconComponent = service.icon;
//                         const isVisible = visibleCards.has(index);
//                         const isHovered = hoveredCard === index;
                        
//                         return (
//                             <div
//                                 key={index}
//                                 data-index={index}
//                                 className={`service-card group relative transition-all duration-700 transform ${
//                                     isVisible 
//                                         ? 'opacity-100 translate-y-0' 
//                                         : 'opacity-0 translate-y-8'
//                                 }`}
//                                 onMouseEnter={() => setHoveredCard(index)}
//                                 onMouseLeave={() => setHoveredCard(null)}
//                             >
//                                 {/* Card Background */}
//                                 <div className={`relative ${service.bgColor} rounded-2xl p-8 text-center transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl border border-white/50 backdrop-blur-sm overflow-hidden`}>
//                                     {/* Hover Gradient Overlay */}
//                                     <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                                    
//                                     {/* Floating Elements */}
//                                     <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
//                                         <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
//                                     </div>
                                    
//                                     {/* Icon */}
//                                     <div className={`relative mx-auto w-20 h-20 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-xl`}>
//                                         <IconComponent className={`w-10 h-10 ${service.iconColor} transition-all duration-300`} />
                                        
//                                         {/* Pulse Ring */}
//                                         <div className={`absolute inset-0 ${service.iconBg} rounded-2xl opacity-0 group-hover:opacity-50 group-hover:scale-150 transition-all duration-500`}></div>
//                                     </div>
                                    
//                                     {/* Content */}
//                                     <div className="relative z-10">
//                                         <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
//                                             {service.title}
//                                         </h3>
//                                         <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
//                                             {service.description}
//                                         </p>
//                                     </div>
                                    
//                                     {/* Bottom Accent */}
//                                     <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
//                                 </div>
                                
//                                 {/* Glow Effect */}
//                                 <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 scale-110`}></div>
//                             </div>
//                         );
//                     })}
//                 </div>
                
//                 {/* Bottom CTA */}
//                 <div className="text-center mt-16">
//                     <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
//                         <div className="flex -space-x-2">
//                             {[1,2,3,4].map(i => (
//                                 <div key={i} className={`w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 border-2 border-white flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}>
//                                     <span className="text-white text-sm font-bold">{i}</span>
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="text-left">
//                             <p className="font-semibold text-gray-900">Ready to get started?</p>
//                             <p className="text-sm text-gray-600">Download our app and explore all services</p>
//                         </div>
//                         <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
//                             Get App Now
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <style jsx>{`
//                 @keyframes float {
//                     0%, 100% { transform: translateY(0px); }
//                     50% { transform: translateY(-10px); }
//                 }
                
//                 .service-card:nth-child(odd) {
//                     animation: float 4s ease-in-out infinite;
//                 }
                
//                 .service-card:nth-child(even) {
//                     animation: float 4s ease-in-out infinite 2s;
//                 }
//             `}</style>
//         </section>
//     );
// }

// export default Services;


import React, { useState, useEffect, useRef } from 'react';
import { 
    Bike, 
    Users, 
    Car, 
    UtensilsCrossed, 
    ShoppingBasket, 
    Package, 
    Wrench, 
    Recycle,
    ArrowRight,
    Sparkles
} from 'lucide-react';

function Services() {
    const [visibleCards, setVisibleCards] = useState(new Set());
    const [hoveredCard, setHoveredCard] = useState(null);
    const sectionRef = useRef(null);

    const services = [
        {
            icon: Bike,
            title: "Ride-Hailing",
            description: "Book motorbike or car rides for short or long distances with just a few taps.",
            bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
            iconBg: "bg-gradient-to-r from-green-500 to-emerald-500",
            iconColor: "text-white",
            gradient: "from-green-400 to-emerald-500",
            borderColor: "border-green-200",
            delay: 0
        },
        {
            icon: Users,
            title: "Carpooling",
            description: "Share rides with other passengers to save cost and reduce emissions.",
            bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
            iconBg: "bg-gradient-to-r from-emerald-500 to-teal-500",
            iconColor: "text-white",
            gradient: "from-emerald-400 to-teal-500",
            borderColor: "border-emerald-200",
            delay: 100
        },
        {
            icon: Car,
            title: "Vehicle Rental",
            description: "Rent bikes, scooters, or cars for city travel or outstation trips.",
            bgColor: "bg-gradient-to-br from-teal-50 to-green-50",
            iconBg: "bg-gradient-to-r from-teal-500 to-green-500",
            iconColor: "text-white",
            gradient: "from-teal-400 to-green-500",
            borderColor: "border-teal-200",
            delay: 200
        },
        {
            icon: UtensilsCrossed,
            title: "Food Delivery",
            description: "Order from nearby restaurants and have meals delivered quickly.",
            bgColor: "bg-gradient-to-br from-lime-50 to-green-50",
            iconBg: "bg-gradient-to-r from-lime-500 to-green-500",
            iconColor: "text-white",
            gradient: "from-lime-400 to-green-500",
            borderColor: "border-lime-200",
            delay: 300
        },
        {
            icon: ShoppingBasket,
            title: "Grocery Delivery",
            description: "Get groceries and household essentials delivered to your doorstep.",
            bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
            iconBg: "bg-gradient-to-r from-green-600 to-teal-600",
            iconColor: "text-white",
            gradient: "from-green-500 to-teal-600",
            borderColor: "border-green-200",
            delay: 400
        },
        {
            icon: Package,
            title: "Parcel Delivery",
            description: "Send documents, packages, and parcels across town securely.",
            bgColor: "bg-gradient-to-br from-emerald-50 to-lime-50",
            iconBg: "bg-gradient-to-r from-emerald-600 to-lime-600",
            iconColor: "text-white",
            gradient: "from-emerald-500 to-lime-600",
            borderColor: "border-emerald-200",
            delay: 500
        },
        {
            icon: Wrench,
            title: "Expert Services",
            description: "Book electricians, plumbers, cleaners, repair technicians, etc.",
            bgColor: "bg-gradient-to-br from-teal-50 to-emerald-50",
            iconBg: "bg-gradient-to-r from-teal-600 to-emerald-600",
            iconColor: "text-white",
            gradient: "from-teal-500 to-emerald-600",
            borderColor: "border-teal-200",
            delay: 600
        },
        {
            icon: Recycle,
            title: "Waste to Money",
            description: "Sell your recyclable waste like plastics, papers, and electronics.",
            bgColor: "bg-gradient-to-br from-lime-50 to-teal-50",
            iconBg: "bg-gradient-to-r from-lime-600 to-teal-600",
            iconColor: "text-white",
            gradient: "from-lime-500 to-teal-600",
            borderColor: "border-lime-200",
            delay: 700
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setTimeout(() => {
                            setVisibleCards(prev => new Set([...prev, index]));
                        }, services[index].delay);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = document.querySelectorAll('.service-card');
        cards.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden" ref={sectionRef}>
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-green-200/30 to-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-emerald-200/40 to-teal-200/40 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-teal-200/20 to-lime-200/20 rounded-full blur-3xl"></div>
                
                {/* Geometric shapes */}
                <div className="absolute top-32 right-1/4 w-16 h-16 bg-green-300/20 rounded-2xl rotate-45 animate-bounce"></div>
                <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-emerald-300/30 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 left-16 w-20 h-20 bg-teal-300/15 rounded-3xl rotate-12 animate-bounce"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 rounded-full px-8 py-3 mb-8 border-2 border-green-200 shadow-lg backdrop-blur-sm">
                        <Sparkles className="w-6 h-6 text-green-600 mr-3 animate-pulse" />
                        <span className="text-green-700 font-bold text-lg">Our Premium Services</span>
                    </div>
                    
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                        Everything You Need
                        <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent drop-shadow-sm">
                            In One Super App
                        </span>
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
                        From transportation to shopping, we've revolutionized daily life with our comprehensive 
                        suite of services designed specifically for the modern Nepali lifestyle. 🚀
                    </p>
                </div>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        const isVisible = visibleCards.has(index);
                        const isHovered = hoveredCard === index;
                        
                        return (
                            <div
                                key={index}
                                data-index={index}
                                className={`service-card group relative transition-all duration-700 transform ${
                                    isVisible 
                                        ? 'opacity-100 translate-y-0' 
                                        : 'opacity-0 translate-y-8'
                                }`}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Card Background */}
                                <div className={`relative ${service.bgColor} rounded-3xl p-8 text-center transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl border-2 ${service.borderColor} backdrop-blur-sm overflow-hidden shadow-lg`}>
                                    {/* Hover Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-3xl`}></div>
                                    
                                    {/* Animated background pattern */}
                                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                        <div className="absolute top-4 right-4 w-8 h-8 bg-current rounded-full"></div>
                                        <div className="absolute bottom-4 left-4 w-6 h-6 bg-current rounded-full"></div>
                                        <div className="absolute top-1/2 left-8 w-4 h-4 bg-current rounded-full"></div>
                                    </div>
                                    
                                    {/* Hover Arrow */}
                                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                                        <ArrowRight className="w-6 h-6 text-green-600 group-hover:text-green-700" />
                                    </div>
                                    
                                    {/* Icon */}
                                    <div className={`relative mx-auto w-24 h-24 ${service.iconBg} rounded-3xl flex items-center justify-center mb-8 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 shadow-xl group-hover:shadow-2xl border-4 border-white/50`}>
                                        <IconComponent className={`w-12 h-12 ${service.iconColor} transition-all duration-300`} />
                                        
                                        {/* Pulse Ring */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-30 group-hover:scale-125 transition-all duration-500`}></div>
                                        
                                        {/* Sparkle effect */}
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 font-medium">
                                            {service.description}
                                        </p>
                                    </div>
                                    
                                    {/* Bottom Accent Line */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl`}></div>
                                    
                                    {/* Corner decorations */}
                                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-green-300/50 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-emerald-300/50 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                
                                {/* Enhanced Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 -z-10 scale-110`}></div>
                            </div>
                        );
                    })}
                </div>
                
                {/* Enhanced Bottom CTA */}
                <div className="text-center">
                    <div className="inline-flex items-center space-x-6 bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-green-200 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex -space-x-3">
                            {[1,2,3,4].map(i => (
                                <div key={i} className={`w-12 h-12 rounded-full bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 border-3 border-white flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <span className="text-white text-sm font-bold">{i}</span>
                                </div>
                            ))}
                        </div>
                        <div className="text-left">
                            <p className="font-black text-gray-900 text-lg">Ready to Transform Your Life?</p>
                            <p className="text-gray-600 font-medium">Download our super app and explore all premium services</p>
                        </div>
                        <button className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 shadow-lg">
                            <span className="flex items-center">
                                Get App Now
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(2deg); }
                }
                
                @keyframes float-reverse {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-12px) rotate(-2deg); }
                }
                
                .service-card:nth-child(odd) {
                    animation: float 4s ease-in-out infinite;
                }
                
                .service-card:nth-child(even) {
                    animation: float-reverse 4s ease-in-out infinite 1s;
                }
            `}</style>
        </section>
    );
}

export default Services;