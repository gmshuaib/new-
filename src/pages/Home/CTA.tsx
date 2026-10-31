
import React from 'react';
import { TemplateProps } from '@/types';
import { motion } from 'framer-motion';
import { getThemeClasses } from '@/utils/themeUtils';
import { ArrowRight, Zap } from 'lucide-react';

export const CtaMinimalModern: React.FC<TemplateProps> = ({ data, style }) => {
  const theme = getThemeClasses(style?.primaryColor || 'indigo');
  
  const title = data.title || "Ready to scale your next big idea?";
  const ctaText = data.ctaText || "Get Started Free";

  // Content tokens — fill from generated content or leave as defaults
  const Badge      = data?.Badge      || data?.badge      || data?.badgeText   || '';
  const Headline   = data?.Headline   || data?.headline   || data?.title       || '';
  const headline2  = data?.headline2  || data?.subheadline|| data?.description || '';
  const CTA1       = data?.CTA1       || data?.cta        || data?.primaryCTA  || 'Get Started';
  const CTA2       = data?.CTA2       || data?.cta2       || data?.secondaryCTA|| 'Learn More';

  return (
    <section className="py-24 bg-white dark:bg-[#030303] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative p-16 md:p-32 rounded-[4rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 text-center overflow-hidden"
        >
          {/* Decorative background element */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] ${theme.bg} rounded-full blur-[60px] opacity-[0.03] -translate-y-1/2`} />
          
          <div className="relative z-10 max-w-3xl mx-auto">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
             >
                <div className={`w-14 h-14 rounded-2xl ${theme.bg} flex items-center justify-center text-white mx-auto mb-10 shadow-2xl ${theme.shadow}`}>
                   <Zap size={28} />
                </div>
                
                <h2 className="text-4xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tighter leading-[1] max-w-2xl mx-auto">
                   {title}
                </h2>
                
                <p className="text-xl text-slate-500 dark:text-slate-400 font-light mb-12 max-w-lg mx-auto leading-relaxed">
                   Join over 10,000+ teams who are building the future with our platform.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                   <button className={`px-12 py-6 rounded-[2rem] ${theme.bg} text-white font-bold text-xl shadow-2xl ${theme.shadow} hover:scale-[1.05] transition-all flex items-center gap-3 active:scale-[0.98]`}>
                      {ctaText}
                      <ArrowRight size={20} />
                   </button>
                   <button className="px-12 py-6 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-xl hover:bg-slate-50 dark:hover:bg-white/10 transition-all active:scale-[0.98]">
                      View Demo
                   </button>
                </div>
                
                <p className="mt-12 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                   No credit card required. Cancel anytime.
                </p>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaMinimalModern;
