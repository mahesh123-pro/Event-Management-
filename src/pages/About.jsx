import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Calendar, ShieldCheck, Sparkles, Coffee } from 'lucide-react';

const About = () => {
    const stats = [
        { label: 'Years of Experience', value: '14+', icon: <Calendar strokeWidth={1} /> },
        { label: 'Successful Events', value: '1,200+', icon: <ShieldCheck strokeWidth={1} /> },
        { label: 'Team Experts', value: '45+', icon: <Users strokeWidth={1} /> },
        { label: 'Industry Awards', value: '12', icon: <Award strokeWidth={1} /> },
    ];

    return (
        <div className="pt-32 pb-24 bg-cream-light min-h-screen">
            <div className="container mx-auto px-6">
                {/* Story Section */}
                <section className="flex flex-col lg:flex-row items-center gap-20 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative">
                            <img
                                src="/saevenassests/WhatsApp%20Image%202026-02-25%20at%209.17.34%20PM.jpeg"
                                alt="Story Image"
                                className="w-full aspect-[4/5] object-cover rounded-sm border-[20px] border-white shadow-2xl"
                            />
                            <div className="absolute -bottom-10 -right-10 bg-gold p-10 text-white shadow-2xl hidden md:block">
                                <Sparkles size={48} className="mb-4" strokeWidth={1} />
                                <p className="font-playfair text-xl italic font-medium leading-tight">"Where elegance <br /> meets execution."</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <h5 className="section-subtitle">Our Journey</h5>
                        <h2 className="section-title">Redefining Events Since 2010</h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                Founded by a team of visionary designers and logistical masters, Elegance Events was born out of a desire to bring a new level of sophistication to the event management industry.
                            </p>
                            <p>
                                We believe that every celebration should be a masterpiece. Our approach combines meticulous planning with breathtaking creative direction, ensuring that every event we touch becomes an unforgettable memory for our clients and their guests.
                            </p>
                            <p className="font-medium text-slate-800">
                                From the bustling streets of New York to the tranquil shores of Lake Como, we've traveled the world to create moments that transcend the ordinary.
                            </p>
                        </div>

                        <div className="flex items-center space-x-4 pt-4">
                            <div className="w-16 h-16 rounded-full bg-slate-200 border-2 border-gold/20 overflow-hidden">
                                <img src="/saevenassests/WhatsApp%20Image%202026-02-25%20at%209.17.35%20PM.jpeg" alt="Founder" />
                            </div>
                            <div>
                                <h4 className="font-playfair font-bold text-xl">Julian V. Rothschild</h4>
                                <p className="text-xs uppercase tracking-widest text-gold font-bold">Principal Creative Director</p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Stats Section */}
                <section className="py-20 mb-32 border-y border-white/50">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center space-y-4"
                            >
                                <div className="w-16 h-16 bg-white shadow-sm border border-cream-dark flex items-center justify-center rounded-full mx-auto text-gold">
                                    {stat.icon}
                                </div>
                                <h3 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900">{stat.value}</h3>
                                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 p-16 text-cream-light relative overflow-hidden group"
                    >
                        <div className="absolute top-10 right-10 text-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rotate-12">
                            <Sparkles size={120} strokeWidth={1} />
                        </div>
                        <h3 className="text-3xl font-playfair font-bold mb-8 text-gold italic">Our Mission</h3>
                        <p className="text-cream-dark text-xl leading-relaxed italic">
                            "To elevate human connections through the power of meticulously designed and flawlessly executed shared experiences, setting the global standard for luxury event management."
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white border border-cream-dark p-16 text-slate-900 relative overflow-hidden group"
                    >
                        <div className="absolute top-10 right-10 text-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rotate-12">
                            <Award size={120} strokeWidth={1} />
                        </div>
                        <h3 className="text-3xl font-playfair font-bold mb-8 text-gold italic">Our Vision</h3>
                        <p className="text-slate-600 text-xl leading-relaxed italic">
                            "To be the most sought-after creative partner for those who demand excellence, innovation, and a touch of magic in every celebration they host anywhere in the world."
                        </p>
                    </motion.div>
                </section>

                {/* Team Teaser */}
                <section className="text-center mb-32">
                    <h5 className="section-subtitle">The Experts</h5>
                    <h2 className="section-title">Behind the Curtains</h2>
                    <div className="w-24 h-[1px] bg-gold mx-auto mb-16" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { name: 'Sienna Grace', role: 'Head of Design', img: '/saevenassests/WhatsApp%20Image%202026-02-25%20at%209.17.30%20PM.jpeg' },
                            { name: 'Lucas Thorne', role: 'Logistics Master', img: '/saevenassests/WhatsApp%20Image%202026-02-25%20at%209.17.31%20PM.jpeg' },
                            { name: 'Isabella Conti', role: 'Floral Designer', img: '/saevenassests/WhatsApp%20Image%202026-02-25%20at%209.17.32%20PM.jpeg' }
                        ].map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="group overflow-hidden rounded-lg shadow-sm"
                            >
                                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                </div>
                                <div className="p-6 bg-white border-x border-b border-cream-dark">
                                    <h4 className="font-playfair font-bold text-xl">{member.name}</h4>
                                    <p className="text-gold uppercase tracking-widest text-xs font-bold mt-1">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
