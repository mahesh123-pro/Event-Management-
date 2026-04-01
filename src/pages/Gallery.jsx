import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, ZoomIn, Camera } from 'lucide-react';
import api from '../utils/api';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [filteredImages, setFilteredImages] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(true);

    const categories = ['All', 'Social Events', 'Housewarming Ceremony', 'Weddings'];

    const fallbackImages = [
        { id: 1, title: 'SAevents Grand Launch', category: 'Social Events', imageUrl: '/saevenassests/WhatsApp%20Image%202026-02-25%20at%209.17.30%20PM.jpeg' },
        { id: 2, title: 'Golden Glow Housewarming', category: 'Housewarming Ceremony', imageUrl: '/saevenassests/WhatsApp%20Image%202026-02-25%20at%209.17.32%20PM.jpeg' },
        { id: 3, title: 'Krithi\'s Birthday Celebration', category: 'Social Events', imageUrl: '/saevenassests/WhatsApp%20Image%202026-02-25%20at%209.17.35%20PM.jpeg' },
        { id: 4, title: 'The Royal Bride Entry', category: 'Weddings', imageUrl: '/saevenassests/WhatsApp%20Image%202026-02-25%20at%209.17.33%20PM%20(2).jpeg' },
        { id: 5, title: 'Modern Villa Lighting', category: 'Housewarming Ceremony', imageUrl: '/saevenassests/WhatsApp%20Image%202026-02-25%20at%209.17.31%20PM.jpeg' },
        { id: 6, title: 'Outdoor Gala Gathering', category: 'Social Events', imageUrl: '/saevenassests/WhatsApp%20Image%202026-02-25%20at%209.17.33%20PM.jpeg' },
        { id: 7, title: 'Cinematic Stage Setup', category: 'Social Events', imageUrl: '/saevenassests/WhatsApp%20Image%202026-02-25%20at%209.17.33%20PM%20(1).jpeg' },
        { id: 8, title: 'Heritage Swan Palanquin', category: 'Weddings', imageUrl: '/saevenassests/WhatsApp%20Image%202026-02-25%20at%209.17.34%20PM.jpeg' },
    ];

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            try {
                const res = await api.get('/api/gallery');
                if (res.data && res.data.length > 0) {
                    setImages(res.data);
                    setFilteredImages(res.data);
                } else {
                    setImages(fallbackImages);
                    setFilteredImages(fallbackImages);
                }
            } catch (err) {
                console.error('Error fetching gallery images:', err);
                setImages(fallbackImages);
                setFilteredImages(fallbackImages);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    useEffect(() => {
        if (activeFilter === 'All') {
            setFilteredImages(images);
        } else {
            setFilteredImages(images.filter(img => img.category === activeFilter));
        }
    }, [activeFilter, images]);

    return (
        <div className="pt-32 pb-24 bg-cream-light min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h5 className="section-subtitle">Our Work</h5>
                        <h2 className="section-title">Visual Excellence</h2>
                        <div className="w-24 h-[1px] bg-gold mx-auto mb-10" />
                        <p className="max-w-2xl mx-auto text-slate-600 mb-12">
                            Explore our portfolio of curated events. From multi-day international summits to intimate backyard weddings, we bring a touch of luxury to every occasion.
                        </p>
                    </motion.div>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-16">
                        <Filter size={18} className="text-gold hidden md:block" />
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-8 py-3 rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-300 border ${activeFilter === cat
                                    ? 'bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-200'
                                    : 'bg-white border-cream-dark text-slate-500 hover:border-gold hover:text-gold'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Gallery Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {filteredImages.map((img, idx) => (
                            <motion.div
                                layout
                                key={img.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.05 }}
                                className="group relative cursor-pointer aspect-[3/4] overflow-hidden rounded-sm"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img.imageUrl}
                                    alt={img.title}
                                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                    <ZoomIn className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-50 transition-opacity" size={48} strokeWidth={1} />
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="text-gold text-xs uppercase tracking-widest mb-1 block font-medium">#{img.category}</span>
                                        <h4 className="text-white text-xl font-playfair font-bold">{img.title}</h4>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {filteredImages.length === 0 && !loading && (
                    <div className="text-center py-32">
                        <Camera size={48} className="mx-auto text-cream-dark mb-4" strokeWidth={1} />
                        <p className="text-slate-500 font-medium">No images found in this category.</p>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-900/95 flex items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-8 right-8 text-white hover:text-gold transition-colors">
                            <X size={40} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="max-w-5xl w-full h-full flex flex-col bg-slate-900 items-center justify-center overflow-hidden rounded-lg shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.imageUrl}
                                alt={selectedImage.title}
                                className="max-w-full max-h-[80vh] object-contain mb-8 shadow-2xl border border-white/5"
                            />
                            <div className="text-center px-10">
                                <span className="text-gold uppercase tracking-[0.3em] font-medium text-xs md:text-sm mb-2 block">{selectedImage.category}</span>
                                <h3 className="text-white text-3xl md:text-4xl font-playfair font-bold mb-4">{selectedImage.title}</h3>
                                <p className="text-cream-dark/60 text-sm italic">Capture from Elegance Events Portfolio</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
