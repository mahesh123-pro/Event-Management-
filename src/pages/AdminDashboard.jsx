import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BarChart3, Users, Image as ImageIcon, MessageSquare,
    Trash2, Plus, LogOut, ChevronRight, Filter, ExternalLink,
    CheckCircle, Clock, Search, Download
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('inquiries');
    const [inquiries, setInquiries] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
            return;
        }
        fetchData();
    }, [navigate]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('adminToken');
            const [inqRes, galRes] = await Promise.all([
                api.get('/api/inquiry'),
                api.get('/api/gallery')
            ]);

            setInquiries(inqRes.data || []);
            setGallery(galRes.data || []);
        } catch (err) {
            console.error('Error fetching dashboard data:', err);
            // Fallback or handle session expiration
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
    };

    const deleteInquiry = async (id) => {
        if (!window.confirm('Are you sure you want to delete this inquiry?')) return;
        try {
            await api.delete(`/api/inquiry/${id}`);
            setInquiries(inquiries.filter(i => i._id !== id));
        } catch (err) {
            alert('Error deleting inquiry');
        }
    };

    const Tabs = [
        { id: 'inquiries', label: 'Inquiries', icon: <MessageSquare size={20} /> },
        { id: 'gallery', label: 'Gallery Management', icon: <ImageIcon size={20} /> },
        { id: 'testimonials', label: 'Testimonials', icon: <Users size={20} /> },
        { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={20} /> },
    ];

    return (
        <div className="min-h-screen bg-cream-light flex">
            {/* Sidebar */}
            <div className="w-72 bg-slate-900 text-cream-light flex flex-col fixed h-full z-10">
                <div className="p-8 border-b border-white/10">
                    <h2 className="text-2xl font-playfair font-bold text-white tracking-tighter">
                        ELEGANCE<span className="text-gold">ADMIN</span>
                    </h2>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-2">Management Console</p>
                </div>

                <nav className="flex-grow py-10 px-4 space-y-2">
                    {Tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center space-x-4 px-6 py-4 rounded-lg transition-all duration-300 ${activeTab === tab.id
                                ? 'bg-gold text-slate-900 font-bold shadow-lg shadow-gold/20'
                                : 'text-cream-dark hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            <div className={activeTab === tab.id ? 'text-slate-900' : 'text-gold'}>
                                {tab.icon}
                            </div>
                            <span className="tracking-wide text-sm uppercase font-medium">{tab.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="p-8 border-t border-white/10">
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-4 text-cream-dark hover:text-white transition-colors w-full uppercase tracking-widest text-xs font-bold"
                    >
                        <LogOut size={18} className="text-red-400" />
                        <span>Terminate Session</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow ml-72 p-12 min-h-screen">
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-playfair font-bold text-slate-900 mb-2">
                            {Tabs.find(t => t.id === activeTab)?.label}
                        </h1>
                        <p className="text-slate-500 font-medium uppercase tracking-widest text-xs">
                            Dashboard / {activeTab}
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search resources..."
                                className="pl-10 pr-4 py-3 bg-white border border-cream-dark rounded-full focus:border-gold outline-none w-64 text-sm transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <button className="w-12 h-12 bg-white border border-cream-dark rounded-full flex items-center justify-center hover:bg-gold/10 transition-colors">
                            <Clock size={20} className="text-slate-500" />
                        </button>
                    </div>
                </header>

                {/* Tab Content */}
                <div className="bg-white rounded-2xl shadow-sm border border-cream-dark overflow-hidden min-h-[600px]">
                    {activeTab === 'inquiries' && (
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-8 pb-4 border-b border-cream-dark">
                                <h3 className="text-xl font-bold font-playfair flex items-center">
                                    Recent Requests <span className="ml-3 px-3 py-1 bg-gold/10 text-gold text-xs rounded-full">{inquiries.length}</span>
                                </h3>
                                <button className="text-gold flex items-center text-sm font-bold uppercase tracking-widest hover:text-gold-dark">
                                    Export CSV <Download size={16} className="ml-2" />
                                </button>
                            </div>

                            {loading ? (
                                <div className="py-32 flex flex-col items-center">
                                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-10 h-10 border-4 border-gold/20 border-t-gold rounded-full" />
                                </div>
                            ) : inquiries.length === 0 ? (
                                <div className="py-32 text-center text-slate-400">
                                    <MessageSquare size={48} className="mx-auto mb-4 opacity-20" />
                                    <p className="uppercase tracking-widest text-xs">No active inquiries at this moment.</p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b border-cream-dark text-slate-400 uppercase text-[10px] tracking-[0.2em] font-bold">
                                                <th className="px-6 py-4 font-bold">Date</th>
                                                <th className="px-6 py-4 font-bold">Client Name</th>
                                                <th className="px-6 py-4 font-bold">Event Type</th>
                                                <th className="px-6 py-4 font-bold">Budget</th>
                                                <th className="px-6 py-4 font-bold">Status</th>
                                                <th className="px-6 py-4 font-bold text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-cream-dark">
                                            {inquiries.map((inq) => (
                                                <tr key={inq._id} className="hover:bg-cream-light/50 transition-colors group">
                                                    <td className="px-6 py-4 text-sm text-slate-500">
                                                        {new Date(inq.createdAt).toLocaleDateString()}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="font-bold text-slate-900">{inq.name}</div>
                                                        <div className="text-xs text-slate-500">{inq.email}</div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="px-3 py-1 bg-slate-900/5 text-slate-700 text-[10px] uppercase font-bold tracking-wider rounded-sm">
                                                            {inq.eventType}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium text-slate-700">{inq.budget || 'N/A'}</td>
                                                    <td className="px-6 py-4">
                                                        <span className="flex items-center text-xs font-bold text-amber-600">
                                                            <Clock size={12} className="mr-2" /> PENDING
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-right space-x-2">
                                                        <button className="p-2 text-slate-400 hover:text-gold transition-colors">
                                                            <ExternalLink size={18} />
                                                        </button>
                                                        <button
                                                            onClick={() => deleteInquiry(inq._id)}
                                                            className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'gallery' && (
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-10">
                                <h3 className="text-xl font-bold font-playfair">Portfolio Assets</h3>
                                <button className="btn-premium py-3 px-6 text-xs rounded-full flex items-center">
                                    <Plus size={16} className="mr-2" /> Add New Asset
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {gallery.map(img => (
                                    <div key={img._id} className="group relative aspect-square bg-slate-100 rounded-lg overflow-hidden border border-cream-dark">
                                        <img src={img.imageUrl} alt={img.title} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                                            <div className="flex justify-end">
                                                <button className="bg-red-500 text-white p-2 rounded-lg"><Trash2 size={14} /></button>
                                            </div>
                                            <div>
                                                <span className="text-gold text-[10px] uppercase font-bold tracking-widest">{img.category}</span>
                                                <h4 className="text-white text-sm font-playfair font-bold truncate">{img.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* Add dummy card for UI */}
                                <button className="aspect-square border-2 border-dashed border-cream-dark flex flex-col items-center justify-center text-slate-400 hover:border-gold hover:text-gold transition-all rounded-lg group">
                                    <Plus size={32} className="mb-2 group-hover:scale-110 transition-transform" />
                                    <span className="text-[10px] uppercase tracking-widest font-bold">Upload Image</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
