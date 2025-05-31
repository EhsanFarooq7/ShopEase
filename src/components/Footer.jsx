import React from 'react';
import {
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Mail,
    Phone,
    MapPin,
    CreditCard,
    Shield,
    Truck,
    RotateCcw,
    Heart
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: 'Shop',
            links: [
                { name: 'New Arrivals', href: '#' },
                { name: 'Best Sellers', href: '#' },
                { name: 'Sale Items', href: '#' },
                { name: 'Gift Cards', href: '#' },
                { name: 'Collections', href: '#' }
            ]
        },
        {
            title: 'Customer Care',
            links: [
                { name: 'Contact Us', href: '#' },
                { name: 'Shipping Info', href: '#' },
                { name: 'Returns', href: '#' },
                { name: 'Size Guide', href: '#' },
                { name: 'FAQ', href: '#' }
            ]
        },
        {
            title: 'Company',
            links: [
                { name: 'About Us', href: '#' },
                { name: 'Careers', href: '#' },
                { name: 'Press', href: '#' },
                { name: 'Sustainability', href: '#' },
                { name: 'Privacy Policy', href: '#' }
            ]
        }
    ];

    const socialLinks = [
        { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
        { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
        { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
        { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600' }
    ];

    const features = [
        { icon: Truck, title: 'Free Shipping', desc: 'On orders over $200' },
        { icon: RotateCcw, title: 'Easy Returns', desc: '30-day return policy' },
        { icon: Shield, title: 'Secure Payment', desc: '100% secure checkout' },
        { icon: Phone, title: '24/7 Support', desc: 'Dedicated customer care' }
    ];

    const paymentMethods = [
        'Visa', 'Mastercard', 'American Express', 'PayPal', 'Apple Pay', 'Google Pay'
    ];

    return (
        <footer className="bg-gradient-to-r from-blue-900 to-gray-800/90 text-white">

            {/* Features Section */}
            <div className="border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-4 text-center md:text-left">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Stay In The Loop</h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Subscribe to our newsletter for exclusive deals, new arrivals, and fashion tips.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <div className="flex-1 relative">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-gray-800 border border-gray-600 rounded-full py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                />
                            </div>
                            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">
                            By subscribing, you agree to our Privacy Policy and consent to receive updates.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                ShopEase
                            </h2>
                            <p className="text-gray-400 mt-4 leading-relaxed">
                                Your premier destination for premium fashion and lifestyle products.
                                We're committed to bringing you the best in quality, style, and service.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform block"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-700 mt-12 pt-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start space-x-3">
                            <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0" />
                            <span className="text-gray-400">123 Fashion Street, NY 10001</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-3">
                            <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                            <span className="text-gray-400">+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-3">
                            <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                            <span className="text-gray-400">hello@shopease.com</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">

                        {/* Copyright */}
                        <div className="flex items-center space-x-2 text-gray-400">
                            <span>© {currentYear} ShopEase. Made with</span>
                            <Heart className="w-4 h-4 text-red-500 fill-current" />
                            <span>in New York</span>
                        </div>

                        {/* Payment Methods */}
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-400 text-sm">We accept:</span>
                            <div className="flex items-center space-x-2">
                                {paymentMethods.map((method, index) => (
                                    <div
                                        key={index}
                                        className="bg-white text-gray-800 px-3 py-1 rounded text-xs font-semibold"
                                    >
                                        {method}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Legal Links */}
                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;