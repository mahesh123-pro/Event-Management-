import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, ArrowRight, Star, Heart, Building2, PartyPopper } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const { scrollYProgress } = useScroll();
    const yScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

    const services = [
        {
            title: 'Weddings',
            icon: <Heart strokeWidth={1} size={40} />,
            desc: 'Enchanting ceremonies tailored to your love story.',
            color: 'gold'
        },
        {
            title: 'Corporate Events',
            icon: <Building2 strokeWidth={1} size={40} />,
            desc: 'Seamless execution for professional brilliance.',
            color: 'slate-900'
        },
        {
            title: 'Private Parties',
            icon: <PartyPopper strokeWidth={1} size={40} />,
            desc: 'Unforgettable celebrations with a touch of elegance.',
            color: 'gold'
        }
    ];

    const featuredGallery = [
        { id: 1, title: 'The Royal Wedding', category: 'Wedding', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800' },
        { id: 2, title: 'Global Tech Summit', category: 'Corporate', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800' },
        { id: 3, title: 'Elite Birthday Bash', category: 'Party', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800' },
        { id: 4, title: 'Summer Garden Gala', category: 'Private', image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80&w=800' },
    ];

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ scale: yScale }}
                    className="absolute inset-0 z-0 bg-slate-900"
                >
                    <img
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070"
                        alt="Luxury Wedding Setup"
                        className="w-full h-full object-cover opacity-60"
                    />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/80 z-1" />

                <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gold uppercase tracking-[0.5em] font-medium text-sm drop-shadow-lg"
                    >
                        Since 2010 • Award Winning Agency
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-cream-light leading-[1.1] tracking-tight drop-shadow-2xl"
                    >
                        Crafting Unforgettable <br className="hidden md:block" />
                        <span className="italic font-medium text-gold">Experiences</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
                    >
                        <Link to="/contact" className="btn-premium flex items-center group">
                            Start Planning <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/gallery" className="btn-outline border-white text-white hover:bg-white hover:text-slate-900">
                            View Portfolio
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 0, y: 100 }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center"
                >
                    <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-white/50" />
                    <span className="text-[10px] uppercase tracking-[0.3em] mt-4 font-inter">Scroll</span>
                </motion.div>
            </section>

            {/* Services Overview */}
            <section className="py-24 bg-cream-light">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h5 className="section-subtitle">Excellence In Every Detail</h5>
                        <h2 className="section-title">Our Signature Services</h2>
                        <div className="w-24 h-[1px] bg-gold mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group p-10 bg-white border border-cream-dark transition-all duration-500 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2 text-center"
                            >
                                <div className={`w-20 h-20 flex items-center justify-center mx-auto mb-8 bg-cream-light text-slate-900 group-hover:bg-gold group-hover:text-white transition-all duration-500 rounded-full`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 tracking-wide">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-8">{service.desc}</p>
                                <Link to="/services" className="text-slate-900 font-bold uppercase tracking-widest text-xs flex items-center justify-center group-hover:text-gold transition-colors">
                                    Learn More <ChevronRight size={16} className="ml-1" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Gallery Highlights */}
            <section className="py-24 bg-slate-900 text-cream-light overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
                        <div>
                            <h5 className="section-subtitle">Curated Gallery</h5>
                            <h2 className="section-title text-white">Visual Storytelling</h2>
                        </div>
                        <Link to="/gallery" className="btn-outline border-white/20 text-cream-light hover:bg-gold hover:text-white transition-all">
                            Full Portfolio
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredGallery.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 1.1 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="group relative h-[450px] overflow-hidden cursor-pointer"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <span className="text-gold text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{item.category}</span>
                                    <h4 className="text-xl font-playfair font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">{item.title}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-cream-light">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h5 className="section-subtitle">Wall of Love</h5>
                        <h2 className="section-title">Happy Clients</h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white p-12 shadow-sm border border-cream-dark italic text-center relative">
                            <Star className="text-gold fill-gold absolute -top-4 left-1/2 -translate-x-1/2" size={32} />
                            <p className="text-2xl text-slate-800 leading-relaxed font-playfair mb-8">
                                "Working with Elegance Events was a dream. They took our vague ideas and turned them into a breathtaking reality for our wedding. Every detail was curated with such perfection that our guests are still talking about it!"
                            </p>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-slate-200 mb-4 overflow-hidden border-2 border-gold/20">
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="Client" />
                                </div>
                                <h6 className="font-playfair font-bold text-lg not-italic">Alexandra & Michael</h6>
                                <p className="text-xs uppercase tracking-widest text-gold font-medium mt-1">Napa Valley Wedding</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80&w=2070"
                        className="w-full h-full object-cover opacity-20 grayscale"
                        alt="Decoration"
                    />
                    <div className="absolute inset-0 bg-gold/5" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
                    <h2 className="text-4xl md:text-6xl font-playfair font-bold text-slate-900 leading-snug">
                        Ready to Create an <span className="text-gold italic">Unforgettable</span> Event?
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Let's discuss how we can turn your vision into a masterpiece. Our team handles every detail, so you can enjoy every moment.
                    </p>
                    <Link to="/contact" className="btn-premium rounded-full inline-block">
                        Get Your Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
