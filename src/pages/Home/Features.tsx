import React from 'react';
import { motion } from 'framer-motion';
import { getThemeClasses } from '@/utils/themeUtils';
import { Zap, Shield, Smartphone, Cloud, Layers, CheckCircle2 } from 'lucide-react';

export const FeaturesGridLines = ({ data, style }: any) => {
  const theme = getThemeClasses(style?.primaryColor || 'zinc');

  const features = [
    {
      icon: <Zap strokeWidth={1.5} size={28} />,
      title: 'Zero Latency',
      description: 'Routing logic implemented directly at the edge, guaranteeing sub-millisecond responses globally.'
    },
    {
      icon: <Shield strokeWidth={1.5} size={28} />,
      title: 'By-default Security',
      description: 'End-to-end encryption and automatic key rotation without any configuration changes.'
    },
    {
      icon: <Smartphone strokeWidth={1.5} size={28} />,
      title: 'Omnichannel API',
      description: 'Write once, integrate anywhere. Support for Web, iOS, Android, and IoT devices simultaneously.'
    },
    {
      icon: <Cloud strokeWidth={1.5} size={28} />,
      title: 'Infinite Scalability',
      description: 'Serverless execution model automatically scales from zero to millions of requests seamlessly.'
    },
    {
      icon: <Layers strokeWidth={1.5} size={28} />,
      title: 'Headless Architecture',
      description: 'Decoupled frontend and backend enables unparalleled flexibility in technology choices.'
    },
    {
      icon: <CheckCircle2 strokeWidth={1.5} size={28} />,
      title: 'Compliant Infrastructure',
      description: 'SOC2, HIPAA, and GDPR compliant foundation ensuring your business meets strict regulations.'
    }
  ];

  // Content tokens — fill from generated content or leave as defaults
  const Badge      = data?.Badge      || data?.badge      || data?.badgeText   || '';
  const Headline   = data?.Headline   || data?.headline   || data?.title       || '';
  const headline2  = data?.headline2  || data?.subheadline|| data?.description || '';
  const CTA1       = data?.CTA1       || data?.cta        || data?.primaryCTA  || 'Get Started';
  const CTA2       = data?.CTA2       || data?.cta2       || data?.secondaryCTA|| 'Learn More';

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6"
            >
              Enterprise standards.<br />
              <span className="text-slate-400 dark:text-slate-600">Startup agility.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:max-w-sm text-lg text-slate-600 dark:text-slate-400 text-center md:text-left"
          >
            A comprehensive suite of tools perfectly balanced between immense power and approachable simplicity.
          </motion.div>
        </div>

        {/* Grid Container */}
        <div className="w-full relative">
          {/* Outer glow */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full ${theme.bg} rounded-full blur-[150px] opacity-[0.03] dark:opacity-[0.04] pointer-events-none -z-10`}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200 dark:border-white/10">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group relative border-b border-r border-slate-200 dark:border-white/10 p-10 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden"
              >
                {/* Background hover gradient effect */}
                <div className={`absolute inset-0 ${theme.bgSoft} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                
                {/* Icon wrapper */}
                <div className={`w-14 h-14 rounded-2xl bg-white dark:bg-[#111] border border-slate-200 dark:border-white/10 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 ease-out text-slate-700 dark:text-slate-300 group-hover:${theme.text} relative z-10`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3 relative z-10 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed relative z-10">
                  {feature.description}
                </p>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesGridLines;
