import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Fashion Designer',
            company: 'Creative Studio',
            avatar: 'https://picsum.photos/80/80?random=1',
            rating: 5,
            text: 'Absolutely love the quality and style! The attention to detail is incredible, and the customer service is outstanding. I\'ve been shopping here for over two years now.',
            featured: true
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Marketing Director',
            company: 'Tech Corp',
            avatar: 'https://picsum.photos/80/80?random=2',
            rating: 5,
            text: 'Fast shipping, great prices, and premium quality products. The shopping experience is seamless from start to finish. Highly recommend to anyone looking for quality.',
            featured: false
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Entrepreneur',
            company: 'StartupXYZ',
            avatar: 'https://picsum.photos/80/80?random=3',
            rating: 5,
            text: 'The best online shopping experience I\'ve ever had. The products exceeded my expectations and arrived exactly as described. Will definitely be a returning customer.',
            featured: true
        },
        {
            id: 4,
            name: 'David Thompson',
            role: 'Photographer',
            company: 'Studio Vision',
            avatar: 'https://picsum.photos/80/80?random=4',
            rating: 5,
            text: 'Amazing product selection and unbeatable customer support. The team goes above and beyond to ensure customer satisfaction. Five stars all the way!',
            featured: false
        },
        {
            id: 5,
            name: 'Lisa Wang',
            role: 'Interior Designer',
            company: 'Design House',
            avatar: 'https://picsum.photos/80/80?random=5',
            rating: 5,
            text: 'I\'m impressed by the consistent quality and innovative designs. Each purchase has been a delightful experience. The packaging is also beautiful and eco-friendly.',
            featured: true
        },
        {
            id: 6,
            name: 'James Miller',
            role: 'Software Engineer',
            company: 'Tech Solutions',
            avatar: 'https://picsum.photos/80/80?random=6',
            rating: 5,
            text: 'Outstanding value for money and exceptional product quality. The website is user-friendly and the checkout process is smooth. Couldn\'t ask for more!'
        }
    ];

    const stats = [
        { number: '50K+', label: 'Happy Customers' },
        { number: '4.9/5', label: 'Average Rating' },
        { number: '99%', label: 'Satisfaction Rate' },
        { number: '24/7', label: 'Customer Support' }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlay) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [isAutoPlay, testimonials.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        What Our Customers Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our amazing customers
                        have to say about their shopping experience with us.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-600 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Testimonial Slider */}
                <div className="relative">
                    <div
                        className="overflow-hidden rounded-3xl"
                        onMouseEnter={() => setIsAutoPlay(false)}
                        onMouseLeave={() => setIsAutoPlay(true)}
                    >
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="w-full flex-shrink-0">
                                    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mx-4">
                                        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">

                                            {/* Quote Icon */}
                                            <div className="flex-shrink-0">
                                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                                    <Quote className="w-8 h-8 text-white" />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 text-center lg:text-left">
                                                {/* Rating */}
                                                <div className="flex justify-center lg:justify-start items-center space-x-1 mb-6">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>

                                                {/* Testimonial Text */}
                                                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                                                    "{testimonial.text}"
                                                </blockquote>

                                                {/* Author Info */}
                                                <div className="flex items-center justify-center lg:justify-start space-x-4">
                                                    <img
                                                        src={testimonial.avatar}
                                                        alt={testimonial.name}
                                                        className="w-16 h-16 rounded-full object-cover"
                                                    />
                                                    <div>
                                                        <div className="font-bold text-gray-900 text-lg">
                                                            {testimonial.name}
                                                        </div>
                                                        <div className="text-gray-600">
                                                            {testimonial.role}
                                                            {testimonial.company && (
                                                                <span className="text-purple-600"> at {testimonial.company}</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center space-x-3 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? 'bg-purple-500 scale-125'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>

                {/* Featured Testimonials Grid */}
                <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.filter(t => t.featured).slice(0, 3).map((testimonial) => (
                        <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            {/* Rating */}
                            <div className="flex items-center space-x-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                "{testimonial.text.substring(0, 120)}..."
                            </p>

                            {/* Author */}
                            <div className="flex items-center space-x-3">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-gray-500 text-sm">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;