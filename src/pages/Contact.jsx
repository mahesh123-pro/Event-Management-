import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import api from '../utils/api';

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitStatus(null);
        try {
            // For now, mock the API call or use relative URL if proxy is setup
            await api.post('/api/inquiry', data);
            setSubmitStatus('success');
            reset();
        } catch (err) {
            console.error(err);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        { icon: <Phone className="text-gold" />, title: 'Call Us', value: '+91 (939) 148-4849', desc: 'Available Mon - Sun, 9am - 9pm' },
        { icon: <Mail className="text-gold" />, title: 'Email Us', value: 'events@saevents.com', desc: 'Directly email our support team' },
        { icon: <MapPin className="text-gold" />, title: 'Visit Us', value: 'SA Events, Kukatpally, Hyderabad', desc: 'Beside Pochamma Temple, 500072' },
    ];

    const eventTypes = ['Weddings', 'Housewarming Ceremony', 'Social Events', 'Destination Events', 'Others'];

    return (
        <div className="pt-32 pb-24 bg-cream-light min-h-screen">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">

                    {/* Contact Details Column */}
                    <div className="w-full lg:w-1/3 flex flex-col justify-between">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h5 className="section-subtitle">Get In Touch</h5>
                                <h2 className="section-title text-5xl mb-6">Let's Design Your Dream Moment</h2>
                                <p className="text-slate-600 mb-12 text-lg leading-relaxed">
                                    Have a vision you want to bring to life? Fill out the inquiry form and our lead designer will reach out within 24 hours.
                                </p>
                            </motion.div>

                            <div className="space-y-10">
                                {contactInfo.map((info, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + idx * 0.1 }}
                                        className="flex items-start space-x-6"
                                    >
                                        <div className="w-14 h-14 bg-white shadow-sm border border-cream-dark flex items-center justify-center rounded-full shrink-0">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-playfair font-bold text-lg mb-1">{info.title}</h4>
                                            <p className="font-bold text-slate-900">{info.value}</p>
                                            <p className="text-sm text-slate-500">{info.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-20 p-8 border border-gold/20 bg-gold/5 italic text-sm text-slate-700 leading-relaxed rounded-lg"
                        >
                            "Excellence is not an act, but a habit. We look forward to creating your next masterpiece."
                        </motion.div>
                    </div>

                    {/* Form Column */}
                    <div className="w-full lg:w-2/3 bg-white p-8 md:p-16 shadow-2xl shadow-slate-200 border border-cream-dark rounded-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-3xl font-playfair font-bold mb-10 flex items-center">
                                <MessageSquare className="mr-4 text-gold" /> Event Inquiry Form
                            </h3>

                            {submitStatus === 'success' && (
                                <div className="mb-10 p-6 bg-green-50 border border-green-200 text-green-800 flex items-center rounded-lg">
                                    <CheckCircle size={28} className="mr-4 text-green-500" />
                                    <div>
                                        <p className="font-bold">Thank you for your inquiry!</p>
                                        <p>Our team has received your message and will contact you shortly.</p>
                                    </div>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="mb-10 p-6 bg-red-50 border border-red-200 text-red-800 flex items-center rounded-lg">
                                    <AlertCircle size={28} className="mr-4 text-red-500" />
                                    <div>
                                        <p className="font-bold">Oops! Something went wrong.</p>
                                        <p>There was an error sending your message. Please try again or call us directly.</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Full Name *</label>
                                        <input
                                            {...register('name', { required: true })}
                                            placeholder="e.g. Arabella Smith"
                                            className={`w-full p-4 border-b-2 bg-transparent outline-none transition-all ${errors.name ? 'border-red-500' : 'border-cream-dark focus:border-gold'}`}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Email Address *</label>
                                        <input
                                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                                            placeholder="e.g. arabella@gmail.com"
                                            className={`w-full p-4 border-b-2 bg-transparent outline-none transition-all ${errors.email ? 'border-red-500' : 'border-cream-dark focus:border-gold'}`}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Phone Number *</label>
                                        <input
                                            {...register('phone', { required: true })}
                                            placeholder="+1 (000) 000-0000"
                                            className={`w-full p-4 border-b-2 bg-transparent outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-cream-dark focus:border-gold'}`}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Type of Event *</label>
                                        <select
                                            {...register('eventType', { required: true })}
                                            className="w-full p-4 border-b-2 border-cream-dark focus:border-gold bg-transparent outline-none appearance-none"
                                        >
                                            <option value="">Select event type...</option>
                                            {eventTypes.map(type => <option key={type} value={type}>{type}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Event Date</label>
                                        <input
                                            type="date"
                                            {...register('eventDate')}
                                            className="w-full p-4 border-b-2 border-cream-dark focus:border-gold bg-transparent outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Estimated Budget</label>
                                        <input
                                            {...register('budget')}
                                            placeholder="e.g. $10k - $25k"
                                            className="w-full p-4 border-b-2 border-cream-dark focus:border-gold bg-transparent outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Your Vision / Message</label>
                                    <textarea
                                        {...register('message')}
                                        rows={4}
                                        placeholder="Tell us about your event dreams..."
                                        className="w-full p-4 border-b-2 border-cream-dark focus:border-gold bg-transparent outline-none resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-premium w-full flex items-center justify-center space-x-3 disabled:bg-slate-500"
                                >
                                    {isSubmitting ? (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                            className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full"
                                        />
                                    ) : (
                                        <>
                                            <span>Send My Inquiry</span>
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
