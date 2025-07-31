import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className={`bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'shadow-md' : 'shadow-none'
            }`}>
                <div className="w-full px-4">
                    <div className="flex items-center justify-between h-24">
                        {/* Logo - Far Left with 5px padding */}
                       <a href="/" className="flex items-center pl-20">
  {/* Logo image */}
  <img
    src="src/components/Navbar/logo.png"     // Put your logo image path here
    alt="GorkhaRide Logo"
    className=" rounded-lg mr-3 object-cover"
  />
</a>
                        {/* Mobile Menu Toggle Button */}
                        <button 
                            onClick={toggleMobileMenu}
                            className="lg:hidden text-gray-700 hover:text-green-600 transition-colors duration-200 pe-0"
                            type="button"
                            aria-controls="navbarNav" 
                            aria-expanded={isMobileMenuOpen} 
                            aria-label="Toggle navigation"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>

                        {/* Desktop Navigation - Right Side */}
                        <div className="hidden lg:flex items-center justify-end">
                            <ul className="flex items-center space-x-8 mr-4">
                                <li>
                                    <a href="#services" className="text-gray-700 hover:text-green-600 font-medium text-lg transition-colors duration-200">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#expert-services" className="text-gray-700 hover:text-green-600 font-medium text-lg transition-colors duration-200">
                                        Expert Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#become-partner" className="text-gray-700 hover:text-green-600 font-medium text-lg transition-colors duration-200">
                                        Become a Partner
                                    </a>
                                </li>
                                <li>
                                    <a href="#youtube-videos" className="text-gray-700 hover:text-green-600 font-medium text-lg transition-colors duration-200">
                                        How-To Videos
                                    </a>
                                </li>
                                <li>
                                    <a href="#features" className="text-gray-700 hover:text-green-600 font-medium text-lg transition-colors duration-200">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#download" className="text-gray-700 hover:text-green-600 font-medium text-lg transition-colors duration-200">
                                        Download
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium text-lg transition-colors duration-200">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            
                            {/* Sign In Button */}
                            <ul className="flex items-center mr-10">
                                <li className="text-center">
                                    <a href="https://play.google.com/store/search?q=gorkha%20ride&c=apps&hl=en" target="_blank" className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                        <Download size={18} />
                                        <span>Download Now</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div 
                        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                        id="navbarNav"
                    >
                        <div className="bg-white border-t border-gray-100 shadow-lg">
                            <ul className="px-4 py-3 space-y-1">
                                <li>
                                    <a href="#services" className="block px-4 py-3 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#expert-services" className="block px-4 py-3 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200">
                                        Expert Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#become-partner" className="block px-4 py-3 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200">
                                        Become a Partner
                                    </a>
                                </li>
                                <li>
                                    <a href="#youtube-videos" className="block px-4 py-3 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200">
                                        How-To Videos
                                    </a>
                                </li>
                                <li>
                                    <a href="#features" className="block px-4 py-3 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#download" className="block px-4 py-3 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200">
                                        Download
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="block px-4 py-3 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200">
                                        Contact
                                    </a>
                                </li>
                                
                                {/* Mobile Download Button */}
                                <li className="pt-4 pb-2">
                                    <a href="https://play.google.com/store/search?q=gorkha%20ride&c=apps&hl=en" className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg">
                                        <Download size={18} />
                                        <span>Download Now</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

           
        </>
    );
}

export default Navbar;