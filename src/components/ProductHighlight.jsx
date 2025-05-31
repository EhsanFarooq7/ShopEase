import React, { useState } from 'react';
import { ArrowRight, Star, ShoppingCart, Zap, Award, Truck } from 'lucide-react';

const ProductHighlight = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const highlightProduct = {
        name: 'Signature Leather Jacket',
        price: 299.99,
        originalPrice: 399.99,
        rating: 4.9,
        reviews: 256,
        description: 'Crafted from premium genuine leather with meticulous attention to detail. This timeless piece combines classic design with modern comfort.',
        features: [
            'Premium genuine leather construction',
            'Breathable cotton lining',
            'YKK zippers and hardware',
            'Tailored fit with stretch panels',
            'Lifetime craftsmanship warranty'
        ],
        images: [
            'https://images.unsplash.com/photo-1511280303142-0051e93baeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxlYXRoZXIlMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1698749257193-e881163207d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxlYXRoZXIlMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1602370463198-086436840055?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVhdGhlciUyMGphY2tldHxlbnwwfDF8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1562751361-8839562e351b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxlYXRoZXIlMjBqYWNrZXR8ZW58MHwxfDB8fHww'
        ],
        colors: ['Black', 'Brown', 'Navy'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    };

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Product Images */}
                    <div className="space-y-6">
                        {/* Main Image */}
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 shadow-2xl">
                            <img
                                src={highlightProduct.images[selectedImage]}
                                alt={highlightProduct.name}
                                className="w-full h-full object-cover"
                            />

                            {/* Badge */}
                            <div className="absolute top-6 left-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                                <Award className="w-4 h-4" />
                                <span className="font-semibold">Editor's Choice</span>
                            </div>

                            {/* Discount Badge */}
                            <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                                25% OFF
                            </div>
                        </div>

                        {/* Thumbnail Images */}
                        <div className="flex space-x-4">
                            {highlightProduct.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative aspect-square w-20 rounded-xl overflow-hidden transition-all duration-300 ${selectedImage === index
                                            ? 'ring-4 ring-purple-500 scale-110'
                                            : 'hover:scale-105 opacity-70 hover:opacity-100'
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${highlightProduct.name} ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-8">
                        {/* Header */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(highlightProduct.rating)
                                                    ? 'fill-yellow-400 text-yellow-400'
                                                    : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-600">
                                    {highlightProduct.rating} ({highlightProduct.reviews} reviews)
                                </span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                {highlightProduct.name}
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                {highlightProduct.description}
                            </p>
                        </div>

                        {/* Price */}
                        <div className="flex items-center space-x-4">
                            <span className="text-4xl font-bold text-gray-900">
                                ${highlightProduct.price}
                            </span>
                            <span className="text-2xl text-gray-500 line-through">
                                ${highlightProduct.originalPrice}
                            </span>
                            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold">
                                Save $100
                            </span>
                        </div>

                        {/* Features */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
                            <ul className="space-y-3">
                                {highlightProduct.features.map((feature, index) => (
                                    <li key={index} className="flex items-center space-x-3">
                                        <Zap className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Options */}
                        <div className="space-y-6">
                            {/* Colors */}
                            <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900">Color:</h4>
                                <div className="flex space-x-3">
                                    {highlightProduct.colors.map((color, index) => (
                                        <button
                                            key={index}
                                            className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-gray-900 transition-colors duration-200 font-medium"
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Sizes */}
                            <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900">Size:</h4>
                                <div className="flex flex-wrap gap-3">
                                    {highlightProduct.sizes.map((size, index) => (
                                        <button
                                            key={index}
                                            className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 font-medium"
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                                <ShoppingCart className="w-5 h-5 mr-2" />
                                Add to Cart
                            </button>
                            <button className="flex-1 border-2 border-gray-900 text-gray-900 py-4 px-8 rounded-full font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                                Buy Now
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                        </div>

                        {/* Shipping Info */}
                        <div className="flex items-center space-x-2 text-green-600 bg-green-50 px-4 py-3 rounded-lg">
                            <Truck className="w-5 h-5" />
                            <span className="font-medium">Free shipping on orders over $200</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductHighlight;