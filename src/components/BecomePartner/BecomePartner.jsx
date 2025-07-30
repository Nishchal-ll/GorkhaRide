

import React from 'react';
import { Store, Truck, Wrench, CheckCircle, Users, Smartphone, Clock, Headphones } from 'lucide-react';

function BecomePartner() {
    return (
        <section id="become-partner" className="py-20  relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-100 rounded-full opacity-30"></div>
                <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-teal-100 rounded-full opacity-25"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6 shadow-lg">
                        <Users className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
                        Become a Partner
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Join our thriving ecosystem of partners and unlock unlimited growth potential with 
                        <span className="font-semibold text-green-600"> Gorkha Ride</span>
                    </p>
                </div>
                
                {/* Partner Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {/* Vendor Partner Card */}
                    <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100">
                        <div className="bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl mb-4">
                                    <Store className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Vendor Partner</h3>
                                <p className="opacity-90 text-green-50">Transform your business with our powerful marketplace platform</p>
                            </div>
                        </div>
                        <div className="p-8">
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Connect with thousands of active customers</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Intuitive product management dashboard</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Bank-grade secure payment processing</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Advanced analytics & insights</span>
                                </li>
                            </ul>
                            <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-2xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Register as Vendor
                            </button>
                        </div>
                    </div>
                    
                    {/* Ride & Delivery Partner Card */}
                    <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-emerald-100">
                        <div className="bg-gradient-to-br from-green-500 via-teal-600 to-emarald-600 p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl mb-4">
                                    <Truck className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Ride & Delivery Partner</h3>
                                <p className="opacity-90 text-emerald-50">Earn premium income with complete work-life flexibility</p>
                            </div>
                        </div>
                        <div className="p-8">
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Complete schedule flexibility</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Daily instant payouts</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Smart GPS navigation system</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Performance-based rewards program</span>
                                </li>
                            </ul>
                            <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-4 rounded-2xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Register as Driver
                            </button>
                        </div>
                    </div>
                    
                    {/* Service Provider Partner Card */}
                    <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-teal-100">
                        <div className="bg-gradient-to-br from-green-500 via-emarald-600 to-teal-600 p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl mb-4">
                                    <Wrench className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Service Expert Partner</h3>
                                <p className="opacity-90 text-teal-50">Showcase your skills and build your professional reputation</p>
                            </div>
                        </div>
                        <div className="p-8">
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-teal-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Verified professional certification</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-teal-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Instant job opportunity alerts</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-teal-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Protected payment guarantee</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-teal-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Customer review & rating system</span>
                                </li>
                            </ul>
                            <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-4 rounded-2xl font-semibold hover:from-teal-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Register as Expert
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Why Partner With Us Section */}
                <div className="bg-white rounded-3xl p-10 shadow-2xl border border-green-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-2/3 mb-10 lg:mb-0 lg:pr-10">
                            <h3 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-8">
                                Why Partner With Us?
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Massive Customer Reach</h4>
                                        <p className="text-gray-600 text-sm">Access to 100,000+ active users</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <Smartphone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Intuitive Partner App</h4>
                                        <p className="text-gray-600 text-sm">Modern, user-friendly interface</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Lightning Fast Payments</h4>
                                        <p className="text-gray-600 text-sm">Get paid within 24 hours</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <Headphones className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">24/7 Premium Support</h4>
                                        <p className="text-gray-600 text-sm">Always here when you need us</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 flex justify-center">
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl border-2 border-green-100 transform hover:scale-105 transition-all duration-300">
                                <div className="text-center mb-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-4">
                                        <Users className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="font-bold text-2xl text-gray-900 mb-2">Ready to Start?</h4>
                                    <p className="text-gray-600 text-sm">Join thousands of successful partners</p>
                                </div>
                                <button className="w-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-4 rounded-2xl font-bold hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4">
                                    Join Our Partner Network
                                </button>
                                <p className="text-gray-500 text-sm text-center">
                                    🚀 Download the partner app to get started instantly
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                        <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
                        <div className="text-gray-600">Active Partners</div>
                    </div>
                    <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
                        <div className="text-3xl font-bold text-emerald-600 mb-2">₹2.5Cr+</div>
                        <div className="text-gray-600">Monthly Earnings</div>
                    </div>
                    <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-teal-100">
                        <div className="text-3xl font-bold text-teal-600 mb-2">100K+</div>
                        <div className="text-gray-600">Happy Customers</div>
                    </div>
                    <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                        <div className="text-3xl font-bold text-green-600 mb-2">4.8★</div>
                        <div className="text-gray-600">Partner Rating</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BecomePartner;