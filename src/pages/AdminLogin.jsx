import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, Eye, EyeOff, ShieldCheck, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

const AdminLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // For now, mock the login or use /api/login
            const res = await api.post('/api/auth/login', formData);
            localStorage.setItem('adminToken', res.data.token);
            navigate('/admin/dashboard');
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || 'Invalid credentials. Access denied.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 pt-20">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[120px] rounded-full" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md bg-white p-12 shadow-2xl relative z-10 rounded-sm"
            >
                <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-gold/10 flex items-center justify-center rounded-full mx-auto mb-6 text-gold">
                        <ShieldCheck size={48} strokeWidth={1} />
                    </div>
                    <h2 className="text-3xl font-playfair font-bold text-slate-900 uppercase tracking-widest">
                        Admin <span className="text-gold">Access</span>
                    </h2>
                    <p className="text-sm text-slate-500 mt-2 font-medium">ELEGANCE EVENTS MANAGEMENT CONSOLE</p>
                </div>

                {error && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 text-sm flex items-center rounded-lg"
                    >
                        <AlertCircle size={20} className="mr-3 shrink-0" />
                        {error}
                    </motion.div>
                )}

                <form onSubmit={handleLogin} className="space-y-8">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 block">Username</label>
                        <div className="relative">
                            <User className="absolute left-0 top-3 text-slate-300 pointer-events-none" size={20} />
                            <input
                                type="text"
                                required
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                placeholder="Enter your administrative ID"
                                className="w-full pl-8 pr-4 py-3 border-b border-cream-dark focus:border-gold outline-none transition-colors bg-transparent text-slate-900"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 block">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-0 top-3 text-slate-300 pointer-events-none" size={20} />
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                placeholder="Enter secure password"
                                className="w-full pl-8 pr-12 py-3 border-b border-cream-dark focus:border-gold outline-none transition-colors bg-transparent text-slate-900"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-0 top-3 text-slate-400 hover:text-gold"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn-premium w-full py-5 flex items-center justify-center space-x-3 text-sm tracking-[0.2em]"
                    >
                        {loading ? (
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full" />
                        ) : (
                            <span>Authorize Login</span>
                        )}
                    </button>
                </form>

                <div className="mt-12 text-center text-[10px] text-slate-400 uppercase tracking-widest font-inter">
                    <p>Restricted to authorized personnel only.</p>
                    <p className="mt-2">Protected by military-grade encryption.</p>
                </div>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
