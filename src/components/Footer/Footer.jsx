import React from 'react'
import Log from '../../assets/log.png'; // Adjust the path to your logo image

const Footer = () => {
  return (
   <>
   <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-16">
                <div>
                    <div class="flex items-center mb-4">
    <img src={Log} alt="Gorkha Ride Logo" class="h-10 w-196 mr-2 rounded-lg object-cover" />
</div>
                    <p class="text-gray-400 mb-4">All-in-One Super App in Nepal. Your trusted partner for transportation, shopping, and services.</p>
                    <div class="flex space-x-4">
                        <a href="https://www.facebook.com/gorkharide" target="_blank" text-gray-400 hover:text-white gtag-event data-event="social_click" data-category="social" data-label="footer_facebook">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.tiktok.com/@gorkharide" target="_blank" class="text-gray-400 hover:text-white gtag-event" data-event="social_click" data-category="social" data-label="footer_twitter">
                            <i class="fab fa-tiktok"></i>
                        </a>
                        <a href="https://www.instagram.com/gorkharide" target="_blank" class="text-gray-400 hover:text-white gtag-event" data-event="social_click" data-category="social" data-label="footer_instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-4">About Us</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#expert-services" class="hover:text-white gtag-event" data-event="footer_nav" data-category="navigation" data-label="ride_hailing">Expert Services</a></li>
                        <li><a href="#become-partner" class="hover:text-white gtag-event" data-event="footer_nav" data-category="navigation" data-label="carpooling">Become A Partner</a></li>
                        <li><a href="#youtube-videos" class="hover:text-white gtag-event" data-event="footer_nav" data-category="navigation" data-label="vehicle_rental">How To Videos</a></li>
                        <li><a href="#download" class="hover:text-white gtag-event" data-event="footer_nav" data-category="navigation" data-label="food_delivery">Download</a></li>
                        <li><a href="#contact" class="hover:text-white gtag-event" data-event="footer_nav" data-category="navigation" data-label="grocery_delivery">Contact</a></li>
                    </ul>
                </div>
                
                
                <div>
                    <h3 class="text-lg font-semibold mb-4">Download App</h3>
                    <p class="text-gray-400 mb-4">Get the app for a better experience</p>
                    <div class="space-y-3">
                        <a href="https://play.google.com/store/search?q=gorkha%20ride&c=apps&hl=en" target="_blank" rel="noopener noreferrer">
                        <button class="w-full bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center gtag-event" data-event="app_download" data-category="cta" data-label="app_store_footer">
                            <i class="fab fa-apple mr-2"></i> App Store
                        </button>
                        </a>
                        <br></br>
                        <a href="https://play.google.com/store/search?q=gorkha%20ride&c=apps&hl=en" target="_blank" rel="noopener noreferrer">
                        <button class="w-full bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center gtag-event" data-event="app_download" data-category="cta" data-label="google_play_footer">
                            <i class="fab fa-google-play mr-2"></i> Google Play
                        </button>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
                <p>&copy; 2025 Gorkha Ride. All rights reserved.</p>
            </div>
        </div>
    </footer>

   </>
  );
}

export default Footer
