import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center text-slate-900">
                <Link to="/" className="text-2xl md:text-3xl font-playfair font-bold tracking-tighter">
                    ELEGANCE<span className="text-gold">EVENTS</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-gold ${location.pathname === link.path ? 'text-gold' : ''
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="flex items-center py-2 px-6 bg-slate-900 text-cream-light font-medium tracking-widest uppercase transition-all duration-300 hover:bg-gold-dark">
                        <PhoneCall size={18} className="mr-2" />
                        Book Now
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden text-slate-900"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-cream-dark overflow-hidden"
                    >
                        <div className="flex flex-col p-8 space-y-6 bg-cream-light">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-xl font-playfair tracking-wide border-b border-cream-dark pb-2 ${location.pathname === link.path ? 'text-gold' : 'text-slate-900'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/contact" className="w-full py-4 bg-slate-900 text-cream-light font-medium text-center uppercase tracking-widest">
                                Get an Inquiry
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
