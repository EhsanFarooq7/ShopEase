// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // function Navbar() {
// //     return (
// //         <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
// //             <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
// //                 <li><Link to="/">Home</Link></li>
// //                 <li><Link to="/signup">Sign Up</Link></li>
// //                 <li><Link to="/login">Login</Link></li>
// //             </ul>
// //         </nav>
// //     );
// // }

// // export default Navbar;
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//     return (
//         <nav style={styles.nav}>
//             <h2 style={styles.logo}>ShopEase</h2>
//             <ul style={styles.links}>
//                 <li><Link to="/" style={styles.link}>Home</Link></li>
//                 <li><Link to="/shop" style={styles.link}>Shop</Link></li>
//                 <li><Link to="/about" style={styles.link}>About</Link></li>
//                 <li><Link to="/login" style={styles.link}>Login</Link></li>
//                 <li><Link to="/signup" style={styles.link}>Sign Up</Link></li>
//             </ul>
//         </nav>
//     );
// }

// const styles = {
//     nav: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '1rem 2rem',
//         backgroundColor: '#333',
//         color: '#fff',
//     },
//     logo: {
//         margin: 0,
//     },
//     links: {
//         listStyle: 'none',
//         display: 'flex',
//         gap: '1.5rem',
//         margin: 0,
//         padding: 0,
//     },
//     link: {
//         color: '#fff',
//         textDecoration: 'none',
//         fontWeight: 'bold',
//     },
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Menu, X, Search, Heart } from 'lucide-react';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'home', to: '/', label: 'Home' },
        { id: 'shop', to: '/shop', label: 'Shop' },
        { id: 'about', to: '/about', label: 'About' },
        { id: 'contact', to: '/contact', label: 'Contact' }
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-black/95 backdrop-blur-lg border-b border-gray-800/50 shadow-2xl'
                    : 'bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-sm'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">

                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <a
                                href="/"
                                className="flex items-center space-x-2 group"
                                onClick={() => setActiveLink('home')}
                            >
                                <div className="relative">
                                    <div className="w-10 h-10 bg-gradient-to-br from-white via-gray-200 to-gray-400 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                                        <ShoppingBag className="w-5 h-5 text-black" />
                                    </div>
                                    <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-gray-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                                        ShopEase
                                    </h1>
                                    <p className="text-xs text-gray-400 -mt-1">Premium Store</p>
                                </div>
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:block">
                            <div className="flex items-center space-x-1">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={link.to}
                                        onClick={() => setActiveLink(link.id)}
                                        className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${activeLink === link.id
                                                ? 'text-white bg-white/10 shadow-lg'
                                                : 'text-gray-300 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {link.label}
                                        {activeLink === link.id && (
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right Side Icons & Actions */}
                        <div className="flex items-center space-x-4">

                            {/* Search Icon */}
                            <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group">
                                <Search className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                            </button>

                            {/* Wishlist */}
                            <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group relative">
                                <Heart className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
                            </button>

                            {/* Cart */}
                            <button className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group relative">
                                <ShoppingBag className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                <span className="absolute -top-2 -right-2 w-5 h-5 bg-white text-black text-xs rounded-full flex items-center justify-center font-semibold">2</span>
                            </button>

                            {/* Auth Buttons */}
                            <div className="hidden lg:flex items-center space-x-3">
                                <a
                                    href="/login"
                                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors font-medium"
                                    onClick={() => setActiveLink('login')}
                                >
                                    Login
                                </a>
                                <a
                                    href="/signup"
                                    className="px-6 py-2 bg-white text-black rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium transform hover:scale-105 shadow-lg"
                                    onClick={() => setActiveLink('signup')}
                                >
                                    Sign Up
                                </a>
                            </div>

                            {/* Mobile menu button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 transition-all duration-300"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-5 h-5 text-white" />
                                ) : (
                                    <Menu className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="px-4 pt-2 pb-6 space-y-2 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800/50">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.to}
                                onClick={() => {
                                    setActiveLink(link.id);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${activeLink === link.id
                                        ? 'text-white bg-white/10'
                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}

                        <div className="pt-4 border-t border-gray-800/50 space-y-2">
                            <a
                                href="/login"
                                onClick={() => {
                                    setActiveLink('login');
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block px-4 py-3 text-gray-300 hover:text-white rounded-xl hover:bg-white/5 transition-all duration-300 font-medium"
                            >
                                Login
                            </a>
                            <a
                                href="/signup"
                                onClick={() => {
                                    setActiveLink('signup');
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block px-4 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium text-center"
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Spacer to prevent content from hiding behind fixed navbar */}
            <div className="h-16 lg:h-20"></div>
        </>
    );
}

export default Navbar;