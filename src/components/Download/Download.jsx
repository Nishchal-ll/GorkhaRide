// import React from 'react'

// const Download = () => {
//   return (
//    <>
//     <section id="download" class="py-20 bg-gradient-to-r from-green-400 to-emarald-400 text-black">
//         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 class="text-3xl md:text-4xl font-bold mb-6">Download Gorkha Ride Today</h2>
//             <p class="text-xl mb-10 max-w-3xl mx-auto">Join thousands of users in Nepal who are already enjoying the convenience of our super app.</p>
            
//             <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//                 <button class="download-btn bg-black text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center mx-auto sm:mx-0 gtag-event" data-event="app_download" data-category="cta" data-label="app_store_hero">
//                     <i class="fab fa-apple text-2xl mr-3"></i>
//                     <div class="text-left">
//                         <div class="text-xs">Download on the</div>
//                         <div class="text-xl">App Store</div>
//                     </div>
//                 </button>
                
//                 <button class="download-btn bg-black text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center mx-auto sm:mx-0 gtag-event" data-event="app_download" data-category="cta" data-label="google_play_hero">
//                     <i class="fab fa-google-play text-2xl mr-3"></i>
//                     <div class="text-left">
//                         <div class="text-xs">Get it on</div>
//                         <div class="text-xl">Google Play</div>
//                     </div>
//                 </button>
//             </div>
            
//             <div class="mt-12 flex justify-center">
//                 <div class="bg-white bg-opacity-20 rounded-2xl p-6 max-w-md">
//                     <div class="flex items-center mb-4">
//                         <i class="fas fa-qrcode text-3xl mr-4"></i>
//                         <div>
//                             <h3 class="font-semibold">Scan to Download</h3>
//                             <p class="text-sm opacity-80">Point your camera at the QR code</p>
//                         </div>
//                     </div>
//                     <div className="bg-white rounded-lg p-2 inline-block">
//   <div className="bg-gray-200 border-2 border-dashed  w-32 h-32 overflow-hidden">
//     <img src="src/components/Download/qr.png" alt="Logo" className="w-full h-full object-cover" />
//   </div>
// </div>
//                 </div>
//             </div>
//         </div>
//     </section>

//    </>
//   );
// }

// export default Download
import React from 'react'

const Download = () => {
  return (
   <>
    <section id="download" className="py-20 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Download Gorkha Ride Today</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto text-green-50">Join thousands of users in Nepal who are already enjoying the convenience of our super app.</p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="download-btn bg-white text-green-700 px-8 py-4 rounded-xl font-semibold flex items-center justify-center mx-auto sm:mx-0 hover:bg-green-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl gtag-event" data-event="app_download" data-category="cta" data-label="app_store_hero">
                    <i className="fab fa-apple text-2xl mr-3 text-green-600"></i>
                    <div className="text-left">
                        <div className="text-xs text-green-600">Download on the</div>
                        <div className="text-xl text-green-800">App Store</div>
                    </div>
                </button>
                
                <button className="download-btn bg-white text-green-700 px-8 py-4 rounded-xl font-semibold flex items-center justify-center mx-auto sm:mx-0 hover:bg-green-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl gtag-event" data-event="app_download" data-category="cta" data-label="google_play_hero">
                    <i className="fab fa-google-play text-2xl mr-3 text-green-600"></i>
                    <div className="text-left">
                        <div className="text-xs text-green-600">Get it on</div>
                        <div className="text-xl text-green-800">Google Play</div>
                    </div>
                </button>
            </div>
            
            <div className="mt-12 flex justify-center">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 max-w-md border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-300">
                    <div className="flex items-center mb-4">
                        <i className="fas fa-qrcode text-3xl mr-4 text-white"></i>
                        <div>
                            <h3 className="font-semibold text-white">Scan to Download</h3>
                            <p className="text-sm text-green-100">Point your camera at the QR code</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-2 inline-block hover:scale-105 transition-transform duration-300">
                        <div className="bg-gray-200 border-2 border-dashed border-green-300 w-32 h-32 overflow-hidden rounded">
                            <img src="src/components/Download/qr.png" alt="QR Code for Download" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   </>
  );
}

export default Download