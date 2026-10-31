import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface WatermarkProps {
    isPaidUser: boolean;
    onUpgradeClick?: () => void;
}

const Watermark: React.FC<WatermarkProps> = ({ isPaidUser, onUpgradeClick }) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 z-[99999] flex items-center shadow-2xl overflow-hidden rounded-full border border-slate-700/50 dark:border-white/10 bg-slate-900 dark:bg-black backdrop-blur-md isolate print:hidden transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 pointer-events-none -z-10" />
            
            <a 
                href="https://webgeny.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-3 py-1.5 min-h-[32px] text-white hover:text-cyan-400 transition-colors group ${isPaidUser ? '' : 'pr-4'}`}
                aria-label="Made with Webgeny"
            >
                <img src="https://webgeny.dev/Logo.svg" alt="Webgeny Logo" className="w-5 h-5 object-contain group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                <span className="text-[11px] font-bold tracking-wide flex items-center gap-1.5 whitespace-nowrap pr-1 ml-0.5">
                    Made with Webgeny
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-0.5" />
                </span>
            </a>
            
            {isPaidUser && (
                <button 
                    onClick={() => setIsVisible(false)}
                    className="flex items-center justify-center min-h-[32px] w-8 border-l border-slate-700/50 dark:border-white/10 text-slate-400 hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-colors group"
                    aria-label="Remove Watermark"
                >
                    <X className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                </button>
            )}
        </div>
    );
};

export default Watermark;