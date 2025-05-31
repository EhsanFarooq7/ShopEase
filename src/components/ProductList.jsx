import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Eye, Filter, Grid3X3, List } from 'lucide-react';

const ProductList = ({ products = [] }) => {
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [sortBy, setSortBy] = useState('featured');
    const [likedProducts, setLikedProducts] = useState(new Set());

    // Default products if none provided
    const defaultProducts = [
        {
            id: 1,
            name: 'Premium Cotton T-Shirt',
            price: 29.99,
            originalPrice: 39.99,
            image: 'https://picsum.photos/400/500?random=1',
            rating: 4.8,
            reviews: 124,
            badge: 'Best Seller'
        },
        {
            id: 2,
            name: 'Designer Sneakers',
            price: 129.99,
            originalPrice: 159.99,
            image: 'https://picsum.photos/400/500?random=2',
            rating: 4.9,
            reviews: 89,
            badge: 'New'
        },
        {
            id: 3,
            name: 'Luxury Smart Watch',
            price: 299.99,
            originalPrice: 399.99,
            image: 'https://picsum.photos/400/500?random=3',
            rating: 4.7,
            reviews: 203,
            badge: 'Sale'
        },
        {
            id: 4,
            name: 'Leather Handbag',
            price: 199.99,
            image: 'https://picsum.photos/400/500?random=4',
            rating: 4.6,
            reviews: 156
        },
        {
            id: 5,
            name: 'Wireless Headphones',
            price: 149.99,
            originalPrice: 199.99,
            image: 'https://picsum.photos/400/500?random=5',
            rating: 4.8,
            reviews: 92,
            badge: 'Hot'
        },
        {
            id: 6,
            name: 'Denim Jacket',
            price: 89.99,
            image: 'https://picsum.photos/400/500?random=6',
            rating: 4.5,
            reviews: 67
        }
    ];

    const displayProducts = products.length > 0 ? products : defaultProducts;

    const toggleLike = (productId) => {
        const newLiked = new Set(likedProducts);
        if (newLiked.has(productId)) {
            newLiked.delete(productId);
        } else {
            newLiked.add(productId);
        }
        setLikedProducts(newLiked);
    };

    const ProductCard = ({ product }) => (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            {/* Product Image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Badge */}
                {product.badge && (
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold text-white ${product.badge === 'Sale' ? 'bg-red-500' :
                            product.badge === 'New' ? 'bg-green-500' :
                                product.badge === 'Hot' ? 'bg-orange-500' :
                                    'bg-purple-500'
                        }`}>
                        {product.badge}
                    </div>
                )}

                {/* Heart Icon */}
                <button
                    onClick={() => toggleLike(product.id)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
                >
                    <Heart
                        className={`w-5 h-5 transition-colors duration-300 ${likedProducts.has(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'
                            }`}
                    />
                </button>

                {/* Quick Actions */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <button className="flex-1 bg-white/90 backdrop-blur-sm text-gray-900 py-3 rounded-xl font-semibold hover:bg-white transition-all duration-300 flex items-center justify-center">
                        <Eye className="w-4 h-4 mr-2" />
                        Quick View
                    </button>
                    <button className="flex-1 bg-gray-900/90 backdrop-blur-sm text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 flex items-center justify-center">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-6 space-y-3">
                {/* Rating */}
                <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(product.rating || 4.5)
                                        ? 'fill-yellow-400 text-yellow-400'
                                        : 'text-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-600">
                        {product.rating || 4.5} ({product.reviews || 0})
                    </span>
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                    {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">
                        ${product.price}
                    </span>
                    {product.originalPrice && (
                        <>
                            <span className="text-sm text-gray-500 line-through">
                                ${product.originalPrice}
                            </span>
                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold">
                                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                            </span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Featured Products
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover our carefully curated collection of premium products,
                        each selected for quality, style, and exceptional value.
                    </p>
                </div>

                {/* Controls */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-12 space-y-4 sm:space-y-0">
                    {/* Left side - Results count */}
                    <div className="text-gray-600">
                        Showing {displayProducts.length} products
                    </div>

                    {/* Right side - Controls */}
                    <div className="flex items-center space-x-4">
                        {/* Sort Dropdown */}
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                                <option value="newest">Newest</option>
                            </select>
                            <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>

                        {/* View Mode Toggle */}
                        <div className="flex bg-white border border-gray-300 rounded-lg p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-md transition-colors duration-200 ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                <Grid3X3 className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-md transition-colors duration-200 ${viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                <List className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className={`grid gap-8 ${viewMode === 'grid'
                        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                        : 'grid-cols-1'
                    }`}>
                    {displayProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-16">
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Load More Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductList;