import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            title: "Premium Fashion Collection",
            subtitle: "Discover Your Unique Style",
            description: "Elevate your wardrobe with our curated selection of premium fashion pieces",
            bg: "from-purple-600 via-pink-600 to-blue-600",
            cta: "Shop Collection"
        },
        {
            title: "Summer Sale 2025",
            subtitle: "Up to 70% Off Everything",
            description: "Don't miss out on incredible deals across all categories",
            bg: "from-orange-500 via-red-500 to-pink-500",
            cta: "Shop Sale"
        },
        {
            title: "New Arrivals",
            subtitle: "Fresh & Trendy Pieces",
            description: "Be the first to wear the latest fashion trends",
            bg: "from-emerald-500 via-teal-500 to-cyan-500",
            cta: "Explore New"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen overflow-hidden">
            {/* Background with gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bg} transition-all duration-1000 ease-in-out`}>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>

                {/* Animated background shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-white bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white bg-opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full text-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <div className="space-y-8 animate-fade-in">
                        {/* Main heading */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
                                <span className="block">{slides[currentSlide].title}</span>
                            </h1>
                            <p className="text-2xl md:text-4xl font-light opacity-90 max-w-4xl mx-auto">
                                {slides[currentSlide].subtitle}
                            </p>
                            <p className="text-lg md:text-xl opacity-75 max-w-2xl mx-auto">
                                {slides[currentSlide].description}
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                            <button className="group bg-white text-gray-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center">
                                {slides[currentSlide].cta}
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="group border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center">
                                <Play className="mr-2 w-5 h-5" />
                                Watch Video
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-white scale-110'
                                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                            }`}
                    />
                ))}
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 right-8 text-white opacity-60">
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-sm font-medium">Scroll</span>
                    <div className="w-px h-12 bg-white animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;