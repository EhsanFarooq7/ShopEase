import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Truck, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        orderNumber: '',
        message: ''
    });
    const [showSuccess, setShowSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Please fill in all required fields');
            return;
        }

        setShowSuccess(true);

        // Reset form after 2 seconds
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                subject: '',
                orderNumber: '',
                message: ''
            });
        }, 2000);

        // Hide success message after 5 seconds
        setTimeout(() => {
            setShowSuccess(false);
        }, 5000);
    };

    const contactMethods = [
        {
            icon: Phone,
            title: 'Customer Support',
            info: '1-800-SHOPEASE (746-7327)',
            details: 'Mon-Fri: 8AM-8PM EST\nSat-Sun: 10AM-6PM EST'
        },
        {
            icon: MessageCircle,
            title: 'Live Chat',
            info: 'Available 24/7',
            details: 'Click the chat icon on any page'
        },
        {
            icon: Mail,
            title: 'Email Support',
            info: 'support@shopease.com',
            details: 'Response within 24 hours'
        },
        {
            icon: MapPin,
            title: 'Headquarters',
            info: '123 Commerce Street',
            details: 'Digital Plaza, Suite 500\nNew York, NY 10001'
        },
        {
            icon: Truck,
            title: 'Returns & Exchanges',
            info: 'returns@shopease.com',
            details: 'Free returns within 30 days'
        }
    ];

    const quickLinks = [
        'Track Your Order',
        'Return Policy',
        'Shipping Info',
        'Size Guide',
        'FAQs',
        'Account Help'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-900 to-gray-800/90">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-12 pt-8">
                    <h1 className="text-5xl font-bold text-white mb-4 animate-pulse">
                        Contact ShopEase
                    </h1>
                    <p className="text-xl text-blue-100">
                        We're here to help! Get in touch with our customer support team
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Contact Form */}
                    <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 relative">
                            Send us a Message
                            <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded mt-2"></div>
                        </h2>

                        {showSuccess && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                <p className="text-green-700">
                                    Thank you for your message! We'll get back to you within 24 hours.
                                </p>
                            </div>
                        )}

                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-gray-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-gray-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Subject *
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-gray-300"
                                >
                                    <option value="">Select a topic</option>
                                    <option value="order">Order Inquiry</option>
                                    <option value="shipping">Shipping & Delivery</option>
                                    <option value="returns">Returns & Refunds</option>
                                    <option value="product">Product Information</option>
                                    <option value="technical">Technical Support</option>
                                    <option value="billing">Billing Question</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="orderNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Order Number (if applicable)
                                </label>
                                <input
                                    type="text"
                                    id="orderNumber"
                                    name="orderNumber"
                                    value={formData.orderNumber}
                                    onChange={handleInputChange}
                                    placeholder="SE-12345678"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-gray-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    placeholder="Please describe your inquiry in detail..."
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-gray-300 resize-vertical"
                                />
                            </div>

                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                            >
                                <Send className="h-5 w-5 mr-2" />
                                Send Message
                            </button>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 relative">
                            Get in Touch
                            <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded mt-2"></div>
                        </h2>

                        <div className="space-y-6">
                            {contactMethods.map((method, index) => {
                                const IconComponent = method.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-start p-5 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all duration-300 hover:transform hover:translate-x-2"
                                    >
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4 flex-shrink-0">
                                            <IconComponent className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800 text-lg mb-1">
                                                {method.title}
                                            </h3>
                                            <p className="text-gray-600 font-medium mb-1">
                                                {method.info}
                                            </p>
                                            <p className="text-gray-500 text-sm whitespace-pre-line">
                                                {method.details}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Quick Access Links */}
                <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Access</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {quickLinks.map((link, index) => (
                            <button
                                key={index}
                                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                {link}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}