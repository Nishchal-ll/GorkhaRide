// import React from 'react'

// const Vendor = () => {
//   return (
//   <>
//       <section class="py-20 bg-gray-50">
//         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div class="flex flex-col md:flex-row items-center">
//                 <div class="md:w-1/2 mb-10 md:mb-0 md:pr-12">
//                     <h2 class="text-3xl font-bold text-gray-900 mb-4">Vendor Platform</h2>
//                     <p class="text-lg text-gray-600 mb-6">Vendors can list products, manage orders, and grow their business through our platform.</p>
//                     <div class="bg-blue-50 rounded-lg p-6 mb-6">
//                         <h3 class="font-semibold text-lg mb-3">Vendor Benefits</h3>
//                         <ul class="space-y-2">
//                             <li class="flex items-start">
//                                 <i class="fas fa-arrow-right text-blue-500 mt-1 mr-2"></i>
//                                 <span>Easy product listing and management</span>
//                             </li>
//                             <li class="flex items-start">
//                                 <i class="fas fa-arrow-right text-blue-500 mt-1 mr-2"></i>
//                                 <span>Integrated order management system</span>
//                             </li>
//                             <li class="flex items-start">
//                                 <i class="fas fa-arrow-right text-blue-500 mt-1 mr-2"></i>
//                                 <span>Real-time analytics and insights</span>
//                             </li>
//                             <li class="flex items-start">
//                                 <i class="fas fa-arrow-right text-blue-500 mt-1 mr-2"></i>
//                                 <span>Secure payment processing</span>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div class="md:w-1/2">
//                     <div class="bg-white rounded-2xl p-8 shadow-md">
//                         <div class="space-y-6">
//                             <div class="flex items-center">
//                                 <div class="bg-blue-100 rounded-full p-3 mr-4">
//                                     <i class="fas fa-list text-blue-600"></i>
//                                 </div>
//                                 <div>
//                                     <h4 class="font-semibold">Product Management</h4>
//                                     <p class="text-gray-600 text-sm">Easily add and update your products</p>
//                                 </div>
//                             </div>
//                             <div class="flex items-center">
//                                 <div class="bg-green-100 rounded-full p-3 mr-4">
//                                     <i class="fas fa-chart-line text-green-600"></i>
//                                 </div>
//                                 <div>
//                                     <h4 class="font-semibold">Sales Analytics</h4>
//                                     <p class="text-gray-600 text-sm">Track your performance and growth</p>
//                                 </div>
//                             </div>
//                             <div class="flex items-center">
//                                 <div class="bg-purple-100 rounded-full p-3 mr-4">
//                                     <i class="fas fa-comments text-purple-600"></i>
//                                 </div>
//                                 <div>
//                                     <h4 class="font-semibold">Customer Chat</h4>
//                                     <p class="text-gray-600 text-sm">Communicate with customers directly</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>

//   </>
//   );
// }

// export default Vendor

import React from 'react'

const Vendor = () => {
  return (
  <>
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
                    <h2 className="text-3xl font-bold text-green-900 mb-4">Vendor Platform</h2>
                    <p className="text-lg text-green-700 mb-6">Vendors can list products, manage orders, and grow their business through our platform.</p>
                    <div className="bg-green-100 rounded-lg p-6 mb-6 border border-green-200 hover:shadow-md transition-all duration-300">
                        <h3 className="font-semibold text-lg mb-3 text-green-900">Vendor Benefits</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <i className="fas fa-arrow-right text-green-600 mt-1 mr-2"></i>
                                <span className="text-green-800">Easy product listing and management</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-arrow-right text-green-600 mt-1 mr-2"></i>
                                <span className="text-green-800">Integrated order management system</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-arrow-right text-green-600 mt-1 mr-2"></i>
                                <span className="text-green-800">Real-time analytics and insights</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-arrow-right text-green-600 mt-1 mr-2"></i>
                                <span className="text-green-800">Secure payment processing</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100">
                        <div className="space-y-6">
                            <div className="flex items-center hover:scale-105 transition-transform duration-300 p-2 rounded-lg hover:bg-green-50">
                                <div className="bg-green-100 rounded-full p-3 mr-4">
                                    <i className="fas fa-list text-green-600"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-green-900">Product Management</h4>
                                    <p className="text-green-600 text-sm">Easily add and update your products</p>
                                </div>
                            </div>
                            <div className="flex items-center hover:scale-105 transition-transform duration-300 p-2 rounded-lg hover:bg-green-50">
                                <div className="bg-emerald-100 rounded-full p-3 mr-4">
                                    <i className="fas fa-chart-line text-emerald-600"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-green-900">Sales Analytics</h4>
                                    <p className="text-green-600 text-sm">Track your performance and growth</p>
                                </div>
                            </div>
                            <div className="flex items-center hover:scale-105 transition-transform duration-300 p-2 rounded-lg hover:bg-green-50">
                                <div className="bg-teal-100 rounded-full p-3 mr-4">
                                    <i className="fas fa-comments text-teal-600"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-green-900">Customer Chat</h4>
                                    <p className="text-green-600 text-sm">Communicate with customers directly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </>
  );
}

export default Vendor