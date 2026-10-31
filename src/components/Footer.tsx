import React from 'react';
import { TemplateProps } from '@/types';
import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin, Globe, Heart, ArrowRight } from 'lucide-react';

export interface ThemeClasses { bg: string; text: string; border: string; ring: string; lightBg: string; }
export const getThemeClasses = (color: string): ThemeClasses => {
    const colors: Record<string, ThemeClasses> = {
        blue: { bg: 'bg-blue-600', text: 'text-blue-500', border: 'border-blue-500/20', ring: 'ring-blue-500', lightBg: 'bg-blue-50 dark:bg-blue-500/10' },
        purple: { bg: 'bg-purple-600', text: 'text-purple-500', border: 'border-purple-500/20', ring: 'ring-purple-500', lightBg: 'bg-purple-50 dark:bg-purple-500/10' },
        emerald: { bg: 'bg-emerald-600', text: 'text-emerald-500', border: 'border-emerald-500/20', ring: 'ring-emerald-500', lightBg: 'bg-emerald-50 dark:bg-emerald-500/10' },
        rose: { bg: 'bg-rose-600', text: 'text-rose-500', border: 'border-rose-500/20', ring: 'ring-rose-500', lightBg: 'bg-rose-50 dark:bg-rose-500/10' },
        amber: { bg: 'bg-amber-600', text: 'text-amber-500', border: 'border-amber-500/20', ring: 'ring-amber-500', lightBg: 'bg-amber-50 dark:bg-amber-500/10' },
        indigo: { bg: 'bg-indigo-600', text: 'text-indigo-500', border: 'border-indigo-500/20', ring: 'ring-indigo-500', lightBg: 'bg-indigo-50 dark:bg-indigo-500/10' },
        cyan: { bg: 'bg-cyan-600', text: 'text-cyan-500', border: 'border-cyan-500/20', ring: 'ring-cyan-500', lightBg: 'bg-cyan-50 dark:bg-cyan-500/10' },
        teal: { bg: 'bg-teal-600', text: 'text-teal-500', border: 'border-teal-500/20', ring: 'ring-teal-500', lightBg: 'bg-teal-50 dark:bg-teal-500/10' },
        orange: { bg: 'bg-orange-600', text: 'text-orange-500', border: 'border-orange-500/20', ring: 'ring-orange-500', lightBg: 'bg-orange-50 dark:bg-orange-500/10' },
        pink: { bg: 'bg-pink-600', text: 'text-pink-500', border: 'border-pink-500/20', ring: 'ring-pink-500', lightBg: 'bg-pink-50 dark:bg-pink-500/10' },
        slate: { bg: 'bg-slate-600', text: 'text-slate-500', border: 'border-slate-500/20', ring: 'ring-slate-500', lightBg: 'bg-slate-50 dark:bg-slate-500/10' }
    };
    return colors[color] || colors.blue;
};

const SocialButton = ({ icon: Icon, href, theme }: any) => (
    <motion.a
        href={href || "#"}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:border-white hover:text-white transition-all duration-300 relative group overflow-hidden"
    >
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity ${theme.bg}`} />
        <Icon className="w-5 h-5 relative z-10" />
    </motion.a>
);

const BrandLogo = ({ brandName, theme, size = "w-10 h-10", iconSize = "text-base" }: any) => (
    <div className={`${size} rounded-xl bg-gradient-to-br ${theme.gradientFrom || 'from-blue-600'} ${theme.gradientTo || 'to-indigo-600'} flex items-center justify-center shadow-md ring-1 ring-white/20 shrink-0 select-none`}>
        <span className={`text-white font-black ${iconSize} drop-shadow-sm`}>
            {brandName?.charAt(0)?.toUpperCase() || 'B'}
        </span>
    </div>
);

export const AppFooter: React.FC<TemplateProps> = ({ data, style, onClick, isDarkMode }) => {
    const isDark = isDarkMode ?? true;
    const theme = getThemeClasses(style?.primaryColor || 'blue');
    const brandName = data?.brand || data?.logo || 'Brand';
    const currentYear = new Date().getFullYear();

    return (
        <footer onClick={onClick} className={`relative pt-24 pb-12 overflow-hidden ${isDark ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
            {/* Ambient Background Glow */}
            <div className="absolute inset-x-0 top-0 h-[100px] pointer-events-none z-0">
                <div className={`absolute left-1/2 -top-10 -translate-x-1/2 w-[600px] h-[100px] blur-[50px] rounded-full opacity-20 ${theme.bg}`} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
                    
                    {/* Brand Meta Section */}
                    <div className="md:col-span-5 space-y-8">
                        <div className="flex items-center gap-3">
                            <BrandLogo brandName={brandName} theme={theme} size="w-10 h-10" iconSize="text-base" />
                            <span className="font-bold text-2xl tracking-tighter">{brandName}</span>
                        </div>
                        <p className={`text-lg leading-relaxed max-w-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            {data?.description || "Crafting digital experiences that matter. Built for performance, designed for humans."}
                        </p>
                        
                        <div className="flex items-center gap-4 pt-4">
                            <SocialButton icon={Twitter} theme={theme} />
                            <SocialButton icon={Github} theme={theme} />
                            <SocialButton icon={Linkedin} theme={theme} />
                        </div>
                    </div>

                    {/* Navigation Grid */}
                    <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
                        {[
                            { title: 'Platform', links: ['Cloud Sync', 'AI Engine', 'Infrastructure', 'Security'] },
                            { title: 'Developers', links: ['Documentation', 'API Reference', 'Status', 'Open Source'] },
                            { title: 'Company', links: ['Our Story', 'Careers', 'Media Kit', 'Contact'] }
                        ].map((col, i) => (
                            <div key={i}>
                                <h4 className={`font-bold text-xs uppercase tracking-widest mb-8 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>{col.title}</h4>
                                <ul className="space-y-4">
                                    {col.links.map((link, j) => (
                                        <li key={j}>
                                            <a href="#" className={`text-sm transition-colors relative group ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                                <span className={`absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full ${theme.bg} opacity-0 group-hover:opacity-100 transition-opacity`} />
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final Legal Bar */}
                <div className={`pt-10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] border-t ${isDark ? 'border-white/10 text-slate-500' : 'border-slate-200 text-slate-400'}`}>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <p>© {currentYear} {brandName} // ALL RIGHTS RESERVED</p>
                        <div className="flex gap-4 items-center">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>Systems Operational</span>
                        </div>
                    </div>
                    
                    <div className="flex gap-8">
                        {['Privacy_Policy', 'Terms_Of_Service', 'Security'].map(item => (
                            <a key={item} href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}>{item}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;
