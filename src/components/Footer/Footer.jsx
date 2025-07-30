import React from 'react'

const Footer = () => {
  return (
   <>
   <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center mb-4">
                        <i class="fas fa-motorcycle text-blue-400 text-2xl mr-2"></i>
                        <span class="font-bold text-xl">Gorkha Ride</span>
                    </div>
                    <p class="text-gray-400 mb-4">All-in-One Super App in Nepal. Your trusted partner for transportation, shopping, and services.</p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white gtag-event" data-event="social_click" data-category="social" data-label="footer_facebook">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white gtag-event" data-event="social_click" data-category="social" data-label="footer_twitter">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white gtag-event" data-event="social_click" data-category="social" data-label="footer_instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-4">Services</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white gtag-event" data-event="footer_nav" data-category="navigation" data-label="ride_hailing">Ride-Hailing</a></li>
                        <li><a href="#" class="hover:text-white gtag-event" data-event="footer_nav" data-category="navigation" data-label="carpooling">Carpooling</a></li>
                        <li><a href="#" class="hover:text-white gtag-event" data-event="footer_nav" data-category="navigation" data-label="vehicle_rental">Vehicle Rental</a></li>
                        <li><a href="#" class="hover:text-white gtag-event" data-event="footer_nav" data-category="navigation" data-label="food_delivery">Food Delivery</a></li>
                        <li><a href="#" class="hover:text-white gtag-event" data-event="footer_nav" data-category="navigation" data-label="grocery_delivery">Grocery Delivery</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-4">Company</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white gtag-event" data-event="footer_nav" data-category="navigation" data-label="about_us">About Us</a></li>
                        <li><a href="#" class="hover:text-white gtag-event" data-event="footer_nav" data-category="navigation" data-label="careers">Careers</a></li>
                        <li><a href="#" class="hover:text-white gtag-event" data-event="footer_nav" data-category="navigation" data-label="blog">Blog</a></li>
                        <li><a href="#" class="hover:text-white gtag-event" data-event="footer_nav" data-category="navigation" data-label="press">Press</a></li>
                        <li><a href="#" class="hover:text-white gtag-event" data-event="footer_nav" data-category="navigation" data-label="contact">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-4">Download App</h3>
                    <p class="text-gray-400 mb-4">Get the app for a better experience</p>
                    <div class="space-y-3">
                        <button class="w-full bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center gtag-event" data-event="app_download" data-category="cta" data-label="app_store_footer">
                            <i class="fab fa-apple mr-2"></i> App Store
                        </button>
                        <button class="w-full bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center gtag-event" data-event="app_download" data-category="cta" data-label="google_play_footer">
                            <i class="fab fa-google-play mr-2"></i> Google Play
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
                <p>&copy; 2023 Gorkha Ride. All rights reserved.</p>
            </div>
        </div>
    </footer>

   </>
  );
}

export default Footer
