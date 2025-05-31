import React from 'react';

function About() {
    const stats = [
        { number: '50K+', label: 'Happy Customers' },
        { number: '10K+', label: 'Products Sold' },
        { number: '99.8%', label: 'Customer Satisfaction' },
        { number: '24/7', label: 'Customer Support' }
    ];

    const values = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Quality First',
            description: 'We curate only the finest products that meet our rigorous quality standards.'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Fast Delivery',
            description: 'Lightning-fast shipping with real-time tracking to get your orders to you quickly.'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
            ),
            title: 'Best Prices',
            description: 'Competitive pricing with regular deals and discounts for maximum value.'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: '24/7 Support',
            description: 'Our dedicated customer service team is always here to help you succeed.'
        }
    ];

    const team = [
        {
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            image: '👩‍💼',
            description: 'Visionary leader with 15+ years in eCommerce innovation.'
        },
        {
            name: 'Michael Chen',
            role: 'Head of Technology',
            image: '👨‍💻',
            description: 'Tech expert ensuring seamless digital experiences.'
        },
        {
            name: 'Emily Rodriguez',
            role: 'Customer Experience',
            image: '👩‍🎓',
            description: 'Passionate about creating exceptional customer journeys.'
        },
        {
            name: 'David Kim',
            role: 'Operations Manager',
            image: '👨‍🔧',
            description: 'Logistics mastermind ensuring smooth operations.'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 to-gray-800/90 text-white">
                <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-6">About ShopEase</h1>
                        <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                            We're not just another eCommerce platform. We're your partners in creating
                            exceptional shopping experiences that connect brands with customers worldwide.
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Story Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <div className="space-y-4 text-lg text-gray-600">
                                <p>
                                    Founded in 2018, ShopSphere began as a simple idea: to create a platform
                                    where quality products meet exceptional service. What started in a small
                                    garage has grown into a thriving marketplace serving customers globally.
                                </p>
                                <p>
                                    Our journey has been driven by one core belief - that shopping should be
                                    enjoyable, trustworthy, and accessible to everyone. We've built our
                                    platform with cutting-edge technology while never losing sight of the
                                    human touch that makes each interaction special.
                                </p>
                                <p>
                                    Today, we're proud to work with thousands of sellers and serve millions
                                    of customers, but our mission remains the same: to provide the best
                                    eCommerce experience possible.
                                </p>
                            </div>
                        </div>
                        <div className="lg:pl-12">
                            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🚀</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">From Vision to Reality</h3>
                                    <p className="text-gray-600">
                                        Transforming the way people shop online, one customer at a time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            These principles guide everything we do and shape the experience we create for our customers.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="text-center group hover:bg-blue-50 p-6 rounded-xl transition-all duration-300">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The passionate individuals behind ShopEase who make it all possible.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="text-6xl mb-4">{member.image}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600 text-sm">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-20 bg-gradient-to-r from-blue-900 to-gray-800/90 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
                    <p className="text-2xl max-w-4xl mx-auto leading-relaxed mb-12">
                        To democratize commerce by providing businesses of all sizes with the tools and
                        platform they need to reach customers globally, while ensuring every shopper
                        enjoys a seamless, secure, and delightful experience.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                            Start Shopping
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-200">
                            Become a Seller
                        </button>
                    </div>
                </div>
            </div>

            {/* Contact CTA */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Join thousands of satisfied customers and experience the ShopSphere difference.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <div className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            support@shopsphere.com
                        </div>
                        <div className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            1-800-SHOP-NOW
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;