import React, { useState, useMemo } from 'react';
import { Search, Filter, Heart, ShoppingCart, Star, Grid, List, ChevronDown } from 'lucide-react';

function Shop() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [sortBy, setSortBy] = useState('featured');
    const [viewMode, setViewMode] = useState('grid');
    const [showFilters, setShowFilters] = useState(false);

    const products = [
        {
            id: 1,
            name: 'Wireless Bluetooth Headphones',
            category: 'electronics',
            price: 129.99,
            originalPrice: 179.99,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
            rating: 4.8,
            reviews: 234,
            isNew: true,
            isSale: true
        },
        {
            id: 2,
            name: 'Minimalist Watch',
            category: 'accessories',
            price: 89.99,
            originalPrice: null,
            image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop',
            rating: 4.6,
            reviews: 156,
            isNew: false,
            isSale: false
        },
        {
            id: 3,
            name: 'Organic Cotton T-Shirt',
            category: 'clothing',
            price: 34.99,
            originalPrice: 49.99,
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
            rating: 4.4,
            reviews: 89,
            isNew: false,
            isSale: true
        },
        {
            id: 4,
            name: 'Smart Fitness Tracker',
            category: 'electronics',
            price: 199.99,
            originalPrice: null,
            image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop',
            rating: 4.9,
            reviews: 445,
            isNew: true,
            isSale: false
        },
        {
            id: 5,
            name: 'Leather Crossbody Bag',
            category: 'accessories',
            price: 149.99,
            originalPrice: 199.99,
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
            rating: 4.7,
            reviews: 178,
            isNew: false,
            isSale: true
        },
        {
            id: 6,
            name: 'Casual Denim Jacket',
            category: 'clothing',
            price: 79.99,
            originalPrice: null,
            image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop',
            rating: 4.3,
            reviews: 92,
            isNew: false,
            isSale: false
        },
        {
            id: 7,
            name: 'Gaming Mechanical Keyboard',
            category: 'electronics',
            price: 159.99,
            originalPrice: 189.99,
            image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
            rating: 4.8,
            reviews: 312,
            isNew: true,
            isSale: true
        },
        {
            id: 8,
            name: 'Sunglasses Collection',
            category: 'accessories',
            price: 119.99,
            originalPrice: null,
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
            rating: 4.5,
            reviews: 201,
            isNew: false,
            isSale: false
        }
    ];

    const categories = [
        { id: 'all', name: 'All Products', count: products.length },
        { id: 'electronics', name: 'Electronics', count: products.filter(p => p.category === 'electronics').length },
        { id: 'clothing', name: 'Clothing', count: products.filter(p => p.category === 'clothing').length },
        { id: 'accessories', name: 'Accessories', count: products.filter(p => p.category === 'accessories').length }
    ];

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
            return matchesSearch && matchesCategory && matchesPrice;
        }).sort((a, b) => {
            switch (sortBy) {
                case 'price-low': return a.price - b.price;
                case 'price-high': return b.price - a.price;
                case 'rating': return b.rating - a.rating;
                case 'newest': return b.isNew - a.isNew;
                default: return 0;
            }
        });
    }, [searchTerm, selectedCategory, priceRange, sortBy]);

    const ProductCard = ({ product }) => (
        <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            {product.isNew && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-900 to-gray-800/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    NEW
                </div>
            )}
            {product.isSale && (
                <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    SALE
                </div>
            )}

            <div className="relative overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                            <Heart className="w-5 h-5 text-gray-700" />
                        </button>
                        <button className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                            <ShoppingCart className="w-5 h-5 text-gray-700" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="mb-2">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-blue-900 transition-colors">
                        {product.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                        </div>
                        <span className="text-gray-300">·</span>
                        <span className="text-sm text-gray-500">{product.reviews} reviews</span>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                        {product.originalPrice && (
                            <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                        )}
                    </div>
                    <button className="bg-gradient-to-r from-blue-900 to-gray-800/90 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 font-medium">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 to-gray-800/90 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                            Discover Amazing Products
                        </h1>
                        <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                            Curated collection of premium products for your lifestyle
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Search and Filters */}
                <div className="mb-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                            />
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors lg:hidden"
                            >
                                <Filter className="w-4 h-4" />
                                Filters
                            </button>

                            <div className="flex items-center gap-2 border border-gray-200 rounded-xl p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-blue-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                                >
                                    <Grid className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-blue-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                                >
                                    <List className="w-4 h-4" />
                                </button>
                            </div>

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                            >
                                <option value="featured">Featured</option>
                                <option value="newest">Newest</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex gap-8">
                    {/* Sidebar Filters */}
                    <div className={`lg:block ${showFilters ? 'block' : 'hidden'} w-full lg:w-64 space-y-6`}>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                            <div className="space-y-3">
                                {categories.map(category => (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`w-full text-left px-4 py-3 rounded-xl transition-all ${selectedCategory === category.id
                                            ? 'bg-gradient-to-r from-blue-900 to-gray-800/90 text-white'
                                                : 'hover:bg-gray-50 text-gray-700'
                                            }`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <span>{category.name}</span>
                                            <span className={`text-sm ${selectedCategory === category.id ? 'text-blue-900' : 'text-gray-400'}`}>
                                                {category.count}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
                            <div className="space-y-4">
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                />
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>$0</span>
                                    <span>${priceRange[1]}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="flex-1">
                        <div className="mb-6">
                            <p className="text-gray-600">
                                Showing {filteredProducts.length} of {products.length} products
                            </p>
                        </div>

                        <div className={viewMode === 'grid'
                            ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'
                            : 'space-y-6'
                        }>
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-16">
                                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                                    <Search className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg,rgb(25, 52, 118),rgb(19, 33, 70));
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg,rgb(17, 33, 68),rgb(31, 62, 155));
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
        </div>
    );
}

export default Shop;