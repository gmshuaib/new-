import React from 'react';
import { motion } from 'framer-motion';
import { getThemeClasses } from '@/utils/themeUtils';
import { Sparkles, MoveRight } from 'lucide-react';

export const AboutMinimalGlowSplit = ({ data, style }: any) => {
  const theme = getThemeClasses(style?.primaryColor || 'zinc');

  const principles = [
    {
      title: "Engineered poetry.",
      description: "Code is often seen as rigid. We view it as an expressive medium. By obsessing over the invisible joints of the system, we create experiences that feel less like software and more like magic."
    },
    {
      title: "Frictionless intent.",
      description: "The interface should disappear. When users have an intent, the system must translate that into action with zero cognitive resistance. We design for the subconscious."
    },
    {
      title: "Sensory equilibrium.",
      description: "Balance is not just visual; it is experiential. The speed of a transition, the scale of typography, the exact radius of a corner—these micro-decisions culminate in a state of flow."
    }
  ];

  // Content tokens — fill from generated content or leave as defaults
  const Badge      = data?.Badge      || data?.badge      || data?.badgeText   || '';
  const Headline   = data?.Headline   || data?.headline   || data?.title       || '';
  const headline2  = data?.headline2  || data?.subheadline|| data?.description || '';
  const CTA1       = data?.CTA1       || data?.cta        || data?.primaryCTA  || 'Get Started';
  const CTA2       = data?.CTA2       || data?.cta2       || data?.secondaryCTA|| 'Learn More';

  return (
    <section className="py-24 md:py-40 bg-zinc-50 dark:bg-[#020202] relative overflow-hidden font-sans">
      
      {/* Soft Ambient Light */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen dark:mix-blend-color-dodge">
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-[10%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full ${theme.bg} opacity-20 blur-[120px] md:blur-[200px]`} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Sticky Context */}
          <div className="lg:w-5/12">
            <div className="sticky top-40">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-2 mb-8">
                  <div className={`w-1.5 h-1.5 rounded-full ${theme.bg} shadow-[0_0_8px_currentColor]`}></div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500">
                    Design Doctrine
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-8">
                  Designing for <br className="hidden lg:block"/> the subconscious.
                </h2>
                
                <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-12 max-w-md">
                  We don't just build interfaces; we architect environments. Our work sits at the intersection of cognitive psychology and computational design.
                </p>

                <div className="hidden lg:flex items-center gap-4 text-sm font-medium">
                   <button className="text-slate-900 dark:text-white pb-1 relative group overflow-hidden">
                     <span className="relative z-10">Read our philosophy</span>
                     <span className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-900 dark:bg-white origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-300"></span>
                     <span className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-900 dark:bg-white origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-100"></span>
                   </button>
                   <MoveRight size={14} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Scrolling Content */}
          <div className="lg:w-7/12">
             <div className="space-y-12 md:space-y-24">
                {principles.map((principle, idx) => (
                   <motion.div
                     key={idx}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                     className="relative group"
                   >
                     {/* Decorative subtle line */}
                     <div className="w-8 h-[1px] bg-slate-300 dark:bg-white/20 mb-8 group-hover:w-16 transition-all duration-500"></div>
                     
                     <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 dark:text-white mb-6">
                       {principle.title}
                     </h3>
                     
                     <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-xl">
                       {principle.description}
                     </p>
                   </motion.div>
                ))}
             </div>

             {/* Mobile CTA */}
             <div className="mt-16 lg:hidden flex items-center gap-4 text-sm font-medium">
                <button className="text-slate-900 dark:text-white pb-1 border-b border-slate-900 dark:border-white">
                  Read our philosophy
                </button>
                <MoveRight size={14} className="text-slate-400" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMinimalGlowSplit;
