import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 pt-20 pb-10 text-cream-light font-inter">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/5 pb-16">
                {/* Brand */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-playfair font-bold tracking-tighter">
                        SA<span className="text-gold">EVENTS</span>
                    </h2>
                    <p className="text-cream-dark leading-relaxed">
                        Crafting unforgettable moments with a touch of luxury. From intimate ceremonies to grand celebrations, we make every detail matter.
                    </p>
                    <div className="flex space-x-6">
                        <a href="https://www.instagram.com/m.srinivas_goud?igsh=bjlsNjBvYTdjZG5h" target="_blank" rel="noopener noreferrer" className="text-cream-light hover:text-gold transition-colors"><Instagram size={24} /></a>
                        <a href="#" className="text-cream-light hover:text-gold transition-colors"><Facebook size={24} /></a>
                        <a href="#" className="text-cream-light hover:text-gold transition-colors"><Twitter size={24} /></a>
                    </div>
                </div>

                {/* Contacts */}
                <div className="space-y-6">
                    <h3 className="text-xl font-playfair font-semibold tracking-wide">Contact Us</h3>
                    <ul className="space-y-4 text-cream-dark">
                        <li className="flex items-start">
                            <MapPin size={20} className="mr-3 text-gold shrink-0" />
                            <span>Shop No 3-37, Sarojini Nilayam, Behind Hanuman Temple, Baghameer Street, Kukatpally, Hyderabad – 500072</span>
                        </li>
                        <li className="flex items-center">
                            <Phone size={20} className="mr-3 text-gold shrink-0" />
                            <span>+91 93914 84849</span>
                        </li>
                        <li className="flex items-center">
                            <Mail size={20} className="mr-3 text-gold shrink-0" />
                            <span>events@saevents.com</span>
                        </li>
                        <li className="pt-2 border-t border-white/5 text-sm italic">
                            Working Hours: 9:00 AM – 8:00 PM (All days)
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="space-y-6">
                    <h3 className="text-xl font-playfair font-semibold tracking-wide">Explore</h3>
                    <ul className="grid grid-cols-1 gap-4 text-cream-dark">
                        <li><a href="/" className="hover:text-gold transition-colors tracking-wide">Home</a></li>
                        <li><a href="/about" className="hover:text-gold transition-colors tracking-wide">About Us</a></li>
                        <li><a href="/services" className="hover:text-gold transition-colors tracking-wide">Services</a></li>
                        <li><a href="/gallery" className="hover:text-gold transition-colors tracking-wide">Gallery</a></li>
                        <li><a href="/contact" className="hover:text-gold transition-colors tracking-wide">Contact</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="space-y-6">
                    <h3 className="text-xl font-playfair font-semibold tracking-wide">Newsletter</h3>
                    <p className="text-cream-dark leading-relaxed">Join our mailing list to receive invitations to our hosted events and design inspiration.</p>
                    <div className="flex bg-white/5 border border-white/10 overflow-hidden rounded-sm transition-all duration-300 focus-within:border-gold/50">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-transparent border-none outline-none flex-grow p-4 text-sm tracking-wide"
                        />
                        <button className="bg-gold hover:bg-gold-dark text-slate-900 font-bold px-6 border-none transition-colors uppercase tracking-widest text-xs">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 pt-10 text-center text-cream-dark text-sm tracking-widest uppercase">
                <p>&copy; {new Date().getFullYear()} SAevents Management. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
