import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Headphones, Facebook, Twitter, Instagram, Linkedin, Send, CheckCircle } from 'lucide-react';

const Form = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      info: "Talchikhel, Lalitpur",
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-500",
      delay: "100ms"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "01-5560791",
      bgColor: "bg-gradient-to-br from-green-400 to-green-500",
      delay: "200ms"
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@gorkharide.com",
      bgColor: "bg-gradient-to-br from-purple-400 to-purple-500",
      delay: "300ms"
    },
    {
      icon: Headphones,
      title: "Customer Support",
      info: "24/7 Available",
      bgColor: "bg-gradient-to-br from-red-400 to-red-500",
      delay: "400ms"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "bg-blue-600 hover:bg-blue-700", label: "facebook" },
    { icon: Twitter, href: "#", color: "bg-blue-400 hover:bg-blue-500", label: "twitter" },
    { icon: Instagram, href: "#", color: "bg-pink-600 hover:bg-pink-700", label: "instagram" },
    { icon: Linkedin, href: "#", color: "bg-blue-700 hover:bg-blue-800", label: "linkedin" }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium rounded-full shadow-lg">
              Let's Connect
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions or feedback? We'd love to hear from you and help you get started.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section */}
          <div className={`lg:w-1/2 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100">
              {!isSubmitted ? (
                <div className="space-y-6">
                  <div className="space-y-6">
                    {/* Name Field */}
                    <div className="relative">
                      <label 
                        htmlFor="name" 
                        className={`block text-sm font-medium transition-colors duration-300 mb-2 ${
                          focusedField === 'name' || formData.name ? 'text-green-600' : 'text-gray-700'
                        }`}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:border-green-300"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label 
                        htmlFor="email" 
                        className={`block text-sm font-medium transition-colors duration-300 mb-2 ${
                          focusedField === 'email' || formData.email ? 'text-green-600' : 'text-gray-700'
                        }`}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:border-green-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <label 
                        htmlFor="message" 
                        className={`block text-sm font-medium transition-colors duration-300 mb-2 ${
                          focusedField === 'message' || formData.message ? 'text-green-600' : 'text-gray-700'
                        }`}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        rows="5"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:border-green-300 resize-none"
                        placeholder="Tell us how we can help you..."
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="group relative w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-green-200 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you as soon as possible.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Contact Info Section */}
          <div className={`lg:w-1/2 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 h-full shadow-xl border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={index}
                      className={`flex items-start space-x-4 p-4 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 animate-fade-in-up`}
                      style={{ animationDelay: item.delay }}
                    >
                      <div className={`${item.bgColor} p-3 rounded-xl shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.info}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Social Media */}
              <div className="border-t border-gray-200 pt-8">
                <h4 className="font-semibold text-gray-900 mb-6">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`${social.color} p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg focus:ring-4 focus:ring-offset-2 focus:ring-green-200`}
                        style={{ animationDelay: `${600 + index * 100}ms` }}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  <span>We typically respond within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Form;