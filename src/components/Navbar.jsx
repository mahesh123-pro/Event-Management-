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

    const isHomePage = location.pathname === '/';
    const navbarStyle = scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-sm py-4 text-slate-900 border-b border-cream-dark' 
        : (isHomePage ? 'bg-transparent py-6 text-cream-light' : 'bg-white/90 backdrop-blur-md py-6 text-slate-900');

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${navbarStyle}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="group flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gold flex items-center justify-center font-playfair font-bold text-white rounded-sm transform group-hover:rotate-12 transition-transform duration-500">SA</div>
                    <span className="text-2xl md:text-3xl font-playfair font-bold tracking-tighter uppercase">
                        EVENTS
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`relative text-xs font-semibold tracking-[0.2em] uppercase group py-2 
                                ${location.pathname === link.path ? 'text-gold' : (scrolled || !isHomePage ? 'text-slate-900' : 'text-cream-light hover:text-gold')}`}
                        >
                            {link.name}
                            <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-500 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
                        </Link>
                    ))}
                    <Link 
                        to="/contact" 
                        className={`flex items-center py-3 px-8 font-semibold tracking-widest uppercase transition-all duration-500 hover:scale-105 active:scale-95
                            ${scrolled || !isHomePage ? 'bg-slate-900 text-cream-light hover:bg-gold-dark' : 'bg-white text-slate-900 hover:bg-gold hover:text-white'}`}
                    >
                        <PhoneCall size={16} className="mr-3" />
                        Inquire
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className={`lg:hidden transition-colors ${scrolled || !isHomePage ? 'text-slate-900' : 'text-cream-light'}`}
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
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] lg:hidden bg-slate-900 text-cream-light"
                    >
                        <div className="p-8 h-full flex flex-col justify-between">
                            <div className="flex justify-between items-center">
                                <span className="text-3xl font-playfair font-bold">SA<span className="text-gold">EVENTS</span></span>
                                <button onClick={() => setIsOpen(false)}><X size={40} className="text-gold" /></button>
                            </div>

                            <div className="flex flex-col space-y-8 text-center">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`text-4xl font-playfair tracking-wide ${location.pathname === link.path ? 'text-gold italic' : 'text-white'}`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            <div className="space-y-8 text-center">
                                <p className="text-gold uppercase tracking-[0.3em] font-medium text-xs">Let's Create Magic</p>
                                <Link to="/contact" className="w-full py-5 bg-gold text-white font-bold text-center block uppercase tracking-[0.2em] rounded-sm">
                                    Get In Touch
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
