import React from 'react';

const CargolinkFooter = () => {
    return (
        <footer className="bg-blue-800 text-white py-10 px-4 md:px-6 lg:px-8 border-t-4 border-blue-400">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {/* Logo and Mission Section */}
                <div className="lg:col-span-2">
                    <h3 className="text-3xl font-extrabold tracking-wide mb-4 text-white">CARGOLINK</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Smart Logistics for Truck, Tempo, Mini-Loading. <br/> Seamless management for vehicles and drivers.
                    </p>
                </div>

                {/* Company Section */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-white">
                        Company
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#about" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">About Us</a></li>
                        <li><a href="#careers" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">Careers</a></li>
                        <li><a href="#blog" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">Blog</a></li>
                        <li><a href="#press" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">Press</a></li>
                    </ul>
                </div>

                {/* Our Services Section */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-white">
                        Our Services
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#trucks" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">Full Truck Load (FTL)</a></li>
                        <li><a href="#tempo" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">Tempo & Mini-Loading</a></li>
                        <li><a href="#drivers" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">Driver Management</a></li>
                        <li><a href="#tracking" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">Live Cargo Tracking</a></li>
                    </ul>
                </div>

                {/* Help & Support / Contact Info Section */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-white">
                        Contact Us
                    </h4>
                    <address className="not-italic text-sm space-y-2">
                        <p className="flex items-center text-gray-300">
                            <i className="fas fa-map-marker-alt mr-2 text-blue-400"></i>
                            123 Logistics Lane, City, Country
                        </p>
                        <p className="flex items-center text-gray-300">
                            <i className="fas fa-phone mr-2 text-blue-400"></i>
                            +91 98765 43210
                        </p>
                        <p className="flex items-center text-gray-300">
                            <i className="fas fa-envelope mr-2 text-blue-400"></i>
                            support@cargolink.com
                        </p>
                    </address>
                    <div className="flex space-x-4 mt-4">
                        {/* Note: You'll need to include a library like Font Awesome for these icons */}
                        <a href="#facebook" aria-label="Facebook" className="text-white hover:text-blue-400 transition-colors duration-200 text-lg">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#twitter" aria-label="Twitter" className="text-white hover:text-blue-400 transition-colors duration-200 text-lg">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#linkedin" aria-label="LinkedIn" className="text-white hover:text-blue-400 transition-colors duration-200 text-lg">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-blue-700 mt-8 pt-6 text-center text-gray-400 text-sm">
                <p>&copy; {new Date().getFullYear()} Cargolink Software. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default CargolinkFooter;