import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gold/5 blur-[120px] rounded-full point-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-12 md:p-20 text-center max-w-2xl w-full rounded-sm shadow-2xl relative z-10 border border-cream-dark"
            >
                <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                    className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 text-gold"
                >
                    <AlertTriangle size={48} strokeWidth={1} />
                </motion.div>

                <h1 className="text-6xl md:text-8xl font-playfair font-bold text-slate-900 mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-bold tracking-widest uppercase text-gold mb-6">Page Not Found</h2>

                <p className="text-slate-600 mb-10 text-lg leading-relaxed max-w-lg mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => window.history.back()}
                        className="btn-outline flex items-center border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                    >
                        <ArrowLeft size={18} className="mr-2" /> Go Back
                    </button>

                    <Link to="/" className="btn-premium flex items-center">
                        <Home size={18} className="mr-2" /> Return Home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;
