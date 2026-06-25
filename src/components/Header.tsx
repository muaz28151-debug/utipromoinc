import React, { useState, useEffect } from 'react';
import { AppRoute } from '../types';
import { Menu, X, ChevronDown, Code, Share2, Search, Mail, PenTool, Layers, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
}

export default function Header({ currentRoute, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route: AppRoute) => {
    onNavigate(route);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const services = [
    { id: 'web-development' as AppRoute, title: 'Web Development', icon: Code, desc: 'Bespoke React applications & websites' },
    { id: 'smm' as AppRoute, title: 'Social Media Marketing', icon: Share2, desc: 'Organic growth & paid conversion ads' },
    { id: 'seo' as AppRoute, title: 'Search Engine Optimization', icon: Search, desc: 'Aggressive keyword ranking & crawls' },
    { id: 'email-marketing' as AppRoute, title: 'Email Marketing', icon: Mail, desc: 'Automated lifecycle funnel sequences' },
    { id: 'content-writing' as AppRoute, title: 'Content Writing', icon: PenTool, desc: 'Deeply researched SEO authority blogs' },
    { id: 'logo-design' as AppRoute, title: 'Logo Design & Branding', icon: Layers, desc: 'Timeless vector visual brand systems' }
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-900 shadow-xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <div
            id="brand-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5.5 h-5.5 text-slate-950 stroke-[2.2]" />
            </div>
            <div>
              <span className="font-sans font-extrabold text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors duration-300">
                Utipromo<span className="text-amber-500">.</span>
              </span>
              <span className="block text-[9px] font-mono tracking-widest text-slate-500 uppercase leading-none">
                Digital Growth Inc
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                currentRoute === 'home'
                  ? 'text-amber-500 bg-amber-500/5'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              Home
            </button>
            
            <button
              id="nav-link-about"
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                currentRoute === 'about'
                  ? 'text-amber-500 bg-amber-500/5'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              About us
            </button>

            {/* Services Dropdown */}
            <div
              id="services-dropdown-container"
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button
                id="nav-link-services"
                onClick={() => handleNavClick('services')}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all flex items-center space-x-1 ${
                  ['services', 'web-development', 'smm', 'seo', 'email-marketing', 'content-writing', 'logo-design'].includes(currentRoute)
                    ? 'text-amber-500 bg-amber-500/5'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                <span>Our Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    id="services-dropdown-menu"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-1 w-[480px] bg-slate-950 border border-slate-900 rounded-xl shadow-2xl p-4 grid grid-cols-2 gap-2"
                  >
                    <div className="col-span-2 pb-2 mb-2 border-b border-slate-900 flex justify-between items-center px-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Service Offerings</span>
                      <button
                        id="nav-view-all-services"
                        onClick={() => handleNavClick('services')}
                        className="text-xs text-amber-500 hover:text-amber-400 font-medium"
                      >
                        View All
                      </button>
                    </div>
                    {services.map((srv) => {
                      const Icon = srv.icon;
                      return (
                        <button
                          key={srv.id}
                          id={`dropdown-service-${srv.id}`}
                          onClick={() => handleNavClick(srv.id)}
                          className={`flex items-start text-left p-2 rounded-lg transition-all ${
                            currentRoute === srv.id
                              ? 'bg-amber-500/10 text-white'
                              : 'hover:bg-slate-900 text-slate-300 hover:text-white'
                          }`}
                        >
                          <div className={`p-1.5 rounded-md mr-3 ${currentRoute === srv.id ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-amber-500 group-hover:bg-slate-800'}`}>
                            <Icon className="w-4 h-4 stroke-[2]" />
                          </div>
                          <div>
                            <span className="block text-sm font-semibold leading-tight">{srv.title}</span>
                            <span className="block text-xs text-slate-500 font-normal leading-tight mt-0.5">{srv.desc}</span>
                          </div>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              id="nav-link-contact"
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                currentRoute === 'contact'
                  ? 'text-amber-500 bg-amber-500/5'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Header Action CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              id="header-cta"
              onClick={() => handleNavClick('contact')}
              className="px-4.5 py-2 text-xs font-mono uppercase tracking-wider text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg font-bold transition-all duration-300 flex items-center space-x-2 hover:shadow-lg hover:shadow-amber-500/10"
            >
              <span>Get Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Hamburger Mobile Menu */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden w-full bg-slate-950 border-b border-slate-900 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 border-t border-slate-900">
              <button
                id="mobile-nav-home"
                onClick={() => handleNavClick('home')}
                className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-lg ${
                  currentRoute === 'home' ? 'text-amber-500 bg-amber-500/5' : 'text-slate-300 hover:text-white'
                }`}
              >
                Home
              </button>
              
              <button
                id="mobile-nav-about"
                onClick={() => handleNavClick('about')}
                className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-lg ${
                  currentRoute === 'about' ? 'text-amber-500 bg-amber-500/5' : 'text-slate-300 hover:text-white'
                }`}
              >
                About us
              </button>

              <div className="px-3 py-2 text-xs font-mono uppercase tracking-widest text-slate-500 border-b border-slate-900/60 pb-1 mt-3">
                Our Services
              </div>

              <div className="pl-2 space-y-1 mt-1">
                {services.map((srv) => {
                  const Icon = srv.icon;
                  return (
                    <button
                      key={srv.id}
                      id={`mobile-nav-srv-${srv.id}`}
                      onClick={() => handleNavClick(srv.id)}
                      className={`w-full flex items-center text-left px-3 py-2 text-sm rounded-lg ${
                        currentRoute === srv.id ? 'text-amber-400 bg-slate-900' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2 text-amber-500" />
                      <span>{srv.title}</span>
                    </button>
                  );
                })}
                <button
                  id="mobile-nav-srv-all"
                  onClick={() => handleNavClick('services')}
                  className={`w-full flex items-center text-left px-3 py-2 text-sm rounded-lg font-semibold ${
                    currentRoute === 'services' ? 'text-amber-500' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-4 h-4 mr-2 text-amber-500" />
                  <span>All Services Catalog</span>
                </button>
              </div>

              <div className="border-t border-slate-900/60 my-2 pt-2"></div>

              <button
                id="mobile-nav-contact"
                onClick={() => handleNavClick('contact')}
                className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-lg ${
                  currentRoute === 'contact' ? 'text-amber-500 bg-amber-500/5' : 'text-slate-300 hover:text-white'
                }`}
              >
                Contact Us
              </button>

              <div className="pt-4 px-3">
                <button
                  id="mobile-nav-cta"
                  onClick={() => handleNavClick('contact')}
                  className="w-full text-center py-3 text-xs font-mono uppercase tracking-wider text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg font-bold transition-all flex items-center justify-center space-x-2"
                >
                  <span>Get Estimate & Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
