import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Eye, Zap, TrendingUp } from 'lucide-react';
import { useCart } from '../context/CartContext';


const ProductCard = ({ product }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState(2);
    const { addToCart } = useCart();

    // Enhanced sample product data
    const defaultProduct = {
        id: 1,
        name: 'Premium Cotton Essentials',
        subtitle: 'Luxury Comfort Collection',
        price: 89.99,
        originalPrice: 129.99,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=80',
        rating: 4.9,
        reviews: 247,
        colors: [
            { name: 'Midnight', value: '#1a1a2e' },
            { name: 'Pearl', value: '#f8f9fa' },
            { name: 'Ocean', value: '#0077be' },
            { name: 'Coral', value: '#ff6b6b' },
            { name: 'Forest', value: '#2d5a27' }
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        badge: 'Trending',
        inStock: true,
        fastShipping: true
    };

    const productData = product || defaultProduct;
    const discount = Math.round(((productData.originalPrice - productData.price) / productData.originalPrice) * 100);

    return (
        <div className="w-full max-w-sm mx-auto mt-8 mb-8">
            <div
                className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:rotate-1 group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full -translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full translate-x-12 translate-y-12"></div>
                </div>

                {/* Product Image Container */}
                <div className="relative aspect-square overflow-hidden">
                    <img
                        src={productData.image}
                        alt={productData.name}
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:rotate-3"
                    />

                    {/* Dynamic Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

                    {/* Animated Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-xl transition-all duration-700 ${isHovered ? 'opacity-20 scale-110' : 'opacity-0'}`}></div>

                    {/* Badge with Icon */}
                    {productData.badge && (
                        <div className="absolute top-4 left-4 flex items-center space-x-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-2 rounded-2xl text-sm font-bold shadow-lg backdrop-blur-sm">
                            <TrendingUp className="w-4 h-4" />
                            <span>{productData.badge}</span>
                        </div>
                    )}

                    {/* Discount Badge */}
                    {discount > 0 && (
                        <div className="absolute top-4 right-16 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-2 rounded-2xl text-sm font-bold shadow-lg">
                            -{discount}%
                        </div>
                    )}

                    {/* Heart Button */}
                    <button
                        onClick={() => setIsLiked(!isLiked)}
                        className="absolute top-4 right-4 p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 hover:bg-white/30 transition-all duration-300 group/heart"
                    >
                        <Heart
                            className={`w-5 h-5 transition-all duration-300 ${isLiked
                                    ? 'fill-red-500 text-red-500 scale-110'
                                    : 'text-white hover:text-red-400 group-hover/heart:scale-110'
                                }`}
                        />
                    </button>

                    {/* Quick Actions */}
                    <div className={`absolute bottom-4 left-4 right-4 flex gap-3 transition-all duration-500 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        <button className="flex-1 bg-white/20 backdrop-blur-md border border-white/20 text-white py-3 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center group/btn">
                            <Eye className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            View
                        </button>
                        <button onClick={() => addToCart(product)} className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-lg group/btn">
                            <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            Add
                        </button>
                    </div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-5 relative">
                    {/* Rating & Fast Shipping */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 transition-all duration-200 ${i < Math.floor(productData.rating)
                                                ? 'fill-yellow-400 text-yellow-400'
                                                : 'text-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm font-medium text-gray-600">
                                {productData.rating}
                            </span>
                        </div>
                        {productData.fastShipping && (
                            <div className="flex items-center space-x-1 text-green-600">
                                <Zap className="w-4 h-4" />
                                <span className="text-xs font-semibold">Fast Ship</span>
                            </div>
                        )}
                    </div>

                    {/* Product Name & Subtitle */}
                    <div className="space-y-1">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {productData.name}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium">{productData.subtitle}</p>
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-3">
                        <span className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            ${productData.price}
                        </span>
                        {productData.originalPrice && (
                            <span className="text-lg text-gray-400 line-through">
                                ${productData.originalPrice}
                            </span>
                        )}
                    </div>

                    {/* Color Selection */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-gray-700">Color</span>
                            <span className="text-xs text-gray-500">{productData.colors[selectedColor].name}</span>
                        </div>
                        <div className="flex space-x-3">
                            {productData.colors.map((color, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedColor(index)}
                                    className={`w-8 h-8 rounded-2xl border-2 transition-all duration-300 hover:scale-110 ${selectedColor === index
                                            ? 'border-gray-900 shadow-lg scale-110'
                                            : 'border-gray-300 hover:border-gray-400'
                                        }`}
                                    style={{ backgroundColor: color.value }}
                                >
                                    {selectedColor === index && (
                                        <div className="w-full h-full rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Size Selection */}
                    <div className="space-y-3">
                        <span className="text-sm font-semibold text-gray-700">Size</span>
                        <div className="flex space-x-2">
                            {productData.sizes.map((size, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedSize(index)}
                                    className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 ${selectedSize === index
                                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Stock Status */}
                    <div className="flex items-center space-x-2 pt-2">
                        <div className={`w-2 h-2 rounded-full ${productData.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <span className={`text-sm font-medium ${productData.inStock ? 'text-green-600' : 'text-red-600'}`}>
                            {productData.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                        <span className="text-xs text-gray-500">• {productData.reviews} reviews</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;