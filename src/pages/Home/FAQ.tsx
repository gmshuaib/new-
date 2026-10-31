
import React, { useState } from 'react';
import { TemplateProps } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { getThemeClasses } from '@/utils/themeUtils';
import { Terminal, HelpCircle, ChevronRight, Hash, Code2, Search } from 'lucide-react';

export const FaqSection: React.FC<TemplateProps> = ({ data, style }) => {
  const theme = getThemeClasses(style?.primaryColor || 'indigo');
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const items = Array.isArray(data?.items) ? data.items : [];
  const categories = Array.from(new Set(items.map((item: any) => item?.category || 'General')));
  const [activeCategory, setActiveCategory] = useState(categories[0] || 'General');

  const filteredItems = items.filter((item: any) => (item?.category || 'General') === activeCategory);

  // Content tokens — fill from generated content or leave as defaults
  const Badge      = data?.Badge      || data?.badge      || data?.badgeText   || '';
  const Headline   = data?.Headline   || data?.headline   || data?.title       || '';
  const headline2  = data?.headline2  || data?.subheadline|| data?.description || '';
  const CTA1       = data?.CTA1       || data?.cta        || data?.primaryCTA  || 'Get Started';
  const CTA2       = data?.CTA2       || data?.cta2       || data?.secondaryCTA|| 'Learn More';

  return (
    <section className="py-32 md:py-48 bg-white dark:bg-[#030303] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

          {/* Left Sidebar: Categories */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="sticky top-32 space-y-12"
            >
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <HelpCircle size={16} className={theme.text} />
                  <span className={`text-xs font-black uppercase tracking-[0.4em] ${theme.text}`}>
                    {data?.badge || 'Frequently Asked Questions'}
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter leading-[0.95] mb-8 font-display">
                  {data?.headline || data?.title || 'Knowledge Base'}
                </h2>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center space-x-2">
                  <Search size={12} />
                  <span>Filter by Category</span>
                </p>
                {categories.map((cat: any, i: number) => (
                  <button
                    key={i}
                    onClick={() => { setActiveCategory(cat); setActiveIndex(null); }}
                    className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all duration-300 border ${activeCategory === cat
                        ? `${theme.bg} text-white border-transparent shadow-xl ${theme.shadow}`
                        : 'bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/5 text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-white/10'
                      }`}
                  >
                    <span className="text-sm font-bold uppercase tracking-widest">{cat}</span>
                    <Hash size={14} className={activeCategory === cat ? 'text-white/50' : 'text-slate-300 dark:text-slate-700'} />
                  </button>
                ))}
              </div>

              <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 relative z-10">Advanced Support</p>
                <h4 className="text-2xl font-bold mb-4 relative z-10">Need a custom debrief?</h4>
                <button className={`w-full py-4 rounded-xl bg-white text-black text-xs font-black uppercase tracking-widest relative z-10 hover:scale-105 transition-transform`}>
                  Contact Engineers
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Main: Drilldown Content */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              <AnimatePresence initial={false}>
                {filteredItems.map((item: any, i: number) => (
                  <motion.div
                    key={`${activeCategory}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: i * 0.05 }}
                    className={`group rounded-[2rem] border transition-all duration-500 ${activeIndex === i
                        ? 'bg-slate-50 dark:bg-white/[0.03] border-slate-200 dark:border-white/10'
                        : 'bg-white dark:bg-transparent border-slate-100 dark:border-white/5 hover:border-slate-200 dark:hover:border-white/10'
                      }`}
                  >
                    <button
                      onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                      className="w-full flex items-center justify-between p-10 text-left"
                    >
                      <div className="flex items-center space-x-6">
                        <div className={`w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center ${theme.text} group-hover:scale-110 transition-transform`}>
                          <Code2 size={24} strokeWidth={1.5} />
                        </div>
                        <h4 className={`text-xl md:text-2xl font-bold tracking-tight ${activeIndex === i ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                          {item.question}
                        </h4>
                      </div>
                      <div className={`p-2 rounded-full transition-transform duration-500 ${activeIndex === i ? 'rotate-90 bg-slate-900 dark:bg-white text-white dark:text-black' : 'text-slate-300 dark:text-slate-700'}`}>
                        <ChevronRight size={20} />
                      </div>
                    </button>

                    <AnimatePresence>
                      {activeIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-10 pb-10">
                            <div className="p-8 rounded-2xl bg-white dark:bg-black border border-slate-200 dark:border-white/5 font-mono text-sm text-slate-500 dark:text-slate-400 leading-relaxed shadow-inner">
                              <div className="flex items-center space-x-2 mb-4 opacity-50">
                                <Terminal size={14} />
                                <span className="text-[10px] uppercase tracking-widest">DOCS_BROWSER // {(item?.category || activeCategory || 'DOCS').toString().toUpperCase()}</span>
                              </div>
                              <p className="whitespace-pre-line">{item?.answer || 'No answer provided.'}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;
