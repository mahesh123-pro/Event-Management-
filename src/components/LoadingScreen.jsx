import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-[100] bg-cream-light flex items-center justify-center flex-col space-y-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                className="text-4xl md:text-5xl font-playfair font-bold tracking-tighter"
            >
                SA<span className="text-gold">EVENTS</span>
            </motion.div>
            <div className="w-48 h-[2px] bg-cream-dark overflow-hidden rounded-full">
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-full bg-gold"
                />
            </div>
            <p className="text-xs uppercase tracking-[0.5em] text-slate-500 font-medium animate-pulse">
                Catering to Your Every Event
            </p>
        </div>
    );
};

export default LoadingScreen;
