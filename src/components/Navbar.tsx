import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown, Sun, Moon } from 'lucide-react';
import { getThemeClasses } from '@/utils/themeUtils';

export const SuperPremiumNavbar: React.FC<any> = ({
    data,
    style,
    isActive,
    isReadOnly,
    isDarkMode,
    onClick,
    pages,
    currentPageId,
    onNavigate
}) => {
    const navRef = React.useRef<HTMLElement>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const discoverRef = useRef<HTMLDivElement>(null);
    
    // Site Dark/Light mode state (defaults to explicit isDarkMode prop or style.isDarkMode)
    const initialDark = isDarkMode !== undefined ? !!isDarkMode : !!style?.isDarkMode;
    const [isSiteDark, setIsSiteDark] = useState<boolean>(initialDark);

    useEffect(() => {
        const darkVal = isDarkMode !== undefined ? !!isDarkMode : !!style?.isDarkMode;
        setIsSiteDark(darkVal);
    }, [isDarkMode, style?.isDarkMode]);

    useEffect(() => {
        const container = navRef.current?.closest('.preview-content') 
            || navRef.current?.closest('[data-site-container]');
        if (container) {
            if (isSiteDark) {
                container.classList.add('dark');
                container.classList.add('bg-slate-950');
                container.classList.remove('bg-white');
            } else {
                container.classList.remove('dark');
                container.classList.remove('bg-slate-950');
                container.classList.add('bg-white');
            }
        }
    }, [isSiteDark]);

    const handleToggleDarkMode = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsSiteDark(prev => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 15);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (discoverRef.current && !discoverRef.current.contains(e.target as Node)) {
                setIsDiscoverOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const brand = data?.brandName || data?.brand || data?.logo || data?.siteName || 'Brand';
    const ctaText = data?.ctaText || data?.primaryCta || data?.cta || 'Get Started';
    const secondaryCtaText = data?.secondaryCtaText || data?.secondaryCta || 'Log In';

    // Build nav links: prefer generated page links from context
    const navLinks = (pages && pages.length > 0)
        ? pages.map((p: any) => ({
            label: p.name,
            href: p.slug === 'index' ? '/' : `/${p.slug}`,
            id: p.id
        }))
        : (data?.links || [
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' }
        ]);

    const displayLinks = navLinks.filter((l: any) => {
        const low = l.label.toLowerCase();
        return low !== 'login' && low !== 'signup' && low !== 'dashboard' && low !== 'admin';
    });

    const primaryNavLinks = displayLinks.slice(0, 5);
    const discoverLinks = displayLinks.slice(5);
    const showDiscover = discoverLinks.length > 0;

    const handleBrandClick = (e: React.MouseEvent) => {
        if (isReadOnly) return;
        e.preventDefault();
        onNavigate?.('/');
    };

    const handleCtaClick = (e: React.MouseEvent) => {
        if (isReadOnly) return;
        e.preventDefault();
        const signupPage = pages?.find((p: any) => p.slug === 'signup' || p.name.toLowerCase() === 'signup');
        if (signupPage) {
            onNavigate?.('/signup');
        } else {
            const contactPage = pages?.find((p: any) => p.slug === 'contact' || p.name.toLowerCase() === 'contact');
            if (contactPage) onNavigate?.('/contact');
            else onNavigate?.('/');
        }
    };

    const handleLoginClick = (e: React.MouseEvent) => {
        if (isReadOnly) return;
        e.preventDefault();
        const loginPage = pages?.find((p: any) => p.slug === 'login' || p.name.toLowerCase() === 'login');
        if (loginPage) {
            onNavigate?.('/login');
        } else {
            onNavigate?.('/');
        }
    };

    const handleLinkClick = (e: React.MouseEvent, href: string) => {
        if (isReadOnly) return;
        e.preventDefault();
        if (href.startsWith('#')) {
            const targetId = href.substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            onNavigate?.(href);
        }
        setIsMobileMenuOpen(false);
        setIsDiscoverOpen(false);
    };

    const theme = getThemeClasses(style?.primaryColor || 'indigo');

    return (
        <nav ref={navRef} className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 pointer-events-none">
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-300 ${hasScrolled ? 'pt-2.5 sm:pt-3' : 'pt-4 sm:pt-6'}`}>
                <div className={`relative px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between rounded-2xl sm:rounded-full transition-all duration-500 backdrop-blur-2xl border pointer-events-auto
                    ${hasScrolled 
                        ? 'bg-white/90 dark:bg-slate-950/90 border-slate-200/90 dark:border-white/10 shadow-[0_12px_32px_-4px_rgba(0,0,0,0.08)] dark:shadow-[0_16px_48px_-8px_rgba(0,0,0,0.6)]' 
                        : 'bg-white/70 dark:bg-slate-950/70 border-white/60 dark:border-white/[0.06] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.4)]'
                    }`}
                >
                    {/* Top ambient highlight hairline */}
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/80 dark:via-white/20 to-transparent pointer-events-none" />

                    {/* Brand Logo */}
                    {isReadOnly ? (
                        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                            <div className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${theme.bg} flex items-center justify-center shadow-xs ring-1 ring-white/20 overflow-hidden shrink-0`}>
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 pointer-events-none" />
                                <span className="text-white font-black text-sm tracking-tighter drop-shadow-xs">{brand.charAt(0).toUpperCase()}</span>
                            </div>
                            <span className="text-[15px] sm:text-[17px] font-extrabold tracking-tight text-slate-900 dark:text-white truncate max-w-[130px] xs:max-w-[170px] sm:max-w-[240px] md:max-w-none">
                                {brand}
                            </span>
                        </div>
                    ) : (
                        <a href="/" onClick={handleBrandClick} className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer focus-visible:outline-none min-w-0">
                            <div className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${theme.bg} flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:shadow-sm transition-all duration-300 ring-1 ring-white/20 overflow-hidden shrink-0`}>
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/25 pointer-events-none" />
                                <span className="text-white font-black text-sm tracking-tighter drop-shadow-xs">{brand.charAt(0).toUpperCase()}</span>
                            </div>
                            <div className="flex items-center gap-1.5 min-w-0">
                                <span className="text-[15px] sm:text-[17px] font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:opacity-80 transition-opacity truncate max-w-[130px] xs:max-w-[170px] sm:max-w-[240px] md:max-w-none">
                                    {brand}
                                </span>
                            </div>
                        </a>
                    )}

                    {/* Desktop Links with Floating Spring Pill */}
                    <div 
                        className="hidden lg:flex items-center gap-1 px-1.5 py-1 rounded-full bg-slate-100/60 dark:bg-white/[0.04] border border-slate-200/50 dark:border-white/[0.06] relative"
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {primaryNavLinks.map((link: any, idx: number) => {
                            const isCurrent = currentPageId === link.id || (link.href === '/' && currentPageId === 'index');
                            const isHovered = hoveredIndex === idx;
                            return (
                                <a
                                    key={idx}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    onMouseEnter={() => setHoveredIndex(idx)}
                                    className={`relative px-3.5 py-1.5 rounded-full text-[13px] font-semibold tracking-tight transition-all duration-200 flex items-center gap-1.5 cursor-pointer select-none
                                        ${isCurrent 
                                            ? 'text-slate-900 dark:text-white font-bold' 
                                            : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                                        }`}
                                >
                                    {/* Hover Pill Effect */}
                                    {isHovered && (
                                        <motion.div
                                            layoutId="navHoverPill"
                                            className="absolute inset-0 rounded-full bg-slate-200/60 dark:bg-white/10 -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                                        />
                                    )}

                                    {/* Active link subtle background pill if not hovered */}
                                    {isCurrent && !isHovered && (
                                        <div className="absolute inset-0 rounded-full bg-white/80 dark:bg-white/[0.08] shadow-xs -z-10" />
                                    )}

                                    <span className="relative z-10">{link.label}</span>

                                    {/* Active link dot */}
                                    {isCurrent && (
                                        <span className={`w-1.5 h-1.5 rounded-full ${theme.bg} shadow-xs`} />
                                    )}
                                </a>
                            );
                        })}

                        {/* Discover Dropdown */}
                        {showDiscover && (
                            <div className="relative" ref={discoverRef}>
                                <button
                                    onMouseEnter={() => setIsDiscoverOpen(true)}
                                    onClick={() => setIsDiscoverOpen(!isDiscoverOpen)}
                                    className={`px-3.5 py-1.5 rounded-full text-[13px] font-semibold tracking-tight transition-all duration-200 flex items-center gap-1 cursor-pointer
                                        ${isDiscoverOpen 
                                            ? 'text-slate-900 dark:text-white bg-white dark:bg-white/10 shadow-xs' 
                                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                        }`}
                                >
                                    More <ChevronDown size={13} className={`transition-transform duration-200 ${isDiscoverOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {isDiscoverOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 6, scale: 0.96 }}
                                            transition={{ duration: 0.16 }}
                                            onMouseLeave={() => setIsDiscoverOpen(false)}
                                            className="absolute top-full right-0 mt-2 w-52 py-1.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 shadow-xl shadow-black/10 dark:shadow-black/40 z-50 flex flex-col p-1.5"
                                        >
                                            {discoverLinks.map((link: any, idx: number) => {
                                                const isCurrent = currentPageId === link.id || (link.href === '/' && currentPageId === 'index');
                                                return (
                                                    <a
                                                        key={idx}
                                                        href={link.href}
                                                        onClick={(e: any) => handleLinkClick(e, link.href)}
                                                        className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer flex items-center justify-between
                                                            ${isCurrent
                                                                ? `${theme.bgSoft} ${theme.text} font-semibold`
                                                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                                                            }`}
                                                    >
                                                        <span>{link.label}</span>
                                                        {isCurrent && <span className={`w-1.5 h-1.5 rounded-full ${theme.bg}`} />}
                                                    </a>
                                                );
                                            })}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}
                    </div>

                    {/* Desktop CTAs + Theme Mode Toggle */}
                    <div className="hidden lg:flex items-center gap-2.5 shrink-0">
                        {/* Dark / Light Mode Toggle Button */}
                        <button
                            onClick={handleToggleDarkMode}
                            title={isSiteDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                            className="w-9 h-9 rounded-xl bg-slate-100/80 dark:bg-white/[0.06] border border-slate-200/60 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-200 flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
                            aria-label="Toggle dark/light mode"
                        >
                            {isSiteDark ? (
                                <Sun size={15} className="text-amber-400 hover:rotate-45 transition-transform duration-300" />
                            ) : (
                                <Moon size={15} className="text-slate-700 dark:text-slate-300 hover:-rotate-12 transition-transform duration-300" />
                            )}
                        </button>

                        {/* Secondary CTA (Log In) */}
                        <button
                            onClick={handleLoginClick}
                            className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/[0.06] transition-all duration-200 cursor-pointer active:scale-95"
                        >
                            {secondaryCtaText}
                        </button>

                        {/* Primary CTA */}
                        <button
                            onClick={handleCtaClick}
                            className={`group relative inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white shadow-xs hover:shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] overflow-hidden ${theme.bg} cursor-pointer`}
                        >
                            {/* Inner top highlight */}
                            <div className="absolute inset-x-0 top-0 h-px bg-white/30 pointer-events-none" />
                            {/* Subtle shimmer hover */}
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                            <span className="relative z-10 flex items-center gap-1.5 font-bold tracking-wide">
                                {ctaText}
                                <ArrowRight size={13} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                            </span>
                        </button>
                    </div>

                    {/* Mobile menu trigger + Dark toggle */}
                    <div className="lg:hidden flex items-center gap-1.5 pr-1 shrink-0">
                        <button
                            onClick={handleToggleDarkMode}
                            title={isSiteDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                            className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-300 flex items-center justify-center cursor-pointer active:scale-95"
                        >
                            {isSiteDark ? (
                                <Sun size={15} className="text-amber-400" />
                            ) : (
                                <Moon size={15} className="text-slate-700 dark:text-slate-300" />
                            )}
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100/80 dark:bg-white/[0.06] border border-slate-200/60 dark:border-white/[0.08] text-slate-700 dark:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors cursor-pointer"
                            aria-label="Open navigation menu"
                            data-no-link-override="true"
                        >
                            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer Menu with Backdrop & Spring Entrance */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-[100] bg-slate-950/40 backdrop-blur-sm lg:hidden pointer-events-auto"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.96 }}
                            transition={{ type: "spring", bounce: 0.15, duration: 0.35 }}
                            className="fixed inset-x-4 top-20 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 shadow-2xl rounded-3xl p-5 z-[101] flex flex-col gap-3 lg:hidden pointer-events-auto"
                        >
                            <div className="flex flex-col gap-1 max-h-[50vh] overflow-y-auto py-1">
                                {displayLinks.map((link: any, idx: number) => {
                                    const isCurrent = currentPageId === link.id || (link.href === '/' && currentPageId === 'index');
                                    return (
                                        <a
                                            key={idx}
                                            href={link.href}
                                            onClick={(e: any) => handleLinkClick(e, link.href)}
                                            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center justify-between
                                                ${isCurrent
                                                    ? `${theme.bgSoft} ${theme.text}`
                                                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                                                }`}
                                        >
                                            <span>{link.label}</span>
                                            {isCurrent && <span className={`w-2 h-2 rounded-full ${theme.bg}`} />}
                                        </a>
                                    );
                                })}
                            </div>

                            <hr className="border-slate-200/60 dark:border-white/10 my-1" />

                            <div className="flex flex-col gap-2 pt-1">
                                <button
                                    onClick={handleLoginClick}
                                    className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-all cursor-pointer"
                                >
                                    {secondaryCtaText}
                                </button>
                                <button
                                    onClick={handleCtaClick}
                                    className={`w-full py-2.5 rounded-xl text-xs font-bold text-center ${theme.bg} text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer`}
                                >
                                    <span>{ctaText}</span>
                                    <ArrowRight size={13} strokeWidth={2.5} />
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default SuperPremiumNavbar;
