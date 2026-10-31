import React from 'react';
import { TemplateProps } from '@/types';
import { getThemeClasses } from '@/utils/themeUtils';
import { motion } from 'framer-motion';
import { Zap, Play, Cloud, Globe, TrendingUp, Cpu, Monitor, CheckCircle2 } from 'lucide-react';

export const HeroNeuralArchitect: React.FC<TemplateProps> = ({ data, style, onClick, isDarkMode }) => {
  const theme = getThemeClasses(style?.primaryColor || 'violet');

  // Content tags with fallback ({Headline}, {headline2}, {Badge}, {CTA1}, {CTA2})
  const Badge = data?.Badge || data?.badge || data?.hero?.badge || 'PRO EDITION V2.4';
  const Headline = data?.Headline || data?.headline || data?.hero?.headline || 'Architect Your Creative Vision';
  const headline2 = data?.headline2 || data?.subheadline || data?.description || data?.hero?.subheadline || 'Experience the next generation of creative engineering. Flowdesk Pro delivers sub-second latency and neural-accelerated workflows for the modern elite studio.';
  const CTA1 = data?.CTA1 || data?.cta || data?.primaryCTA || data?.hero?.primaryCTA || 'Start Architecting';
  const CTA2 = data?.CTA2 || data?.secondaryCta || data?.secondaryCTA || data?.hero?.secondaryCTA || 'View Showreel';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      onClick={onClick} 
      className={`relative overflow-hidden w-full transition-colors duration-500 bg-[#f4f7fa] dark:bg-[#050505] py-20 lg:py-28 px-4 flex flex-col items-center ${isDarkMode ? 'dark' : ''}`}
    >
      {/* Ambient Glowing Orbs */}
      <div className={`absolute -top-32 right-0 w-[600px] h-[600px] bg-gradient-to-bl ${theme.gradientFrom} ${theme.gradientTo} blur-[120px] rounded-full opacity-30 dark:opacity-20 pointer-events-none`} />
      <div className={`absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-[800px] h-[500px] bg-gradient-to-tr ${theme.gradientFrom} ${theme.gradientTo} blur-[150px] rounded-full opacity-20 dark:opacity-10 pointer-events-none`} />

      <div className="w-full max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* Top Grid: Hero + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Hero Card */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="lg:col-span-8 bg-white dark:bg-slate-950 shadow-2xl/[0.02] hover:shadow-[0_0_40px_-15px_rgba(139,92,246,0.3)] hover:border-violet-500/30 transition-all duration-500 rounded-[40px] p-8 lg:p-16 flex flex-col items-start text-left border border-slate-100 dark:border-white/5 relative overflow-hidden group/card"
          >
             {/* Suble background glow */}
            <div className={`absolute top-0 right-0 w-64 h-64 ${theme.bg} opacity-[0.03] blur-[100px] pointer-events-none`} />

            <motion.div 
               variants={itemVariants}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-8"
            >
              <Cpu className={`w-3 h-3 ${theme.text}`} />
              <span className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{Badge}</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl lg:text-7xl font-display font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.05] mb-8"
            >
              {Headline.includes(' ') ? Headline.split(' ').slice(0, -2).join(' ') : Headline} <br/>
              <span className={`bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo} bg-clip-text text-transparent`}>
                {Headline.includes(' ') ? Headline.split(' ').slice(-2).join(' ') : ''}
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-slate-500 dark:text-slate-400 text-base lg:text-lg max-w-xl mb-12 leading-relaxed"
            >
              {headline2}
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
            >
              <div className="relative group/btn z-10 w-full sm:w-auto">
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo} opacity-50 group-hover/btn:opacity-80 blur-lg transition duration-500 group-hover/btn:duration-200`} />
                <button className={`relative w-full px-10 py-4 ${theme.button} rounded-2xl font-bold text-base transition-all active:scale-95 shadow-xl ${theme.shadow} flex items-center justify-center gap-2 group`}>
                  {CTA1}
                  <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <button className="relative z-10 px-10 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl border border-slate-200 dark:border-white/10 font-bold text-base hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95 shadow-sm">
                {CTA2}
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Neural Rendering Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-950 rounded-[32px] p-8 border border-slate-100 dark:border-white/5 shadow-lg hover:shadow-[0_0_40px_-15px_rgba(139,92,246,0.3)] hover:border-violet-500/30 transition-all duration-500 flex flex-col group/card"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                   <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Neural Rendering</h4>
                   <div className="text-4xl font-bold text-slate-900 dark:text-white">0.12ms</div>
                </div>
                <div className={`p-3 rounded-2xl ${theme.bgLight} ${theme.text} relative`}>
                   <Zap className="w-6 h-6 fill-current" />
                   <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 animate-pulse" />
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full ${theme.bg}`} 
                  />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sub-second latency active</span>
              </div>
            </motion.div>

            {/* Integration Cloud Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-slate-950 rounded-[32px] p-8 border border-slate-100 dark:border-white/5 shadow-lg hover:shadow-[0_0_40px_-15px_rgba(139,92,246,0.3)] hover:border-violet-500/30 transition-all duration-500 flex-1 flex flex-col items-center justify-center text-center group/card"
            >
               <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-10 w-full text-left">Integration Cloud</h4>
               
               <div className="flex items-center justify-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-center -rotate-6 border border-slate-50 dark:border-white/5 p-3">
                     <img src="https://picsum.photos/seed/figma2/48/48" className="w-full h-full object-contain grayscale dark:invert" alt="Figma" />
                  </div>
                  <div className="w-14 h-14 bg-white dark:bg-slate-950 rounded-xl shadow-xl flex items-center justify-center z-10 border border-slate-50 dark:border-white/5 p-4">
                     <img src="https://picsum.photos/seed/slack2/48/48" className="w-full h-full object-contain grayscale dark:invert" alt="Slack" />
                  </div>
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-center rotate-6 border border-slate-50 dark:border-white/5 p-3">
                     <img src="https://picsum.photos/seed/notion2/48/48" className="w-full h-full object-contain grayscale dark:invert" alt="Notion" />
                  </div>
               </div>

               <div className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-tight">34+ Connected Stacks</div>
            </motion.div>

          </div>
        </div>

        {/* Bottom Grid: Sync + Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Global Sync Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 bg-white dark:bg-slate-950 rounded-[32px] p-8 border border-slate-100 dark:border-white/5 shadow-lg hover:shadow-[0_0_40px_-15px_rgba(139,92,246,0.3)] hover:border-violet-500/30 transition-all duration-500 group/card"
          >
             <div className="flex justify-between items-center mb-10">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Sync</h4>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" src={`https://i.pravatar.cc/100?img=${i + 22}`} alt="" />
                  ))}
                  <div className={`w-8 h-8 rounded-full ${theme.bg} border-2 border-white dark:border-slate-800 flex items-center justify-center text-[8px] font-bold text-white`}>+12</div>
                </div>
             </div>

             <div className="space-y-6">
                <div className="flex items-start gap-3">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                   <div className="text-xs">
                      <span className="font-bold text-slate-900 dark:text-white">Elena</span>
                      <span className="text-slate-500"> updated "Main Dashboard" </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase ml-1">2m ago</span>
                   </div>
                </div>
                <div className="flex items-start gap-3">
                   <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                   <div className="text-xs">
                      <span className="font-bold text-slate-900 dark:text-white">Marcus</span>
                      <span className="text-slate-500"> pushed "V3 Components" </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase ml-1">15s ago</span>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* Performance Matrix Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8 bg-white dark:bg-slate-950 rounded-[32px] p-8 border border-slate-100 dark:border-white/5 shadow-lg hover:shadow-[0_0_40px_-15px_rgba(139,92,246,0.3)] hover:border-violet-500/30 transition-all duration-500 flex flex-col group/card"
          >
             <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Performance Matrix</h4>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">10x Speed Increase</div>
                </div>
                <div className="px-3 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold flex items-center gap-1">
                   <TrendingUp className="w-3 h-3" />
                   42%
                </div>
             </div>

             <div className="flex-1 min-h-[160px] relative mt-4">
                <svg className="w-full h-full" viewBox="0 0 800 200">
                   <defs>
                    <linearGradient id="matrixGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={theme.primaryHex} stopOpacity="0.15" />
                      <stop offset="100%" stopColor={theme.primaryHex} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M0 180 C 150 170, 300 175, 450 120 S 650 40, 800 50 L 800 200 L 0 200 Z" 
                    fill="url(#matrixGradient)" 
                  />
                  <path 
                    d="M0 180 C 150 170, 300 175, 450 120 S 650 40, 800 50" 
                    fill="none" 
                    stroke={theme.primaryHex} 
                    strokeWidth="4" 
                    strokeLinecap="round"
                  />
                  <circle cx="800" cy="50" r="4" fill="#fff" stroke={theme.primaryHex} strokeWidth="3" />
                </svg>
                
                {/* Labels */}
                <div className="absolute bottom-0 left-0 w-full flex justify-between px-2">
                   <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Alpha Release</div>
                   <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Stable Build</div>
                   <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Pro V2.4</div>
                </div>
             </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HeroNeuralArchitect;
