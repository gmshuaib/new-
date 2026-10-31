import React from 'react';
import { TemplateProps } from '@/types';
import { motion } from 'framer-motion';
import { Users, Building2, TrendingUp, Cpu, Server, Lock, Fingerprint, Award, BadgeCheck } from 'lucide-react';
import { getThemeClasses } from '@/utils/themeUtils';

/**
 * AboutBentoDash
 * Design: High-contrast Dark Mode Metric Dashboard.
 * Translates generic "About Us" text into a powerful, data-driven Bento Grid showing Scale, Security, and Trust.
 */
export const AboutBentoDash: React.FC<TemplateProps> = ({ data, style }) => {
    const theme = getThemeClasses(style?.primaryColor || 'blue');
    const Headline = data?.Headline || data?.headline || data?.title || 'Built for the scale of modern enterprise.';
    const headline2 = data?.headline2 || data?.description || data?.subheadline || 'Our infrastructure operates across 14 global regions, processing billions of requests daily with zero downtime.';
    const Badge = data?.Badge || data?.badge || 'Trust & Scale';

    return (
        <section className="py-24 bg-[#08080a] relative overflow-hidden">
            {/* Background Details */}
            <div className={`absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-white/5 to-transparent pointer-events-none ${theme.text}`} />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <BadgeCheck className={`w-4 h-4 ${theme.text}`} />
                        <span className="text-[10px] font-black uppercase tracking-[0.1em] text-white">{Badge}</span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]"
                    >
                        {Headline}
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        className="text-lg text-slate-400 font-medium"
                    >
                        {headline2}
                    </motion.p>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[240px]">
                    
                    {/* BENTO 1: Massive Metric (Span 2x2) */}
                    <div className="group relative col-span-1 md:col-span-2 row-span-1 md:row-span-2 bg-gradient-to-b from-[#16161a] to-[#0b0b0d] border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col justify-between">
                        <div className={`absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-duration-500`} />
                        <div className={`absolute -right-32 -top-32 w-96 h-96 rounded-full blur-[100px] opacity-10 ${theme.bg}`} />
                        
                        <div className="relative z-10">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Total Volume Processed</h3>
                            <div className="flex items-end gap-3 mb-6">
                                <span className="text-6xl md:text-7xl font-extrabold text-white tracking-tighter leading-none">94.2</span>
                                <span className={`text-3xl font-bold ${theme.text} mb-1`}>Billion</span>
                            </div>
                        </div>

                        {/* Line Chart Vis */}
                        <div className="relative z-10 w-full h-32 mt-auto">
                            <div className="absolute inset-0 flex items-end opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                                <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full stroke-current drop-shadow-lg text-white fill-none" strokeWidth="1.5">
                                    <path d="M0,40 Q10,35 20,25 T40,15 T60,20 T80,5 T100,0" className="opacity-20" />
                                    <path d="M0,40 Q10,35 20,25 T40,15 T60,20 T80,5 T100,0" strokeDasharray="200" strokeDashoffset="0" className={`animate-[dash_3s_linear_infinite] ${theme.text}`} />
                                </svg>
                            </div>
                            {/* Grid Lines */}
                            <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
                                {[1,2,3].map(i => <div key={i} className="w-full h-px bg-white/5" />)}
                            </div>
                        </div>
                    </div>

                    {/* BENTO 2: Uptime (Span 2x1) */}
                    <div className="group relative col-span-1 md:col-span-2 row-span-1 bg-[#121216] border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-white/20 transition-all duration-500">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500">System Uptime SLA</h3>
                            <div className="flex gap-1">
                                {[1,2,3,4,5].map(i => <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 5 ? theme.bg : theme.bg} ${i===5 ? 'animate-pulse' : ''}`} />)}
                            </div>
                        </div>
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-5xl font-extrabold text-white tracking-tighter">99.999</span>
                            <span className="text-xl font-bold text-slate-400">%</span>
                        </div>
                        <p className="text-sm font-medium text-slate-500">Historically guaranteed uptime across all 14 global data centers. Monitored 24/7/365.</p>
                    </div>

                    {/* BENTO 3: Users (Span 1x1) */}
                    <div className="group relative col-span-1 row-span-1 bg-[#121216] border border-white/5 rounded-[2rem] p-6 lg:p-8 overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col justify-between">
                         <div>
                            <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/10 ${theme.text}`}>
                                <Users className="w-4 h-4" />
                            </div>
                            <h3 className="text-3xl font-extrabold text-white tracking-tight mb-1">2M+</h3>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Active Developers</p>
                         </div>
                    </div>

                    {/* BENTO 4: ISO/Security (Span 1x1) */}
                    <div className="group relative col-span-1 row-span-1 bg-[#121216] border border-emerald-500/10 rounded-[2rem] p-6 lg:p-8 overflow-hidden hover:border-emerald-500/30 transition-all duration-500 flex flex-col justify-between items-center text-center">
                         <div className={`absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-duration-500`} />
                         
                         <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_30px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-transform duration-500">
                             <Lock className="w-5 h-5" />
                         </div>
                         <h3 className="text-lg font-bold text-white mb-1">SOC2 Type II</h3>
                         <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500/50">Fully Compliant</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutBentoDash;
