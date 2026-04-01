import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Home, PartyPopper, Globe, Utensils, GlassWater, ArrowRight, Camera, Lightbulb, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const serviceCategories = [
        {
            id: 'weddings',
            title: 'Weddings',
            subtitle: 'Traditional & Modern',
            icon: <Heart size={48} strokeWidth={1} />,
            desc: 'From intimate ceremonies to grand mandaps, we specialize in breathtaking wedding decorations, floral arrangements, and elegant stage designs.',
            features: ['Grand Stage Decoration', 'Mandap & Floral Design', 'Doli & Entrance Setup', 'Professional Lighting', 'Custom Backdrops'],
            image: '/saevenassests/WhatsApp%20Video%202026-02-25%20at%209.17.31%20PM.mp4'
        },
        {
            id: 'housewarming',
            title: 'Housewarming Ceremony',
            subtitle: 'New Beginnings',
            icon: <Home size={48} strokeWidth={1} />,
            desc: 'Celebrate your new home with vibrant decorations. We offer traditional thoranams, floral accents, and modern lighting to make your entry special.',
            features: ['Traditional Door Decor', 'Pooja Room Styling', 'Entrance Lighting', 'Guest Hospitality', 'Floral Accents'],
            image: '/saevenassests/WhatsApp%20Video%202026-02-25%20at%209.17.32%20PM.mp4'
        },
        {
            id: 'parties',
            title: 'Social Events',
            subtitle: 'Balloon & Theme Experts',
            icon: <PartyPopper size={48} strokeWidth={1} />,
            desc: 'Our primary specialization in balloon art and theme-based decorations makes us the top choice for birthdays, anniversaries, and private parties.',
            features: ['Professional Balloon Art', 'Custom Theme Decor', 'Birthday Stage Design', 'Cake Table Styling', 'Themed Backdrops'],
            image: '/saevenassests/WhatsApp%20Video%202026-02-25%20at%209.17.34%20PM.mp4'
        },
        {
            id: 'corporate',
            title: 'Corporate Events',
            subtitle: 'Professional Setups',
            icon: <Globe size={48} strokeWidth={1} />,
            desc: 'We provide sophisticated setups for corporate galas, office parties, and product launches with high-quality branding and professional aesthetics.',
            features: ['Branded Stage Design', 'Conference Hall Setup', 'Lighting & Audio-Visual', 'VIP Guest Logistics', 'Office Theme Decor'],
            image: '/saevenassests/WhatsApp%20Image%202026-02-25%20at%209.17.33%20PM%20(3).jpeg'
        }
    ];

    const processSteps = [
        { icon: <UserCheck size={32} />, title: 'Consultation', desc: 'Understanding your vision, budget, and goals.' },
        { icon: <Lightbulb size={32} />, title: 'Conceptualization', desc: 'Designing themes and presenting mood boards.' },
        { icon: <Camera size={32} />, title: 'Curation', desc: 'Sourcing premium vendors and floral designers.' },
        { icon: <Utensils size={32} />, title: 'Coordination', desc: 'Flawless execution on the day of the event.' }
    ];

    return (
        <div className="pt-32 pb-24 bg-cream-light min-h-screen">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto space-y-6">
                    <motion.h5
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="section-subtitle"
                    >
                        What We Do
                    </motion.h5>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="section-title"
                    >
                        Tailored Excellence in Event Management
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-slate-600 text-lg leading-relaxed"
                    >
                        We offer full-service event planning, from initial concept to the final toast. Our obsession with detail ensures that every moment is as unique as your vision.
                    </motion.p>
                </div>

                {/* Categories */}
                <div className="space-y-32">
                    {serviceCategories.map((cat, idx) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image side */}
                            <div className="w-full lg:w-1/2 group relative aspect-[16/10] overflow-hidden rounded-sm shadow-2xl">
                                {cat.image.endsWith('.mp4') ? (
                                    <video
                                        src={cat.image}
                                        autoPlay loop muted playsInline
                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                                    />
                                ) : (
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                                    />
                                )}
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500" />
                            </div>

                            {/* Text side */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div className="flex items-center space-x-6">
                                    <div className="w-20 h-20 bg-white shadow-xl shadow-slate-200 border border-cream-dark flex items-center justify-center rounded-2xl text-gold">
                                        {cat.icon}
                                    </div>
                                    <div>
                                        <h5 className="text-gold uppercase tracking-[0.3em] font-medium text-xs mb-1">{cat.subtitle}</h5>
                                        <h3 className="text-4xl font-playfair font-bold text-slate-900">{cat.title}</h3>
                                    </div>
                                </div>

                                <p className="text-slate-600 leading-relaxed text-lg italic border-l-4 border-gold/30 pl-6">
                                    {cat.desc}
                                </p>

                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {cat.features.map(feat => (
                                        <li key={feat} className="flex items-center text-slate-700 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-gold mr-3" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <Link to="/contact" className="btn-premium inline-flex items-center group">
                                    Inquire Now <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Our Process Section */}
                <section className="mt-48 py-24 bg-white border border-cream-dark rounded-3xl shadow-sm">
                    <div className="container px-12 mx-auto">
                        <div className="text-center mb-16">
                            <h5 className="section-subtitle">The Journey</h5>
                            <h2 className="section-title">How We Design Your Day</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                            {/* Connector lines (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-cream-dark z-0" />

                            {processSteps.map((step, idx) => (
                                <div key={idx} className="relative z-10 text-center space-y-6">
                                    <div className="w-24 h-24 bg-cream-light border border-cream-dark flex items-center justify-center rounded-full mx-auto shadow-sm group hover:bg-gold hover:text-white transition-all duration-500 hover:scale-110">
                                        <div className="transition-transform group-hover:rotate-12">{step.icon}</div>
                                    </div>
                                    <h4 className="font-playfair font-bold text-xl">{step.title}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed px-4">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <div className="mt-48 text-center space-y-12">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900">
                        Let's Start Creating Your Next <span className="text-gold italic font-medium">Masterpiece</span>
                    </h2>
                    <Link to="/contact" className="btn-premium rounded-full px-16 shadow-2xl shadow-gold/20 flex-inline items-center justify-center">
                        Connect with a Designer
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
